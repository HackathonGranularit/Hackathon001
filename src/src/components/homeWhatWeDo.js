import React from "react"
import styles from './homeWhatWeDo.module.css'
import Layout from "./layout"
import {Link} from "gatsby"

export default () => (

    <div className={styles.what_we_do}>
        <Layout>
          
            <div className="row">
                <div className="col-md-6 col-sm-12 col-12 relative">
                    <div className={styles.whatwedo_img}>

                    </div>
                
                  </div>
                  <div className="col-md-6 col-sm-12 col-12">
                    <h2>What we do</h2>
                    <p>
                    The project Management Service line offers tailored services to Clients including but not limited to, Pre-Investment, Framework Reports and Feasibility Studies, Development Management, Client Representation, budget planning and control, scheduled management, value engineering, and contracts administration.
                    </p>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-2">

                        </div>
                        <div className="col-md-10 col-sm-10 col-10">
                           <p>
                           <strong>
                           Quantity Surveying
                            </strong>
                           </p>
                          
                            <p>
                            The project Management Service line offers tailored services to Clients including but not limited to, Pre-Investment, Framework Reports and...
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-2">

                        </div>
                        <div className="col-md-10 col-sm-10 col-10">
                           <p>
                           <strong>
                           Project Management

                            </strong>
                           </p>
                          
                            <p>
                            The project Management Service line offers tailored services to Clients including but not limited to, Pre-Investment, Framework Reports and...

                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </Layout>
      
    </div>
)

