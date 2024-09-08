import { Button } from "@mui/material";

/**
 * @typedef {object} TestButtonProps
 * @property {string} [text] - Some description about this property
 *
 * @callback TestButton
 * @param {TestButtonProps} [props]
 * @returns {import("react").JSX.Element}
 */

/** @type {TestButton} */
export const TestButton = ({ text = "Click me!" }) => {
  return <Button variant="contained">{text}</Button>;
};
