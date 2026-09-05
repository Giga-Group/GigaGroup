import { useEffect } from 'react';

export const DEFAULT_TITLE = 'Giga Group';
export const DEFAULT_DESCRIPTION =
    'Giga Group is a leading real estate developer in Pakistan and the UAE, delivering luxury residential and commercial projects since 1956.';

const upsertMeta = (attr, key, content) => {
    if (!content) return;
    let element = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
    if (!href) return;
    let element = document.head.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
};

const toAbsoluteUrl = (value) => {
    if (!value) return '';
    if (/^https?:\/\//i.test(value)) return value;
    return `${window.location.origin}${value.startsWith('/') ? value : `/${value}`}`;
};

export const applySeo = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    image,
    type = 'website',
} = {}) => {
    const fullTitle = title && title !== DEFAULT_TITLE ? `${title} | Giga Group` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = window.location.href.split('#')[0];
    const imageUrl = image ? toAbsoluteUrl(image) : '';

    document.title = fullTitle;
    upsertMeta('name', 'description', desc);
    upsertMeta('property', 'og:site_name', 'Giga Group');
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertLink('canonical', url);

    if (imageUrl) {
        upsertMeta('property', 'og:image', imageUrl);
        upsertMeta('name', 'twitter:image', imageUrl);
    }
};

const Seo = ({ title, description, image, type }) => {
    useEffect(() => {
        applySeo({ title, description, image, type });

        return () => {
            applySeo();
        };
    }, [title, description, image, type]);

    return null;
};

export default Seo;
