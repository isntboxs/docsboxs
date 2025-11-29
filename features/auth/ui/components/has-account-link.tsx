"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SIGN_IN_FORM, SIGN_UP_FORM } from "@/features/auth/constants";

type Props = {
  type: "sign-in" | "sign-up";
};

export const HasAccountLink = ({ type }: Props) => {
  return (
    <div className="text-muted-foreground w-full text-center text-sm">
      {type === "sign-in" ? SIGN_IN_FORM.footerText : SIGN_UP_FORM.footerText}{" "}
      <Button variant="link" size="sm" className="p-0" asChild>
        <Link href={type === "sign-in" ? `/sign-up` : `/sign-in`}>
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </Button>
    </div>
  );
};
