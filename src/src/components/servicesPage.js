import React from "react"
import { Link } from "gatsby"
import Building1 from "../images/04.jpg"
import Building2 from "../images/almond.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="slide-in-fwd-center">
      <div className="row">
        <div className="col-md-6">
          <img src={Building1} style={{ height: 230, width: "90%" }} />
        </div>
        <div className="col col-md-6">
          <h1 style={{ color: "#30416C" }}>Quantity Survey</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <button className="btn btn-primary">View All Services</button>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6">
          <h1 style={{ color: "#30416C" }}>Project Management</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <button className="btn btn-primary">View All Services</button>
        </div>
        <div className="col-md-6">
          <img src={Building2} style={{ height: 230, width: "90%" }} />
        </div>
      </div>
    </div>
  </Layout>
)

export default ServicesPage
