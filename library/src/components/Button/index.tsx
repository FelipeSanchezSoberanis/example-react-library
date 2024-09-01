import { Button as MuiButton } from "@mui/material";

export type ButtonProps = {
  text?: string;
};

export const Button = (props: ButtonProps) => {
  const text = props.text ?? "Click me!";
  return <MuiButton variant="contained">{text}</MuiButton>;
};
