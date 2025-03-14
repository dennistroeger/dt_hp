import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_e083InG_.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_CD2dMoHy.mjs';
import { $ as $$Features3 } from '../chunks/Features3_C1tuPVmP.mjs';
import { $ as $$Hero } from '../chunks/Hero_DmG87qnT.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_K0iZTDoU.mjs';
import { a as $$PageLayout } from '../chunks/PageLayout_CEPP2PP_.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "About Dennis"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "About Me", "image": {
    src: "~/assets/images/dennis troeger italy.jpg",
    alt: "Dennis Troeger - System Decoder"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
An ex-molecular biologist, SaaS founder, and polymath explorer who's spent 25 years decoding systems. From coding
      at 13 to scaling events for 5,000 people, my journey has been a fascinating exploration of systems, innovation,
      and growth.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Hey, I'm ${maybeRenderHead()}<span class="text-accent dark:text-accent highlight">Dennis </span> ` })}` })}  <div class="relative"> <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-8"> <div class="mb-10 md:mx-auto md:max-w-3xl text-center"> <p class="text-base leading-relaxed text-black dark:text-white">
I'm launching "Dennis Decodes Systems" on YouTube to share raw, real lessons on personal development,
          financial freedom, marketing, and AI, helping polymaths, lost souls, and entrepreneurs find clarity, purpose,
          and profit. Whether it's overcoming imposter syndrome, finding your purpose, unlocking wealth, or mastering
          online marketing, I've got the scars (and wins) to guide you—no theory, just what I've lived.
</p> <br> <p class="text-base leading-relaxed text-black dark:text-white">
Beyond Histack, I'm building income through courses like "Decode Your Purpose" and coaching for those feeling
          stuck, while exploring new trends (intuition, crypto, whatever sparks me) to keep my curious nature alive. I'm
          also the "decoder for breakthroughs" in my circle—helping friends unlock their next big move with my
          system-decoding lens.
</p> <br> <p class="text-base leading-relaxed text-black dark:text-white">
With a love for philosophy, personal growth, and piano, I'm not here to fit one niche—I'm here to help you
          live free as a polymath too. Join me on YouTube, subscribe to my newsletter, or book a Histack consult—let's
          decode systems together and build a community of 10k subscribers, one breakthrough at a time.
</p> </div> </div> </div>  ${renderComponent($$result2, "Features3", $$Features3, { "title": "My Journey", "subtitle": "A path of continuous learning, exploration, and system decoding across multiple disciplines. ", "columns": 3, "items": [
    {
      title: "Tech Pioneer",
      description: "Started coding at 13, laying the foundation for a lifetime of technical innovation and system understanding.",
      icon: "tabler:code"
    },
    {
      title: "Event Scaling",
      description: "Scaled events to 5,000 attendees for personal development speakers, mastering large-scale operations.",
      icon: "tabler:users"
    },
    {
      title: "Solace AI",
      description: "Solace AI provides immediate, empathetic mental health support as a companion for those waiting for therapy, supplementing existing sessions, or exploring help without committing to formal therapy.",
      icon: "tabler:rocket"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Current Ventures", "subtitle": "Building multiple streams of value and impact through various initiatives.", "items": [
    {
      title: "Histack",
      description: "Running Histack to decode AI and automation for businesses, helping them navigate the future of technology."
    },
    {
      title: "Dennis Decodes Systems",
      description: "Launching a YouTube channel sharing real lessons on personal development, financial freedom, marketing, and AI."
    },
    {
      title: "Coaching & Courses",
      description: 'Offering "Decode Your Purpose" and personalized coaching for those seeking breakthrough moments.'
    },
    {
      title: "Solace AI",
      description: "Solace AI provides immediate, empathetic mental health support as a companion for those waiting for therapy, supplementing existing sessions, or exploring help without committing to formal therapy."
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Areas of Expertise", "columns": 3, "items": [
    {
      title: "System Decoding",
      description: "Analyzing and optimizing complex systems across various domains",
      icon: "tabler:brain"
    },
    {
      title: "Business Strategy",
      description: "Marketing, automation, and strategic business development",
      icon: "tabler:chart-dots"
    },
    {
      title: "Personal Development",
      description: "Helping others overcome challenges and find their path",
      icon: "tabler:growth"
    },
    {
      title: "AI & Technology",
      description: "Leveraging cutting-edge tech for business transformation",
      icon: "tabler:robot"
    },
    {
      title: "Molecular Biology",
      description: "Scientific background bringing unique analytical perspective",
      icon: "tabler:dna"
    },
    {
      title: "Polymath Approach",
      description: "Connecting dots across disciplines for innovative solutions",
      icon: "tabler:puzzle"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Let's Connect", "columns": 2, "items": [
    {
      title: "YouTube",
      description: "Subscribe to Dennis Decodes Systems for raw, real lessons on business and life",
      icon: "tabler:brand-youtube"
    },
    {
      title: "Newsletter",
      description: "Get insights and updates directly in your inbox",
      icon: "tabler:mail"
    },
    {
      title: "Histack Consultation",
      description: "Book a session to decode your business systems",
      icon: "tabler:businessplan"
    },
    {
      title: "Personal Coaching",
      description: "One-on-one sessions for breakthrough moments",
      icon: "tabler:users"
    }
  ] })} ` })}`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/about.astro", void 0);

const $$file = "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
