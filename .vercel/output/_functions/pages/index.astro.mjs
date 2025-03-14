import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_e083InG_.mjs';
import 'kleur/colors';
import { a as $$PageLayout, $ as $$Button } from '../chunks/PageLayout_CEPP2PP_.mjs';
import { $ as $$Hero2 } from '../chunks/Hero2_aDPFHZ0t.mjs';
import { $ as $$Note } from '../chunks/Note_BG_bYyKJ.mjs';
import { $ as $$BlogLatestPosts } from '../chunks/BlogLatestPosts_DI6bj0E9.mjs';
import { b as getCanonical } from '../chunks/permalinks_OHe_PGpA.mjs';
import { c as createWebsiteJsonLd } from '../chunks/jsonld_BmuORZ_T.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.dennistroeger.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Dennis Decodes Systems",
    description: "Discover how to master financial literacy, build wealth, and navigate complex systems with practical insights.",
    keywords: "personal development, AI, wealth, financial literacy, systems thinking, money management, entrepreneurship, angel investing",
    author: "Dennis Tr\xF6ger",
    ogTitle: "I decode systems",
    ogDescription: "Transform complexity into clarity with actionable insights on wealth building, personal growth, and AI implementation from Dennis Tr\xF6ger, SaaS founder and systems thinker.",
    ogImage: "assets/images/feature_images/image_11.png",
    twitterCard: "summary_large_image",
    twitterTitle: "I decode systems",
    twitterDescription: "Transform complexity into clarity with actionable insights on wealth building, personal growth, and AI implementation from Dennis Tr\xF6ger, SaaS founder and systems thinker.",
    twitterImage: "assets/images/feature_images/image_11.png",
    ignoreTitleTemplate: true
  };
  const url = getCanonical(Astro2.url.pathname);
  const jsonLd = createWebsiteJsonLd(url.toString(), "Dennis Tr\xF6ger - Systems Decoded", metadata.description);
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", "  ", "  ", ' <div class="flex justify-center mb-12 mt-12"> ', " </div> "])), unescapeHTML(JSON.stringify(jsonLd)), renderComponent($$result2, "Hero2", $$Hero2, { "actions": [
    {
      variant: "primary",
      text: "Start Exploring",
      href: "/blog",
      target: "_blank",
      icon: "tabler:arrow-right"
    }
  ], "image": { src: "~/assets/images/Dennis Troeger.png", alt: "Dennis Tr\xF6ger" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span>
Feeling stuck, scattered, or overwhelmed? <br> <br> You're not alone. I'm Dennis—and I'll help you unlock clarity, purpose, and profit by decoding the hidden
        systems shaping your life: mindset, money, personal growth, and AI for your business. <br><br>
No fluff. Just raw lessons from my wins (and wrecks) as a biologist turned SaaS founder and polymath explorer—so
        you can cut through the chaos and thrive.
<br><br>
Ready for your breakthrough?
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Decode <span class="text-accent dark:text-accent highlight"> your </span>life.
` })}` }), renderComponent($$result2, "Note", $$Note, { "title": "My Philosophy" }, { "default": ($$result3) => renderTemplate` <p>The world is a complex place, and I decode it into simple solutions.</p> ` }), renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Explore my insightful articles on my blog", "information": `Dive into a realm of design wisdom and creative inspiration, where you'll find invaluable insights, practical tips, and captivating narratives that elevate and enrich your creative journey.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` }), renderComponent($$result2, "Button", $$Button, { "href": "/blog", "class": "transition-transform duration-300 hover:scale-105" }, { "default": ($$result3) => renderTemplate`Read Blog` })) })}`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/index.astro", void 0);

const $$file = "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
