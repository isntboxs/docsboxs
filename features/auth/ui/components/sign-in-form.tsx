"use client";

import { CheckIcon, UserIcon, XCircleIcon } from "lucide-react";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { useSignIn } from "@/features/auth/hooks/use-sign-in";
import { InputPassword } from "@/features/auth/ui/components/input-password";

export const SignInForm = () => {
  const { form, onSubmitform, isPending } = useSignIn();

  return (
    <form id="sign-in-account" onSubmit={form.handleSubmit(onSubmitform)}>
      <FieldGroup className="gap-6">
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <InputGroup>
                <InputGroupInput
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  type="text"
                  placeholder="Enter your username"
                  autoComplete="username"
                />
                <InputGroupAddon>
                  <UserIcon />
                </InputGroupAddon>
                {fieldState.invalid ? (
                  <InputGroupAddon
                    align="inline-end"
                    className="text-destructive"
                  >
                    <XCircleIcon />
                  </InputGroupAddon>
                ) : (
                  field.value!.length > 0 && (
                    <InputGroupAddon align="inline-end">
                      <CheckIcon />
                    </InputGroupAddon>
                  )
                )}
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <InputPassword
                id={field.name}
                placeholder="Enter your password"
                autoComplete="new-password"
                aria-invalid={fieldState.invalid}
                disabled={isPending}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type="submit"
        form="sign-in-account"
        disabled={!form.formState.isValid || isPending}
        className="mt-6 w-full"
      >
        {isPending ? (
          <>
            <Spinner /> Signing in
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
};
