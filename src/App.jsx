import { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Passions from './components/Passions';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Passions onImageClick={setSelectedImage} />
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
