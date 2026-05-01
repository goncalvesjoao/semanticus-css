import { renderElement } from "@demos/utils";
import * as HeaderDemo from "@demos/semantics/elements/header.demo";
import * as FooterDemo from "@demos/semantics/elements/footer.demo";
import * as ArticleDemo from "@demos/semantics/elements/article.demo";

export const MainDemoArgs = {
  default: {
    class: "",
    slot: `<h2>Hello World</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>`,
  },
};

export const MainDemo = {
  render: renderElement.bind(null, "main"),

  default(args: MainDemoArgsType = {}) {
    return this.render({ ...MainDemoArgs.default, ...args });
  },

  withHeader(args: MainDemoArgsType & { headerClass?: string } = {}) {
    const { headerClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${HeaderDemo.default({ class: headerClass })}
${MainDemoArgs.default.slot}`,
    });
  },

  withFooter(args: MainDemoArgsType & { footerClass?: string } = {}) {
    const { footerClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${MainDemoArgs.default.slot}
${FooterDemo.default({ class: footerClass })}`,
    });
  },

  withHeaderPlusFooter(
    args: MainDemoArgsType & {
      headerClass?: string;
      footerClass?: string;
    } = {},
  ) {
    const { headerClass, footerClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${HeaderDemo.default({ class: headerClass })}
${MainDemoArgs.default.slot}
${FooterDemo.default({ class: footerClass })}`,
    });
  },

  withArticle(args: MainDemoArgsType & { articleClass?: string } = {}) {
    const { articleClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${ArticleDemo.default({ class: articleClass })}`,
    });
  },

  withHeaderPlusArticle(
    args: MainDemoArgsType & {
      articleClass?: string;
      headerClass?: string;
    } = {},
  ) {
    const { articleClass, headerClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${HeaderDemo.default({ class: headerClass })}
${ArticleDemo.default({ class: articleClass })}`,
    });
  },

  withArticlePlusFooter(
    args: MainDemoArgsType & {
      articleClass?: string;
      footerClass?: string;
    } = {},
  ) {
    const { articleClass, footerClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${ArticleDemo.default({ class: articleClass })}
${FooterDemo.default({ class: footerClass })}`,
    });
  },

  withHeaderPlusArticlePlusFooter(
    args: MainDemoArgsType & {
      articleClass?: string;
      headerClass?: string;
      footerClass?: string;
    } = {},
  ) {
    const { articleClass, headerClass, footerClass, ...restArgs } = args;

    return this.render({
      ...MainDemoArgs.default,
      ...restArgs,
      slot: `${HeaderDemo.default({ class: headerClass })}
${ArticleDemo.default({ class: articleClass })}
${FooterDemo.default({ class: footerClass })}`,
    });
  },
};
