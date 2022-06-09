## GigVistas - Software Development Engineer in UI Assignment

This coding assignment is aimed towards candidates applying for the position of a Software Development Engineer (I/II) in UI in the platform development team of [GigVistas](https://gigvistas.com)

The idea behind this assignment is to give candidates a hands-on experience of what it is like to work at GigVistas. Candidates interested in applying to this role are requested to follow the instructions below

## Problem Statement

### The objective is to build a job search page which works like the [gig search page on the website](https://gigvistas.com/search/gig/) with the following user behaviour
1. User should be able to search jobs based on a search term
2. User should be able to view the list of results with each job showing the following fields
    * Title of the Job
    * Name of the Employer
    * Logo of the Employer
    * Category of the Job
    * Expertise of the Job
    * Top Skills required for the Job
    * Time Commitment required for the Job

## Available Boiler Plate Code
 * Use this project as the boiler plate code for developing the search functionality
 * This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
 * Use redux toolkit for state management
 * Use the [Material UI](https://https://mui.com/) library for building form and display components

## Available Search API
The search API endpoint can be publicly accessed at 
```
https://alpha.gigvistas.com/web-app-api/website/api/v1/gig/search?searchTerm=java&pageNumber=0
```

The search API takes in 2 request parameters
```
searchTerm
pageNumber
```

**Note: The API returns a paginated list of search results with a fixed page size of 50**


## Guidelines for Submission
* Please clone this repository, write your code and push it to a new personal github repository 
* Please send an email to [careers@gigvistas.com](mailto:careers@gigvistas.com) with the link to the github repository of your solution and your resume with the subject **SDE in UI - Assignment Submission**