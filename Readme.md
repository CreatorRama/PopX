# PopX React Application

## Overview

A React-based authentication and user management application built with Vite, TypeScript, and React Hook Form. This project implements a user interface for PopX, featuring authentication screens (welcome, login, registration) and an account settings page according to provided design specifications.

## Features

- **User Authentication**: Complete login and registration system
- **Form Validation**: Robust validation using React Hook Form
- **Local Storage**: Persistent data storage using browser's localStorage
- **Responsive Design**: Mobile-first approach matching the provided designs
- **TypeScript**: Type-safe code throughout the application
- **Modern React Patterns**: Functional components with hooks

## Tech Stack

- React 18
- TypeScript
- Vite (for fast development experience)
- React Router v6 (for navigation)
- React Hook Form (for form handling and validation)
- CSS Modules (for component-scoped styling)

## Project Structure

```
popx-app/
├── public/
│   ├── default-avatar.jpg
│   └── camera-icon.svg
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Welcome.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── AccountSettings.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd popx-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

### Welcome Screen
The first screen users see with options to create an account or log in if already registered.

### Registration
New users can create an account by providing:
- Full Name
- Phone Number
- Email Address
- Password
- Company Name (optional)
- Agency Status

### Login
Existing users can sign in with their email and password.

### Account Settings
After authentication, users can view and manage their profile information.

## Data Storage

This application uses browser's localStorage to store and retrieve user data. In a production environment, this would be replaced with an actual backend API.

## Deployment

To deploy the application:

1. Build the production version:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory, which can be deployed to any static hosting service like:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3

## Development Notes

### Local Storage Keys
- `popx-users`: Array of all registered users
- `popx-user`: Currently logged in user

### Form Validation
- Email validation for proper format
- Password minimum length requirement
- Required field validation for mandatory fields

## Future Improvements

- Add unit and integration tests
- Implement real backend API integration
- Add password recovery functionality
- Enhance profile editing capabilities
- Add user avatar upload functionality
- Implement dark/light theme toggle

## Assignment Context

This project was created as part of an internship assignment to implement a design from Adobe XD into a functional React application. The focus was on creating an exact match with the provided designs while implementing proper form validation and state management.
