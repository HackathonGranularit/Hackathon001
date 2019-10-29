import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import  "../components/aboutus"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="about-us-banner">
      <div className="aboutus-banner">
        <img src="" alt="about-us-banner-image"/>

      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
