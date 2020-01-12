import React from 'react'
import { Link } from 'gatsby'

import logoFull from '../img/logo-full.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="has-background-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFFFFF" fill-opacity="1" d="M0,96L288,224L576,32L864,160L1152,96L1440,160L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path>
        </svg>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="content has-text-centered">
            <img
              src={logoFull}
              alt="Logotipo"
              title="Logotipo"
              style={{ width: '16em', height: '16em' }}
            />
          </div>
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Início
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Sobre
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Últimas Notícias
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                title="facebook" href="https://facebook.com/gleyconxavier"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                {/* <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                <a
                title="instagram" href="https://www.instagram.com/gleyconxavierdev/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div>
              <p
              style={{ padding: '10px' }}
              >© 2020 Todos os direitos reservados<br />Gleycon Xavier
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
