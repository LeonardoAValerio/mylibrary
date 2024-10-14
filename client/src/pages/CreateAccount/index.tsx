import React from "react";
import './create-account.css'
import { Field } from "../../components/FieldForm";
import { ButtonNavigate } from "../../components/ButtonNavigate";

export function CreateAccount() {
    return (
        <div className="align-login">
            <main className="login">
                <h1>Criar Conta</h1>
                <form className="login-form">
                    <Field>
                        <label>Nome</label>
                        <input type="text" placeholder="Nome"></input>
                    </Field>
                    <Field>
                        <label>Email</label>
                        <input type="email" placeholder="Email"></input>
                    </Field>
                    <Field>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha"></input>
                    </Field>
                    <Field>
                        <label>Repetir a Senha</label>
                        <input type="password" placeholder="Senha"></input>
                    </Field>
                    <button className="button">Cadastrar-se</button>
                </form>
                <br></br>
                <ButtonNavigate path="/login">Login</ButtonNavigate>
            </main>
        </div>
    );
}