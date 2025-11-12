import { useScrollAnimation } from '../hooks/useScrollAnimation';

const passionCategories = [
  {
    id: 'exploring',
    title: '🌍 Exploring',
    description: 'I love traveling and discovering new places, cultures, and experiences around the world.',
    images: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
  },
  {
    id: 'sports',
    title: '⚽ Sports',
    description: 'Staying active through various sports and physical activities keeps me energized and focused.',
    images: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
  },
  {
    id: 'nature',
    title: '🌲 Nature',
    description: 'Connecting with nature through hiking, camping, and outdoor adventures brings me peace and inspiration.',
    images: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
  },
];

function GalleryItem({ category, index, onClick }) {
  const imagePath = `/gallery/${category}/${index}`;
  
  return (
    <div className="gallery-item" onClick={() => onClick(imagePath)}>
      <img
        src={imagePath}
        alt={`${category} ${index}`}
        onError={(e) => {
          e.target.style.display = 'none';
          const placeholder = e.target.nextElementSibling;
          if (placeholder) placeholder.style.display = 'flex';
        }}
      />
      <div className="gallery-placeholder" style={{ display: 'none' }}>
        Photo {index}
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
            Outside of coding, I'm passionate about exploring the world, staying active through sports,
            and connecting with nature. Here's a glimpse into what I love doing in my free time.
          </p>
          
          {passionCategories.map((passion) => (
            <div key={passion.id} className="passion-subsection">
              <h3 className="passion-subtitle">{passion.title}</h3>
              <p className="passion-description">{passion.description}</p>
              
              <div className="photo-gallery">
                {passion.images.map((img, index) => (
                  <GalleryItem
                    key={index}
                    category={passion.id}
                    index={img}
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

