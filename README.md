# Irish Festivals Web App

A full‑stack web application built with **Node.js**, **Express**, **EJS**, and **MongoDB Atlas**.  
The app allows users to view, create, and explore Irish festivals through a clean and dynamic interface.

---

## Features

- Server‑side routing with **Express.js**
- Dynamic front‑end views using **EJS templates**
- CRUD operations for festival entries
- MongoDB Atlas cloud database integration
- Static assets served through Express (`public/`)
- Error handling and custom 404 page
- Seed script for populating initial data

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express.js |
| Frontend | EJS templating engine, CSS |
| Database | MongoDB Atlas (Mongoose ODM) |
| Tools | npm, Visual Studio Code |

---

## 📁 Project Structure
.
├── app.js
├── seeds.js
├── package.json
├── package-lock.json
├── .gitignore
├── models/
│   └── festival.js
├── views/
│   ├── index.ejs
│   ├── list.ejs
│   ├── festival.ejs
│   ├── create.ejs
│   ├── 404.ejs
│   └── partials/
│       ├── header.ejs
│       ├── nav.ejs
│       └── footer.ejs
└── public/
    ├── style.css
    └── images/

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash```
git clone https://github.com/aquarius2101/irish-festivals-web-app.git
cd irish-festivals-web-app

### 2. Install dependencies
Run the following codes:
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install ejs express mongoose nodemon
```

### 3. Create a .env file
Add your MongoDB Atlas connection string:
```MONGO_URI=your-mongodb-uri-here```

### 4. Seeding the database
```nodemon seeds```

### 5. Run the app
```nodemon app```

The server will start on:
http://localhost:3000







