"use client";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { signUp } from "@/app/actions/auth";
import { redirect, useRouter } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";

export default function SignUpPage() {
  const router = useRouter();
  const [state, formAction] = useFormState(signUp, undefined);
  // on server error
  if (state && state.origin === "SERVER") throw new Error(state.error);
  // on success
  if (state === null) {
    redirect("/auth/signin");
    // router.replace("/auth/signin");
  }
  return (
    <div className="h-full flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-sm">
        <form className="card-body" action={formAction}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" className="input input-bordered" name="name" />
            {state && state.error.name && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {state.error.name._errors}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" className="input input-bordered" name="email" />
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
            <SubmitButton label="Sign up" />
          </div>
        </form>

        <div className="flex justify-center">
          <Link href={"/auth/signin"} className="link link-hover">
            Sign in with your account!
          </Link>
        </div>
      </div>
    </div>
  );
}
