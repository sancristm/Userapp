# UserApp
This task evaluates your ability to create a basic user management system focusing on registration, login, and simple profile management. Your solution should demonstrate clean code, basic security practices, and an understanding of frontend-backend integration

# **User Profile Management Application**

This is a full-stack application that allows users to manage their profiles. Users can log in, view their profile details, edit their information, and log out securely. The application features user authentication and utilizes a backend API for handling user data.

---

## **Features**

1. **User Authentication**
   - JWT-based authentication.
   - Secure login and logout functionalities.

2. **Profile Management**
   - View user profile details.
   - Edit profile information (name, email, and password).

3. **Error Handling**
   - Comprehensive client-side and server-side error handling with meaningful feedback for users.

4. **Secure Data Storage**
   - Passwords hashed using `bcrypt`.
   - Authorization headers ensure secure API calls.

---

## **Tech Stack**

### **Frontend**
- **Framework**: React (with Vite for development)
- **Styling**: Material-UI
- **HTTP Client**: Axios

### **Backend**
- **Framework**: Node.js with Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT
- **Password Hashing**: bcrypt

---

## **Installation and Setup**

### **Prerequisites**
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)
- A modern web browser

### **Setup**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. Install dependencies for both frontend and backend:

cd frontend
npm install
cd ../backend
npm install


3. Create a .env file in the backend directory and add the following:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>


4. Start the backend server:

cd backend
npm start


5. Start the frontend server:

cd frontend
npm run dev


6. Open the application in your browser:

http://localhost:3000

---

API Endpoints

User Profile Endpoints

---

## How It Works

Login Flow

1. User logs in by providing their email and password.


2. A JWT token is issued upon successful authentication and stored in localStorage.



### Profile Management

1. Upon logging in, the app fetches the user's profile data using the /api/users/profile endpoint.


2. The data is rendered on the profile page.


3. Users can switch to "Edit Mode" to update their name, email, or password.


4. Updated data is sent to the backend using the /api/users/profile endpoint.



### Logout

Clicking the "Logout" button removes the JWT token and redirects the user to the login page.

---

## Future Improvements

Add profile image upload support.

Enhance error logging with monitoring tools.

---

## Contributing

1. Fork the repository.

2. Create a new branch for your feature/fix.

3. Commit and push your changes.

4. Open a pull request for review.




