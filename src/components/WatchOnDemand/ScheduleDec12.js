import React from 'react'; 
import { ScheduleDec12 } from '../../database/Schedule';


// Component Styling
import { PlaybackClass_Mobile, PlaybackClass_Web, card_Mobile, card_Web, card_hover, header, PlaybackDate, Speakers, ProfileImage, ProfileName, gradient, hrOpacity} from './PlaybackClass'; 


const ScheduleDec12Page = () => {
  return (
    <div>
      <br/>
      <hr className={hrOpacity}/>
      <br/>

      <h1 className={header}>Dec 12 2020</h1>

      <div className={`${PlaybackClass_Mobile} ${PlaybackClass_Web}`}>
        {ScheduleDec12.map((events) => (
          <a href={events.link} target='_blank'>
          <div className={`${card_Mobile} ${card_Web} ${card_hover}`}>
            <p className={gradient}>{events.title}</p>
            <p className={PlaybackDate}>{events.date} at {events.time}</p>
            <br/>
            <div className={Speakers}>
            <img src={events.speakers.profile} alt={events.speakers.name} className={ProfileImage}/>
            <p className={ProfileName}>{events.speakers.name}</p>
            </div>
          </div>
          </a>
          
        ))}        
      </div>
    </div>
  )
}

export default ScheduleDec12Page; 