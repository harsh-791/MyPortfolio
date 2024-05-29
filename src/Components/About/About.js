import './About.css';
function About(){
    return(
        <div className="about">
            <div class="about-info">
                <div class="info">
                    <h2>Who I am</h2>
                    <p>My name's Harsh. I'm a First year undergrad at Scaler School of Technology.
                        <br></br>
                        <br></br>
                        During the day I work as a lead developer at a local agency 
                        and in the evening I  work on freelance projects and utilize 
                        the time to built my own products. I spent my leisure hours 
                        writing articles and poetry. Right now I'm also trying a hand
                        at machine learning and AI. I love to learn and explore new arenas.
                    </p>
                </div>
            </div>
            <div class="about-img">
                <img class="image" src="https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg" alt=""></img>
            </div>
        </div>
    )
}
export default About;