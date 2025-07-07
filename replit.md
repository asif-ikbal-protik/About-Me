# replit.md

## Overview

This is a personal portfolio website for Asif Ikbal, a Data Annotation Manager and AI Specialist. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a PostgreSQL database integration via Drizzle ORM. The portfolio showcases professional experience, skills, projects, education, and provides a contact form.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Middleware**: Custom logging, JSON parsing, and error handling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon Database serverless)
- **Migrations**: Drizzle Kit for schema migrations
- **Schema**: User management with username/password fields

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Professional introduction with call-to-action buttons
3. **Experience Section**: Timeline of professional work history
4. **Skills Section**: Categorized technical skills with visual presentation
5. **Projects Section**: Portfolio showcase with project descriptions
6. **Education Section**: Academic background and certifications
7. **Contact Section**: Interactive contact form with validation

### Backend Services
1. **Storage Interface**: Abstracted storage layer with memory-based implementation
2. **Route Registration**: Centralized route management system
3. **Vite Integration**: Development server integration with HMR support

### UI Components
- Complete shadcn/ui component library implementation
- Custom styled components with Tailwind CSS
- Responsive design patterns for mobile and desktop
- Accessibility-focused component design

## Data Flow

### Frontend Data Flow
1. React Query manages server state and caching
2. Form submissions handled through custom hooks
3. Smooth animations triggered by intersection observers
4. Toast notifications for user feedback

### Backend Data Flow
1. Express middleware processes incoming requests
2. Storage interface abstracts database operations
3. Response formatting with consistent error handling
4. Request/response logging for development debugging

## External Dependencies

### Core Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **Authentication**: Session-based with connect-pg-simple
- **Styling**: Inter font from Google Fonts
- **Icons**: Lucide React icon library
- **Development**: Replit-specific development tools

### Build Dependencies
- **TypeScript**: Type checking and compilation
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Autoprefixer
- **Drizzle Kit**: Database schema management

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- Express server with automatic restart on changes
- Memory-based storage for rapid prototyping
- Replit-specific development tools integration

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with ESBuild to `dist/index.js`
3. Static file serving from Express
4. Database migrations applied via Drizzle Kit

### Environment Configuration
- Database URL required via environment variables
- Development/production mode switching
- Replit environment detection for development features

## Changelog
```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.