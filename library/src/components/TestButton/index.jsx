import { Button } from "@mui/material";
import PropTypes from "prop-types";

/**
 * @param {object} [props]
 *
 * @param {string} [props.hello] - Some description about this param. Defaults to "Hello";
 *
 * @param {string} [props.user] - Some description about this param. Defaults to "User";
 *
 * @returns {import("react").JSX.Element}
 */
export const TestButton = ({ hello = "Hello", name = "User" }) => {
  return (
    <Button variant="contained">
      {hello}, {name}!
    </Button>
  );
};

TestButton.propTypes = {
  hello: PropTypes.string,
  name: PropTypes.string
};
