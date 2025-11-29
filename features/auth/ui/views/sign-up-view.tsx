import Link from "next/link";

import { BoxsIcon } from "@/components/global/boxs-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SIGN_UP_FORM } from "@/features/auth/constants";
import { HasAccountLink } from "@/features/auth/ui/components/has-account-link";
import { SignUpForm } from "@/features/auth/ui/components/sign-up-form";

export const SignUpView = () => {
  return (
    <section>
      <Card className="border-none bg-transparent">
        <CardHeader className="gap-0">
          <Link href="/">
            <BoxsIcon className="size-8" />
          </Link>
          <CardTitle className="mt-4 mb-1 text-xl font-semibold">
            {SIGN_UP_FORM.title}
          </CardTitle>
          <CardDescription>{SIGN_UP_FORM.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <SignUpForm />
        </CardContent>

        <CardFooter>
          <HasAccountLink type="sign-up" />
        </CardFooter>
      </Card>

      <div className="text-muted-foreground text-center text-xs text-balance">
        By Signing Up, you agree to our{" "}
        <Button
          variant="link"
          size="sm"
          className="p-0 text-xs text-balance"
          asChild
        >
          <Link href="#">Terms of Service</Link>
        </Button>{" "}
        and{" "}
        <Button
          variant="link"
          size="sm"
          className="p-0 text-xs text-balance"
          asChild
        >
          <Link href="#">Privacy Policy</Link>
        </Button>
      </div>
    </section>
  );
};
