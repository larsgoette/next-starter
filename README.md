# Next Lean Starter

A lean, modern and opinionated [Next.js](https://nextjs.org) starter template with a focus on developer experience and best practices. Built with TypeScript, Tailwind CSS, and includes essential tooling for code quality and optimization.

## 💡 Philosophy

This starter was created with one key principle in mind: **You should spend your time building, not configuring**.

Unlike many starter templates that come loaded with features you may never use, this template provides just what you need to start building right away. No time wasted removing unused dependencies or reconfiguring bloated setups. Every included feature and configuration serves a purpose, creating a foundation that's ready for immediate development while maintaining complete flexibility for your project's specific needs.

## 🚀 Quick Start

```bash
# Create new project using this starter
npx create-next-app@latest --example "https://github.com/larsgoette/next-lean-starter" [your-project-name]

# Navigate to the project
cd your-project-name

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## ✨ Features

- **Modern Stack**

  - [Next.js 15](https://nextjs.org/) with App Router
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [React 19 RC](https://react.dev/) for latest React features

- **Styling & UI**

  - [Tailwind CSS](https://tailwindcss.com/) with automatic class sorting
  - Modern Oklab color space support
  - Efficient class merging with `tailwind-merge`

- **Developer Experience**

  - ESLint & Prettier pre-configured
  - Accessibility checks with `jsx-a11y`
  - Automated favicon generation
  - Minimal external dependencies

- **SEO & Performance**

  - Built-in SEO optimization
  - Schema.org types support
  - Dynamic OpenGraph images
  - Optimized asset generation

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router files
├── components/    # React components
│   ├── features/  # Feature-specific components
│   ├── hooks/     # Custom React hooks
│   ├── icons/     # SVG icons
│   ├── layouts/   # Layout components
│   ├── sections/  # Page sections
│   └── ui/        # Base UI components
├── lib/           # Utilities and logic
└── scripts/       # Build and development scripts
```

### App Directory

The `src/app` directory contains the core Next.js application files:

```
app/
├── apple-icon.png         # [Auto-generated] iOS icon
├── config.tsx             # Global configuration
├── favicon.ico            # [Auto-generated] Browser favicon
├── globals.css            # Global styles
├── icon.svg               # [Auto-generated] Modern browsers icon
├── layout.tsx             # Root layout
├── manifest.ts            # PWA manifest
├── opengraph-image.tsx    # OG image generator
└── page.tsx               # Homepage
```

Files marked with `[Auto-generated]` are created and managed by the `npm run favicons` script. You should not edit these files directly as they will be overwritten when the script runs.

## ⚙️ Configuration

Edit `src/app/config.ts` to customize your application:

```typescript
// Basic settings
export const APP_LANG = "en";
export const APP_NAME = "Acme Studio";
export const APP_TITLE = "Welcome to the Future.";
export const BASE_URL = "https://example.com";

// Theme settings
export const THEME_COLOR = "#ffffff";
export const LOADING_BACKGROUND_COLOR = "#ffffff";
export const OG_BACKGROUND_COLOR = "#fafafa";
export const APPLE_ICON_BACKGROUND_COLOR = "#fafafa";
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run favicons` - Generate favicon assets

### Favicon Generation

Generate optimized favicon assets with:

```bash
npm run favicons -- path/to/your/image.[svg|png]
```

This creates:

- `favicon.ico` for browsers
- `apple-icon.png` (180x180)
- `icon.svg` or `icon.png` for modern browsers

## 📚 Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn TypeScript

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🌐 Browser Support

Browserlist support is configured for:

- Browsers with >0.5% market share
- Last 2 versions of major browsers
- Firefox ESR
- Actively maintained browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 👤 Author

**Lars Götte**  
Website: [larsgoette.de](https://larsgoette.de)
