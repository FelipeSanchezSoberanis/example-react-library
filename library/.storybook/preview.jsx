import { ThemeProvider } from "@mui/material";
import { Title, Subtitle, Primary, Controls } from "@storybook/blocks";
import { themeOne, themeTwo, themeThree } from "@themes";

const themesPerBrand = { one: themeOne, two: themeTwo, three: themeThree };

/** @type { import('@storybook/react').Preview } */
const preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Primary />
          <Controls />
        </>
      )
    }
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={themesPerBrand[context.globals.theme]}>
        <Story />
      </ThemeProvider>
    )
  ],
  globalTypes: {
    theme: {
      description: "Theme for components",
      defaultValue: "one",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["one", "two", "three"],
        dynamicTitle: true
      }
    }
  }
};

export default preview;
