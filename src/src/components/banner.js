import React from "react"
import styles from './banner.module.css'
import Layout from "./layout"
import {Link} from "gatsby"


export default () => (

    <div className={styles.bannerWrapper}>
        <Layout>
          
            <div className="row">
                <div className="col-md-6 col-sm-12 col-12">
               
                     <h1>
                          QUANTITY SURVEYORS, PROJECT & CONSTRUCTION MANAGERS
                     </h1>
               
                     <p>
                     Tandem & Stark is a leading consultancy firm successfully delivering projects across Kenya and the wider East and Central Africa region. We are licensed and registered...  
                     </p>
                     <Link title="View More" aria-label="View More" className="button" to="">View More</Link>
                </div>
             
            </div>
        </Layout>
        <div className={styles.banner_img}>

        </div>
    </div>
)

