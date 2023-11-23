"use server";
import { cookies } from "next/headers";
import database from "@/prisma";
import { hashString, matchHash, signToken, verifyToken } from "@/utils/auth";
import { z } from "zod";
import { TokenCookieKey } from "@/constants";
import FormState from "@/interfaces";
import { User } from "@prisma/client";

const signUpValidator = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters!" }),
  email: z.string().email({ message: "Please enter a valid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters!" }),
});

type SignUpFormType = z.infer<typeof signUpValidator>;
type SignUpFormError = z.ZodFormattedError<SignUpFormType>;

export async function signUp(
  preState: any,
  formData: FormData
): Promise<FormState<SignUpFormError>> {
  // --- validate
  const validation = signUpValidator.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success)
    return {
      origin: "CLIENT",
      error: validation.error.format(),
    };
  console.log(validation.data);
  // --- sign up
  const password = hashString(validation.data.password);
  try {
    await database.user.create({
      data: {
        ...validation.data,
        password,
      },
    });
    return null;
  } catch (error: any) {
    return {
      origin: "SERVER",
      error: error.message,
    };
  }
}
const signInValidator = z.object({
  email: z.string().email({ message: "Please enter a valid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters!" }),
});

type SignInFormType = z.infer<typeof signInValidator>;
type SignInFormError = z.ZodFormattedError<SignInFormType>;

export async function signIn(
  preState: any,
  formData: FormData
): Promise<FormState<SignInFormError>> {
  // --- validate
  const validation = signInValidator.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success)
    return {
      origin: "CLIENT",
      error: validation.error.format(),
    };
  console.log(validation.data);
  // --- sign in
  try {
    const user = await database.user.findFirst({
      where: {
        email: validation.data.email,
      },
    });
    // if not found
    if (!user)
      return {
        origin: "CLIENT",
        error: new z.ZodError<SignInFormType>([
          {
            code: "custom",
            message: "Email not found!",
            path: ["email"],
          },
        ]).format(),
      };
    // password not matched
    const matched = matchHash(user.password, validation.data.password);
    if (!matched)
      return {
        origin: "CLIENT",
        error: new z.ZodError<SignInFormType>([
          {
            code: "custom",
            message: "Password not matched!",
            path: ["password"],
          },
        ]).format(),
      };
    // create the token and save it as cookie
    const token = signToken(user.id);
    cookies().set(TokenCookieKey, token);
    return null;
  } catch (error: any) {
    return {
      origin: "SERVER",
      error: error.message,
    };
  }
}

export async function getInitialAuth(): Promise<User | null> {
  //  check if the user has token
  const hasToken = cookies().has(TokenCookieKey);
  if (!hasToken) return null;
  // verify the token
  const token = cookies().get(TokenCookieKey)?.value as string;
  try {
    // fetch and cache the user
    const userId = verifyToken(token);
    const user = await database.user.findFirst({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
}
