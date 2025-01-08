# RideFlex

## Purpose
RideFlex is a web application designed to simplify the process of exploring and booking cars. The platform allows users to browse available cars, book their preferred vehicle, and manage their bookings seamlessly.

## Live URL
- [RideFlex Live Application](https://car-rental-e5aee.web.app/)

## Key Features
- **JWT Authentication**: Secure login and route protection using JSON Web Tokens.
- **Dynamic Car Listings**: Search, filter, and sort through available cars.
- **Real-time Booking Management**: Book cars, update booking details, and cancel bookings.
- **Responsive Design**: Optimized for mobile, tablet, and desktop users.
- **Data Visualization**: Interactive charts powered by Recharts.
- **User-Friendly Notifications**: Toast notifications with React Hot Toast.
- **Interactive Animations**: Smooth animations implemented using AOS and Lottie React.
- **Calendar Integration**: Date selection made easy with React Datepicker.
- **Interactive Alerts**: Elegant modal dialogs powered by SweetAlert2.

## NPM Packages Used
- **[aos](https://www.npmjs.com/package/aos)**: For scroll animations.
- **[axios](https://www.npmjs.com/package/axios)**: For API calls.
- **[date-fns](https://www.npmjs.com/package/date-fns)**: For date manipulation.
- **[firebase](https://www.npmjs.com/package/firebase)**: For authentication and database integration.
- **[lottie-react](https://www.npmjs.com/package/lottie-react)**: For animated vector graphics.
- **[react](https://www.npmjs.com/package/react)**: Core framework.
- **[react-datepicker](https://www.npmjs.com/package/react-datepicker)**: For calendar date selection.
- **[react-dom](https://www.npmjs.com/package/react-dom)**: React DOM manipulation.
- **[react-hot-toast](https://www.npmjs.com/package/react-hot-toast)**: For toast notifications.
- **[react-icons](https://www.npmjs.com/package/react-icons)**: For scalable vector icons.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)**: For routing.
- **[recharts](https://www.npmjs.com/package/recharts)**: For data visualization.
- **[sweetalert2](https://www.npmjs.com/package/sweetalert2)**: For interactive alerts and modals.
- **[swiper](https://www.npmjs.com/package/swiper)**: For responsive carousels.

---

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

## Run this command to install dependencies
`  npm i  `