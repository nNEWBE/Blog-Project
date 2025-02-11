# 📝 [Blog Project](https://blog-project-psi-one.vercel.app/)

Welcome to the **Blog Project**! This project is a robust backend system for a blogging platform, supporting secure authentication, role-based access control, and efficient blog management.

## 🚀 Features

- **User Roles:** Admin & User
- **Authentication & Authorization:** Secure JWT-based authentication
- **Blog Management:** Create, update, delete, and view blogs
- **Search, Sort & Filter:** Advanced querying for blogs
- **Admin Controls:** Block users, delete any blog

## 🛠️ Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**

## 👥 User Roles

- **Admin:**
  - Can delete any blog
  - Can block/unblock users
  - Cannot update blogs
- **User:**
  - Can register and log in
  - Can create, update, and delete their own blogs
  - Cannot perform admin actions

## 🔐 Authentication & Authorization

- **JWT Authentication** for secure access
- **Role-based Authorization** to differentiate between Admin and User permissions

## 📦 API Endpoints

| **Endpoint**                  | **Method** | **Description**                        | **Access**       |
|-------------------------------|------------|----------------------------------------|------------------|
| `/api/auth/register`         | POST       | Register a new user                    | Public           |
| `/api/auth/login`            | POST       | Log in and receive JWT token           | Public           |
| `/api/blogs`                 | POST       | Create a blog                          | User (Logged In) |
| `/api/blogs/:id`             | PATCH      | Update own blog                        | User (Logged In) |
| `/api/blogs/:id`             | DELETE     | Delete own blog                        | User (Logged In) |
| `/api/blogs`                 | GET        | Get all blogs (search, sort, filter)   | Public           |
| `/api/admin/users/:id/block` | PATCH      | Block a user                           | Admin            |
| `/api/admin/blogs/:id`       | DELETE     | Delete any blog                        | Admin            |

This table gives an overview of the available API endpoints for the Blog Project application.

## 🔎 Query Parameters for Blogs

- **`search`** - Filter blogs by title or content (e.g., `?search=tech`)
- **`sortBy`** - Sort blogs by fields (e.g., `?sortBy=createdAt`)
- **`sortOrder`** - Define sort order (`asc` or `desc`)
- **`filter`** - Filter blogs by author ID (e.g., `?filter=authorId`)

## 📂 Folder Structure

```plaintext

src/
├── builder/
├── config/
├── errors/
├── interface/
├── middlewares/
│   ├── auth.ts
│   ├── globalErrorHandler.ts
│   ├── notFoundHandler.ts
│   └── validateRequest.ts
├── modules/
│   ├── Admin/
│   ├── Auth/
│   ├── Blog/
│   └── User/
├── routes/
├── utils/
├── app.ts
└── server.ts


```

## 🧪 Setup Instructions

**1. Clone the Repository:**

```bash
git clone https://github.com/nNEWBE/Blog-Project.git
```

**2. Install Dependencies:**

```bash
npm install
```

**3. Set up .env file: Create a .env file in the root directory and add:**

```bash
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
```

**4. Compile TypeScript:**

```bash
npm run build
````

**5. Start the Server:**

- Production Mode

```bash
npm run start:prod
```

- Development Mode

```bash
npm run start:dev
```

## 🗂️ Admin Credentials

- **Email:** `admin@gmail.com`
- **Password:** `admin1234`

## 🎥 Project Overview Video

- [Watch the project overview here](https://www.canva.com/design/DAGevddER6k/sTIwE34zCe9oIhHo395Zzg/watch?utm_content=DAGevddER6k&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel) 🎬

## 🌐 Live Deployment

- [Live API Server](https://blog-project-psi-one.vercel.app/) 🔗
