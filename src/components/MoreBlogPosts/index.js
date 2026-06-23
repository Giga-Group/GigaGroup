import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import blogs, { getOtherBlogs } from '../../api/blogs';

const MoreBlogPosts = ({ currentSlug, limit = 3 }) => {
    const posts = currentSlug ? getOtherBlogs(currentSlug, limit) : blogs.slice(0, limit);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    if (!posts.length) return null;

    return (
        <section className="wpo-blog-section section-padding giga-more-blog-posts">
            <div className="container">
                <SectionTitle subTitle={'Keep Reading'} MainTitle={'More Blog Posts'} />
                <div className="wpo-blog-items">
                    <div className="row">
                        {posts.map((blog) => (
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

export default MoreBlogPosts;
