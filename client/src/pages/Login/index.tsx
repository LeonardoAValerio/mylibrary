import React from "react";
import './login.css'

export function Login() {
    return (
        <div className="align-login">
            <main className="login">
                <h1>Login</h1>
                <form className="login-form">
                    <div className="field">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome"></input>
                    </div>
                    <div className="field">
                        <label>Senha</label>
                        <input type="password" placeholder="Senha"></input>
                    </div>
                    <button className="button">Entrar</button>
                </form>
                <br></br>
                <button className="button">Cadastrar-se</button>
            </main>
        </div>
    );
}