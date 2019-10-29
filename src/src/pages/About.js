import React from "react"
import { Link } from "gatsby"
import styles from "../components/aboutus.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />

      <div className={styles.AboutUswrapper}>
        <div className="row">
          <div className={styles.content}>
          <div className="col-12 col-md-6 col-sm-12">
            <div className={styles.practice}>
              <h2> 
                PRACTICE PROFILE
              </h2>
              <p>
                Tandem & Stark Ltd is an independent Kenyan firm that provides quality Cost Engineering, Cost
                Consultancy Services and project/ construction management in the construction industry. Our wealth
                of our experience covers a wide variety of projects ranging from building and engineering support,
                 fitting out & maintenance works. <br/> 
              Since its establishment, the firm has been able to provide the above services to clients across East and
Central Africa in the Commercial and Industrial Sector, Financial Institutions, Domestic Housing as well
as in the Hospitality and Leisure industry.

              </p>


            </div>

          </div>


          <div className="col-12 col-md-6 col-sm-12">
            <div className={styles.imageaboutus}>
              
              </div>
              
            </div>

          </div>
        </div>
      </div>
   

    

  </Layout>
)

export default AboutUs