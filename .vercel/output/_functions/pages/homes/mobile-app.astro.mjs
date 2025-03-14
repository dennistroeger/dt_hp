import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, h as renderScript, b as renderTemplate, r as renderComponent, F as Fragment } from '../../chunks/astro/server_e083InG_.mjs';
import 'kleur/colors';
import { a as $$PageLayout, b as $$Header, $ as $$Button } from '../../chunks/PageLayout_CEPP2PP_.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_aDPFHZ0t.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_B-7nHL-k.mjs';
import { $ as $$Features3 } from '../../chunks/Features3_C1tuPVmP.mjs';
import { $ as $$Content } from '../../chunks/Content_D5wnRdHd.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CgujE5W0.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_COAI3tAv.mjs';
import { $ as $$Stats } from '../../chunks/Stats_B_niYf_2.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                                         */
import { $ as $$Image } from '../../chunks/Image_DyfA8MRw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.dennistroeger.com");
const $$NewsletterSubscription = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsletterSubscription;
  const {
    title = "Decoded Insights",
    subtitle = "Subscribe to",
    tagline = "Get actionable insights on wealth building, personal growth, and AI implementation. I decode complex systems into simple solutions you can apply immediately.",
    subscriberCount = "600 friendly readers",
    reviewCount = "200+ reviews",
    inputPlaceholder = "Your most beautiful email",
    submitText = "Subscribe",
    disclaimer = "By submitting this form, you'll receive my free newsletter with insights on financial literacy, systems thinking, and personal development. You can opt-out at any time. For more information, see our",
    privacyPolicyLink = "/privacy",
    privacyPolicyText = "privacy policy",
    classes = {},
    accentColor = "#7A4EFF",
    accentColorDark = "#9370FF",
    showReviews = true,
    showSubscriberCount = true
  } = Astro2.props;
  const {
    container: containerClass = "",
    title: titleClass = "",
    subtitle: subtitleClass = "",
    tagline: taglineClass = "",
    form: formClass = ""
  } = classes;
  return renderTemplate`<!-- Newsletter Subscription Widget ************** -->${maybeRenderHead()}<section${addAttribute(twMerge("py-16 bg-gray-50 dark:bg-slate-800 relative overflow-hidden", containerClass), "class")} data-astro-cid-rwg7kxsy> <div class="absolute right-0 top-0 h-full w-1/2 opacity-10" data-astro-cid-rwg7kxsy> <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary-500" data-astro-cid-rwg7kxsy> <path d="M399 1C237.5 1 1 237.5 1 399" stroke="currentColor" stroke-width="2" data-astro-cid-rwg7kxsy></path> <path d="M399 100C292.5 100 100 292.5 100 399" stroke="currentColor" stroke-width="2" data-astro-cid-rwg7kxsy></path> <path d="M399 200C347.5 200 200 347.5 200 399" stroke="currentColor" stroke-width="2" data-astro-cid-rwg7kxsy></path> <path d="M399 300C402.5 300 300 402.5 300 399" stroke="currentColor" stroke-width="2" data-astro-cid-rwg7kxsy></path> </svg> </div> <div class="max-w-4xl mx-auto px-4 sm:px-6 relative" data-astro-cid-rwg7kxsy> <div class="flex flex-col md:flex-row items-center justify-between gap-12" data-astro-cid-rwg7kxsy> <div class="md:w-1/2" data-astro-cid-rwg7kxsy> <div class="mb-4" data-astro-cid-rwg7kxsy> <div class="inline-flex items-center" data-astro-cid-rwg7kxsy> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`h-10 w-10 text-[${accentColor}] dark:text-[${accentColorDark}] mr-2`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rwg7kxsy> <path d="M21 5L2 12l19 7-7-7 7-7z" data-astro-cid-rwg7kxsy></path> </svg> <h3${addAttribute(twMerge("text-2xl font-bold tracking-tight dark:text-white", subtitleClass), "class")} data-astro-cid-rwg7kxsy>${subtitle}</h3> </div> <h2${addAttribute(twMerge("text-4xl md:text-5xl font-bold tracking-tight dark:text-white mt-1", titleClass), "class")} data-astro-cid-rwg7kxsy> ${title} </h2> </div> <p${addAttribute(twMerge("text-gray-600 dark:text-gray-400 text-lg mb-6", taglineClass), "class")} data-astro-cid-rwg7kxsy> ${tagline} </p> ${showSubscriberCount && renderTemplate`<p class="text-sm text-gray-500 dark:text-gray-400 mt-4" data-astro-cid-rwg7kxsy>
Join a growing community of more than <span class="font-semibold" data-astro-cid-rwg7kxsy>${subscriberCount}</span>.
</p>`} ${showReviews && renderTemplate`<div class="flex items-center mt-4" data-astro-cid-rwg7kxsy> <div class="flex -space-x-2" data-astro-cid-rwg7kxsy> <img class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User avatar" data-astro-cid-rwg7kxsy> <img class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User avatar" data-astro-cid-rwg7kxsy> <img class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User avatar" data-astro-cid-rwg7kxsy> </div> <div class="flex items-center ml-2" data-astro-cid-rwg7kxsy> <div class="flex text-amber-400" data-astro-cid-rwg7kxsy> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> </div> <span class="ml-1 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-rwg7kxsy>${reviewCount}</span> </div> </div>`} </div> <div class="md:w-1/2" data-astro-cid-rwg7kxsy> <div${addAttribute(twMerge(
    "bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative",
    formClass
  ), "class")} data-astro-cid-rwg7kxsy> <div class="absolute -top-4 -right-4 bg-primary-50 dark:bg-primary-900/20 w-20 h-20 rounded-full flex items-center justify-center" data-astro-cid-rwg7kxsy> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`h-10 w-10 text-[${accentColor}] dark:text-[${accentColorDark}] transform rotate-45`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rwg7kxsy> <path d="M21 5L2 12l19 7-7-7 7-7z" data-astro-cid-rwg7kxsy></path> </svg> </div> <form id="newsletter-form" class="space-y-4" data-astro-cid-rwg7kxsy> <div id="form-fields" data-astro-cid-rwg7kxsy> <div data-astro-cid-rwg7kxsy> <input type="email" id="newsletter-email" name="email" class="w-full px-4 py-3.5 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 transition-all duration-200"${addAttribute(inputPlaceholder, "placeholder")} required data-astro-cid-rwg7kxsy> </div> <div class="mt-4" data-astro-cid-rwg7kxsy> <button type="submit" id="newsletter-submit"${addAttribute(`w-full bg-[${accentColor}] hover:bg-[${accentColorDark}] text-white font-medium py-3.5 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-md`, "class")} data-astro-cid-rwg7kxsy> ${submitText} </button> </div> </div> <div id="success-container" class="py-6 hidden" data-astro-cid-rwg7kxsy> <div class="flex flex-col items-center justify-center" data-astro-cid-rwg7kxsy> <div class="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center" data-astro-cid-rwg7kxsy> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2" data-astro-cid-rwg7kxsy>Thanks for subscribing!</h3> <p class="text-gray-600 dark:text-gray-300 text-center" data-astro-cid-rwg7kxsy>
Please check your inbox to confirm your subscription.
</p> <div class="mt-4" data-astro-cid-rwg7kxsy> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 animate-bounce" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rwg7kxsy> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-astro-cid-rwg7kxsy></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-astro-cid-rwg7kxsy></path> </svg> </div> </div> </div> <div id="form-status" class="text-center mt-4 hidden" data-astro-cid-rwg7kxsy> <p id="error-message" class="text-red-600 dark:text-red-400 hidden" data-astro-cid-rwg7kxsy>
Something went wrong. Please try again.
</p> </div> </form> <div id="disclaimer-container" class="flex items-center justify-center mt-6" data-astro-cid-rwg7kxsy> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rwg7kxsy> <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 15a7 7 0 100-14 7 7 0 000 14z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> <path fill-rule="evenodd" d="M10 5.5a.5.5 0 01.5.5v4.5H14a.5.5 0 010 1h-4a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5z" clip-rule="evenodd" data-astro-cid-rwg7kxsy></path> </svg> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-rwg7kxsy> ${disclaimer} <a${addAttribute(privacyPolicyLink, "href")} class="text-primary-600 hover:underline dark:text-primary-400" data-astro-cid-rwg7kxsy>${privacyPolicyText}</a>.
</p> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/widgets/NewsletterSubscription.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/components/widgets/NewsletterSubscription.astro", void 0);

const $$Astro = createAstro("https://www.dennistroeger.com");
const $$MobileApp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MobileApp;
  const appStoreImg = "~/assets/images/app-store.png";
  const appStoreDownloadLink = "https://github.com/onwidget/astrowind";
  const googlePlayImg = "~/assets/images/google-play.png";
  const googlePlayDownloadLink = "https://github.com/onwidget/astrowind";
  const metadata = {
    title: "Mobile App Homepage"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Newsletter", $$NewsletterSubscription, {})}  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Mobile App Web Demo", "image": {
    src: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "AstroWind Hero Image"
  } }, { "actions": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex max-w-sm gap-4"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": appStoreDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": appStoreImg, "alt": "App Store Image", "width": 200 })} ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": googlePlayDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": googlePlayImg, "alt": "Google Play Image", "width": 200 })} ` })} </div>`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span class="hidden sm:inline">
Unlock boundless creativity at your fingertips: your gateway to innovative design.
</span>
Download now and embark on a journey to elevate your projects like never before.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-accent dark:text-white highlight">AstroWind App</span>: <br> professional websites <span class="hidden xl:inline">made easy</span> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "id": "features", "title": "How to use our app?", "subtitle": "Tired of spending hours crafting documents from scratch? Our app offers an innovative solution. With a wide array of professionally designed templates, you can now create stunning documents in minutes. Explore our templates now and experience the difference.", "tagline": "Step-by-step guide", "columns": 2, "items": [
    {
      title: "Download and install the app",
      description: `Begin your journey by downloading our user-friendly app from your device's app store or our official website.`,
      icon: "tabler:square-number-1"
    },
    {
      title: "Sign up",
      description: "Create your account by providing the necessary information, enabling you to access our full range of features.",
      icon: "tabler:square-number-2"
    },
    {
      title: "Browse templates",
      description: "Explore our diverse collection of website templates, categorized for easy navigation.",
      icon: "tabler:square-number-3"
    },
    {
      title: "Preview and select a template",
      description: `Visualize the potential of each template through previews, then choose the one that aligns best with your project's needs.`,
      icon: "tabler:square-number-4"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1521517407911-565264e7d82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Colorful Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "User-friendly interface",
      description: "An intuitive and easy-to-navigate interface that allows users to quickly browse and find the templates they need.",
      icon: "tabler:wand"
    },
    {
      title: "Personalization options",
      description: "Include basic customization tools that let users modify text, colors, images, and other elements within the templates.",
      icon: "tabler:settings"
    },
    {
      title: "Ready-to-use components",
      description: "Enhance your designs with ready-to-use elements like graphics, icons, and layouts, saving you time and boosting visual appeal.",
      icon: "tabler:template"
    },
    {
      title: "Preview Mode",
      description: "Provide a preview of each template, allowing users to see how it looks before making a purchase.",
      icon: "tabler:carousel-horizontal"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    alt: "Colorful Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Main Features</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Offline Access",
      description: "Offer the option for users to download purchased templates for offline use.",
      icon: "tabler:wifi-off"
    },
    {
      title: "Secure Cloud Storage",
      description: "Provide cloud storage for purchased templates, ensuring users can access and back up their templates from anywhere securely.",
      icon: "tabler:file-download"
    },
    {
      title: "Regular Updates",
      description: "Continuously add new templates and features to keep the app fresh and engaging for users.",
      icon: "tabler:refresh"
    },
    {
      title: "Wishlist",
      description: `Allow users to create a wishlist of templates they're interested in, making it easier for them to revisit and potentially purchase later.`,
      icon: "tabler:heart"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vintage Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Other features</h3> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics of our app", "stats": [
    { amount: "20K", icon: "tabler:download" },
    { amount: "18.5K", icon: "tabler:users" },
    { amount: "4.7", icon: "tabler:user-star" }
  ] })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "What our users say?", "testimonials": [
    {
      testimonial: `It's made exploring and downloading website templates a breeze. The interface is intuitive, and I had no trouble finding the perfect template for my project. It's an app that truly empowers users.`,
      name: "Cary Kennedy",
      job: "Film director",
      image: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Cary Kennedy Image"
      }
    },
    {
      testimonial: `The app's seamless download process and intuitive layout have made selecting templates an enjoyable experience. Being able to preview and experiment with different designs before committing has saved me time and ensured I get the perfect look for my website.`,
      name: "Josh Wilkinson",
      job: "Product Manager",
      image: {
        src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Josh Wilkinson Image"
      }
    },
    {
      testimonial: "I was able to download and use a professional website template within minutes. The step-by-step process and user-friendly interface made it easy for me to create a website that looks as if it was designed by a pro.",
      name: "Sidney Hansen",
      job: "Decorator",
      image: {
        src: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Sidney Hansen Image"
      }
    }
  ], "callToAction": {
    target: "_blank",
    text: "Read more testimonials",
    href: "https://github.com/onwidget/astrowind",
    icon: "tabler:chevron-right"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Still have some doubts?", "items": [
    {
      title: "What does this app do?",
      description: "This app provides a platform for you to easily browse, purchase, download, and use a wide range of website templates for your projects."
    },
    {
      title: "How can this app solve my problem?",
      description: "This app streamlines the process of finding and implementing professional website designs, saving you time and effort in creating visually appealing and functional websites."
    },
    {
      title: "Is it available for my device?",
      description: `Our app is designed for compatibility across various devices and platforms, ensuring accessibility whether you're using a smartphone, tablet, or computer.`
    },
    {
      title: "What makes this app different from others?",
      description: "Our app stands out for its user-friendly interface, extensive template collection, and seamless integration of the purchasing and downloading process, making it highly efficient."
    },
    {
      title: "Are there any costs involved?",
      description: "While the app itself may be free to download, there may be costs associated with purchasing specific templates based on your preferences and project requirements."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "id": "download", "title": "Download our app now!", "subtitle": "Access a variety of stunning templates, simplify your creative process, and elevate your online presence." }, { "actions": ($$result3) => renderTemplate`<div class="flex max-w-sm gap-4"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": appStoreDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": appStoreImg, "alt": "App Store Image", "width": 200 })} ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": googlePlayDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": googlePlayImg, "alt": "Google Play Image", "width": 200 })} ` })} </div>` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "position": "left", "links": [
    { text: "Services", href: "#" },
    { text: "Features", href: "#" },
    { text: "About", href: "#" }
  ], "actions": [
    {
      text: "Download",
      href: "#download"
    }
  ], "isSticky": true, "showToggleTheme": true })} ` })}` })}`;
}, "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/homes/mobile-app.astro", void 0);

const $$file = "/Users/dennistroeger/cursor-apps/dt_hp/src/pages/homes/mobile-app.astro";
const $$url = "/homes/mobile-app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MobileApp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
