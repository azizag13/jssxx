import React from "react";
import imagea from '../07.jpg';

function Imagee() {
    return (
      <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imagea} />
        <br />
        <img src="/77.jpg" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
    )
}
  
  export default Imagee;