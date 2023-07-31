import { ButtonWrapper } from "@/components/button/button.styles";

export enum ButtonVariantType {
  primary = "primary",
}

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  variant?: ButtonVariantType;
};

export const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} variant={variant}>
      {children}
    </ButtonWrapper>
  );
};
