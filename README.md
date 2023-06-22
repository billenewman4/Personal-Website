# Personal Website Repository

This is the source code for my personal website. You can check out the live version [here](https://personal-website-usw2.vercel.app).

## Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [Tailwind CSS](https://tailwindcss.com/).

A Node.js server is used to handle email functionality in the contact form. For a complete list of dependencies used in both the client and the server side, refer to the `package.json` file.

## Frontend

### Navigation Bar

A default navigation bar is loaded across all pages of the website.

### Components

Various React components are used to create and manage content on different pages throughout the website.

## Contact Form and Backend

The `server.js` file is set up to listen for form submissions from the contact page and utilizes [Nodemailer](https://nodemailer.com/about/) to send an email to my personal address.

The email credentials are securely stored using a `.env` file. When implementing this project in your own environment, ensure to create your own `.env` file for storing sensitive credentials.
