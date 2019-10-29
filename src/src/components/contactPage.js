import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="row slide-in-fwd-center">
      <div className="col col-md-6">
        <h1>Send Us A Message</h1>
        <p>
          Fill in the form on the right and hit send.
          <br />
          Will be back with you shortly.
        </p>
      </div>
      <div className="col col-md-6">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Your email"
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
