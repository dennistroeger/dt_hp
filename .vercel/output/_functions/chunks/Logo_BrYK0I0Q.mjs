import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_e083InG_.mjs';
import 'kleur/colors';
import 'clsx';
import image from './logo_BY9my3XR.mjs';
import imageDark from './logo_invert_Bp_xqD0T.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> <img${addAttribute(image.src, "src")} alt="Dennis Tröger" width="200" class="block dark:hidden"> <img${addAttribute(imageDark.src, "src")} alt="Dennis Tröger" width="200" class="hidden dark:block"> </span>`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/Logo.astro", void 0);

export { $$Logo as $ };
