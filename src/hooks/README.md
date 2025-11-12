# Custom Hooks

This directory contains reusable React hooks for the portfolio website.

## Available Hooks

### `useScrollAnimation`

A custom hook that triggers animations when elements scroll into view using the Intersection Observer API.

#### Usage

```jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function MyComponent() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={isVisible ? 'animate-in' : ''}>
      {/* Content */}
    </div>
  );
}
```

#### Returns
- `ref` - React ref to attach to the element you want to observe
- `isVisible` - Boolean indicating if the element is in viewport

#### Configuration
- **threshold**: `0.1` - Triggers when 10% of element is visible
- **rootMargin**: `'0px 0px -50px 0px'` - Adjusts trigger point

#### Performance
The hook automatically unobserves elements after they've animated in, improving performance by reducing active observers.

