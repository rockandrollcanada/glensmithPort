/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/materialize.css"
import "../styles/materialize.css"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

        <footer class="page-footer card-panel deep-purple darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h2 class="white-text">Glen Smith Web Developent Projects.</h2>
                <p class="grey-text text-lighten-4">
                  This site was developed with gatsby js which is powered by
                  react and JSX. I hope you enjoy learning code. I do.
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Authored web sites.</h5>
                <ul>
                  <li>
                    <a
                      class="red-text darken-4 transparent"
                      href="https://rockandrollcanada.ca"
                    >
                      Rock and Roll Canada Website
                    </a>
                  </li>
                  <li>
                    <a
                      class="indigo darken-4 grey-text text-lighten-3"
                      href="https://xyzed.ca"
                    >
                      xyzed recording studios website
                    </a>
                  </li>
                  <li>
                    <a
                      class="blue-grey darken-4 grey-text text-lighten-3"
                      href="https://willyjack.ca"
                    >
                      WillyJack
                    </a>
                  </li>
                  <li>
                    <a
                      class="green accent-4 grey-text text-lighten-3"
                      href="https://biggybiggbud.ca/"
                    >
                      biggybiggbud
                    </a>
                  </li>
                  <li>
                    <a
                      class=" pink lighten-1 grey-text text-lighten-3"
                      href="https://ganjatarianedibles.ca/"
                    >
                      ganjatarianedibles
                    </a>
                  </li>
                  <li>
                    <a
                      class="light-blue blue-text text-darken-4"
                      href="https://jordcast.ca/"
                    >
                      Jordcast
                    </a>
                  </li>
                  <li>
                    <a
                      class=" teal lighten-2 blue-text text-darken-4 "
                      href="https://glens.app/"
                    >
                      Glen's App
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © 2019 Rock and Roll Canada
              <a class="grey-text text-lighten-4 right" href="#!">
                It is not just a website. It is an attitude.
              </a>
            </div>
          </div>
          © {new Date().getFullYear()}, Built by Glen Smith with gatsbyjs Canada
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
