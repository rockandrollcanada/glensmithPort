import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <h1>Canadian Web Developer </h1>
    <p>
      Rock and Roll Canada. Available to help you build your next project on the
      web. My name is Glen Smith. If you like my code say hello @glenrockinsmith
    </p>
    <h2>Rock and Roll Canada</h2>
    <Image />
    <h2>Say Hello on Twitter</h2>
    <blockquote className="twitter-tweet">
      <p lang="und" dir="ltr">
        <a href="https://t.co/iDe8MfERgF">https://t.co/iDe8MfERgF</a>
      </p>
      &mdash; Rock and Roll Canada (@glenrockinsmith)
      <a href="https://twitter.com/glenrockinsmith/status/1158050171424563202?ref_src=twsrc%5Etfw">
        August 4, 2019
      </a>
    </blockquote>
    <br></br>
    <h2>WordPress on a local machine.</h2>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Mamp install for WordPress - Coderock{" "}
        <a href="https://t.co/gaIXF2FSBc">https://t.co/gaIXF2FSBc</a> via{" "}
        <a href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a>
      </p>
      &mdash; Rock and Roll Canada (@glenrockinsmith){" "}
      <a href="https://twitter.com/glenrockinsmith/status/1180988626748018688?ref_src=twsrc%5Etfw">
        October 6, 2019
      </a>
    </blockquote>{" "}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    <h2>Gatsby Starter Blog. Gatsby is built with react.</h2>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Gatsby Starter Blog &#39;gatsby is fast man its fast its super fast&#39;{" "}
        <a href="https://t.co/ej2dtOU8JK">https://t.co/ej2dtOU8JK</a> via{" "}
        <a href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a>
      </p>
      &mdash; Rock and Roll Canada (@glenrockinsmith){" "}
      <a href="https://twitter.com/glenrockinsmith/status/1200846730109095936?ref_src=twsrc%5Etfw">
        November 30, 2019
      </a>
    </blockquote>{" "}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    <Menu />
  </Layout>
)

export default IndexPage
