import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ marginTop: 80 }} className="row slide-in-fwd-center">
      <div className="col col-md-6">
        <h1 style={{ color: "#30416C" }}>Send Us A Message</h1>
        <p>
          Fill in the form on the right and hit send.
          <br />
          Will be back with you shortly. Here's our address.
        </p>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title"> Greenhouse 3rd floor</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              P.O. Box 53328-00200, Nairobi, Kenya
            </h6>
            <span className="card-text">info@tandemandstark.net</span>
            <br />
            <span className="card-text">+254 (0) 20 2055945</span>
          </div>
        </div>
      </div>
      <div className="col col-md-6">
        <form>
          <div className="row form-group">
            <div className="col">
              <input
                className="form-control"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Your Email"
              type="email"
            />
          </div>

          <div className="form-group">
            <input className="form-control" placeholder="Subject" type="text" />
          </div>
          <div className="form-group">
            <textarea
              class="form-control"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
