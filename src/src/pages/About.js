import React from "react"
import { Link } from "gatsby"
import styles from "../components/aboutus.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />

      <div className={styles.about}>
        <h2>
        PRACTICE PROFILE
        </h2>
        <p>
        Tandem & Stark Ltd is an independent Kenyan firm that provides quality Cost Engineering, Cost
Consultancy Services and project/ construction management in the construction industry. Our wealth
of our experience covers a wide variety of projects ranging from building and engineering support,
fitting out & maintenance works.
        </p>

      </div>

    <Link to="/">Go back to the homepage</Link>
    

  </Layout>
)

export default AboutUs