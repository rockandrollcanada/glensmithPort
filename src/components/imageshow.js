import React from "react"
import SEO from "../components/seo"
const ImageShow = () => (
  <layout>
    <SEO title="Glen Smith Photo Image Show" />
    <h1>Glen Smith Photo inspirations</h1>
    <div class="card-panel light-green darken-3">A colection of photos.</div>

    <img
      src={require("../images/danish.jpg")}
      alt="sweet and delicious pastry"
    />
    <img
      src={require("../images/greek_fries.jpg")}
      alt="tasty and delicious specialty fries "
    />
    <img src={require("../images/pastry.jpg")} alt="pastry pastry every day" />
    <img src={require("../images/lunch.jpg")} alt="Lunch time fun time" />
  </layout>
)

export default ImageShow
