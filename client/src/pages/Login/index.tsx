import React from "react";
import './login.css'
import { Field } from "../../components/FieldForm";
import { useNavigate } from "react-router-dom";
import { ButtonNavigate } from "../../components/ButtonNavigate";

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
                    <button className="button">Entrar</button>
                </form>
                <br></br>
                <ButtonNavigate path="/login/create-account">Criar conta</ButtonNavigate>
            </main>
        </div>
    );
}