import { useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";

const LandingPage = () => {

  return (
    <div className="">
<section id="home" className="hero">
    <div className="container text-center">
        <h1 className="display-4">Welcome to MyStartup</h1>
        <p className="lead">We're revolutionizing the way you work</p>
        <a href="#" className="btn btn-primary btn-lg mt-3">Get Started</a>
    </div>
</section>

{/* <!-- Features Section --> */}
<section id="features" className="py-5">
    <div className="container">
        <h2 className="text-center mb-5">Our Features</h2>
        <div className="row">
            <div className="col-md-4 text-center">
                <i className="fas fa-rocket feature-icon text-primary"></i>
                <h3>Fast</h3>
                <p>Lightning-quick performance for all your needs.</p>
            </div>
            <div className="col-md-4 text-center">
                <i className="fas fa-lock feature-icon text-primary"></i>
                <h3>Secure</h3>
                <p>Your data is safe with our top-notch security.</p>
            </div>
            <div className="col-md-4 text-center">
                <i className="fas fa-cogs feature-icon text-primary"></i>
                <h3>Customizable</h3>
                <p>Tailor our product to fit your specific requirements.</p>
            </div>
        </div>
    </div>
</section>

{/* <!-- Pricing Section --> */}
<section id="pricing" className="py-5 bg-light">
    <div className="container">
        <h2 className="text-center mb-5">Pricing Plans</h2>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Basic</h3>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">$9.99/month</h4>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-check text-success"></i> Feature 1</li>
                            <li><i className="fas fa-check text-success"></i> Feature 2</li>
                            <li><i className="fas fa-times text-danger"></i> Feature 3</li>
                        </ul>
                        <a href="#" className="btn btn-primary btn-block">Choose Plan</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h3 className="text-center">Pro</h3>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">$19.99/month</h4>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-check text-success"></i> Feature 1</li>
                            <li><i className="fas fa-check text-success"></i> Feature 2</li>
                            <li><i className="fas fa-check text-success"></i> Feature 3</li>
                        </ul>
                        <a href="#" className="btn btn-primary btn-block">Choose Plan</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Enterprise</h3>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">$49.99/month</h4>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-check text-success"></i> Feature 1</li>
                            <li><i className="fas fa-check text-success"></i> Feature 2</li>
                            <li><i className="fas fa-check text-success"></i> Feature 3</li>
                            <li><i className="fas fa-check text-success"></i> Feature 4</li>
                        </ul>
                        <a href="#" className="btn btn-primary btn-block">Choose Plan</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Contact Section --> */}
<section id="contact" className="py-5">
    <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" required></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" required></input>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
  );
};

export default LandingPage;