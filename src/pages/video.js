import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const VideoPage = () => (
  <Layout>
    <SEO title="Rock and Roll Canada Videos" />
    <h1>Rock and Roll Canada Videos</h1>
    <p>This collection of videos are in amazonaws s3 buckets.</p>
    <div class="video-container">
      <iframe
        title="Rock and Roll Canada Video"
        width="853"
        height="480"
        src="https://rockandrollcanadashow.s3-us-west-2.amazonaws.com/fyooshaEdit2s.mp4"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="video-container">
      <iframe
        title="Rock and Roll Canada Video"
        width="853"
        height="480"
        src="https://djweed.s3.ca-central-1.amazonaws.com/headstonesTopCharts1.mp4"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <Link to="/">Go back to the Index Page</Link>
    <Menu />
  </Layout>
)

export default VideoPage
