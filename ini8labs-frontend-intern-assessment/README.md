### **README.md**:
```markdown
# User Registration Application

This is a full-stack user registration application built with Node.js, Express, MongoDB for the backend, and React with Vite for the frontend. The application allows users to register, view a list of registered users, update user information, and delete users.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [License](#license)

## Features

- **User Registration**: Add new users with name, email, and date of birth.
- **View Users**: Display a list of registered users.
- **Update Users**: Edit existing user information.
- **Delete Users**: Remove users from the list.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Getting Started

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install the required packages**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `backend` directory and add your MongoDB URI:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/your_db_name
   PORT=5000
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install the required packages**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `frontend` directory and add the API URL:
   ```plaintext
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the frontend development server**:
   ```bash
   npm run dev
   ```

## Usage

- Navigate to `http://localhost:5000` to view the frontend application.
- The backend API will be available at `http://localhost:5000/api`.

## API Endpoints

### Users API

- **Get All Users**: `GET /api/users`
- **Add a New User**: `POST /api/users`
- **Update a User**: `PUT /api/users/:id`
- **Delete a User**: `DELETE /api/users/:id`

## Technologies

- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Styling**: CSS

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
This README file provides a comprehensive guide for anyone who wants to set up and run the project.