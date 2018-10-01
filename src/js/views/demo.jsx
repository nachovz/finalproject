import React from 'react';

import { Link } from 'react-router-dom';

import DemoCarousel from '../component/demoCarousel.jsx';

import '../../styles/demo.css';

export class Demo extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <DemoCarousel />
                <div className="alert alert-primary" role="alert">
                  A simple primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                  A simple secondary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                  A simple success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                  A simple danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                  A simple warning alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                  A simple info alert—check it out!
                </div>
                <div className="alert alert-light" role="alert">
                  A simple light alert—check it out!
                </div>
                <div className="alert alert-dark" role="alert">
                  A simple dark alert—check it out!
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-primary">Home</button>
                </Link>
                <Link to="/blog">
                    <button type="button" className="btn btn-secondary">Blog</button>
                </Link>
                <Link to="/product">
                    <button type="button" className="btn btn-success">Product</button>
                </Link>
                <Link to="/post">
                    <button type="button" className="btn btn-danger">Post</button>
                </Link>
                <Link to="/checkout">
                    <button type="button" className="btn btn-warning">Checkout</button>
                </Link>
                <Link to="/login">
                    <button type="button" className="btn btn-info">Login</button>
                </Link>
                
                <br/>
                <button type="button" className="btn btn-light">Light</button>
                
                <button type="button" className="btn btn-dark">Dark</button>
                
                <button type="button" className="btn btn-link">Link</button>
            </React.Fragment>
            );
    }
    
}