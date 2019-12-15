import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const CodePage = () => (
  <Layout>
    <SEO title="Canadian Coder" />
    <div class="card-panel light-green darken-3">
      This website was made with java script and gatsby js. I like to code.
    </div>
    <div class="video-container">
      <iframe
        title="Canadian Web Developer"
        width="853"
        height="480"
        src="https://www.youtube.com/embed/mkRUAlav71M"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p>I am Glen Smith a Canadian Web Developr based in Toronto, CANADA.</p>

    <Menu />
  </Layout>
)

export default CodePage
