import React, { Component } from 'react';

import Rodape from '../../components/Rodape/Rodope';

import logo from '../../assets/img/icon-login.png';
import Axios from 'axios';

import Titulo from '../../components/Titulo/Titulo';

class Eventos extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://192.168.7.85:5000/api/eventos')
            .then(data => {
                this.setState({ lista: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    listaAtualizada = () => {
        fetch('http://192.168.7.85:5000/api/eventos')
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.titulo);
        fetch('http://192.168.7.85:5000/api/eventos', {
            method: "POST",
            body: JSON.stringify({ titulo: this.state.titulo, dataEvento: this.state.dataEvento, ativo: this.state.ativo, idCategoriaNavigation: this.state.idCategoriaNavigation }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.listaAtualizada())
            .catch(error => console.log(error))



    }

    adicionaEvento = () => {
        let valores_lista = this.state.lista;
        let evento = { nome: this.state.nome }

        valores_lista.push(evento);

        this.setState({ lista: valores_lista });
    }

    atualizarNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                        <img src={logo} />

                        <nav className="cabecalhoPrincipal-nav">
                            Administrador
                        </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <Titulo titulo="Eventos" />
                        <div className="container" id="conteudoPrincipal-lista">

                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Evento</th>
                                        <th>Data</th>
                                        <th>Acesso Livre</th>
                                        <th>Tipo do Evento</th>

                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {
                                        this.state.lista.map(element => {
                                            return (
                                                <tr>
                                                    <td>{element.idEvento}</td>
                                                    <td>{element.titulo}</td>
                                                    <td>{element.dataEvento}</td>
                                                    <td>{element.ativo ? 'ativo' : 'inativo'}</td>
                                                    <td>{element.idCategoriaNavigation.nome}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                            <div className="container">

                                <input
                                    type="text"
                                    className="className__evento"
                                    id="evento__titulo"
                                    placeholder="título do evento"
                                    value={this.state.nome}
                                    onInput={this.atualizarNome}
                                />

                                <input
                                    type="text"
                                    id="evento__localizacao"
                                    placeholder="localização" />
                                <input
                                    type="text"
                                    id="evento__data"
                                    placeholder="dd/MM/yyyy" />
                                <select id="option__acessolivre">
                                    <option value="1">Ativo</option>
                                    <option value="0">Desativo</option>
                                </select>
                                <select id="option__tipoevento">
                                    <option value="0" disabled>Categoria do Evento</option>
                                    <option>
                                        Git
                                    </option>
                                </select>
                                <textarea
                                    rows="3"
                                    cols="50"
                                    placeholder="descrição do evento"
                                    id="evento__descricao"></textarea>

                            </div>
                            <button
                                id="btn__cadastrar"
                                onClick={this.adicionaItem}
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >Cadastrar</button>
                        </div>
                    </section>
                </main>

                <Rodape />

            </div>
        );
    }
}

export default Eventos