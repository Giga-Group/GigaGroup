import React from 'react';
import authorPlaceholder from '../../images/blog/author-placeholder.svg';
import './style.scss';

const BlogAuthorSection = ({ author, authorTitle, authorBio, authorImage }) => {
    const avatarSrc = authorImage || authorPlaceholder;

    return (
        <div className="giga-blog-author">
            <div className="giga-blog-author__avatar">
                <img
                    src={avatarSrc}
                    alt={author}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = authorPlaceholder;
                    }}
                />
            </div>
            <div className="giga-blog-author__content">
                <span className="giga-blog-author__label">Written by</span>
                <h3>{author}</h3>
                <span className="giga-blog-author__title">{authorTitle}</span>
                <p>{authorBio}</p>
            </div>
        </div>
    );
};

export default BlogAuthorSection;
