import { useEffect , useState } from 'react'
// import {  } from 'react'
import '../css/tadobapark.css'

const KanhaPark =()=>{

    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panelId) => {
      setActivePanel(activePanel === panelId ? null : panelId);
    };

    useEffect(()=>{
        document.querySelector('#Itenary_').style.display = 'none';
        document.querySelector('#include_').style.display = 'none';
        document.querySelector('#pricing_').style.display = 'none';
        // document.querySelector('#highlight').style.borderBottom = '2px solid #ffcc00';
    },[])

   const showHighlits =()=>{
    const hideelement= document.querySelectorAll('#Itenary_ , #include_ , #pricing_');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#Highlits_');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addborder= document.querySelector('#highlight');
    addborder.classList.add('active-button');
    const removeborder = document.querySelectorAll('#pricing, #Itenary, #include');
    removeborder.forEach((element) => {
        element.classList.remove('active-button');
    });
   }


   const showItenary =()=>{
    const hideelement= document.querySelectorAll('#include_ , #pricing_ , #Highlits_');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#Itenary_');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addborder= document.querySelector('#Itenary');
    addborder.classList.add('active-button');
    const removeborder = document.querySelectorAll('#pricing, #include, #highlight');
    removeborder.forEach((element) => {
        element.classList.remove('active-button');
    });
   }


   const showinclude =()=>{
    const hideelement= document.querySelectorAll('#Itenary_ , #pricing_ , #Highlits_');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#include_');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addborder = document.querySelector('#include');
    addborder.classList.add('active-button');
    const removeborder = document.querySelectorAll('#pricing, #Itenary, #highlight');
    removeborder.forEach((element) => {
        element.classList.remove('active-button');
    });
   }


   const showpricing =()=>{
    const hideelement= document.querySelectorAll('#Itenary_ , #include_ , #Highlits_');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#pricing_');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addborder= document.querySelector('#pricing');
    addborder.classList.add('active-button');
    const removeborder = document.querySelectorAll('#include, #Itenary, #highlight');
    removeborder.forEach((element) => {
        element.classList.remove('active-button');
    });
   }



   
    return(
        <>
        <div className="park-container">
            <div class="container_">
                <div class="image-container">
                    <img src="../card-2.webp" alt="Tigers in Tadoba National Park"/>
                </div>
                <div class="text-container">
                    <h1> Kanha National Park </h1>
                    <p>
                        Kanha National Park in Madhya Pradesh, India, is one of the country's largest 
                        and most scenic wildlife reserves. Known for its Bengal tigers, the park also 
                        shelters leopards, sloth bears, wild dogs, and the rare barasingha (swamp deer). 
                        The park's landscapes, featuring dense sal and bamboo forests, grassy meadows, 
                        and picturesque streams, provide a stunning backdrop for wildlife viewing. 
                        Guided safaris led by experienced naturalists offer thrilling exploration of the 
                        park’s rich biodiversity. Accommodation options range from luxurious lodges to 
                        eco-friendly campsites, ensuring a comfortable stay amidst nature. Kanha National 
                        Park promises an unforgettable adventure, offering excellent opportunities for 
                        photography, bird watching, and eco-tourism, making it an ideal destination for 
                        nature enthusiasts.l tigers, the park also shelters leopards, sloth bears, Indian 
                        bison (gaur), and diverse bird species amidst its varied landscapes of dense forests 
                        and expansive grasslands. 
                    </p>
                    <div class="info">
                        <span><i class='fas fa-map-marker-alt'></i> Pench National Park </span>
                        <span><i class="fas fa-calendar-alt"></i> 4th to 6th Oct 2024</span>
                    </div>
                </div>
            </div>
            <div class="details-container">
                <ul>
                    <li id="highlight" onClick={showHighlits}>Highlits</li>
                    <li id='Itenary' onClick={showItenary}>Itenary</li>
                    <li id='include' onClick={showinclude}>Includes and Excludes</li>
                    <li id='pricing' onClick={showpricing}>Pricing</li>
                </ul>
            </div>
            <div id="Highlits_">
                <div class="about-details">
                    <div class="highlight-img">
                        <img src="../deer2.jpg" alt="" />
                    </div>
                    <div class="highlight-details">
                        <h1>Kanha National Park</h1>
                        <ol>
                            <li>Experience a 2-night, 3-day guided tour.</li>
                            <li>Enjoy 4 thrilling jeep safaris in premium zones.</li>
                            <li>All meals and transportation included throughout the tour.</li>
                            <li> Relax in luxurious rooms with cot basis.</li>
                            <li>Comfortable travel with 4 passengers per jeep.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div id="Itenary_">
                <div className="dropdown-container">
                    {/* Day 1 */}
                    <div className="dropdown-btn" onClick={() => togglePanel("day1")}>
                        Day 1: Arrival and Your First Exciting Jeep Safari
                        <span className={`toggle-icon ${activePanel === "day1" ? "rotate" : ""}`}>▼</span>
                    </div>
                    {activePanel === "day1" && (
                        <div className="dropdown-content">
                            <ul>
                                <li>Pick Up From Nagpur Airport/Railway Station by 9 AM in AC Cabs.</li>
                                <li>Reach Tadoba National Park by 12 PM.</li>
                                <li>Check-in to Your Pre-Booked Resort. Freshen up & have a Delicious Lunch.</li>
                                <li>Gear up for your 1st Thrilling Jeep Safari.</li>
                                <li>Evening Back To Resort, Relax with High-Tea, Dinner and Lights off.</li>
                            </ul>
                            <div className="icons">
                                <div className="icon"><i class='fas fa-shuttle-van'></i><p>Comfortable Ac Cabs</p></div>
                                <div className="icon"><i class='fas fa-hotel'></i><p>Luxury Stay</p></div>
                                <div className="icon"><i class='fas fa-utensils'></i> <p>Lunch | Hi-Tea | Dinner</p></div>
                            </div>
                            <div className="images">
                                <img src="../tiger.jpg" alt="Tiger" className="safari-image" />
                                <img src="../deer.jpg" alt="Deer" className="safari-image" />
                        </div>
                        </div>
                    )}

                    {/* Day 2 */}
                    <div className="dropdown-btn" onClick={() => togglePanel("day2")}>
                        Day 2: Discover Wildlife with Morning and Evening Jeep Safaris
                        <span className={`toggle-icon ${activePanel === "day2" ? "rotate" : ""}`}>
                        ▼
                        </span>
                    </div>
                    {activePanel === "day2" && (
                        <div className="dropdown-content">
                          <p>
                        <ul>
                            <li>Wake up Early Morning at 5 AM. Freshen up for your 2nd Safari with Packed Breakfast inside.</li>
                            <li>Back to the Resort, Have a Relaxing Lunch.</li>
                            <li>Get Ready for your 3rd Thrilling Safari.</li>
                            <li>Evening Back To Resort, Relax with High-Tea, Dinner and Lights off.</li>
                        </ul>
                        </p>
                        <div className="icons">
                            <div className="icon"><i class='fas fa-shuttle-van'></i><p>Comfortable Ac Cabs</p></div>
                            <div className="icon"><i class='fas fa-hotel'></i><p>Luxury Stay</p></div>
                            <div className="icon"><i class='fas fa-utensils'></i> <p> Breakfast | Lunch | Hi-Tea | Dinner</p></div>
                        </div>
                        <div className="images">
                            <img src="deer2.jpg" alt="Tiger" className="safari-image" />
                            <img src="bird.jpg" alt="Bird" className="safari-image" />
                        </div>
                        </div>
                    )}

                    {/* Day 3 */}
                    <div className="dropdown-btn" onClick={() => togglePanel("day3")}>
                        Day 3: Final Jeep Safari and Warm Farewell
                        <span className={`toggle-icon ${activePanel === "day3" ? "rotate" : ""}`}>
                        ▼
                        </span>
                    </div>
                    {activePanel === "day3" && (
                        <div className="dropdown-content">
                        <p>
                            <ul>
                                <li>Pick Up From Nagpur Airport/Railway Station by 9 AM in AC Cabs.</li>
                                <li>Reach Tadoba National Park by 12 PM.</li>
                                <li>Check-in to Your Pre-Booked Resort. Freshen up & have a Delicious Lunch.</li>
                                <li>Gear up for your 1st Thrilling Jeep Safari.</li>
                                <li>Evening Back To Resort, Relax with High-Tea, Dinner and Lights off.</li>
                            </ul>
                        </p>
                        <div className="icons">
                            <div className="icon"><i class='fas fa-shuttle-van'></i><p>Comfortable Ac Cabs</p></div>
                            <div className="icon"><i class='fas fa-hotel' style={{color: "grey"}}></i><p>Luxury Stay</p></div>
                            <div className="icon"><i class='fas fa-utensils'></i> <p>Breakfast</p></div>
                        </div>
                        <div className="images">
                            <img src="tiger.jpg" alt="Tiger" className="safari-image" />
                            <img src="../monkey.webp" alt="Deer" className="safari-image" />
                        </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="include_">
                <div class="content">
                    <div class="section">
                    <h2 class="heading">Includes</h2>
                    <ol class="list">
                        <li>Luxury resort accommodation on twin-sharing basis in AC rooms.</li>
                        <li>All meals included: breakfast, lunch, high tea, and dinner.</li>
                        <li>4 thrilling jeep safaris in premium zones with expert guides.</li>
                        <li>Roundtrip transfers from Nagpur airport/railway station and local gates in comfortable AC cabs.</li>
                        <li>Includes all forest permits, gypsy fees, driver fees, and guide charges.</li>
                    </ol>
                    </div>

                    <div class="section">
                    <h2 class="heading">Excludes</h2>
                    <ol class="list">
                        <li>Lens or Camera charges (if any).</li>
                        <li>Tips to guides and drivers.</li>
                        <li>Extra order of meals, snacks, and hard drinks or cold drinks.</li>
                        <li>Train or airfare tickets to and from your home city.</li>
                        <li>Difference in cost arising due to mishaps, political unrest, natural calamities, or sudden changes in forest fees, permits, etc.</li>
                    </ol>
                    </div>
                </div>
            </div>
            <div id="pricing_">
                <div class="price-container">
                    <h1>Per Person (Double Sharing)</h1>
                    <p class="price">INR ₹21,990</p>
                    <p class="gst">+5% GST</p>

                    <div class="procedure">
                        <h2>Booking Procedure</h2>
                        <ul>
                            <li>Connect with our friendly Wild Excursions team via phone, WhatsApp, or email using the quick links below. Any questions? We're here to help.</li>
                            <li>Secure your Excursions by providing your details and making a 50% Advance Payment of total amount.</li>
                            <li>You'll receive an email confirmation once your booking has been finalized.</li>
                            <li>About 1-2 days before your trip, we'll send you the contact details of your designated driver for pickup.</li>
                            <li>Relax and enjoy the anticipation, we're committed to crafting a hassle-free and unforgettable wilderness experience, ensuring everything is covered for your memorable trip.</li>
                        </ul>
                    </div>
                </div>
                <div class="policy-container">
                    <h1>Cancellation Policy</h1>

                    <div class="policy">
                        <ul>
                            <li>Cancellation policy: All cancellation requests must be sent via email to wildexcursions.info@gmail.com</li>
                            <li>Refunds will be based on the total Tour Cost.</li>
                            <li>Any bank or transaction fees incurred during the refund process will be deducted from the refund amount.</li>
                            <li>All applicable refunds will be made to the respective bank details provided by the participants.</li>
                            <li>Wild Excursions also offers you the following options:</li>
                            <ol>
                                <li>Full Refund: You will receive a full refund of all trip payments made to Wild Excursions.</li>
                                <li>Rebooking: If you prefer, we can rebook your trip for a future departure date with no change fees.</li>
                            </ol>
                            <li>Our cancellation norms are as follows:</li>
                            <ol>
                                <li>In case of cancellations made at least 120 days or more before the tour departure date, 100% of the total amount will be refunded.</li>
                                <li>In case of cancellations made at least 60 days or more before the tour departure date, 75% of the total amount will be refunded.</li>
                                <li>In case of cancellations made between 45 - 60 days before the tour departure date, 50% of the total amount will be refunded.</li>
                                <li>In case of cancellations made between 30 - 45 days before the tour departure date, 25% of the total amount will be refunded.</li>
                                <li>In case of cancellations made within 30 days of the tour departure date, NO SHOW - 0% Refund.</li>
                            </ol>
                        </ul>
                    </div>
                </div>
                <button class='booking-btn'>Book Now</button>
            </div>

        </div>
        </>
    )
}
export default KanhaPark;