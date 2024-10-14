import React from "react";
import './login.css'
import { Field } from "../../components/FieldForm";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    return (
        <div className="align-login">
            <main className="login">
                <h1>Login</h1>
                <form className="login-form">
                    <Field>
                        <label>Nome</label>
                        <input type="text" placeholder="Nome"></input>
                    </Field>
                    <Field>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha"></input>
                    </Field>
                    <Button color="var(--border-book-color)">Login</Button>
                </form>
                <br></br>
                <Button path="/login/create-account">Criar conta</Button>
            </main>
        </div>
    );
}