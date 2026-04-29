import type { Meta, StoryObj } from '@storybook/html';
import { FooterDemo, FooterDemoArgs, type FooterDemoArgsType } from '@demos/semantics/footer.demo';

const meta: Meta<FooterDemoArgsType> = {
  title: 'Semantics/<footer>',
};

export default meta;

export const Default: StoryObj<FooterDemoArgsType> = {
  args: FooterDemoArgs.default,
  render(args) {
    return FooterDemo.default(args);
  }
};
