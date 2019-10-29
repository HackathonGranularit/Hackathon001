import React from "react"
import { Link } from "gatsby"
import Img1 from "../images/04.jpg"
import Img3 from "../images/almond.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="slide-in-fwd-center" style={{ marginTop: 60 }}>
      <div class="card-deck">
        <div class="card">
          <img src={Img1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 style={{ color: "#30416C" }} class="card-title">
              Strathmore
            </h3>
            <p style={{ color: "#333" }} class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Completed recently</small>
          </div>
        </div>
        <div class="card">
          <img src={Img3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 style={{ color: "#30416C" }} class="card-title">
              Riverine
            </h3>
            <p style={{ color: "#333" }} class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Completed 1 year ago</small>
          </div>
        </div>
        <div class="card">
          <img src={Img1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 style={{ color: "#30416C" }} class="card-title">
              Almond Grove
            </h3>
            <p style={{ color: "#333" }} class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Completed 7 months ago</small>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
