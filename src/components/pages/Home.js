import MiddleBanner from "../Layout/MiddleBanner";
import Services from "../appServices/Services";
import TopSection from "../Layout/TopSection";
import Offers from "../offers/Offers";
import ProductsSection from "../products/ProductsSection";
import BottomBanner from "../Layout/BottomBanner";
import LatestPosts from "../blog/LatestPosts";
import Contacts from "../contacts/Contacts";
import OtherPosts from "../blog/OtherPosts";
import Footer from "../footer/Footer";

const Home = () =>{
return(
    <div>
        <TopSection />
        <MiddleBanner />    
        <Services />
        <Offers/>
        <ProductsSection />
        <BottomBanner />
        <LatestPosts />
        <Contacts />
        <OtherPosts />
        <Footer />
    </div>
)

};


export default Home;