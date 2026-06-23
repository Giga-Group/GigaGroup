import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../api/blogs';

const BlogPostsGrid = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <section className="wpo-blog-section section-padding giga-blog-grid">
            <div className="container">
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.map((blog) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={blog.id}>
                                <div className="wpo-blog-item">
                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        onClick={handleClick}
                                        className="giga-blog-card-link"
                                    >
                                        <div className="wpo-blog-img">
                                            <img src={blog.screens} alt={blog.title} />
                                            <div className="thumb">{blog.thumb}</div>
                                        </div>
                                        <div className="wpo-blog-content">
                                            <ul>
                                                <li>{blog.create_at}</li>
                                                <li>By {blog.author}</li>
                                            </ul>
                                            <h2>{blog.title}</h2>
                                            <p>{blog.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostsGrid;
