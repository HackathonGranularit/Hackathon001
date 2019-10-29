import React from "react"

import styles from "../components/contact.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <Layout>
    <SEO title="Contact" />

      <div className={styles.contacts}>
        <h2> 
          Contacts
        </h2>
        

      </div>
      <div className={styles.AboutUswrapper}>
             
                <div className="row">
                    <div className="col-md-8 ">
                    <form>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="Name" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter Name"/>
                        <small id="nameHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <input type="Message" className="form-control" id="exampleInputMessage1" placeholder="Message" />
                      </div>
                      
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                        
                    </div>  
                    <div className="col-md-4 ">
                      <p>
                      +254 (0) 20 2318992/2055945
                        +254 (0) 20 2055945
                        P.O. Box 53328-00200, Nairobi, Kenya
                        info@tandemandstark.net,
                        projects@tandemandstark.net
                        www.tandemandstark.com
                      </p>
                      </div> 

               
                </div>
        </div>







    

  </Layout>
)

export default contact