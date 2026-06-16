# HustleCult / Oppora

HustleCult is a student-focused platform for discovering internships, hackathons, and postgraduate exam opportunities in one place. The app combines a React + Vite frontend with an Express + MongoDB backend and presents a polished dark purple interface centered on opportunity discovery and profile building.

## What the app does

- Shows a landing page with three core discovery areas: internships, hackathons, and PG exams.
- Lets users explore internship listings with skill and location search.
- Provides PG exam guidance cards for tests such as GATE, CAT, GRE, UPSC CSE, NET, and CLAT PG.
- Includes a profile page with completion progress, skills, education, location, GitHub, and email details.
- Supports login, sign up, and application submission flows.

## Screenshots

### Home

![Home screen](screenshots/Screenshot%202026-06-16%20151458.png)

### About

![About screen](screenshots/Screenshot%202026-06-16%20151606.png)

### Internships

![Internships screen](screenshots/Screenshot%202026-06-16%20151704.png)

### Internship details

![Internship detail screen](screenshots/Screenshot%202026-06-16%20151749.png)

### Application submitted

![Application submitted modal](screenshots/Screenshot%202026-06-16%20151802.png)

### PG exams

![PG exams screen](screenshots/Screenshot%202026-06-16%20151550.png)

### Profile

![Profile screen](screenshots/Screenshot%202026-06-16%20151911.png)

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Redux Toolkit
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- bcrypt for password hashing

## Project Structure

- `Oppora/` - Express backend
- `oppora-frontend/oppora-frontend/` - React frontend
- `screenshots/` - UI screenshots used in this README

## Backend Features

- Authentication routes for login and sign up.
- Internship and hackathon APIs.
- Profile-related controllers and protected routes.
- MongoDB user model with profile fields such as skills, education, location, GitHub, and contact details.

## Frontend Features

- Styled landing page with navigation to Home, Internships, Hackathons, PG Exams, About, and Profile.
- Internship search and listing cards.
- Detailed internship view with job metadata and application action.
- Profile dashboard with completeness progress and editable profile data.
- Auth flows for login and registration.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB connection string

### Backend Setup

```bash
cd Oppora
npm install
```

Create a `.env` file in the backend folder with:

```env
mongoPath=your_mongodb_connection_string
secret=your_jwt_secret
```

Start the backend:

```bash
npm start
```

### Frontend Setup

```bash
cd oppora-frontend/oppora-frontend
npm install
npm run dev
```

## Notes

- The backend listens on port `3000`.
- The frontend calls the backend at `http://localhost:3000`.
- Some screenshots show sample data, so the displayed profiles, internships, and exam info are representative of the app experience.

## License

ISC