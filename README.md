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
  
**Application Features**:
--Displays the users on the board:
<img width="1843" height="505" alt="Screenshot 2025-09-04 231112" src="https://github.com/user-attachments/assets/dba30e79-6496-44a0-ab1d-0e5e5d6d5ce4" />
-- Search by username or email:
<img width="891" height="519" alt="Screenshot 2025-09-04 231126" src="https://github.com/user-attachments/assets/4f9afa56-68e2-4132-9cd4-77af57c59386" /> 

-- Add new user:
<img width="1613" height="709" alt="Screenshot 2025-09-04 231201" src="https://github.com/user-attachments/assets/e16386bc-9649-4303-a268-00b9e0720fcd" />

<img width="833" height="653" alt="Screenshot 2025-09-04 231325" src="https://github.com/user-attachments/assets/4569bb73-0fe7-4839-b503-8cf6d8891c9f" />

--Click on view button to get the user details

<img width="859" height="664" alt="Screenshot 2025-09-04 231412" src="https://github.com/user-attachments/assets/a42b1809-477d-4d33-a26d-cfe75041bf5b" />

-- Click on Edit button of particular user to edit the user details

<img width="836" height="652" alt="Screenshot 2025-09-04 231439" src="https://github.com/user-attachments/assets/56aa2612-6a9d-4cb7-ab69-2f804935c2eb" />

<img width="839" height="649" alt="Screenshot 2025-09-04 231458" src="https://github.com/user-attachments/assets/ec42321d-da3f-4f41-8c46-d9240d788058" />

--Click on delete icon to delete the user permanently 

<img width="536" height="398" alt="Screenshot 2025-09-04 231519" src="https://github.com/user-attachments/assets/5e78533f-b343-404b-806b-9017ad2c0463" />

<img width="1734" height="429" alt="Screenshot 2025-09-04 231529" src="https://github.com/user-attachments/assets/b7867b93-9f30-4b45-8f31-fc50615f0182" />

<img width="1784" height="483" alt="Screenshot 2025-09-04 231555" src="https://github.com/user-attachments/assets/a3ca9eca-e346-4c5d-9532-067bc6fc4c2e" />



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

### Set Up Instructions

### 1. Clone the Repository
- git clone https://github.com/Ammuleshwari/User-Management-Dashboard.git
cd User-Management-Dashboard

### 2. Backend Setup
- cd backend

### Install dependencies

- npm install

### Create a .env file (inside the /src of backend)
- .env
- Update .env with the values:
- PORT=5000
- MONGO_URI=create the db with user-manegement in mongodb atlas and paste the connection url
- CORS_ORIGIN=http://localhost:5173
- NODE_ENV=development

### Start the backend server
- npm start
- Runs on: http://localhost:5000

### 3. Frontend Setup
- cd frontend

### Install dependencies
- npm install
Start the frontend
- npm run dev
- Runs on: http://localhost:5173

### 4. API Endpoints (Backend) with postman 

GET /api/users → Get all users

GET /api/users/:id → Get a user by ID

POST /api/users → Create a new user

PUT /api/users/:id → Update a user

DELETE /api/users/:id → Delete a user

- Make sure MongoDB is running (local or Atlas).



