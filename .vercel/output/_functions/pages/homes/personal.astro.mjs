import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_e083InG_.mjs';
import 'kleur/colors';
import { a as $$PageLayout, b as $$Header } from '../../chunks/PageLayout_CEPP2PP_.mjs';
import { $ as $$Hero } from '../../chunks/Hero_DmG87qnT.mjs';
import { $ as $$Content } from '../../chunks/Content_D5wnRdHd.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_B-7nHL-k.mjs';
import { $ as $$Features3 } from '../../chunks/Features3_C1tuPVmP.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CgujE5W0.mjs';
import { $ as $$Steps } from '../../chunks/Steps_BzQ-25Ac.mjs';
import { $ as $$BlogLatestPosts } from '../../chunks/BlogLatestPosts_DI6bj0E9.mjs';
import { a as getPermalink } from '../../chunks/permalinks_OHe_PGpA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Personal = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Personal Homepage Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero", $$Hero, { "id": "hero", "title": "Sarah Johnson", "tagline": "Personal Web Demo", "actions": [{ variant: "primary", text: "Hire me", href: getPermalink("/contact#form") }] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
I'm a Graphic Designer passionate about crafting visual stories. ${maybeRenderHead()}<br> With 5 years of experience and a degree from
      New York University's School of Design. I infuse vitality into brands and designs, transforming concepts into captivating
      realities.
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "items": [
    {
      icon: "tabler:brand-dribbble",
      callToAction: {
        target: "_blank",
        text: "Dribbble",
        href: "#"
      }
    },
    {
      icon: "tabler:brand-behance",
      callToAction: {
        target: "_blank",
        text: "Behance",
        href: "#"
      }
    },
    {
      icon: "tabler:brand-pinterest",
      callToAction: {
        target: "_blank",
        text: "Pinterest",
        href: "#"
      }
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Colorful Image",
    loading: "eager"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About me</h2> <p>
Welcome to my creative journey. My work is a testament to my commitment to bringing ideas to life, where each
        pixel becomes a brushstroke in the canvas of imagination.
</p> <br> <p>
I find inspiration in the world around me, whether through the pages of a captivating novel, the intricate
        details of typography, or the vibrant hues of nature during my outdoor escapades.
</p> <br> <p>If you're curious to dive deeper into my work, you can follow me:</p> ` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Work experience", "items": [
    {
      title: 'Graphic Designer <br /> <span class="font-normal">ABC Design Studio, New York, NY</span> <br /> <span class="text-sm font-normal">2021 - Present</span>',
      description: `Collaborate with clients to understand design requirements and objectives. <br /> Develop branding solutions, including logos, color palettes, and brand guidelines. <br /> Design marketing materials such as brochures, posters, and digital assets. <br /> Create visually appealing user interfaces for websites and applications.`,
      icon: "tabler:briefcase"
    },
    {
      title: 'Junior Graphic Designer <br /> <span class="font-normal">XYZ Creative Agency, Los Angeles, CA</span> <br /> <span class="text-sm font-normal">2018 - 2021</span>',
      description: `Assisted senior designers in creating design concepts and visual assets. <br /> Contributed to the development of brand identities and marketing collateral. <br /> Collaborated with the marketing team to ensure consistent design across campaigns. <br /> Gained hands-on experience in various design software and tools.`,
      icon: "tabler:briefcase"
    }
  ], "classes": { container: "max-w-3xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Education", "items": [
    {
      title: `Master of Fine Arts in Graphic Design <br /> <span class="font-normal">New York University's School of Design</span> <br /> <span class="text-sm font-normal">2018 - 2020</span>`,
      icon: "tabler:school"
    },
    {
      title: `Bachelor of Arts in Graphic Design <br /> <span class="font-normal">New York University's School of Design</span> <br /> <span class="text-sm font-normal">2014 - 2018</span>`,
      icon: "tabler:school"
    }
  ], "classes": { container: "max-w-3xl" } })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Skills", "subtitle": "Discover the proficiencies that allow me to bring imagination to life through design.", "columns": 3, "defaultIcon": "tabler:point-filled", "items": [
    {
      title: "Graphic design",
      description: "Proficient in crafting visually appealing designs that convey messages effectively."
    },
    {
      title: "Branding and identity",
      description: "Skilled at developing cohesive brand identities, including logos and brand guidelines."
    },
    {
      title: "User-centered design",
      description: "Experienced in creating user-friendly interfaces and optimizing user experiences."
    },
    {
      title: "Adobe Creative Suite",
      description: "Skilled in using Photoshop, Illustrator, and InDesign to create and edit visual elements."
    },
    {
      title: "Typography",
      description: "Adept in selecting and manipulating typefaces to enhance design aesthetics."
    },
    {
      title: "Color theory",
      description: "Proficient in using color to evoke emotions and enhance visual harmony."
    },
    {
      title: "Print and digital design",
      description: "Knowledgeable in designing for both print materials and digital platforms."
    },
    {
      title: "Attention to detail",
      description: "Diligent in maintaining precision and quality in all design work."
    },
    {
      title: "Adaptability",
      description: "Quick to adapt to new design trends, technologies, and client preferences."
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "id": "porfolio", "title": "Elevating visual narratives", "subtitle": "Embark on a design journey that surpasses pixels, entering a realm of imagination. Explore my portfolio, where passion and creativity converge to shape enthralling visual narratives.", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "Developed a comprehensive brand identity for a tech startup, Tech Innovators, specializing in disruptive innovations. The goal was to convey a modern yet approachable image that resonated with both corporate clients and tech enthusiasts."
    },
    {
      title: "Role:",
      description: "Led the entire branding process from concept to execution. Created a dynamic logo that symbolized innovation, selected a vibrant color palette, and I designed corporate stationery, website graphics, and social media assets."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    alt: "Tech Design Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 1: <br><span class="text-2xl">Brand identity for tech innovators</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: 'Designed a captivating event poster for an art and music festival, "ArtWave Fusion," aiming to showcase the synergy between visual art and music genres.'
    },
    {
      title: "Role:",
      description: `Translated the festival's creative theme into a visually striking poster. Used bold typography, vibrant colors, and abstract elements to depict the fusion of art and music. Ensured the design captured the festival's vibrant atmosphere.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Art and Music Poster Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 2: <br><span class="text-2xl">Event poster for art & music festival</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Redesigned the e-commerce website for an eco-conscious fashion brand, GreenVogue. The objective was to align the brand's online presence with its sustainable ethos and improve user experience.`
    },
    {
      title: "Role:",
      description: `Conducted a thorough analysis of the brand's values and customer base to inform the design direction. Created a visually appealing interface with intuitive navigation, highlighting sustainable materials, and integrating a user-friendly shopping experience.`
    }
  ], "image": {
    src: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Fashion e-commerce Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 3: <br><span class="text-2xl">E-commerce website redesign for fashion brand</span> </h3> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Client testimonials", "subtitle": "Discover what clients have to say about their experiences working with me.", "testimonials": [
    {
      testimonial: `She took our vague concept and turned it into a visual masterpiece that perfectly aligned with our goals. Her attention to detail and ability to translate ideas into compelling visuals exceeded our expectations.`,
      name: "Mark Thompson",
      job: "Creative director",
      image: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Mark Thompson Image"
      }
    },
    {
      testimonial: `She transformed our brand identity with her creative finesse, capturing our essence in every element. Her dedication and talent truly shine through her work.`,
      name: "Emily Martinez",
      job: "CEO",
      image: {
        src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
        alt: "Emily Martinez Image"
      }
    },
    {
      testimonial: `She has an uncanny ability to communicate emotions and stories. She crafted a logo for our NGO that not only represents our cause but also evokes empathy. Her professionalism and commitment make her a designer of exceptional caliber.`,
      name: "Laura Simmons",
      job: "Founder of an NGO",
      image: {
        src: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Laura Simmons Image"
      }
    },
    {
      testimonial: `We entrusted Sarah with revamping our website's user interface, and the results were astounding. Her intuitive design sense enhanced user experience, leading to a significant increase in engagement. She's a designer who truly understands the synergy of aesthetics and functionality.`,
      name: "Alex Foster",
      job: "Director of web services",
      image: {
        src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Alex Foster Image"
      }
    },
    {
      testimonial: `She took our vision and elevated it beyond imagination. Her ability to capture brand essence and translate it into design is nothing short of remarkable. Working with her has been an inspiring journey.`,
      name: "Jessica Collins",
      job: "Product Manager",
      image: {
        src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
        alt: "Jessica Collins Image"
      }
    },
    {
      testimonial: `Her ability to transform concepts into captivating visuals is nothing short of extraordinary. She took our event poster idea and turned it into a visual masterpiece that perfectly captured the essence of our festival. Sarah's dedication, creativity, and knack for delivering beyond expectations make her an invaluable asset to any project.`,
      name: "Michael Carter",
      job: "Event Coordinator",
      image: {
        src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Michael Carter Image"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Let's create together", "subtitle": "Ready to transform your vision into captivating designs?", "actions": [
    {
      variant: "primary",
      text: "Hire me",
      href: "/"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Explore my insightful articles on my blog", "information": `Dive into a realm of design wisdom and creative inspiration, where you'll find invaluable insights, practical tips, and captivating narratives that elevate and enrich your creative journey.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Porfolio", href: "#porfolio" },
    { text: "Blog", href: "#blog" },
    { text: "Github", href: "https://github.com/onwidget" }
  ], "actions": [
    {
      text: "Subscribe",
      href: "#"
    }
  ], "isSticky": true, "showToggleTheme": true })} ` })}` })}`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/homes/personal.astro", void 0);

const $$file = "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/homes/personal.astro";
const $$url = "/homes/personal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Personal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
