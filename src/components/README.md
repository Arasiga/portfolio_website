# Components

This directory contains all the modular components for the portfolio website.

## Component Structure

### Layout Components
- **`Navbar.jsx`** - Fixed navigation bar with mobile menu support
- **`Footer.jsx`** - Site footer with copyright information

### Section Components
- **`Hero.jsx`** - Hero section with headshot, introduction, and CTA buttons
- **`About.jsx`** - About me section with personal description
- **`Work.jsx`** - Work experience and projects showcase
- **`Passions.jsx`** - Personal interests with photo gallery
- **`Skills.jsx`** - Skills with animated progress bars
- **`Contact.jsx`** - Contact information with social links

### Utility Components
- **`ImageModal.jsx`** - Modal for displaying full-size images from gallery

## Usage

All components are imported and used in `App.jsx`:

```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// ... other imports

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* ... other components */}
    </div>
  );
}
```

## Component Features

### Scroll Animations
Most section components use the `useScrollAnimation` custom hook for fade-in effects on scroll.

### Responsive Design
All components are fully responsive with mobile-first design principles.

### Props
- `Passions` accepts `onImageClick` callback for image modal
- `ImageModal` accepts `imageSrc` and `onClose` props

## Customization

To customize content:
1. Update text directly in each component
2. Modify data arrays (e.g., `workExperience`, `skills`, `contactLinks`)
3. Replace placeholder images in the `public` directory

