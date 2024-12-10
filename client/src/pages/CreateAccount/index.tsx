import React, { useState } from "react";
import './create-account.css'
import { Field } from "../../components/FieldForm";
import { Button } from "../../components/Button";
import axios from "axios";
import { Alert, AlertProps, AlertTypes } from "../../components/Alert";
import { requisition } from "../../helpers/Requisition";

interface UserAttributes {
    name: string;
    email: string;
    password: string;
}

class FormUser implements UserAttributes {
    private readonly form: any;
    name: string;
    email: string;
    password: string;

    constructor(form: any) {
        this.form = form;
        this.name = form.name.value;
        this.email = form.email.value;
        this.password = form.password.value;
    }

    validate(): AlertProps[] {
        const erros: AlertProps[] = [];
        if(this.name.match("\\d")) erros.push({message: "Nome contém numeros!", type: AlertTypes.FAILED});
        if(this.name.length <= 3) erros.push({message: "Nome precisa ter no minimo 3 caracteres!", type: AlertTypes.FAILED});
        if(!this.email.includes("@")) erros.push({message: "Email inválido!", type: AlertTypes.FAILED});
        if(this.password.length < 8) erros.push({message: "Senha deve ser maior ou igual 8 caracteres!", type: AlertTypes.FAILED});
        return erros;
    }

    getUser(): 
    {
        name: string,
        email: string,
        password: string
    } {
        return {
            name: this.name,
            email: this.email,
            password: this.password
        }
    }
}

export function CreateAccount() {
    const [alerts, setAlerts] = useState<AlertProps[]>([]);

    const handleSubmit = async (e: any) => {
        const sendNewAccount = async (user: UserAttributes) => {
            const response = await requisition.post("login/create-account", user);;
            return response;
        } 

        e.preventDefault();
        const form = e.target.elements; 
        const formUser = new FormUser(form);
        const validateAlert = formUser.validate();
        setAlerts(validateAlert);
        const isHasFailedAlerts = alerts.some((alert => alert.type === AlertTypes.FAILED));
        if(!isHasFailedAlerts) {
            const result = await sendNewAccount(formUser.getUser());
            if(result.data.statusCode === 201) {
                setAlerts([{message: "Conta criada com sucesso! Volte para o menu e entre na sua conta!", type: AlertTypes.SUCCESS}]);
            }else {
                setAlerts([{message: "Email de usuário já existe, ou algo deu errado!", type: AlertTypes.FAILED}]);
            }
        }
    }
    
    return (
        <div className="align-login">
            <main className="login">
                <h1>Criar Conta</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <Field>
                        <label>Nome</label>
                        <input type="text" placeholder="Nome" name="name"></input>
                    </Field>
                    <Field>
                        <label>Email</label>
                        <input type="email" placeholder="Email" name="email"></input>
                    </Field>
                    <Field>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" name="password"></input>
                    </Field>
                    <Button color="var(--border-book-color)">Cadastrar-se</Button>
                </form>
                <br></br>
                <Button path="/login">Login</Button>
            </main>
            <div className="alerts">
                {alerts.map(alert => {
                    return <Alert message={alert.message} type={alert.type}></Alert>
                })}
            </div>
        </div>
    );
}