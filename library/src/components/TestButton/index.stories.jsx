import { TestButton } from "@components";
import { createStorybookArgTypes } from "@utils";

/**
 * @type {import("@storybook/react").Meta<TestButton>}
 */
export default {
  component: TestButton,
  argTypes: createStorybookArgTypes([
    {
      name: "hello",
      type: "string",
      description: "Description about field hello. Defaults to 'hello'."
    },
    {
      name: "name",
      type: "string",
      description: "Description about field name. Defaults to 'felipe'."
    }
  ])
};

/**
 * @type {import("@storybook/react").StoryObj<TestButton>}
 */
export const Default = {
  args: {}
};
