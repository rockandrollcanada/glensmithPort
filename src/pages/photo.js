import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import ImageShow from "../components/imageshow"

const PhotoPage = () => (
  <Layout>
    <SEO title="Rock and Roll Canada Photos" />
    <h1>Glen Smith Photo inspirations</h1>
    <div class="card-panel light-green darken-3">
      $PATH reminder in node Java Script. On a Mac you have to run sudo if you
      have not configured your permissions properly.
    </div>

    <img
      src={require("../images/nodejs.png")}
      alt="setting up node Java Script"
    />
    <div class="card-panel light-green darken-1">Glen Smith liver 2019.</div>
    <img src={require("../images/liver.jpg")} alt="Glen Rockin Smith" />
    <div class="card-panel light-green darken-3">
      Nashville Pussy playing Toronto Horseshoe September 26,2019. Stay tuned
      for video.
    </div>
    <img
      src={require("../images/nashvillepussy.jpg")}
      alt="Nashville Pussy comming to Canada."
    />
    <div class="card-panel light-green darken-3">
      Working with GIMP free open source in 2019 after years of paying large
      subscriptions for software.
    </div>
    <img
      src={require("../images/oakville.jpg")}
      alt="Working with GIMP 2.10."
    />
    <ImageShow />
    <Menu />
  </Layout>
)

export default PhotoPage
