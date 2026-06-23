import React, { Fragment } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import TransparentNavbar from '../../components/TransparentNavbar';
import ParallaxHero from '../../components/ParallaxHero';
import BlogAuthorSection from '../../components/BlogAuthorSection';
import MoreBlogPosts from '../../components/MoreBlogPosts';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo.svg';
import { getBlogBySlug } from '../../api/blogs';
import BlogPostContent from '../../components/BlogPostContent';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = getBlogBySlug(slug);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    return (
        <Fragment>
            <TransparentNavbar Logo={Logo} />
            <ParallaxHero
                title={post.title}
                subtitle={post.thumb}
                backgroundImage={post.heroImage}
                fullHeight
                breadcrumb={[
                    { label: 'Home', link: '/' },
                    { label: 'Blog', link: '/blog' },
                    { label: post.title },
                ]}
            />
            <section className="giga-blog-post section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article className="giga-blog-post__article">
                                <div className="giga-blog-post__meta">
                                    <span>{post.create_at}</span>
                                    <span>By {post.author}</span>
                                </div>
                                <BlogPostContent sections={post.sections} />
                                <BlogAuthorSection
                                    author={post.author}
                                    authorTitle={post.authorTitle}
                                    authorBio={post.authorBio}
                                    authorImage={post.authorImage}
                                />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <MoreBlogPosts currentSlug={post.slug} limit={3} />
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogPostPage;
