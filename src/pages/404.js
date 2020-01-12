import React from 'react'
import Layout from '../components/Layout'
import ghost404 from '../../static/img/404.png'

const NotFoundPage = () => (
  <Layout>
    <div className="column is-12 has-text-centered">
      <h1>Não Encontrado</h1>
      <p>A página que você procura, infelizmente não pode ser encontrada.</p>
      <img src={ghost404} />
      <p>* A propósito ele gosta de maças *</p>
    </div>
  </Layout>
)

export default NotFoundPage
