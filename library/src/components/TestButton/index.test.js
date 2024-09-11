import { render } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { TestButton } from "@components";

it("should render", () => {
  const { baseElement, debug } = render(<TestButton />);




  expect(baseElement).toBeUndefined();
});
