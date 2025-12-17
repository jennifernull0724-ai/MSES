import { useEffect } from 'react';

/**
 * Custom hook to manage SEO metadata per page
 * @param {Object} config - SEO configuration
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.canonical - Canonical URL
 * @param {string} [config.ogType] - Open Graph type (default: website)
 */
export function useSEO({ title, description, canonical, ogType = 'website' }) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Meta description
    setMeta('description', description);

    // Canonical URL
    setLink('canonical', canonical);

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', 'Mid-South Environmental Services', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

  }, [title, description, canonical, ogType]);
}

export default useSEO;
