import '../css/home.css'

const Aboutus =()=>{
    return(
        <>
        <div style={{paddingBottom:"70px"}}></div>
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
        </div>

        </>
    );
};
export default Aboutus;