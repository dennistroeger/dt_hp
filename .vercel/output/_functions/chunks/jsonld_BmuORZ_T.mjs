import { b as getCanonical } from './permalinks_OHe_PGpA.mjs';

function createBlogPostJsonLd(post, url, image, siteName = "Dennis Tröger", logoUrl = "favicon.ico") {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": image ? typeof image === "string" ? image : "https://www.dennistroeger.com" + image.src : void 0,
    "datePublished": post.publishDate,
    "dateModified": post.updateDate || post.publishDate,
    "author": post.author ? {
      "@type": "Person",
      "name": post.author
    } : void 0,
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dennistroeger.com" + logoUrl
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}
function createBlogListingJsonLd(posts, url, title = "Systems Decoded Blog", description = "My passion is to decode complex systems into simple solutions.", siteName = "Dennis Tröger", logoUrl = "favicon.ico") {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": title,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dennistroeger.com" + logoUrl
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": getCanonical(post.permalink)
      }))
    }
  };
}
function createWebsiteJsonLd(url, name = "Dennis Tröger", description = "My passion is to decode complex systems into simple solutions.", logoUrl = "favicon.ico") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": name,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dennistroeger.com" + logoUrl
      }
    }
  };
}

export { createBlogListingJsonLd as a, createBlogPostJsonLd as b, createWebsiteJsonLd as c };
