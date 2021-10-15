import "./landing.scss"

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
                  <h2>Hi There, I'm</h2>
                  <h1>David Szamek</h1>
                  <h3>A Full Stack</h3>
              </div>
          </div>
        </div>
    )
}
