# 🌟 Star Wars Planets 🌌

## Created by Dave Anians for the Application Engineer (2) position

Click [here](https://cranky-benz-ed5914.netlify.app/) to view a live version of this app hosted on Netlify.



## Setup for running locally

This project was built with [Create React App](https://create-react-app.dev/).

To run locally:

1. Clone this repository: ```git clone https://github.com/DaveyDevs/star-wars-api-to-table.git```

2. ```cd``` into the root folder: ```cd star-wars-api-to-table && cd swapi-app```
3. Install the dependencies with npm or yarn: ```npm install``` or ```yarn install```
   - If neither is installed on your machine: [Instructions for installing npm](https://www.npmjs.com/get-npm) or [installing yarn](https://classic.yarnpkg.com/en/docs/cli/install/)
   - Note: This project was created with npm version 6.14.10 and yarn version 1.22.10. It may not work if your version looks significantly older than this.
4. Start the local server: ```npm run start``` or ```yarn start```

5. Open http://localhost:3000/ in your browser to view the site.



## Notes on development process

### Why React/Create React App?

- React is currently the most popular JavaScript library and also the one I am most familiar with for projects like these.
- I have worked on multiple React applications that fetch data from an API and then render it to the user's view. 
- React Hooks: useState and useEffect are a simple and effective way to render the finished table or the loading and error messages on page load (and once the component mounts).

- Using Create React App also provides structure for creating new concepts and testing in a development environment and allows for less setup time. 
- Running the development environment provides error checking and warns you of potential problems with syntax or functionality.
- For future enhancement, React allows for breaking the functionality into further reusable components and has tools like PropTypes which help with type checking and error handling when passing data from one component to another.



### Steps taken:

- Reviewed directions, looked at previous similar projects, researched potential solutions and any issues to look out for. 
- Initiated repository and installed Create React App, deleted unneeded template files.
- Created a PlanetList.js component to hold the main functionality, API request, and render.
- Added useState and useEffect to trigger the fetch request and store the planet data, loading state, and error state.
- Developed async await fetch request (try, catch) and basic render of data into table cells using the JS map method.
- Tested functionality with various pages from API.
- Added logic via calling two functions to find surface area and amount covered by water for each planet.
- Added a function call to the JSX render of each piece of data to display a question mark for "unknown" fields.
- Added alphabetical sort by name into  the same function as the fetch request.
- Added gray border lines to table, also added normalize.css and CSS from [HTML5BoilerPlate](html5boilerplate.com/) to normalize basic style across different browsers and make future additions and styling easier.
- Almost forgot to format large numbers into groups of three, added separate function to do so and called it in two fields guaranteed to have large numbers (population and surface area).
- Had a nice Chicago summer evening, ordered pizza (Stereotypical, I know).
- Slept.
- Tested with NVDA screen reader (The space emojis in the title are fun but probably not as accessible as they could be).
- Sent the project to my friend and web development partner Nathan to check that it looks okay and that I didn't miss anything embarrassing. 
- **Total coding time: 4 hours (plus 1 hour for README)**

### Future enhancement:

With more time to work on this project, I would like to:

- Complete a final step from directions: Make the links to each planet open in a new window.
- Further componentize the functionality to shorten the files and potentially make them reusable for different applications. (Example: Create a Planet component and pass in props to hold the JSX being rendered with the .map method.)
- Related to above, import the PropTypes tool to check and ensure that the data types coming from the API are correct.
- Create a timeout in the fetch request in case it takes too long to complete.
- Review and update HTML to make more semantic, as needed.
- Make the table responsive and check accessibility as that's done. This article seems like an interesting dive into possible solutions: https://www.smashingmagazine.com/2019/01/table-design-patterns-web/
- Research Axios as a solution for fetch requests, as it is more compatible with older browsers. I would want to look at other tools, such as polyfills, to ensure React works as well. I understand that government agencies and similar clients may still use older browsers for their applications.
- Look at how to possibly refactor some of the function calls to check for "unknown" or split large numbers.
- Find a solution for screen readers to be able to read large numbers without commas.
- Set up an .env file to hold the API information in case private variables are used in the future.
- Test performance and find ways to enhance.
- Do it again but with Star Trek. 
