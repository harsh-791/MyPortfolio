import './Experience.css';

function Experience(){
    return (
        <div className="experience">
            <div class="edc-image">
                <img class="image" src="https://dev-portfolio-template.netlify.app/static/media/expOrange.9383b2df.svg"></img>

            </div>
            <div class="edc-info">
                <div class="info">
                    <h1>Experience</h1>
                    <div className='education-details'>
                        <div>
                            <div class="card">
                                <div class="card-imort">
                                    <div class="card-img">
                                        <img src="https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg"></img>
                                    </div>
                                </div>
                                <div class="card-inf">
                                    <h6>2018-2019</h6>
                                    <h4>Frontend Developer</h4>
                                    <h5>Google</h5>
                                </div>
                                    
                            </div>
                            <div class="card">
                                <div class="card-imort">
                                        <div class="card-img">
                                        <img src="https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg"></img>
                                    </div>
                                </div>
                                <div class="card-inf">
                                    <h6>2019-2021</h6>
                                    <h4>Quant Developer</h4>
                                    <h5>Jane Street Capital</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-imort">
                                        <div class="card-img">
                                        <img src="https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg"></img>
                                    </div>
                                </div>
                                <div class="card-inf">
                                    <h6>2022-Present</h6>
                                    <h4>Software Developer</h4>
                                    <h5>Microsoft</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;