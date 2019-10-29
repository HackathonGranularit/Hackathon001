import React from "react"
import { Link } from "gatsby"
import styles from "../components/services.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />

      <div className={styles.about}>
        <h2> 
        Services
        </h2>
        

      </div>
      <div className="container padding">
        <div className="row">
          <div className="col-12 col-md-6 col-sm-12">
            <div classname=" ">
              <div className=" ">

              </div>
            </div>

          </div>
        </div>
      </div>

    <Link to="/">Go back to the homepage</Link>
    

  </Layout>
)

export default Services
