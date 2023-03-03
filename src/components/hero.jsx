/* eslint-disable jsx-a11y/anchor-is-valid */
const Hero = () => {

    return ( 

        <div className="row hero--body">

            <div className="col-lg">

                <picture>

                    <source srcset="" />

                    <img src={ require("../images/image-web-3-desktop.jpg") } alt="Logo" className="img-fluid"/>

                </picture>

                <div className="hero d-lg-flex pt-4">

                    <div className="hero--title">

                        <h1>The Bright Future of Web 3.0?</h1>

                    </div>

                    <div className="hero--info text-center">

                        <h2 className="mb-4">We dive into the next evolution of the web that claims to put the power of the platform back into the hamds of the people. but is it really fulfilling its promise?</h2>

                        <p className="hero--link"><a href="#">Read More</a></p>

                    </div>

                </div>

            </div>

            <div className="hero--side col-lg text-start">

                <h1 className="hero--side--header">New</h1>

                <p className="hero--side--anchor"><a href="#">Hydrogen VS Electric Cars</a></p>

                <p className="hero--side--p">Will Hydrogen-Fueled cars ever catch up to EVs?</p>

                <hr />

                <p className="hero--side--anchor"><a href="#">The Downsides of AI Artistry</a></p>

                <p className="hero--side--p">What are the possible adverse effects of on-demand AI image generation?</p>

                <hr />

                <p className="hero--side--anchor"><a href="#">Is VC Funding Drying Up?</a></p>

                <p className="hero--side--p">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>

            </div>

        </div>

     );

}
 
export default Hero;