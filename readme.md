# 📝 Blog Platform Backend API

A modern **Blog Platform REST API** built with **Node.js, Express.js, TypeScript, Prisma ORM, PostgreSQL, and JWT Authentication**. It powers a Medium-style blogging platform with authentication, blog management, comments, likes, search, trending posts, image uploads, and more.

---

# 🚀 Tech Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* Prisma ORM
* JWT Authentication
* bcrypt
* Cookie Parser
* CORS
* Cloudinary (Image Upload)
* Tiptap Editor (Frontend)

---

# ✨ Features

## 🔐 Authentication

* User Signup
* User Login
* JWT Authentication
* HttpOnly Cookies
* Logout
* Current Logged-in User API
* Protected Routes

---

## 📝 Blog Posts

* Create Post
* Update Post
* Delete Post
* Get All Posts
* Get Single Post
* Get Post by Slug
* Public / Private Posts
* Featured Thumbnail
* Rich HTML Content (Tiptap)

---

## 💬 Comments

* Create Comment
* Get Comments by Post
* Delete Own Comment

---

## ❤️ Likes

* Like Post
* Unlike Post
* Like Count
* Prevent Duplicate Likes

---

## 🔍 Explore

* Search Blogs
* Latest Blogs
* Trending Blogs (Most Liked)

---

## 🖼 Image Upload

* Cloudinary Integration
* Thumbnail Upload
* Inline Image Upload

---

## 🗂 Database

* Users
* Posts
* Comments
* Likes

---

# 📁 Project Structure

```text
src
│
├── controllers
│   ├── auth
│   ├── posts
│   ├── comments
│   ├── likes
│   └── me
│
├── routes
│   ├── auth
│   ├── posts
│   ├── comments
│   ├── likes
│   └── me
│
├── middleware
│   └── auth.middleware.ts
│
├── lib
│   └── prisma.ts
│
├── utils
│
├── app.ts
└── server.ts
```

---

# 📦 Installation

Clone the repository

```bash
git clone <repository-url>

cd backend
```

Install dependencies

```bash
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file.

```env
DATABASE_URL="postgresql://USER:PASSWORD***********"

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret

ACCESS_TOKEN_EXPIRES=15m

REFRESH_TOKEN_EXPIRES=7d

PORT=5000
```

---

# Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# ▶ Running the Server

Development

```bash
npm run dev
```

Production

```bash
npm run build

npm start
```

---

# 🔐 Authentication Flow

```
Signup
     │
     ▼
Password Hash (bcrypt)
     │
     ▼
Save User
     │
     ▼
Login
     │
     ▼
Generate JWT
     │
     ▼
Store Access Token
(HttpOnly Cookie)
     │
     ▼
Protected APIs
```

---

# 📚 Main API Endpoints

## Authentication

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /api/signup  |
| POST   | /api/login   |
| POST   | /api/logout  |
| GET    | /api/current |

---

## Posts

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | /api/posts       |
| GET    | /api/posts/:slug |
| POST   | /api/posts       |
| PATCH  | /api/posts/:id   |
| DELETE | /api/posts/:id   |

---

## Comments

| Method | Endpoint              |
| ------ | --------------------- |
| GET    | /api/comments/:postId |
| POST   | /api/comments         |
| DELETE | /api/comments/:id     |

---

## Likes

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/likes/:postId |
| DELETE | /api/likes/:postId |
| GET    | /api/likes/count   |

---

## Explore

| Method | Endpoint                  |
| ------ | ------------------------- |
| GET    | /api/posts/search?q=react |
| GET    | /api/posts/latest         |
| GET    | /api/posts/trending       |

---

# 🗄 Database Schema

```
User
 ├── Posts
 ├── Comments
 └── Likes

Post
 ├── Author
 ├── Comments
 └── Likes

Comment
 ├── User
 └── Post

Like
 ├── User
 └── Post
```

---

# 🛡 Security

* Password Hashing (bcrypt)
* JWT Authentication
* Protected Routes
* HttpOnly Cookies
* Authorization Middleware
* Duplicate Like Prevention
* Ownership Check Before Delete

---

# 📸 Images

Images are uploaded using **Cloudinary**.

Supports

* Featured Thumbnail
* Images inside blog content

---


# 👨‍💻 Author

**Muhammad Nehal Tariq**

Full Stack Developer

Tech Stack

* Next.js
* React
* TypeScript
* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* MongoDB
* Tailwind CSS

---

# ⭐ If you like this project

Give it a ⭐ on GitHub.
