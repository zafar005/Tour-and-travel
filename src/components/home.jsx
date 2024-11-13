import '../css/home.css'
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'
const Home =()=>{

    const navigate = useNavigate();


    return(
        <>
        <div className="body2">
            <div class="search-bar">
                <select name="destination" id="destination">
                    <option value="" disabled selected>Where are you going?</option>
                    <option value="" >kanhapark</option>
                    <option value="" >kanhapark</option>
                    <option value="" >kanhapark</option>
                    <option value="" >kanhapark</option>
                    <option value="" >kanhapark</option>

                </select>
                <select name="month" id="month">
                    <option value="" disabled selected>When are you planning?</option>

                </select>
                <button type="button">FIND NOW</button>
            </div>
            
        </div>
        <div class="pg2">
            <h1 class="">Our Team by the numbers</h1>
            <p>
            At Wild Excursions, our exceptional team is the backbone of our unforgettable 
            jungle safaris. Comprising highly experienced guides and knowledgeable naturalists, 
            each member brings a deep passion for wildlife and an unwavering dedication to 
            providing the best possible experience. With years of expertise, our team is 
            committed to ensuring that every adventure is not only thrilling but also safe, 
            educational, and deeply immersive. We pride ourselves on offering personalized 
            tours that allow you to explore the wild with confidence, gaining unique insights 
            into the natural world. Join Wild Excursions, where our seasoned professionals turn 
            your safari into the ultimate wildlife experience, creating memories that last a lifetime.
            </p>

                {/* ----------------stats here----------------------  */}

            <div class="stats-container">
                <div class="stat-box">
                    <div class="stat-number">2,500+</div>
                    <div class="stat-text">Travellers</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">50+</div>
                    <div class="stat-text">Team</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">98.8%</div>
                    <div class="stat-text">Tiger Sighting Ratio</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">1,100+</div>
                    <div class="stat-text">Tours</div>
                </div>
            </div>

                {/* ------------------slider images------------------- */}

            <div class="slider-img"></div>
            <h1 class="exp_h1">Explore the best of wilderness with Wild Excursions</h1>
            <p>
            Discover the top wildlife tours offered by Wild Excursions, designed 
            to provide an unforgettable experience in the heart of nature. Our 
            carefully curated tours offer a range of experiences, from thrilling 
            adventures and serene relaxation to immersive cultural encounters. 
            Each tour is tailored to showcase the best of the wilderness, ensuring 
            a memorable journey for every traveler. Whether you're an adventure 
            seeker, a nature lover, or interested in local wildlife and culture, 
            our selection of tours caters to all your needs. Explore the beauty 
            of wildlife and nature with Wild Excursions and make lasting memories.
            </p>

            {/* --------------------cards here------------------------------ */}

            <div class="card-container">
                <div class="card">
                    <img src="../card-1.webp" alt="Tadoba National Park"/>
                    <div class="card-content">
                        <h2>Tadoba National Park</h2>
                        <p>Tadoba National Park, located in Maharashtra, India, is a top destination for wildlife enthusiasts a...</p>
                        <button onClick={()=>{navigate('/tadobapark')}}>Check Details</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../card-2.webp" alt="Pench National Park"/>
                    <div class="card-content">
                        <h2>Pench National Park</h2>
                        <p>Pench National Park in Madhya Pradesh, India, is a captivating haven for wildlife enthusiasts and na...</p>
                        <button onClick={()=>{navigate('/penchpark')}}>Check Details</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../card-3.webp" alt="Kanha National Park"/>
                    <div class="card-content">
                        <h2>Kanha National Park</h2>
                        <p>Kanha National Park in Madhya Pradesh, India, is one of the country's largest and most scenic wildli...</p>
                        <button onClick={()=>{navigate('/kanhapark')}}>Check Details</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../card-4.webp" alt="Bandhavgarh National Park"/>
                    <div class="card-content">
                        <h2>Bandhavgarh National Park</h2>
                        <p>Bandhavgarh National Park in Madhya Pradesh, India, is renowned for its high density of Bengal tigers...</p>
                        <button onClick={()=>{navigate('/bandhavgarh')}}>Check Details</button>
                    </div>
                </div>
            </div>

                {/* ---------------------client reviews------------------------ */}

            <h1>Explore Our Services</h1>
            <div id='reviews'>
                <div class="tour-section">
                    <div class="tour-image">
                        <img src="../review-1.webp" alt="Wildlife Photography Tour" />
                    </div>
                    <div class="tour-content">
                        <h2>
                        Wildlife Photography Tours <br/> <span>- Capture Nature's Beauty with Wild
                            Excursions</span>
                        </h2>
                        <p>
                        Discover the wild your way with Wild Excursions. Whether you're
                        seeking a thrilling expedition, a peaceful retreat, or a
                        photography-focused experience, we tailor every detail to your
                        preferences. With expert guides, personalized itineraries, and
                        exclusive access to prime wildlife locations, your journey will be as
                        unique as you are. Enjoy luxury accommodations, flexible scheduling,
                        and a fully immersive experience that matches your interests. Create
                        unforgettable memories on a wildlife tour designed just for you. Start
                        planning your customized journey today with Wild Excursions.
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div class="tour-section">
                    <div class="tour-content">
                        <h2>
                        Customized Wildlife Tours <span>- Craft your Wildlife Escapes with Wild Excursions</span>
                        </h2>
                        <p>
                        Discover the wild your way with Wild Excursions. Whether you're seeking a thrilling expedition, 
                        a peaceful retreat, or a photography-focused experience, we tailor every detail to your preferences. 
                        With expert guides, personalized itineraries, and exclusive access to prime wildlife locations, 
                        your journey will be as unique as you are. Enjoy luxury accommodations, flexible scheduling, and 
                        a fully immersive experience that matches your interests. Create unforgettable memories on a wildlife 
                        tour designed just for you. Start planning your customized journey today with Wild Excursions.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div class="tour-image">
                        <img src="../review-2.webp" alt="Wildlife Photography Tour" class="right_image" />
                    </div>
                </div>
                <div class="tour-section">
                    <div class="tour-image">
                        <img src="../review-3.webp" alt="Wildlife Photography Tour" />
                    </div>
                    <div class="tour-content">
                        <h2>
                        Fixed Departure Wildlife Tours- A Hassle-Free Journey with Wild Excursions
                        </h2>
                        <p>
                        Explore the best of nature with Wild Excursions on our scheduled safari adventures 
                        are designed for those seeking a structured and hassle-free experience on specific 
                        dates. Benefit from expertly guided wildlife tours, curated itineraries, and comfortable 
                        accommodations, all tailored to ensure exceptional wildlife sightings. Ideal for 
                        travelers who prefer pre-set dates and organized tours, our fixed departure options 
                        promise unforgettable moments in the wild. Book your fixed departure safari today and 
                        embark on a remarkable wildlife journey with Wild Excursions.
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div class="tour-section">
                    <div class="tour-content">
                        <h2>
                        Corporate Wildlife Tours - Exclusive Wildlife Tours for Business group
                        </h2>
                        <p>
                        Transform your corporate events and team-building activities with Wild Excursions. Our 
                        tailored wildlife tours offer a perfect blend of adventure, luxury, and team-building 
                        opportunities in breathtaking natural settings. Enjoy personalized itineraries, expert-guided 
                        safaris, and high-end accommodations designed to create memorable experiences for your 
                        business group. Whether for client entertainment, team bonding, or executive retreats, our 
                        corporate safaris provide a unique and engaging way to strengthen relationships and inspire 
                        your team. Discover the ultimate in corporate travel with Wild Excursions and create lasting 
                        impressions in the wild.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div class="tour-image">
                        <img src="../review-4.webp" alt="Wildlife Photography Tour" class="right_image" />
                    </div>
                </div>
            </div>
            {/* <div class="container">
                <div class="text-section">
                    <h1>Experience the best of Wilderness</h1>
                    <p>Let Wild Excursions guide you through an unforgettable adventure into the heart of nature's beauty and wildlife wonders.</p>
                </div>
                <div class="image-section">
                    <img src="../monkey.webp" alt="Monkey" class="image1"/>
                    <img src="../owl.webp" alt="Owls" class="image2"/>
                </div>
            </div> */}

                {/* ---------------------------testimonial---------------------------- */}

            <div class="testimonial-container">
                <h1>What our guests say about us</h1>
                <div class="cards">
                    <div class="guest_card">
                        <img src="../guest-1.webp" alt="Rishabh Lakhotiya"/>
                        <h3>Rishabh Lakhotiya</h3>
                        <h4>Nagpur, India</h4>
                        <p>It was a nice plan organized by Wild Excursions with confirmed sightings of T6 and cubs at Gothangaon. Great energy and professionalism from the team.</p>
                        <a href="#">Read More</a>
                    </div>
                    <div class="guest_card">
                        <img src="../guest2.webp" alt="Aravind Sivakumar"/>
                        <h3>Aravind Sivakumar</h3>
                        <h4>Mumbai, India</h4>
                        <p>Extremely well planned trip with zero glitches. We had a great time with some amazing sightings. The guide was very knowledgeable and accommodating.</p>
                        <a href="#">Read More</a>
                    </div>
                    <div class="guest_card">
                        <img src="../guest3.webp" alt="Vidya Barde"/>
                        <h3>Vidya Barde</h3>
                        <h4>Nagpur, India</h4>
                        <p>We had a lifetime experience during the Safari at Kesala Ghat. The guide was very helpful and made sure the process was smooth and enjoyable.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};
export default Home