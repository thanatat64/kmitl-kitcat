import BannerTop from "./banners/BannerTop";
import Card from "./cards/Card";
import Footer from "./footer/Footer"
import Accordion from "./accordions/Accordion";

const Home = () => {
    return ( 
        <div>
            <BannerTop />
            <Card />
            <Accordion />
            <Footer />
        </div>
     );
}
 
export default Home;