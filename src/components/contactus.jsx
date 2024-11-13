import '../css/contactus.css'

const ContactUs =()=>{
    return(
        <>
        <div class="contactus_body">
            <div class="contact-container">
                <div class="contact-info">
                    <h2>Contact Us</h2>
                    <p>Get in touch with us - we're here to help</p>
                    <a href="tel:+917788945911">📞 +91 7788995511 | +91 9465389655</a>
                    <a href="https://wa.me/7788995511">📱 Connect with our team on WhatsApp</a>
                    <a href="mailto:info@wildexcursions.in">📧 info@wildexcursions.in</a>
                    <address>
                        📍 <strong>Office Address</strong><br/>
                        Bhiwapur Road, Umred,<br/>
                        Nagpur, Maharashtra - 441203
                    </address>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-tripadvisor"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <form action="#">
                        <input type="text" name="name" placeholder="Your Name*" required/>
                        <input type="text" name="phone" placeholder="Your Contact Number*" required/>
                        <input type="email" name="email" placeholder="Your Email (optional)"/>
                        <textarea name="message" rows="5" placeholder="Your Message*" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>            
            </div>
        </div>
        </>
    )
}
export default ContactUs