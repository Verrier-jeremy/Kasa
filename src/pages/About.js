import React from 'react';
import Collaps from '../Components/Collaps';
import aboutData from'../Data/aboutKasa';

  const About = () => {
    // Switch to display content in the dropdown by title
    const content = (title) => {
      switch (title) {
        case "fiability":
          return aboutData.fiability;
        case "respect":
          return aboutData.respect;
        case "service":
          return aboutData.service;
        case "sécurity":
          return aboutData.security;
        default:
          console.log("default");
          break;
      }
    };

    return(
        <section className='about'>           
          <div className='Banner_about'></div>
          <article className='all_about'>
            <Collaps title="Fiabilité" content={content("fiability")}/>
            <Collaps title="Respect" content={content("respect")}/>
            <Collaps title="Service" content={content("service")}/>
            <Collaps title="Responsabilité" content={content("sécurity")}/>
          </article>
        </section>

    );
}

export default About;