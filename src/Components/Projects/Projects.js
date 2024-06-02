import './Projects.css';
function Projects(){
    return(
        <div class="projects">
            <div class="header">
                <h1>Projects</h1>
            </div>
            <div class="proj-cards">
                <div class="cardid">
                    <h2>  Employee Management</h2>
                    <img class="image" src="https://dev-portfolio-template.netlify.app/static/media/one.a3146128.svg"></img>
                </div>
                <div class="cardid">
                    <h2>Railway Tracking</h2>
                    <img class="image" src="https://dev-portfolio-template.netlify.app/static/media/two.721a0672.svg"></img>
                </div>
                <div class="cardid">
                    <h2>Weather App</h2>
                    <img class="image" src="https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg"></img>
                </div>
            </div>
        </div>
    )
}
export default Projects;