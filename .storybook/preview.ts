import type { Preview } from "@storybook/react";
import '@/app/globals.css' // 경로 수정

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
