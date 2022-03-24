import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'


export default function AboutMe(props) {
    let fadeInScreenHandler =(screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreeen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div clasName="about-me-container  screen-container" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title ={'About Me'} subHeading={'why choose me?'}/>
        </div>
    </div>
  )
}
