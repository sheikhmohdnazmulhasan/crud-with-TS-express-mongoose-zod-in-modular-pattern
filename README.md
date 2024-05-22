# CRUD Server with TypeScript, Express, Mongoose, and Zod in Modular Pattern

This repository contains a CRUD (Create, Read, Update, Delete) server built with TypeScript, Express, Mongoose, and Zod, following a modular pattern. This structure enhances code maintainability, scalability, and readability.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **TypeScript** for static typing and enhanced development experience.
- **Express** as a fast and minimalist web framework.
- **Mongoose** for elegant MongoDB object modeling.
- **Zod** for schema validation and type inference.
- **Modular pattern** to keep the codebase organized and scalable.

## Prerequisites
- Node.js (>= 14.x)
- npm or yarn
- MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sheikhmohdnazmulhasan/crud-server-with-TS-express-mongoose-zod-in-modular-pattern.git
   cd crud-server-with-TS-express-mongoose-zod-in-modular-pattern


2. Install dependencies:
   ```bash
    npm install
    # or
    yarn install

3. Create a .env file in the root directory and add your MongoDB connection string:

   ```bash
   MONGODB_URL=your_mongodb_connection_string

## Usage
1. Start the server:
   ```bash
   npm run start:dev
   # or
   yarn start:dev

2. The server will start on `http://localhost:5000`.

## Project Structure
    ```
    ├── src
    │   ├── config
    │   │   └── database.ts          # Database connection setup
    │   ├── controllers
    │   │   └── Controller.ts    # Controller for user-related operations
    │   ├── models
    │   │   └── Model.ts         # Mongoose schema and model for User
    │   ├── routes
    │   │   └── Routes.ts        # Express routes for user endpoints
    │   ├── schemas
    │   │   └── Schema.ts        # Zod schemas for user validation
    │   ├── services
    │   │   └── Service.ts       # Business logic for user operations
    │   ├── utils
    │   │   └── handleError.ts       # Utility for error handling
    │   ├── app.ts                   # Express app setup
    │   └── server.ts                # Server entry point
    ├── .env                         # Environment variables
    ├── .gitignore                   # Git ignore rules
    ├── package.json                 # NPM scripts and dependencies
    ├── tsconfig.json                # TypeScript configuration
    └── README.md                    # Project documentation



##Contributing
###Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.
















