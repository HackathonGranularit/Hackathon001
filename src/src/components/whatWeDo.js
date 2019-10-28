import React from "react"
import styles from './homeWhatWeDo.module.css'
import Layout from "./layout"
import {Link} from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll'

export default () => (

    <div className={styles.what_we_do}>
        <Layout>
          
            <div className="row">
                <div className="col-md-6 col-sm-12 col-12">
                    <div className={styles.what_we_do_image}>
                        <img src="https://dummyimage.com/541x620/ccc/383947&text=place+holder+img"/>
                    </div>
              
                </div>
                <div className="col-md-6 col-sm-12 col-12 ">
                    <div className={styles.what_we_do_content}>
               <h1>What we do</h1>
               <p>The project Management Service line offers tailored services to Clients including but not limited to, Pre-Investment, Framework Reports and Feasibility Studies, Development</p>
                <div className="row">
                        <div className="col-md-2 col-sm-12 col-12">icon</div>
                        <div className="col-md-10 col-sm-12 col-12">
                            <h4>Quantity Surveying</h4>
                            <p>The project Management Service line offers tailored services to Clients including but not limited to</p>
                        </div>
                </div>
                <div className="row">
                        <div className="col-md-2 col-sm-12 col-12">icon</div>
                        <div className="col-md-10 col-sm-12 col-12">
                            <h4>Quantity Surveying</h4>
                            <p>The project Management Service line offers tailored services to Clients including but not limited to</p>
                        </div>
                </div>
                </div>
                </div>
             
            </div>
        </Layout>
     
    </div>
)

