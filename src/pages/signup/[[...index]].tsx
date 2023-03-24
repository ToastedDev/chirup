import { SignUp } from "@clerk/nextjs";
import type { NextPage } from "next";
import { appearance } from "~/utils/clerk";

const SignUpPage: NextPage = () => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <SignUp appearance={appearance} routing="path" path="/signup" />
      </main>
    </>
  );
};

export default SignUpPage;
