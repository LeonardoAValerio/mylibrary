import React from "react";
import './login.css'
import { Field } from "../../components/FieldForm";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import axios from "axios";
import { setCookie } from "../../helpers/Cookies";
import { requisition } from "../../helpers/Requisition";

interface LoginAttributes {
    email: string,
    password: string
}

export function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (e: any) => {
        try {
            const sendLogin = async (user: LoginAttributes) => {
                const response = await requisition.post(`login`, user);
                return response;
            }
    
            e.preventDefault();
            const form = e.target.elements;
            const user = {email: form.email.value, password: form.password.value};
            const result = await sendLogin(user);
            const token = result.data.token as string;
            setCookie("authToken", token);
            navigate({pathname: "/"});
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="align-login">
            <main className="login">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <Field>
                        <label>Email</label>
                        <input type="email" placeholder="Email" name="email"></input>
                    </Field>
                    <Field>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" name="password"></input>
                    </Field>
                    <Button color="var(--border-book-color)">Login</Button>
                </form>
                <br></br>
                <Button path="/login/create-account">Criar conta</Button>
            </main>
        </div>
    );
}