import React from 'react';

const BlogPostContent = ({ sections }) => {
    if (!sections?.length) return null;

    return (
        <div className="giga-blog-post__body">
            {sections.map((section, index) => {
                switch (section.type) {
                    case 'heading':
                        return (
                            <h2 key={index} className="giga-blog-post__heading">
                                {section.text}
                            </h2>
                        );
                    case 'quote':
                        return (
                            <blockquote key={index} className="giga-blog-post__quote">
                                <p>&ldquo;{section.text}&rdquo;</p>
                                {section.author && (
                                    <cite>— {section.author}</cite>
                                )}
                            </blockquote>
                        );
                    case 'image':
                        return (
                            <figure key={index} className="giga-blog-post__figure">
                                <img src={section.src} alt={section.alt || ''} />
                                {section.caption && (
                                    <figcaption>{section.caption}</figcaption>
                                )}
                            </figure>
                        );
                    case 'paragraph':
                    default:
                        return (
                            <p key={index} className="giga-blog-post__paragraph">
                                {section.text}
                            </p>
                        );
                }
            })}
        </div>
    );
};

export default BlogPostContent;
