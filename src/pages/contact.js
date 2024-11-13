import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import Header from "../components/header"

const Contactpage=()=>{
    return(
        <>
        {<Header/>}
        <div style={{paddingTop:"69px"}}>
        {<ContactUs/>}
        </div>
        {<Footer/>}
        </>
    )
}
export default Contactpage;