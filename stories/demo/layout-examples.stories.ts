import type { Meta, StoryObj } from '@storybook/html';
import { AsideDemo } from '@demos/semantics/aside.demo';
import { FooterDemo } from '@demos/semantics/footer.demo';
import { ArticleDemo } from '@demos/semantics/article.demo';
import { HeaderDemo } from '@demos/semantics/header.demo';

const meta: Meta = {
  title: 'Demo/Layout Examples',
};

export default meta;

export const MainWithAsideAndHeaderArticleFooter: StoryObj = {
  render: () => `<main class="flow-h bg-success">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.helloWorld({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>
</main>`,
};
