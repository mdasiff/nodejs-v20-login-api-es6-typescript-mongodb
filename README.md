# Node Js Login API ES6 TypeScript with mongodb

This project is a RESTful Login API developed using Node.js with ES6 syntax and TypeScript for type safety. It utilizes MongoDB as the database to manage user data and authentication details. The API features secure user authentication through JWT (JSON Web Tokens) and supports common actions such as user registration, login, and session management. It follows best practices for error handling, input validation, and code organization, providing a robust and scalable foundation for authentication-based applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Base URL](#api-documentation)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:mdasiff/nodejs-v20-login-api-es6-typescript-mongodb.git

2. Install dependencies:

   ```bash
   npm install

## Usage

For development:

```bash
npm run dev
```

For production:
```
npm run build
npm start
```

## Environment Variables

The project uses environment variables, defined in a .env file in the root directory. Below are the required variables:

```bash
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@<mongodb-connection>/<db>
JWT_SECRET=wsp+^q4tjgy^p4*352d&4gw&c0cj813@axmh1we87yj6@m
RECAPTCHA_SECRET_KEY=6LcftTMqAAAAAKRykfyTmZwmC5TrnQRcuUZ23e7e
RESEND_API_KEY=re_26oS9U9y_88C35S578tnjAfKehyJZdARv
```

## Base URL

Login url
```bash
Base URL: http://localhost:4000/api/admin/auth
