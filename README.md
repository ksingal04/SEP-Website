# Sigma Eta Pi Website

A modern, high-fidelity website for Sigma Eta Pi fraternity at Indiana University.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (for animations)

## Getting Started

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

3. Build for production:
```bash
npm run build
# or
pnpm build
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── scroll-based-velocity.jsx  # Magic UI scroll velocity component
│   ├── FloatingNavbar.jsx             # Pill-shaped floating navbar
│   ├── HeroSection.jsx                 # Full-screen hero with background image
│   ├── SplitSection.jsx               # Recruitment & Alumni hover cards
│   ├── InstagramFeed.jsx              # Scroll-based velocity Instagram feed
│   └── Footer.jsx                     # Footer with contact & social links
├── pages/
│   └── Home.jsx                       # Main homepage
├── App.jsx
├── main.jsx
└── index.css
```

## Design System

### Colors
- Primary Navy: `#112240`
- Accent Blue: `#38b6ff`
- White: `#ffffff`

### Fonts
- Primary: Plus Jakarta Sans
- Fallback: Inter

### Styling
- All containers use `rounded-3xl` for soft, modern aesthetic
- Glassmorphism effects on navbar
- Smooth transitions and hover effects

## Assets Needed

Place the following images in the `public/` directory:
- `hero-main.png` - Hero section background image
- `recruitment-image.jpg` - Recruitment card hover image
- `alumni-image.jpg` - Alumni card hover image
- `instagram-1.jpg` through `instagram-6.jpg` - Instagram feed images

## Next Steps

1. Add the Aceternity hover card code to enhance the SplitSection cards
2. Replace placeholder images with actual assets
3. Add smooth scroll behavior
4. Implement mobile menu for navbar
5. Add animations and micro-interactions
