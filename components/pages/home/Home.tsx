import BannerTop from "./banners/BannerTop";
import BannerBottom from "./banners/BannerBottom";
import Card from "./cards/Card";
import Accordion from "./accordions/Accordion";

const Home = () => {
    return ( 
        <div>
            <BannerTop />
            <Card />
            <Accordion />
            <BannerBottom />
        </div>
     );
}
 
export default Home;
