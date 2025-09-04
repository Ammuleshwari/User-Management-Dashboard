# User Management Dashboard

A full-stack user management application with **React.js (frontend)**, **Node.js + Express.js (backend)**, and **MongoDB (database)**.  
This project allows you to **view, create, update, and delete users** with both client-side and server-side validation.

---

## Tech Stack
- **Frontend:** React.js (functional components + hooks), React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Other Tools:** Framer Motion (animations), Lucide Icons

---

## Core Features
### Frontend
- Dashboard to view a list of users
- Form to create a new user
- Page to view user details
- Ability to edit and delete users
- Client-side form validation (required fields, valid email, etc.)
- Clean and responsive UI
  
###Application Features:
Displays the users on the board:
<img width="1648" height="499" alt="Screenshot 2025-09-04 160410" src="https://github.com/user-attachments/assets/0f763dd0-c06b-42b8-bf86-bd2d877bef72" />

### Backend
- 🔗 RESTful API endpoints to:
  - Get all users
  - Get a single user by ID
  - Create a new user
  - Update an existing user
  - Delete a user
- User data stored with fields:
  - Name
  - Email
  - Phone
  - Company
  - Address (street, city, zipcode, geo: { lat, lng })
- Server-side validation (required fields, valid email)
- Graceful error handling (user not found, invalid data, etc.)

