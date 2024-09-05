import { Button } from "@mui/material";

export const TestButton = ({ text = "Click me!" }) => {
  return <Button variant="contained">{text}</Button>;
};
