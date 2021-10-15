import "./landing.scss";

export default function landing() {

    return (
        <div className="landing" id="landing">
          <div className="left">
              <div className="imgContainer">
                  <img src="assets/david.png" alt="" />
                  </div>  
          </div>
          <div className="right">
              <div className="wrapper">
                  <h2>Hey There, I'm</h2>
                  <h1>David Szamek</h1>
                  <h3>A <span>Full Stack Developer</span></h3>
              </div>
              <a href="#portfolio">Click here to begin..</a>
          </div>
        </div>
    )
}
