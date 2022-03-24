import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function Projects(props) {
    let fadeInScreenHandler =(screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreeen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
      loop: true,
      margin:0,
      nav: true,
      animateIn:"bounceInRight",
      animateOut:"bouceOutRight",
      dots:true,
      autoplay:true,
      smartSpeed:1000,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:1,
        },
        1000:{
          items:3,
        },
      },
    };
  return (
    <div>
        <ScreenHeading
        title={"Projects"}
        subHeading={'Projects Please see some of the projects I have worked on'}/>

        <section clasName="project-section" id={props.id || ''}>
          <div className="container">
            <div className="row">
            <OwlCarousel className ="ownl-carousel" id="projects-corousel" {...options}>
              <div className="col-lg-12">
                <div className="project-title">
                  <div className="project-subtilte"></div>
                  <h2>Club Hub Project</h2>
                  <p>
                    Club Hub Kids is a ctralized information center for kids of all ages,
                    Staring with music classes  to sports.Any class you can imagine we have it.
                    We are also open to suggestions for new classes.
                  </p>
                   <img src="image/ClubHub.png" alt="club hub site">   
                   </img>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-title">
                  <div className="project-subtilte"></div>
                  <h2>Club Hub Project</h2>
                  <p>
                  ​Club Hub Kids was developed by parents with first-hand knowledge and experience
                   in helping children reach their full potential. For every phase of parenthood, 
                   from birth through high school we offer compelling resources on a wide variety
                   of family-friendly events, we are very proud of our resource library.​
                  </p>
                   <img src="image/ClubHub.png" alt="club hub site">   
                   </img>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-title">
                  <div className="project-subtilte"></div>
                  <h2>Budget Tracker</h2>
                  <p>
                  Creating a web application thet provides a fast and easy way to track expenses.
                  Being able to access that information anytime is even more important.
                   Having offline functionality is paramount to the success of an
                    application that handles users’ 
                   financial information.Budget Tracker will do just that.
                  </p>
                   <img src="image/BudgetTracker.png" alt="Budgettrackerimage">   
                   </img>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-title">
                  <div className="project-subtilte"></div>
                  <h2>Club Hub Project</h2>
                  <p>
                    Club Hub Kids is a ctralized information center for kids of all ages,
                    Staring with music classes  to sports.Any class you can imagine we have it.
                    We are also open to suggestions for new classes.
                  </p>
                   <img src="image/ClubHub.png" alt="club hub site">   
                   </img>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-title">
                  <div className="project-subtilte"></div>
                  <h2>Stockable</h2>
                  <p>
                    Club Hub Kids is a ctralized information center for kids of all ages,
                    Staring with music classes  to sports.Any class you can imagine we have it.
                    We are also open to suggestions for new classes.
                  </p>
                   <img src="image/Stockable.png" alt="club hub site">   
                   </img>
                </div>
              </div>
            </OwlCarousel>
            </div>
          </div>
        </section>
    </div>
  )
}
