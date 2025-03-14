import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_e083InG_.mjs';
import 'kleur/colors';
import { $ as $$Image } from './Image_DyfA8MRw.mjs';
import { f as findImage } from './Layout_CKs5MdNt.mjs';
import { a as getPermalink } from './permalinks_OHe_PGpA.mjs';

const $$Astro$1 = createAstro("https://www.dennistroeger.com");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade max-w-4xl mx-auto"> <div class="flex flex-col md:flex-row items-start mb-4"> <div class="relative w-full md:w-1/3 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-4 md:mb-0"> ${image && (link ? renderTemplate`<a${addAttribute(link, "href")} class="block aspect-video"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700 object-cover", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })} </a>` : renderTemplate`<div class="aspect-video"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700 object-cover", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })} </div>`)} </div> <div class="w-full md:w-2/3 pl-0 md:pl-4"> <h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h3> <p class="text-muted dark:text-slate-400 text-lg mb-2">${post.excerpt}</p> ${link && renderTemplate`<a class="text-primary dark:text-blue-700 hover:underline"${addAttribute(link, "href")}>
Read More »
</a>`} </div> </div> </article>`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/blog/GridItem.astro", void 0);

const $$Astro = createAstro("https://www.dennistroeger.com");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 grid-cols-1 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/blog/Grid.astro", void 0);

export { $$Grid as $ };
