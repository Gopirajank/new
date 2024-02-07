import "./intro.scss";

import { FaGithub,  } from 'react-icons/fa'
import { IoMdOpen } from 'react-icons/io'

export default function Intro() {


  return (
    <>
    <div className="intro" id="intro">
      <div className="left">
          <h2>Hi There, I'm ~</h2>
          <h1>Gobirajan</h1>
          <h3>
            I am a web Developer
          </h3>
          <p>A self-taught developer with an interest in Computer Science.</p>
            <button onClick={() => window.open( 'https://drive.google.com/file/d/11CDEr5G7mNmEvp28kE5It6YYkI-QmErg/view?usp=sharing' )} style={{ backgroundColor: "#0e0e0e", border: "none", color: "rgb(255, 145, 213)", margin: "3rem", padding: "8px", justifyContent: "center", alignItems: "center", alignContent: "center", display: "flex", gap: "5px", borderRadius: "7px", cursor: "pointer", fontWeight: 700 }}>View My CV. <IoMdOpen size={22} color="rgb(65, 201, 255)"/></button>
          
            <div className="container">
            <button className="icon" onClick={() => window.open( 'https://github.com/Gopirajank')}>
                <FaGithub size={25} color="rgb(65, 201, 255)" />
                <span style={{fontSize: "15px", color: "white", fontWeight: "bold"}}>Github</span>
            </button>
           
            </div>

                </div>
      <div className="right">
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    </>
  );
}
