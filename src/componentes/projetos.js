import React from 'react';
export function Projetos(props) {

    return (

        <div class="projeto">
            <div class="projetos">

                <h2>Projetos:</h2>

                <p>projetos que estou desenvolvendo</p>

                <div class="A">
                    {props.nome}
                    {props.descricao}
                    <button>Ver Detalhes</button>
                </div>

                <div class="B">
                    {props.nome1}
                    {props.descricao1}
                    <button>Ver Detalhes</button>
                </div>

                <div class="C">
                    {props.nome2}
                    {props.descricao2}
                    <button>Ver Detalhes</button>
                </div>
            </div>
        </div>

    )

}