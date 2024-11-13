import '../css/footer.css'
const Footer = ()=>{
    return(
        <>
        <footer>
            {/* <div class="footer-logo">
                <img src="" alt="Logo"/>
                <h2>Safari Escape</h2>
            </div> */}
            <div class="footer-content">
                <div>
                    <h3>CONNECT US</h3>
                    <a href="">📞 +91 7788552266</a>
                    <a href=" ">📧 info@safariescape.in</a>
                </div>
                <div>
                    <h3>RESOURCES</h3>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Services</a>
                </div>
                <div>
                    <h3>LEGAL</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
        <div class="footer-bottom">
            <p>© 2024 Wild Excursions™. All Rights Reserved.</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-tripadvisor"></i></a>
            </div>
        </div>
        </>
    );
};
export default Footer;