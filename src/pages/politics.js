import React from "react"
import "../styles/rockin.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const PoliticsPage = () => (
  <Layout>
    <SEO title="canadian_politics" />
    <div class="card-panel red accent-4">
      A Federal Election is scheduled Canada in 2019.
    </div>

    <div class="video-container">
      <iframe
        title="rock and roll Canada"
        width="853"
        height="480"
        src="//www.youtube.com/embed/am-1fnJAdLE?rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p>Welcome to canadian_politics</p>

    <div class="wrapper">
      <div>
        <img
          src={require("../images/oakville.jpg")}
          alt="Working with GIMP 2.10."
        />
      </div>
      <div>
        <img
          src={require("../images/greek_fries.jpg")}
          alt="tasty and delicious specialty fries "
        />
      </div>
      <div>
        <img
          src={require("../images/elections.jpg")}
          alt="Glen Smith Registered Federal Agent."
        />
      </div>
    </div>

    <Menu />
  </Layout>
)

export default PoliticsPage
