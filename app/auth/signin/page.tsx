"use client";
import { signIn } from "@/app/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useFormState } from "react-dom";

export default function SignInPage() {
  const router = useRouter();
  const [state, formAction] = useFormState(signIn, undefined);
  // on server error
  if (state && state.origin === "SERVER") throw new Error(state.error);
  // on success
  if (state === null) {
    redirect("/profile");
    // router.replace("/profile");
  }
  return (
    <div className="h-full flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-sm">
        <form className="card-body" action={formAction}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" className="input input-bordered" name="email" />
            {state && state.error.email && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {state.error.email._errors}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              name="password"
            />
            {state && state.error.password && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {state.error.password._errors}
                </span>
              </label>
            )}
          </div>

          <div className="form-control mt-6">
            <SubmitButton label="Sign in" />
          </div>
        </form>

        <div className="flex justify-center">
          <Link href={"/auth/signup"} className="link link-hover">
            Create a new user account!
          </Link>
        </div>
      </div>
    </div>
  );
}
