# Hero2 Component - Configurable Usage Guide

The Hero2 component has been made configurable to support different layouts and use cases.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heroClass` | string | `''` | Additional CSS class for the hero section |
| `showContactForm` | boolean | `true` | Whether to show the registration/contact form overlay |
| `title` | string | `'Giga Group'` | Main heading text |
| `subtitle` | string | `'From luxury residences...'` | Subtitle/description text |
| `showButton` | boolean | `false` | Whether to show the action button |
| `buttonText` | string | `'Discover More'` | Text for the action button |
| `buttonLink` | string | `'/about'` | Link for the action button |
| `videoUrl` | string | YouTube embed URL | Background video URL for desktop devices (>768px) |
| `mobileVideoUrl` | string | - | Video URL for mobile devices (≤768px) |
| `textPosition` | string | `'center'` | Text positioning: `'center'` or `'top'` |

## Usage Examples

### 1. With Contact Form (Default - Current Behavior)
```jsx
import Hero2 from '../components/hero2';

// Shows contact form overlay, text hidden on mobile
<Hero2 />
```

### 2. Text-Only (No Contact Form) - Centered Text
```jsx
import Hero2 from '../components/hero2';

// No contact form, text is centered and responsive
<Hero2 
    showContactForm={false}
    textPosition="center"
    title="Welcome to Giga Group"
    subtitle="Discover our premium developments across Pakistan and UAE"
    showButton={true}
    buttonText="Explore Projects"
    buttonLink="/projects"
/>
```

### 3. Text-Only (No Contact Form) - Top Positioned Text
```jsx
import Hero2 from '../components/hero2';

// No contact form, text positioned at top
<Hero2 
    showContactForm={false}
    textPosition="top"
    title="Top Positioned Title"
    subtitle="This text appears at the top of the screen"
    showButton={true}
    buttonText="Get Started"
    buttonLink="/contact"
/>
```

### 4. Responsive Videos (Mobile & Desktop)
```jsx
import Hero2 from '../components/hero2';

<Hero2 
    heroClass="custom-hero"
    showContactForm={false}
    title="Your Dream Awaits"
    subtitle="Premium real estate solutions tailored for you"
    showButton={true}
    buttonText="Get Started"
    buttonLink="/contact"
    videoUrl="https://www.youtube.com/embed/trmn0svn7F0?autoplay=1&mute=1&loop=1&playlist=trmn0svn7F0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
    mobileVideoUrl="https://www.youtube.com/embed/_VIxCfae3UM?autoplay=1&mute=1&loop=1&playlist=_VIxCfae3UM&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
/>
```

### 5. Custom Configuration
```jsx
import Hero2 from '../components/hero2';

<Hero2 
    heroClass="custom-hero"
    showContactForm={false}
    title="Your Dream Awaits"
    subtitle="Premium real estate solutions tailored for you"
    showButton={true}
    buttonText="Get Started"
    buttonLink="/contact"
    videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1"
/>
```

## Responsive Behavior

### Video Background
- **Desktop (>768px)**: Shows `videoUrl` (desktop video)
- **Mobile (≤768px)**: Shows `mobileVideoUrl` (mobile video)
- **Automatic switching**: Videos change automatically based on screen size using CSS media queries
- **No JavaScript**: Pure CSS solution for better performance

### With Contact Form (`showContactForm={true}`)
- **Desktop/Tablet**: Text visible with overlay effect
- **Mobile**: Text hidden to prioritize contact form visibility
- Uses `.mobile-hidden-text` class

### Without Contact Form (`showContactForm={false}`)
- **Desktop**: Large text (48px title, 18px subtitle)
- **Tablet**: Medium text (36px title, 16px subtitle) 
- **Mobile**: Responsive text (28px title, 14px subtitle)
- **Small Mobile**: Smaller text (24px title, 13px subtitle)
- **Very Small**: Compact text (20px title, 12px subtitle)
- Uses `.responsive-text` class

## CSS Classes

- `.mobile-hidden-text`: Hides text on mobile when contact form is present
- `.responsive-text`: Makes text fully responsive across all screen sizes
