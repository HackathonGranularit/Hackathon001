import React from "react"
import {Link} from "gatsby"
import styles from './navigation.module.css'

export default() => (

    <div className={styles.navigation_wrapper}>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                
                <Link title="Home" aria-label="Home" to="/"><span className={styles.logo}></span></Link>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <ul>
                    <li>
                        <Link title="Home" aria-label="Home" to="/">Home</Link>
                    </li>
                    <li>
                        <Link title="About" aria-label="About" to="/about">About</Link>
                    </li>
                    <li>
                        <Link title="Services" aria-label="Services" to="/services">Services</Link>
                    </li>
                    <li>
                        <Link title="Projects" aria-label="Projects" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link title="Contact" aria-label="Contact" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </div>

    </div>
)