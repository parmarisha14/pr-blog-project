<img width="1913" height="901" alt="Screenshot 2025-09-04 181603" src="https://github.com/user-attachments/assets/5df21d09-6098-4d3d-a6e1-80bf383b2cdc" />

<img width="1919" height="900" alt="Screenshot 2025-09-04 181550" src="https://github.com/user-attachments/assets/546fac4c-a085-4fd6-be65-d84b875f3229" />

<img width="1919" height="900" alt="Screenshot 2025-09-04 181550" src="https://github.com/user-attachments/assets/81b922ce-7b6e-45d7-8295-2d68d7b61836" />

<img width="1893" height="905" alt="Screenshot 2025-09-04 180908" src="https://github.com/user-attachments/assets/c8271195-31ae-47b7-975c-761c44f2688f" />

<img width="1896" height="904" alt="Screenshot 2025-09-04 181017" src="https://github.com/user-attachments/assets/0e52e4b2-308c-4af5-9bd0-5af2e53dc219" />

<img width="1431" height="885" alt="Screenshot 2025-09-04 181031" src="https://github.com/user-attachments/assets/f69d247d-701d-49a2-b3c9-5495068c180b" />

<img width="1897" height="894" alt="Screenshot 2025-09-04 181425" src="https://github.com/user-attachments/assets/5becfc2a-f910-4022-a021-8771e0b58737" />

Blog Project Folder Structure

```bash
BlogProject/
│
├── .env.example            # Environment variable template
├── package.json            # Project metadata & dependencies
├── package-lock.json       # Dependency versions
├── index.js                # Main entry point of the application
├── README.md               # Project documentation
│
├── configs/                # Configuration files
│   └── database.js         # MongoDB connection setup
│
├── controllers/            # Handles business logic
│   ├── blog.controller.js  # CRUD operations, likes, comments
│   └── user.controller.js  # User authentication, profile handling
│
├── middlewares/            # Custom middleware functions
│   └── auth.js             # Route protection (isAuthenticated)
│
├── models/                 # Database schemas (Mongoose models)
│   ├── blog.model.js       # Blog schema
│   └── user.model.js       # User schema
│
├── routers/                # Route definitions
│   ├── blog.routes.js      # Blog routes
│   └── user.routes.js      # User routes
│
├── views/                  # EJS templates for front-end rendering
│   ├── partials/           # Reusable partials
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs           # Home page (all blogs)
│   ├── profile.ejs         # User profile with blogs
│   ├── addblog.ejs         # Add blog form
│   ├── edit.ejs            # Edit blog form
│   ├── login.ejs           # User login page
│   └── register.ejs        # User signup page
│
├── public/                 # Static files (served directly)
│   ├── css/                # Custom stylesheets
│   ├── js/                 # Custom JS scripts
│   └── images/             # Placeholder and uploaded images
│
└── node_modules/           # Installed dependencies

# 📖 Blog Project

A modern **Blog Application** built with **Node.js, Express, and MongoDB**, featuring authentication, post management, and dynamic rendering using templating.  
This project demonstrates scalable folder structuring, middleware usage, and environment variable configuration for production-ready deployment.

---

## 🚀 Features

- 📝 Create, edit, and delete blog posts  
- 🔐 User authentication (Login/Signup)  
- 📂 Organized MVC architecture  
- ⚡ RESTful APIs  
- 🎨 Dynamic views with EJS  
- 🌍 Environment variables for secure config  
- 📑 Middleware-based request handling  
- 📊 MongoDB for data persistence  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Templating Engine:** EJS  
- **Environment Management:** dotenv  
- **Others:** Middleware, Controllers, Routers  

---
