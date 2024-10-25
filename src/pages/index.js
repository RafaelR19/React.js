import React from 'react';
import { Header } from '@/componentes/header';
import { Projetos } from '@/componentes/projetos';


export default function PaginaInicial() {
  return (
    <div>

      <Header />

      <Projetos nome="Projeto1" descricao="projeto"/>

    </div>
  )
}


