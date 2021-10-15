import "./portfolio.scss"

export default function portfolio() {
    return (
        <div className="portfolio" id="portfolio">
           <h1>Projects</h1>
           <ul>
               <li className="active">Featured</li>
               <li>More</li> 
               <li>Coming</li>
               <li>Soon!</li>
           </ul>
           <div className="container">
               <div className="item">
                    <a href="https://github.com/rachel-brain/super-duper-bassoon">
                    <img src="./assets/slime.gif" alt="" />
                    </a>
                    <h3>Wizard Wipeout!</h3>
               </div>
               <div className="item">
                    <a href="https://github.com/DavidSzamek/nosql-workout-tracker">
                    <img src="./assets/fitness.png" alt="" />
                    </a>
                    <h3>NoSQL Workout Tracker</h3>
                </div>
               <div className="item">
                    <a href="https://github.com/DavidSzamek/portfolio">
                    <img src="./assets/fitness.png" alt="" /> 
                    </a>
                    <h3>Previous Portfolio</h3>
               </div>
                    <div className="item">
                    <a href="https://github.com/DavidSzamek/ecommerce-orm">
                    <img src="./assets/fitness.png" alt=""/>
                    </a>   
                    <h3>eCommerce ORM</h3>
               </div>
               
               
           </div>

        </div>
        
    )
}
