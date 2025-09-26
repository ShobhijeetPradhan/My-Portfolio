Shobhijeet Pradhan's Digital Grimoire & Portfolio

<p align="center">
A dynamic and fully responsive personal portfolio website built with modern web technologies. Features a real-time, full-stack comment section and slick animations.
</p>

<p align="center">
<a href="https://my-portfolio-sk-tau.vercel.app/"><strong>View Live Demo »</strong></a>
</p>


About The Project
This project is more than just a portfolio; it's a complete single-page application (SPA) designed to showcase my skills in both web and game development sensibilities. From the fluid animations to the real-time backend, every component was crafted to create an engaging and professional user experience.

The core of the application is a smooth-scrolling interface that guides the user through different sections of my profile. The standout feature is a full-stack comment section, allowing visitors to leave public messages with profile pictures, all updated in real-time for every user.

✨ Features
Animated Welcome Screen: A slick, animated entry point to the application.

Smooth Scrolling SPA: A seamless single-page experience with a navigation bar that tracks the user's position.

Real-Time Comment Section: Visitors can post comments with their name and an optional profile picture. Comments appear instantly for all users thanks to Supabase's real-time subscriptions.

Supabase Backend: Utilizes Supabase for:

PostgreSQL Database: Storing all comments.

Storage: Hosting user-uploaded profile pictures.

Realtime: Pushing live updates to all connected clients.

Dynamic Project & Certificate Showcase: All portfolio content is fetched dynamically from the Supabase database.

Fully Responsive Design: A mobile-first approach ensures the site looks and works perfectly on all devices, from phones to desktops.

Modern Animations: Subtle, performant animations powered by Framer Motion and AOS (Animate on Scroll) to enhance the user experience.

🔧 Built With
This project was built with a modern, high-performance tech stack:

Front-End:

React.js

Vite

Tailwind CSS

Framer Motion (for animations)

Lucide React (for icons)

Swiper.js (for portfolio tabs)

Back-End & Database:

Supabase

Deployment: Vercel

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18 or higher)

npm

Installation
Clone the repo

git clone [https://github.com/your_username/my-portfolio.git]

Install NPM packages

npm install

Set up your environment variables
Create a .env.local file in the root of the project and add your Supabase credentials:

VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

Run the development server

npm run dev

📬 Contact
Shobhijeet Pradhan - https://www.linkedin.com/in/shobhijeet-pradhan/

Project Link: https://my-portfolio-sk-tau.vercel.app/