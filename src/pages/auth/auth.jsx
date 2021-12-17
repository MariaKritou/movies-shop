import Layout from "../../components/layout/layout";
import { UserContext } from "../../contexts/user-context";
import React, { Children, useContext, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom"; // v6
import "./auth.css";

export const Auth = () => {

    const ctx = useContext(UserContext);
    const navigate = useNavigate();
    const refName = useRef(ctx.username);
    const refPassword = useRef(ctx.password);
    const [formErrors, setFormErrors] = useState([]);

    const handleValidation = (username, password) => {
        const errors = [];

        if (username.length === 0) {
            errors.push("Empty username!");
        }

        if (password.length < 4) {
            errors.push("Make your password more than 4 charachters!");
        }

        return errors;
    };


    function handleSubmit(event) {
        event.preventDefault();
        const errors = handleValidation(refName.current.value, refPassword.current.value);

        if (errors.length > 0) {
            setFormErrors(errors);
            return;
          }

        ctx.storeUser(refName.current.value, refPassword.current.value);
        navigate("/");
    }

    return (
        <Layout children={Children}>
            <div className="container text-white bg-dark login-form-style"   >
                <form className="" onSubmit={handleSubmit}>
                {formErrors.map(error => <p className="text-danger" key={error}>{error}</p>)}
                    <div className="mb-5">
                        <label className="form-label">Username</label>
                        <input type="username" className="form-control" id="username"
                            ref={refName} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"
                            ref={refPassword} />
                    </div>
                    <div align="center" >
                        <div className="col-5 col-md-2 col-lg-2 col-sm-3 col-xs-5">
                            <button type="submit" className="btn form-control btn-primary">Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}