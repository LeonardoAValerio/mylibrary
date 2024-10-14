import React from "react";
import './login.css'
import Field from "../../components/FieldForm";

export function Login() {
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
                <button className="button">Criar conta</button>
            </main>
        </div>
    );
}