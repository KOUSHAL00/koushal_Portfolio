# Portfolio - B. Raj Koushal

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features a clean design with dark/light theme support, smooth animations, and a fully functional contact form.

## 🚀 Live Demo

- **Portfolio**: [Your Domain Here]
- **Resume Page**: [Your Domain]/resume
- **PDF Resume**: [Your Domain]/resume.pdf

## ✨ Features

### 🎨 Design & UI

- **Modern, Premium Design**: Clean and professional interface with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent localStorage
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Scrolling**: Enhanced user experience with Lenis smooth scroll
- **Interactive Animations**: Powered by Framer Motion
- **Magnetic Buttons**: Engaging hover effects on CTAs

### 📄 Resume System (Dual Options)

1. **Web Resume** (`/resume`)
   - Interactive, theme-aware resume page
   - Printable layout (browser print → save as PDF)
   - Clickable project links (GitHub, live demos)
   - Mobile responsive
2. **PDF Download** (`/resume.pdf`)
   - Direct download of professional resume
   - No conversion needed
   - ATS-friendly format

### 📧 Contact Form

- **Real-time Email Delivery**: Powered by Web3Forms API
- **Form Validation**: Name, email, and message validation with Zod
- **Loading States**: Visual feedback during submission
- **Success/Error Notifications**: Animated feedback messages
- **Auto-reset**: Form clears after successful submission

### 📱 Sections

- **Hero**: Introduction with animated stats and CTA buttons
- **About**: Professional summary, skills with progress bars, tech stack
- **Tech Marquee**: Infinite scrolling technology showcase
- **Projects**: 7 featured projects with links and descriptions
- **Experience**: Timeline view of work experience and education
- **Contact**: Working contact form with social links

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Form & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Web3Forms** - Email delivery service (no backend needed)

### 3D & Graphics

- **Three.js** - 3D geometric shapes
- **React Three Fiber** - React renderer for Three.js

### Other Libraries

- **Lenis** - Smooth scroll
- **Lucide React** - Icon library
- **clsx** - Utility for className management

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/KOUSHAL00/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

Get your free Web3Forms access key:

- Visit https://web3forms.com
- Enter your email address
- Copy the access key you receive

4. **Add your resume PDF** (optional)

```bash
# Copy your resume to the public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

5. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage (all sections)
│   │   ├── resume/
│   │   │   └── page.tsx       # Resume page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles + theme variables
│   │
│   ├── components/
│   │   ├── sections/          # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── TechMarquee.tsx
│   │   │
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   └── LoadingScreen.tsx
│   │   │
│   │   └── 3d/
│   │       └── GeometricShape.tsx
│   │
│   └── lib/
│       └── lenis.ts           # Smooth scroll setup
│
├── public/
│   └── resume.pdf             # Your resume PDF
│
├── .env.local                 # Environment variables (not in git)
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - `/src/components/sections/Contact.tsx`

```tsx
const CONTACT_INFO = [
  { icon: Mail, text: "your@email.com", href: "mailto:your@email.com" },
  { icon: Phone, text: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
  { icon: MapPin, text: "Your City, Country", href: null },
];
```

2. **Social Links** - `/src/components/sections/Contact.tsx`

```tsx
const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
];
```

3. **Projects** - `/src/components/sections/ProjectGallery.tsx`

```tsx
const PROJECTS = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    link: "https://your-project.com",
  },
  // Add more projects...
];
```

4. **Skills** - `/src/components/sections/About.tsx`

```tsx
const SKILLS = [
  {
    name: "Your Skill",
    level: 90,
    icon: Code,
    color: "from-blue-500 to-purple-500",
  },
  // Add more skills...
];
```

5. **Resume Content** - `/src/app/resume/page.tsx`

- Update education, experience, certifications, etc.

### Theme Colors

Edit `/src/app/globals.css`:

```css
/* Dark mode */
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

/* Light mode */
html.light {
  --background: #faf8f6;
  --foreground: #1a1a1a;
}
```

Edit `/tailwind.config.ts` for accent colors:

```ts
colors: {
  primary: "#8b5cf6",    // Purple
  secondary: "#00f2ea",  // Cyan
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import on Vercel**

- Visit [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Add environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY`
- Click "Deploy"

3. **Done!** Your portfolio is live at `yourproject.vercel.app`

### Alternative Platforms

- **Netlify**: Similar to Vercel
- **GitHub Pages**: Requires static export
- **Cloudflare Pages**: Good performance, free tier

## 📝 Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## ✅ Environment Variables

Only one environment variable is needed:

| Variable                    | Description                        | Required | Default |
| --------------------------- | ---------------------------------- | -------- | ------- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms API key for contact form | Yes      | -       |

Get your free key at [web3forms.com](https://web3forms.com)

## 🐛 Troubleshooting

### Contact form not working

- Check if `NEXT_PUBLIC_WEB3FORMS_KEY` is set in `.env.local`
- Restart dev server after adding environment variables
- Verify Web3Forms key is valid

### PDF not downloading

- Ensure `resume.pdf` exists in `/public` folder
- Check file path is `/public/resume.pdf` not `/public/resume/resume.pdf`

### Theme not persisting

- Check browser localStorage is enabled
- Clear browser cache and try again

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## 🎯 To-Do Before Going Live

- [ ] Get Web3Forms access key
- [ ] Add your resume.pdf to public folder
- [ ] Update all personal information
- [ ] Replace placeholder projects with your own
- [ ] Test contact form (send a test email)
- [ ] Test resume download
- [ ] Check responsiveness on mobile
- [ ] Test both light and dark themes
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain (optional)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**B. Raj Koushal**

- GitHub: [@KOUSHAL00](https://github.com/KOUSHAL00)
- LinkedIn: [B. Raj Koushal](https://www.linkedin.com/in/b-raj-koushal-3b5b6127b/)
- Email: brkoushal17@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Contact form powered by [Web3Forms](https://web3forms.com)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you like this portfolio template, please give it a star on GitHub!
