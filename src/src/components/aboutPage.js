import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <br />
    <div className="row slide-in-fwd-center" style={{ marginTop: 30 }}>
      <div className="col col-md-6">
        <h1 style={{ textAlign: "left", color: "#30416C" }}>Who We Are</h1>
        <p style={{ textAlign: "left" }}>
          Tandem & Stark Ltd is an independent Kenyan firm that provides quality
          Cost Engineering, Cost Consultancy Services and project/ construction
          management in the construction industry. Our wealth of our experience
          covers a wide variety of projects ranging from building and
          engineering support to quality work and construction.
        </p>
      </div>
      <div className="col col-md-6">
        <h1 style={{ color: "#30416C" }}>What We Do</h1>
        <div className="row">
          <div className="col col-md-6">
            <ul>
              <li>Quality Construction</li>
              <li>Affordable Service</li>
              <li>Endorsed work</li>
              <li>Approved Personnel</li>
            </ul>
          </div>
          <div className="col col-md-6">
            <ul>
              <li>Quality Construction</li>
              <li>Affordable Service</li>
              <li>Endorsed Work</li>
              <li>Approved Personnel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
