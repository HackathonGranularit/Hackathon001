import React from "react"
import { Link } from "gatsby"
import styles from "../components/contact.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <Layout>
    <SEO title="Contact" />

      <div className={styles.about}>
        <h2> 
          Contacts
        </h2>
        

      </div>
      <div className={styles.AboutUswrapper}>
        <div className="row">
          <div className="col-12 col-md-6 col-sm-12">
            <div classname=" "></div>

          </div>
        </div>
      </div>

    <Link to="/">Go back to the homepage</Link>
    

  </Layout>
)

export default contact