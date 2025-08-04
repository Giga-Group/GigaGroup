import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import Homepage5 from '../HomePage5'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage';
import ServicePageS2 from '../ServicePageS2';
import ServiceSinglePage from '../ServiceSinglePage';
import ProjectPage from '../ProjectPage';
import ProjectPageS2 from '../ProjectPageS2';
import ProjectSinglePage from '../ProjectSinglePage';
import TeamSinglePage from '../TeamSinglePage';
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import PricingPage from '../PricingPage'
import TestimonialPage from '../TestimonialPage'
import ContactPage from '../ContactPage'
import ShopPage from '../ShopPage'
import OrderRecived from '../OrderRecived';
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage'
import CheckoutPage from '../CheckoutPage'
import ErrorPage from '../ErrorPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='home' element={<Homepage/>} />
          <Route path='home2' element={<Homepage2/>} />
          <Route path='home3' element={<Homepage3/>} />
          <Route path='home4' element={<Homepage4/>} />
          <Route path='home5' element={<Homepage5/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='project-single/:id' element={<ProjectSinglePage/>} />
          <Route path='service-single/:id' element={<ServiceSinglePage/>} />
          <Route path='team-single/:id' element={<TeamSinglePage/>} />
          <Route path='service' element={<ServicePage/>} />
          <Route path='service-s2' element={<ServicePageS2/>} />
          <Route path='project' element={<ProjectPage/>} />
          <Route path='project-s2' element={<ProjectPageS2/>} />
          <Route path='pricing' element={<PricingPage/>} />
          <Route path='testimonial' element={<TestimonialPage/>} />
          <Route path='shop' element={<ShopPage/>} />
          <Route path='product-single/:id' element={<ProductSinglePage/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route path='order_received' element={<OrderRecived/>} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='404' element={<ErrorPage/>} />
          <Route path='blog-single/:id' element={<BlogDetails/>} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull/>} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft/>} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='register' element={<SignUpPage/>} />
          <Route path='forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
