<div id="#top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Spacestagram</h3>

  <p align="center">
    Front End Developer Intern Challenge - Summer 2022
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#the-challenge">The Challenge</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>







<!-- ABOUT THE PROJECT -->
## About The Project
![shopify-summer-challenge-mobile_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/45029973/148666270-7b7a149e-3a51-4bb4-824c-428ef587d4f8.gif)
![shopify-summer-challenge-desktop_AdobeCreativeCloudExpress (2)](https://user-images.githubusercontent.com/45029973/148666238-2f8a0966-d08a-4e0c-846d-cb1e207c2e88.gif)

This project was created as a part of shopify's summer intern challenge. Check out the 
[Live Demo](https://spacetagram-zeta.vercel.app/) here.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- THE CHALLENGE -->
## The Challenge

We need a webpage that can pull images, and allow the user to “like” and “unlike” their favourite images.

We'd like a simple to use interface that makes it easy to:
* Fetch data from one of NASA’s APIs and display the resulting images.
* Display descriptive data for each image (for example: title, date, description, etc.)
* Like an image
* Unlike an image

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With


* Typescript 
* React.js
* Redux
* React Router
* React Spring
* Tailwind CSS

<p align="right">(<a href="#top">back to top</a>)</p>


### Key Features

* User friendly loading state and error handling.
* Display title, image, description and the date.
* Animated Like and dislike button (Heart).
* Infinite scroll.
* Saving likes if the user leave or reload the page.
* Spring based animation.


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Get a free API Key at [https://api.nasa.gov](https://api.nasa.gov)
2. Clone the repo
   ```sh
   git clone https://github.com/d-liya/spacetagram.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a .env file in the project root directory and add 
   ```js
   REACT_APP_NASA_API_KEY=<YOUR_API_KEY>
   ```
5. Start the Development server using  
   ```sh
   npm start
   ```
6. Visit localhost:3000 (Might change the port if it's already in use.)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Identifying which technologies to use.
- [x] Researching Shopify’s color palletes and design guide lines.  
- [x] Coming up with a rough prototype which align with th Shopify’s ecosystem.
- [x] Converting the design to code.
- [x] Adding animations.
- [x] Fixing edge cases (responsiveness)
- [x] Testing & Deploying
 
 

<p align="right">(<a href="#top">back to top</a>)</p>



