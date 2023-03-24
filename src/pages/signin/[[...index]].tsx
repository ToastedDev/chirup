import { SignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { appearance } from "~/utils/clerk";

const SignInPage: NextPage = () => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <SignIn appearance={appearance} routing="path" path="/signin" />
      </main>
    </>
  );
};

export default SignInPage;
