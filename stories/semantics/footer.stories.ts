import type { Meta, StoryObj } from '@storybook/html';
import { FooterDemo, FooterDemoArgs, type FooterDemoArgsType } from '@demos/semantics/footer.demo';

const meta: Meta<FooterDemoArgsType> = {
  title: 'Semantics/<footer>',
};

export default meta;

export const Overview: StoryObj<FooterDemoArgsType> = {
  args: FooterDemoArgs.copyrightAndContactUs,
  render(args) {
    return FooterDemo.copyrightAndContactUs(args);
  }
};
