import Home from "../components/home";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import Header from "../components/header"

const Homepage=()=>{
    return(
        <>
        {<Header/>}
        {<Home/>}
        {<ContactUs/>}
        {<Footer/>}
        </>
    )
}
export default Homepage;