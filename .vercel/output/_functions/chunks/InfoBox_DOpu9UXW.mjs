import { a as createComponent, c as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, u as unescapeHTML, b as renderTemplate } from './astro/server_e083InG_.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_BXNaizz0.mjs';
/* empty css                                                               */

const $$Astro = createAstro("https://www.dennistroeger.com");
const $$InfoBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoBox;
  const { title, content, type = "info" } = Astro2.props;
  const typeConfig = {
    info: {
      icon: "tabler:info-circle",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      textColor: "text-blue-800"
    },
    warning: {
      icon: "tabler:alert-triangle",
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      textColor: "text-yellow-800"
    },
    success: {
      icon: "tabler:circle-check",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      textColor: "text-green-800"
    }
  };
  const config = typeConfig[type];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`p-4 rounded-lg border ${config.color} flex gap-3`, "class")}> <div${addAttribute(`flex-shrink-0 ${config.iconColor}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": config.icon, "class": "w-6 h-6 mt-0.5" })} </div> <div class="flex-grow"> ${title && renderTemplate`<div${addAttribute(`text-base font-semibold mb-1 ${config.textColor}`, "class")}>${title}</div>`} <div${addAttribute(`text-sm ${config.textColor} prose prose-sm max-w-none`, "class")}>${unescapeHTML(content)}</div> </div> </div> `;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/ui/InfoBox.astro", void 0);

export { $$InfoBox as $ };
