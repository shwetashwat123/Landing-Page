
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page5";
import Page8 from "./page6";

const Home = () => {
    return (
        <>
            <div className="sm:w-full w-1/4 flex flex-col justify-center" id="home">
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                {/* <Page5 /> */}
                <Page6 />
                <Page8 />

            </div>
        </>
    )
}
export default Home;