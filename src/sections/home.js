
import BrandMarquee from "./brandmarquee";
import CareerPage from "./careersage";
import Marquee from "./marque";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page5";
import Page8 from "./page6";
import Page7 from "./page7";

const Home = () => {
    return (
        <>
            <div className="sm:w-full flex flex-col justify-center" id="home">
                <Page1 />
                <Marquee/>
                <Page2 />
                <BrandMarquee/>
                <Page3 />
                <Page4 />
                {/* <Page5 /> */}
                {/* <CareerPage/> */}
                <Page6 />
                <Page8 />
                <Page7/>

            </div>
        </>
    )
}
export default Home;