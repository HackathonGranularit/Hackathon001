import React from "react"
import { Link } from "gatsby"
import Img1 from "../images/04.jpg"
import Img3 from "../images/almond.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="slide-in-fwd-center">
      <div class="card-deck">
        <div class="card">
          <img src={Img1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Strathmore</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Strathmore</small>
          </div>
        </div>
        <div class="card">
          <img src={Img3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Riverine</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Riverine</small>
          </div>
        </div>
        <div class="card">
          <img src={Img1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Almond Grove</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Almond Grove</small>
          </div>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
