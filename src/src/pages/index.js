import React from "react"
import { Link } from "gatsby"
import HomeSections from "../components/homeSections"
import Navigation from "../components/navigationModule"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navigation />
    <HomeSections />
  </>
)

export default IndexPage
