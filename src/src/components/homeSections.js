import React from "react"
import SEO from "../components/seo"
import Banner from "../components/banner"
import WhatWeDo from "../components/whatWeDo"
import OurProjects from "../components/ourProjects"
export default class IndexPage extends React.Component {

    constructor(data) {
        super(data);
        this.state = {
            currentSection: 1
        }
    }
    handleScroll = e => {
        let  currentSectionIdholder = this.state.currentSection;
     console.log(currentSectionIdholder);
        this.setState({currentSection: ++currentSectionIdholder });
        
      
    }

      render() {
        const{currentSection}  = this.state;
          return (
              <div id="home_wrapper" onWheel={this.handleScroll.bind(this)}>
                  <SEO title="Home"/>
  
                  <section className={currentSection == 1 ? "banner show":"banner"}><Banner/></section>
                  <section className={currentSection == 2 ? "what_we_do show":"what_we_do"}><WhatWeDo/></section>
                  <section className={currentSection == 3 ? "our_projects show":"our_projects"}><OurProjects/></section>
                  <section className={currentSection == 4 ? "experience show":"experience"}><h1>test4</h1></section>
                  <section className={currentSection == 5 ? "footer show":"footer"}><h1>test5</h1></section>
                 
              </div>
             
          )
      }
  }
  