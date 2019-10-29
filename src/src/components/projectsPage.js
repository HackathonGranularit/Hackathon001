import React from "react"
import { Link } from "gatsby"
import DemoCarousel from "./carouselReact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <DemoCarousel />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
