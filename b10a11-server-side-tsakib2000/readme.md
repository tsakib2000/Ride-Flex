# Car Rental Server

This is the backend server for the Car Rental application, providing APIs for managing user authentication, car listings, bookings, and reviews. The server is built using Node.js and Express and connects to a MongoDB database.

## Live URL

- Server API: [https://car-server-sage.vercel.app](https://car-server-sage.vercel.app)

## Purpose

This server handles:
- User authentication with JWT.
- Management of car listings.
- Booking and cancellation of cars.
- User reviews.
- Communication with a MongoDB database.

## Key Features

- **JWT Authentication**: Secures endpoints and ensures data protection.
- **Car Listings Management**: Add, view, update, and delete cars.
- **Booking System**: Book cars, update booking details, and cancel bookings.
- **User Reviews**: Fetch and manage user reviews.
- **CORS Setup**: Allows communication with specific frontend domains.
- **Cookie-Based Auth**: Tokens are stored in secure HTTP-only cookies for enhanced security.

## Environment Variables

The following environment variables must be set in a `.env` file for the server to function correctly:

```plaintext
PORT=5000
DB_USER=<your-mongodb-username>
DB_PASS=<your-mongodb-password>
SECRET_KEY=<your-jwt-secret-key>
