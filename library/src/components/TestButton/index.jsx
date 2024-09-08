import { Button } from "@mui/material";

/**
 * @param {object} props
 * @param {string} [props.text]
 * @returns {import("react").JSX.Element}
 */
export const TestButton = ({ text = "Click me!" }) => {
  return <Button variant="contained">{text}</Button>;
};
