import { EyeClosedIcon, EyeIcon, LockKeyholeIcon } from "lucide-react";

import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

type Props = Omit<React.ComponentProps<typeof InputGroupInput>, "type">;

export const InputPassword = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputGroup>
      <InputGroupInput {...props} type={showPassword ? "text" : "password"} />
      <InputGroupAddon>
        <LockKeyholeIcon />
      </InputGroupAddon>

      <InputGroupAddon align="inline-end">
        <InputGroupButton
          onClick={togglePassword}
          size="icon-xs"
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
        >
          {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};
