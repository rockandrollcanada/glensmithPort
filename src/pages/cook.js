import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Imageshow from "../components/imageshow"

const CookPage = () => (
  <Layout>
    <SEO title="Canadian Cook" />
    <div class="card-panel teal lighten-2">What is cooking Canada ?</div>
    <div class="video-container">
      <iframe
        title="rock and roll Canada"
        width="853"
        height="480"
        src="https://player.vimeo.com/video/76687985"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p>Welcome to Canadian Cooking.</p>
    <Link to="/">Go back to the homepage</Link>
    <Imageshow />
    <Menu />
  </Layout>
)

export default CookPage
