/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {

    return ( 

        <div className="row footer">

            <div className="col">

                <div className="flex">

                    <img src={ require("../images/image-retro-pcs.jpg") } alt="Lorem" className="footer--img img-fluid" />

                    <div className="footer--info">

                        <h1 className="footer--header">01</h1>

                        <p className="footer--link"><a href="#">Reviving Retro PCs</a></p>

                        <p className="footer--p">What happens when old PCs are given modern upgrade?</p>

                    </div>

                </div>

            </div>

            <div className="col">

                <div className="flex">

                    <img src={ require("../images/image-top-laptops.jpg") } alt="Lorem" className="footer--img img-fluid" />

                    <div className="footer--info">

                        <h1 className="footer--header">02</h1>

                        <p className="footer--link"><a href="#">Top 10 Laptops of 2022</a></p>

                        <p className="footer--p">Our best picks for various needs and budgets.</p>

                    </div>

                </div>

            </div>

            <div className="col">

                <div className="flex">

                    <img src={ require("../images/image-gaming-growth.jpg") } alt="Lorem" className="footer--img img-fluid" />

                    <div className="footer--info">

                        <h1 className="footer--header">03</h1>

                        <p className="footer--link"><a href="#">The Growth of Gaming</a></p>

                        <p className="footer--p">How the pandemic has sparked fresh opportunities.</p>

                    </div>

                </div>

            </div>

        </div>

     );

}
 
export default Footer;