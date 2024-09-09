import { Button } from "@mui/material";

/**
 * @typedef {object} TestButtonProps
 * @property {string} [hello] - Description about field hello. Defaults to "hello".
 * @property {string} [name] - Description about field name. Defaults to "felipe".
 */

/**
 * @type {import("react").FunctionComponent<TestButtonProps>} - TestButton component.
 */
export const TestButton = ({ name = "felipe", hello = "hello" }) => {
  return (
    <Button variant="contained">
      {hello}, {name}!
    </Button>
  );
};
