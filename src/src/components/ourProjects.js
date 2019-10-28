import React from "react"
import styles from './ourProjects.module.css'
import Layout from "./layout"
import {Link} from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll'

export default () => (

    <div className={styles.our_projects_wrap}>
        <div className={styles.overlay}></div>
        <Layout>
          
            <div className="row">
                <div className="col-12">
                    <h1>OUR PROJECTS</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className={styles.project_item}>
                        
                    </div>
                </div>
            </div>
        </Layout>
     
    </div>
)

