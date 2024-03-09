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
import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Card className="max-w-xl w-96">
        <CardHeader>
          <CardTitle>
            <LOGO />
          </CardTitle>
          <div className="text-center">Sign Up</div>
        </CardHeader>
        <CardContent>
          <SignupForm />
          <div className="text-center text-sm mt-8">
            I already have an account{" "}
            <Link href="/sign-in">
              <span className="text-sky-500 underline">Sign in</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
