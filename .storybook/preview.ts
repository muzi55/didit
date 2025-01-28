import type { Preview } from "@storybook/react";
import '@/app/globals.css' // 경로 수정

const preview: Preview = {
  parameters: {
    // next app router 
    // Error: invariant expected app router to be mounted <= 에러 수정
    nextjs: {appDirectory: true},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
