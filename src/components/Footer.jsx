import { otherNews } from "../constants";

function Footer() {

    return(

        <footer className="grid md:grid-cols-3">
    
            {otherNews.map((news) => (

                <div key={news.id} className="flex items-center justify-start gap-5">

                    <img src={news.icon} alt="icons" className="w-[120px] mb-10 md:mb-0" />

                    <section>

                        <span className="text-grayishBlue font-bold text-[35px] block pb-2">{news.number}</span>

                        <h1 className="text-veryDarkBlue font-extraBold hover:text-softRed cursor-pointer text-[16px] pb-3">{news.title}</h1>

                        <p className="text-grayishBlue font-regular text-[16px]">{news.content}</p>

                    </section>

                </div>

            ))}
        
        </footer>

    )
}

export default Footer;