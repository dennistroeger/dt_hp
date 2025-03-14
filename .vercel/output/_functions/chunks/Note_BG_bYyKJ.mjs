import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as renderSlot, b as renderTemplate } from './astro/server_e083InG_.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_BXNaizz0.mjs';

const $$Astro = createAstro("https://www.dennistroeger.com");
const $$Note = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Note;
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#37F3CA] dark:bg-slate-800 not-prose mt-2"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} ${Astro2.props.title}:</span> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/widgets/Note.astro", void 0);

export { $$Note as $ };
