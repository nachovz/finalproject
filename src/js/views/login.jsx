import React, {Component} from "react";
import '../../styles/login.css';
// import {LogingIn} from "../component/loginIn";
import {Context} from '../store/appContext.jsx';
import PropTypes from 'prop-types';

export class Login extends Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password : ""
        };
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleRequest(event){

        event.preventDefault();
        
        if (this.nameTextInput.value && this.passwordTextInput.value){
            const state = this.state;
            state.username = this.nameTextInput.value;
            state.password = this.passwordTextInput.value;
            this.setState(state);
            return true;
        } 
    }
    
    render(){
        const user = this.state;
        return(
            <React.Fragment>

                <Context.Consumer>
                    {
                        ({store, actions}) => {
                            return (
                                <div className="mainer p-5">
                                    <div className="row justify-content-center mt-5">

                                        <div className="bg-light p-5 col-6 rounded">
                                            <div className="container ">
                                                
                                                <form >
                                                    <div className="form-group">
                                                        <label>User Name</label>
                                                        <input type="userName" ref={(ref) => this.nameTextInput = ref} class="form-control" placeholder="username" />
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Password</label>
                                                        <input type="password" ref={(ref) => this.passwordTextInput = ref} class="form-control" placeholder="Password"/>
                                                    </div>

                                                    <button type="submit" onClick = {(event) => { 
                                                        if (this.handleRequest(event)){
                                                            if (actions.isLegalUser(user)){
                                                                this.props.history.push('/');
                                                            }
                                                        }
                                                    }} className="btn btn-primary" >Submit <i class="fab fa-bitcoin"></i> </button>
                                        
                                                </form>
                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                </Context.Consumer>
            </React.Fragment>
        );
    }
}

export default Login;

Login.propTypes = {
    history: PropTypes.object
};