import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <br />
    <div className="row slide-in-fwd-center">
      <div className="col col-md-6">
        <h1 style={{ textAlign: "center" }}>Practice Profile</h1>
        <p style={{ textAlign: "center" }}>
          Tandem & Stark Ltd is an independent Kenyan firm that provides quality
          Cost Engineering, Cost Consultancy Services and project/ construction
          management in the construction industry. Our wealth of our experience
          covers a wide variety of projects ranging from building and
          engineering support, fitting out & maintenance works. Since its
          establishment, the firm has been able to provide the above services to
          clients across East and Central Africa in the Commercial and
          Industrial Sector, Financial Institutions, Domestic Housing as well as
          in the Hospitality and Leisure industry.
        </p>
      </div>
      <div className="col col-md-6">
        <h1>What We Offer</h1>
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

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
