import './Blog.css';
function Blog(){
    return(
        <div class="blog">
            <div class="blog-info">
                <h1>Blog</h1>
            </div>
            <div class="blog-container">
                <div class="blog-card">
                    <div className='image-container'>
                        <img class="blog-image" src='https://1.bp.blogspot.com/-GR19yCNbKCE/XuRcKEfKvhI/AAAAAAAAAwY/srFWw5pOpzMibeJb__SmgZpx9dIpNNWqgCK4BGAsYHg/w640-h426/anonymous1.jpg'></img>
                    </div>
                    <div className='blog-text'>
                        <p>Aug 14,2020</p>
                        <h3>BEING ANONYMOUS: A BEGINNER'S GUIDE</h3>
                        <h6>Here are some basic ways to lay off the Radar.</h6>
                    </div>
                </div>
                <div class="blog-card">
                    <div className='image-container'>
                        <img class="blog-image" src='https://1.bp.blogspot.com/-OW7jX57tea4/XvnGxuEOslI/AAAAAAAABW0/R8lVT1AXDSwnvE0EGA9Ra49-LDm1ACwDgCK4BGAsYHg/s1216/wttr1.png'></img>
                    </div>
                    <div className='blog-text'>
                        <p>Aug 11, 2020</p>
                        <h3>CHECK WEATHER FROM TERMINAL USING WTTR.IN</h3>
                        <h6>wttr.in is a console-oriented weather forecast service.</h6>   
                    </div>
                </div>
                <div class="blog-card">
                    <div className='image-container'>
                        <img class="blog-image" src='https://1.bp.blogspot.com/-6vZQoWcIZeo/Xvw5ZD5Y53I/AAAAAAAABgI/GH2b5OuMaXAKuigK4diBbeYDW6dD3qVvgCK4BGAsYHg/w400-h225/selenium.jpg'></img>
                    </div>
                    <div className='blog-text'>
                        <p>Aug 7, 2020</p>
                        <h3>SCRAPPING BILLBOARD AND IMDB USING PYTHON SELENIUM</h3>
                        <h6>Here we will use selenium to navigate between web pages.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;