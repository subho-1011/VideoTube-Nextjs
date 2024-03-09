import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LOGO } from "@/components/Logo";
import Link from "next/link";
import SigninForm from "@/components/SigninForm";

export default function SigninPage() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Card className="max-w-xl w-96">
        <CardHeader>
          <CardTitle>
            <LOGO />
          </CardTitle>
          <div className="text-center">Sign In</div>
        </CardHeader>
        <CardContent>
          <SigninForm />
          <div className="text-center text-sm mt-8">
            I don`t have an account{" "}
            <Link href="/sign-up">
              <span className="text-sky-500 underline">Sign up</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
