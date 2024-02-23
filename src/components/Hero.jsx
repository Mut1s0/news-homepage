import { desktopWeb, mobileWeb } from "../images";

function Hero() {

    return(

        <main className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] py-[40px]">

            <section className="col-span-2">

                <picture>

                    <source media="(min-width: 768px)" srcSet={desktopWeb} />
                    <img src={mobileWeb} alt="" className="w-full mb-5" />

                </picture>

                <div className="grid md:grid-cols-3">

                    <h1 className="text-veryDarkBlue font-extraBold text-[30px] sm:text-[25px] lg:text-[45px] lg:leading-[50px]">The Bright <br /> Future of <br className="hidden md:block"/> Web <br className="block md:hidden"/> 3.0?</h1>

                    <div className="col-span-2 flex flex-col items-start justify-start gap-[20px]">

                        <p className="text-grayishBlue font-bold">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                        <a href="#" className="bg-softRed hover:bg-veryDarkBlue text-offWhite font-bold uppercase py-4 text-center w-[190px] cursor-pointer tracking-[5px]">read more</a>

                    </div>

                </div>

            </section>

            <article className="bg-veryDarkBlue p-7 md:px-3 md:py-4 lg:p-6">

                <h1 className="text-softOrange text-[30px] lg:text-[40px] font-bold pb-5">New</h1>

                <div>

                    <span className="text-offWhite font-extraBold lg:text-[22px] block pb-2 lg:pb-4 hover:text-softOrange cursor-pointer">Hydrogen VS Electric Cars</span>

                    <p className="text-grayishBlue font-regular lg:text-[16px]">Will hydrogen-fueled cars ever catch up to EVs?</p>

                    <span className="w-full border border-grayishBlue block my-4 lg:my-8"></span>

                </div>

                <div>

                    <span className="text-offWhite font-extraBold lg:text-[22px] block pb-2 lg:pb-4 hover:text-softOrange cursor-pointer">The Downsides of AI Artistry</span>

                    <p className="text-grayishBlue font-regular lg:text-[16px]">What are the possible adverse effects of on-demand AI image generation?</p>

                    <span className="w-full border border-grayishBlue block my-4 lg:my-8"></span>

                </div>

                <div>

                    <span className="text-offWhite font-extraBold lg:text-[22px] block pb-2 lg:pb-4 hover:text-softOrange cursor-pointer">Is VC Funding Drying Up?</span>

                    <p className="text-grayishBlue font-regular lg:text-[16px]">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>

                </div>

            </article>

        </main>

    )
}

export default Hero;