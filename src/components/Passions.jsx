import { useScrollAnimation } from '../hooks/useScrollAnimation';

const passionCategories = [
  {
    id: 'outdoor-adventure',
    title: '🏔️ Outdoor Adventure',
    description: 'I thrive in the great outdoors—whether it\'s skiing down mountains, hiking scenic trails, backpacking through wilderness, camping under the stars, sailing on open water, or fishing in peaceful lakes. Nature is where I find my balance. Below are some captures from my outdoor adventures.',
    images: ['panorama_ridge.jpg', 'skiing_sunset.jpg', 'WCT_hiking.jpg', 'snow_camping.jpg'],
  },
  {
    id: 'action-sports',
    title: '⚡ Sports & Fitness',
    description: 'Staying active is a core part of my lifestyle. From mountain biking challenging trails and playing competitive soccer, to off-roading adventures and hitting the gym regularly, I love pushing my limits and staying fit. Check out some highlights from my athletic pursuits.',
    images: ['road_biking.jpg', 'porto_biking.jpg', 'mtb.jpg'],
  },
  {
    id: 'creative-pursuits',
    title: '🎨 Creative & Cultural',
    description: (
      <>
        I enjoy expressing creativity through various outlets—creating video content of my adventures (p.s. check out my recent{' '}
        <a href="https://www.youtube.com/watch?v=M8cvRECdBfk" target="_blank" rel="noopener noreferrer" className="passion-link">sailing adventure</a>, or my{' '}
        <a href="https://www.youtube.com/watch?v=dW_lp-IAcu8" target="_blank" rel="noopener noreferrer" className="passion-link">ski trip in Revelstoke</a>), 
        working on DIY projects like car maintenance and home improvements, experiencing live music festivals, travelling to new places, 
        and unwinding with video games. Here are a few moments I've captured along the way.
      </>
    ),
    images: ['fall_in_paris.jpg', 'tomorrowland.jpg', 'car_DIY.jpg'],
  },
];

function GalleryItem({ imageFileName, category, onClick }) {
  const imagePath = `/${imageFileName}`;
  
  return (
    <div className="gallery-item" onClick={() => onClick(imagePath)}>
      <img
        src={imagePath}
        alt={`${category} photo`}
        onError={(e) => {
          e.target.style.display = 'none';
          const placeholder = e.target.nextElementSibling;
          if (placeholder) placeholder.style.display = 'flex';
        }}
      />
      <div className="gallery-placeholder" style={{ display: 'none' }}>
        {imageFileName}
      </div>
    </div>
  );
}

export default function Passions({ onImageClick }) {
  const [passionsRef, passionsVisible] = useScrollAnimation();

  return (
    <section id="passions" className="section passions">
      <div className="geometric-shape shape-12"></div>
      <div className="geometric-shape shape-13"></div>
      
      <div className="container">
        <h2 className={`section-title ${passionsVisible ? 'animate-in' : ''}`}>
          My Passions
        </h2>
        
        <div ref={passionsRef} className={`passions-content ${passionsVisible ? 'animate-in' : ''}`}>
          <p className="passions-intro">
            Beyond software engineering, I'm driven by adventure and creativity. Whether I'm conquering mountain trails,
            building something with my hands, or capturing moments on camera, I believe in living life to the fullest.
            Here's a glimpse into what fuels my passion outside of work.
          </p>
          
          {passionCategories.map((passion) => (
            <div key={passion.id} className="passion-subsection">
              <h3 className="passion-subtitle">{passion.title}</h3>
              <p className="passion-description">{passion.description}</p>
              
              <div className="photo-gallery">
                {passion.images.map((img, index) => (
                  <GalleryItem
                    key={index}
                    imageFileName={img}
                    category={passion.id}
                    onClick={onImageClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

