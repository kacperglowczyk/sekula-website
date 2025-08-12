# SEKULA Auto Repair Website

A modern, multilingual auto repair website built with Next.js, React, and TypeScript.

## Project Structure

The codebase has been organized into a clean, maintainable structure:

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
│   ├── About.tsx          # About section component
│   ├── Contact.tsx        # Contact section component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section component
│   ├── Services.tsx       # Services section component
│   ├── Sidebar.tsx        # Sidebar navigation component
│   ├── Stats.tsx          # Statistics section component
│   └── index.ts           # Component exports
├── hooks/                  # Custom React hooks
│   └── useLanguage.ts     # Language management hook
├── types/                  # TypeScript type definitions
│   └── index.ts           # Main types and interfaces
├── translations/           # Multi-language content
│   └── index.ts           # Translation data
└── utils/                  # Utility functions
    └── services.ts        # Services data utilities
```

## Features

- **Multilingual Support**: Polish, English, Ukrainian, and Georgian
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript support
- **Modern UI**: Clean, professional design with smooth animations

## Components

### Core Components
- **Hero**: Main landing section with call-to-action buttons
- **Services**: Grid display of automotive services
- **About**: Company highlights and features
- **Contact**: Contact information and business hours
- **Stats**: Key statistics and achievements
- **Sidebar**: Navigation and language switcher
- **Footer**: Company branding and copyright

### Custom Hooks
- **useLanguage**: Manages language state and translations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Code Organization Benefits

- **Maintainability**: Each component has a single responsibility
- **Reusability**: Components can be easily reused across the application
- **Testing**: Individual components can be tested in isolation
- **Scalability**: New features can be added without affecting existing code
- **Readability**: Clear separation of concerns makes code easier to understand
- **Type Safety**: Strong typing prevents runtime errors

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
