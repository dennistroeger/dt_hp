import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from './astro/server_e083InG_.mjs';
import 'kleur/colors';
import { $ as $$Headline } from './Headline_CB3kh-Uw.mjs';
import { $ as $$ItemGrid } from './ItemGrid_DAkOSqsb.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BW2xQHH9.mjs';

const $$Astro = createAstro("https://www.dennistroeger.com");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/widgets/FAQs.astro", void 0);

export { $$FAQs as $ };
