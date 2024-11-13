import { useNavigate } from 'react-router-dom';
import '../css/services.css'

const Services = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        {/* Tadoba National Park Section */}
        <div className="park-section">
          <div className="park-image">
            <img src="../card-1.webp" alt="Tadoba National Park" />
          </div>
          <div className="park-info">
            <h2>Tadoba National Park</h2>
            <p>
              Tadoba National Park, located in Maharashtra, India, is a top
              destination for wildlife enthusiasts and safari lovers. Known for
              its impressive population of Bengal tigers, the park also hosts
              leopards, sloth bears, Indian bison (gaur), and a variety of other
              wildlife species.
            </p>
            <button id='service_btn' onClick={()=>{navigate('/tadobapark')}}>CHECK TOURS</button>
          </div>
        </div>

        {/* Pench National Park Section */}
        <div className="park-section">
          <div className="park-image">
            <img src="../card-2.webp" alt="Pench National Park" />
          </div>
          <div className="park-info">
            <h2>Pench National Park</h2>
            <p>
              Pench National Park in Madhya Pradesh, India, is a captivating
              haven for wildlife enthusiasts and nature lovers. Renowned for its
              Bengal tigers and leopards, the park is also home to deer, wild
              boars, and numerous bird species.
            </p>
            <button id='service_btn' onClick={()=>{navigate('/penchpark')}}>CHECK TOURS</button>
          </div>
        </div>
        {/* Pench National Park Section */}
        <div className="park-section">
          <div className="park-image">
            <img src="../card-3.webp" alt="Pench National Park" />
          </div>
          <div className="park-info">
            <h2>Kanha National Park</h2>
            <p>
              Kanha National Park in Madhya Pradesh, India, is one of the country's 
              largest and most scenic wildlife reserves. Known for its Bengal tigers, 
              the park also shelters leopards, sloth bears, wild dogs, and the rare 
              barasingha (swamp deer). 
            </p>
            <button id='service_btn' onClick={()=>{navigate('/kanhapark')}}>CHECK TOURS</button>
          </div>
        </div>
        {/* Pench National Park Section */}
        <div className="park-section">
          <div className="park-image">
            <img src="../card-4.webp" alt="Pench National Park" />
          </div>
          <div className="park-info">
            <h2>Bandhavgarh National Park</h2>
            <p>
              Bandhavgarh National Park in Madhya Pradesh, India, is renowned for 
              its high density of Bengal tigers and a diverse range of wildlife, 
              including leopards, sloth bears, and various deer species. The park's 
              landscape, featuring dense forests, grasslands, and ancient ruins, 
              offers a captivating setting for wildlife viewing.
            </p>
            <button id='service_btn' onClick={()=>{navigate('/bandhavgarh')}}>CHECK TOURS</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
