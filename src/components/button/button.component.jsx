import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonTypeClass = (buttonType) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

export const Button = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  ...props
}) => {
  const ButtonType = getButtonTypeClass(buttonType);
  return <ButtonType {...props}>{children}</ButtonType>;
};
