# Contact List App

A simple full-stack **Contact List Management Application** built to gain practical experience in full-stack development using **Spring Boot, React.js, REST APIs, and PostgreSQL**.

The application allows users to create, view, update, and manage contact profiles through a React.js frontend connected to a Spring Boot backend via REST APIs.

> **Note:** This project was developed primarily as a learning project to gain hands-on experience with full-stack application development, backend development, database integration, REST APIs, React.js, and version control. Some parts of the development process were completed by following and learning from tutorials.

---

## 🚀 Features

* 📋 View all contacts
* 🔤 Contacts sorted alphabetically by name
* 👤 View individual contact details
* ➕ Create a new contact profile
* ✏️ Update contact profile details
* 🖼️ Update contact profile photo
* 📄 Pagination for contact lists
* 🔄 Frontend and backend communication using REST APIs
* 🔔 Toast notifications for user feedback
* 🗄️ PostgreSQL database integration

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **React Router DOM** – Client-side routing
* **Axios** – HTTP requests and API communication
* **React Toastify** – Notifications
* **CSS** – Styling and responsive UI

### Backend

* **Java**
* **Spring Boot**
* **Spring REST API**
* **Spring Data JPA**
* **Hibernate**

### Database

* **PostgreSQL**

### API Testing

* **Postman**

### Version Control

* **GitHub**

---

## 🏗️ Project Architecture

The project follows a basic full-stack architecture:

```text
┌─────────────────────────────┐
│        React.js Frontend    │
│                             │
│ React Router DOM            │
│ Axios                       │
│ React Toastify              │
│ CSS                         │
└──────────────┬──────────────┘
               │
               │ REST API / HTTP
               ▼
┌─────────────────────────────┐
│       Spring Boot Backend   │
│                             │
│ REST Controllers            │
│ Service Layer               │
│ Repository Layer            │
│ Spring Data JPA / Hibernate │
└──────────────┬──────────────┘
               │
               │ Database Access
               ▼
┌─────────────────────────────┐
│         PostgreSQL          │
│                             │
│       Contact Data          │
└─────────────────────────────┘
```

---

## 📌 Main Functionalities

### 1. View All Contacts

Users can view all available contacts in the application.

Contacts are displayed in **alphabetical order by name**, making it easier to find a specific contact.

### 2. View Contact Details

Users can select a contact and view their complete profile information.

### 3. Create Contact

A new contact profile can be created by entering the required contact information.

The React frontend sends the data to the Spring Boot backend through a REST API, where it is stored in the PostgreSQL database.

### 4. Update Contact

Existing contact information can be edited and updated.

### 5. Update Profile Photo

Users can update the profile photo associated with a contact.

### 6. Pagination

Pagination is implemented to avoid displaying a large number of contacts on a single page.

This also provided practical experience working with paginated data between the frontend and backend.

---

## 🗄️ Database

The application uses **PostgreSQL** as the relational database.

The Spring Boot backend communicates with PostgreSQL using:

* Spring Data JPA
* Hibernate
* JPA entities
* Repository interfaces

The database is responsible for persisting contact information.

---

## 🎯 Learning Objectives

The main purpose of this project was to gain practical experience in **full-stack development**.

Through this project, I practiced:

* Building REST APIs with Spring Boot
* Working with Spring Data JPA and Hibernate
* Connecting Spring Boot applications with PostgreSQL
* Designing backend CRUD operations
* Testing APIs using Postman
* Building user interfaces with React.js
* Using React Router DOM for navigation
* Making API requests using Axios
* Managing frontend notifications with React Toastify
* Working with pagination
* Handling profile images
* Connecting a React frontend with a Spring Boot backend
* Using Git and GitHub for version control
* Understanding the workflow of a full-stack application

---

## 📚 Learning Through Tutorials

This project was developed as a hands-on learning project. Tutorials and reference materials were used during parts of the development process to understand implementation approaches and full-stack development concepts.

The project was also used to practice implementing and understanding the concepts independently rather than simply focusing on completing the application.

---

## 👨‍💻 Purpose of the Project

This project represents my practical learning journey in **full-stack software development**, particularly focusing on the integration between a **React.js frontend, Spring Boot REST API backend, and PostgreSQL database**.

The main goal was to strengthen my understanding of how different technologies work together to build a complete web application.

---

## 📄 License

This project is created for educational and learning purposes.
