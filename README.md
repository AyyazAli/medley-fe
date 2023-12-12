# Tech Test Brief

## Overview

Hi, I've uploaded the code to the repo and have attached this readme file to walk you thorugh the project

You can view my video of walking you through the project here: https://www.loom.com/share/c519a4743fe444f89e03ea8e69808889?sid=fe16ce8b-01a4-405a-9211-dcee00528d9c


## Technical Details

### General

- The application is built using NextJs With Typescript
- I'm using Styled Components to develop components and style it properly
-  I have implemented the pagination using React-paginate
- Added the Search functionality as well


### How to Run the Application
Open terminal and run these commands
1. **Open Project** cd medley-fe-tech-test

2. **NPM Install** npm install
This will install the required packages to the code

3. **Run The Project** npm run dev
This will start the project and you can load the project at http://localhost:3000

**Walk Through**
Go through this Loom video to see how the application is working, I've tried to keep the edge cases in mind as well.

https://www.loom.com/share/c519a4743fe444f89e03ea8e69808889?sid=fe16ce8b-01a4-405a-9211-dcee00528d9c

### API Integration

You will be integrating with an existing API. Here are the details of the endpoints you will need to interact with:

1. **Payouts Endpoint**

   **Endpoint:** `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts`

   **Method:** GET

   **Description:** I'm using this endpoint to make the pagination work and using page number & limit as identifiers for the API

3. **Search Endpoint**

   **Endpoint:** `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=SEARCH_TERM`

   **Method:** GET

   **Description:** Search functionality is using this API endpoint to search and list the records on the page