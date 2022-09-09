<a name="readme-top"></a>
<div align="center">
  <a href="https://natalia-nails.netlify.app">
    <img src="https://res.cloudinary.com/dio4dx3uy/image/upload/v1662642557/natalia-nails/NNthumb_m5fzfv.jpg" alt="Logo" width="800">
  </a>

  <h3 align="center">Nails Art Studio</h3>

  <p align="center">
    Please read the docs to see all hidden features!
    <br />
    <a href="https://natalia-nails.netlify.app"><strong>Explore »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT -->

## About The Project

This project is build as an exercise on what I have learned about React, but it will also serve it's real purpose being promo website.

<!-- BUILD -->

### Built With

The app is build using ReactJS 18 and Firebase 9  
[![React][react.js]][react-url]

<!-- GETTING STARTED -->

## Getting Started

Live demo: [https://natalia-nails.netlify.app](https://natalia-nails.netlify.app)

For local installation please keep in mind that this app uses Firebase 9, therefore you will need to setup your own Firebase app as a back-end.

<!-- PREREQUISITES -->

### Prerequisites

Make sure you have npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

<!-- INSTALLATION -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Digital-Human-BK/Nails-Art.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Setup your Firebase in `firebase-config.js` file
   ```js
   const firebaseConfig = {
     apiKey: YOUR_FIREBASE_KEY_HERE,
     authDomain: YOUR_FIREBASE_KEY_HERE,
     projectId: YOUR_FIREBASE_KEY_HERE,
     storageBucket: YOUR_FIREBASE_KEY_HERE,
     messagingSenderId: YOUR_FIREBASE_KEY_HERE,
     appId: YOUR_FIREBASE_KEY_HERE,
     measurementId: YOUR_FIREBASE_KEY_HERE,
   };
   ```
4. Run start command and open the app at http://localhost:3000
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

This Web App consits of two main parts:

1. Public, which has a promotional/representational purpose;
   This part of the app is what the consumer sees. There are only 2 pages that can be visited. Landing/Home page and Catalog Page
   <div align="center">
      <img src="https://res.cloudinary.com/dio4dx3uy/image/upload/v1662645941/natalia-nails/landing_t20o8v.jpg" width="800"/>
   </div>
   <br />
2. Private, accessible only by admins, which can add, update, delete content like prices, descriptions, services, catalog images etc.  
 To access the admin panel it's required manual navigation to https://natalia-nails.netlify.app/admin. Successfully logged in users will be able to see and use admin panel.
   <div align="center">
   <img src="https://res.cloudinary.com/dio4dx3uy/image/upload/v1662646406/natalia-nails/admin_n8znle.jpg" width="800"/>
   </div>
   <br />  
    If unauthorized user manages to log-in and access the admin panel and then tries to change, delete or add new data, Firebase will reject the request and an *Unauthorized* pop-up will appear.  
    Test account > email - mike@gmail.com, password - 111111.
    <div align="center">
      <img src="https://res.cloudinary.com/dio4dx3uy/image/upload/v1662646843/natalia-nails/pop_yzfdow.jpg" width="800"/>
   </div>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Biser Karazhov - [Linked In](https://www.linkedin.com/in/biser-karadzhov-b03594238/)

Email me: [biser.karadzhov@gmail.com](biser.karadzhov@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LINKS -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
