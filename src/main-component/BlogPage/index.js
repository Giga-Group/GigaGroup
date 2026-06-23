import React, { Fragment } from 'react';
import TransparentNavbar from '../../components/TransparentNavbar';
import ParallaxHero from '../../components/ParallaxHero';
import BlogPostsGrid from '../../components/BlogPostsGrid';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo.svg';
import { blogHeroBanner } from '../../api/blogs';

const BlogPage = () => {
    return (
        <Fragment>
            <TransparentNavbar Logo={Logo} />
            <ParallaxHero
                title="Our Blog"
                subtitle="Latest news and insights from Giga Group"
                backgroundImage={blogHeroBanner}
                breadcrumb={[
                    { label: 'Home', link: '/' },
                    { label: 'Blog' },
                ]}
            />
            <BlogPostsGrid />
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogPage;
