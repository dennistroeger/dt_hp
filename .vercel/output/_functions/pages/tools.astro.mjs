import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_e083InG_.mjs';
import 'kleur/colors';
import { a as $$PageLayout } from '../chunks/PageLayout_CEPP2PP_.mjs';
import { $ as $$Hero } from '../chunks/Hero_DmG87qnT.mjs';
import { $ as $$Features2 } from '../chunks/Features2_CD2dMoHy.mjs';
import { a as getPermalink } from '../chunks/permalinks_OHe_PGpA.mjs';
export { renderers } from '../renderers.mjs';

const $$Tools = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Dennis Decodes Systems - Decoding Complex Systems into Simple Solutions",
    description: "Dennis Decodes Systems - Decoding Complex Systems into Simple Solutions",
    keywords: "personal development, AI, wealth",
    author: "Dennis Tr\xF6ger",
    ogTitle: "I decode systems",
    ogDescription: "Dennis Decodes Systems - Decoding Complex Systems into Simple Solutions",
    ogImage: "assets/images/feature_images/image_11.png",
    twitterCard: "summary_large_image",
    twitterTitle: "I decode systems",
    twitterDescription: "Dennis Decodes Systems - Decoding Complex Systems into Simple Solutions",
    twitterImage: "assets/images/feature_images/image_11.png",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Tools", "image": {
    src: "",
    alt: "Tools"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`Explore these interactive tools to help you on your financial journey.` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Useful ${maybeRenderHead()}<span class="text-accent dark:text-accent highlight">Tools</span> ` })}` })} <section class="relative"> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 -mt-40"> <div class="mx-auto w-3/5"> ${renderComponent($$result2, "Features2", $$Features2, { "columns": 1, "items": [
    {
      title: "Calculate your ETF investment returns",
      description: "ETF Investment Returns: Conservative vs. Aggressive - What's Your Strategy? Use our interactive tool to see the results of your strategy.",
      icon: "tabler:chart-pie",
      callToAction: {
        text: "Try the calculator",
        href: getPermalink("https://financial-freedom.dennistroeger.com/"),
        icon: "tabler:chevron-right",
        target: "_blank",
        rel: "noopener noreferrer"
      }
    },
    {
      title: "The interactive Wealth Canvas",
      description: "The Wealth Canvas: A New Way to See Your Money Journey. The Wealth Canvas simplifies your financial life by showing where you stand and where you're headed. Track income, goals, and emotions to make smarter choices.",
      icon: "tabler:template",
      callToAction: {
        text: "Explore the Wealth Canvas",
        href: getPermalink("https://canvas.dennistroeger.com"),
        icon: "tabler:chevron-right",
        target: "_blank",
        rel: "noopener noreferrer"
      }
    },
    {
      title: "Your Money Spirit Animal",
      description: "Quiz: Find Your Money Spirit Animal (don't take it too seriously). Before we dive in, let's get one thing straight: These money personality types aren't set in stone or scientifically proven - they're meant to be fun and insightful tools to help you understand yourself better.",
      icon: "tabler:mood-smile",
      callToAction: {
        text: "Take the quiz",
        href: getPermalink("https://moneyspirit.vercel.app/"),
        icon: "tabler:chevron-right",
        target: "_blank",
        rel: "noopener noreferrer"
      }
    }
  ], "classes": {
    container: "max-w-5xl",
    panel: "rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-slate-900 p-8",
    icon: "flex-shrink-0 rounded-full bg-primary-100 p-4 dark:bg-primary-900 text-primary w-12 h-12",
    title: "ml-6 text-2xl font-bold"
  } })} </div> </div> </section> ` })}`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/tools.astro", void 0);

const $$file = "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/tools.astro";
const $$url = "/tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tools,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
