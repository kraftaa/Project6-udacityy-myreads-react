## Project 6 MyReads React App

## Table of Contents

* [Motivation](#motivation)
* [Description](#description)
* [Tools](#tools)
* [Files](#files)
* [Installation](#installation)
* [Result](#result)
* [Instructions](#instructions)
* [Contributing](#contributing)


## Motivation

This project is the sixth project of Front End Developer Nanodegree.
This is a project which build with React.
The scholars provided with the starter code (a static example of the CSS and HTML markup that may be used), backend server and instructions.
Scholars need to create working React app.

## Description

This is a book review application which allows user to search a book based on the author's name or a title, pick a book and move to one of designated shelves:
 - "Currently reading"
 - "Want to read"
 - "Read"
 If user is looking for a book in a search and this book is not assigned to a shelf, then it has a shelf "none", which equals to "None" in dropdown menu.

## Tools

This project has been done with:

 [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML),
 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
 [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS),
 [ServiceWorkers] (https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API),
 [CSS Validator] (https://jigsaw.w3.org/css-validator/validator),
 [React in DevTools] (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en),
 [Create React App] (https://github.com/facebook/create-react-app)
 [React] (https://github.com/facebook/create-react-app)

## Files

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Book.js # Book React component, created to convert static page into react application
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Main.js # Main page React component, created to convert static page into react application
    ├── Searh.js # Search page React component, created to convert static page into react application
    └── Shelf.js # Shelf React component, created to convert static page into react application

```

## Installation

To install all dependencies use "npm install".
To start a server use "npm start"


## Result

As a resulf of creating react components provided starter static page become a working React application.


## Instructions

In order to use this app you need to start a server ("npm start"), it would bring you to the main page.
You can see some books on the shelves.
You can use dropdown menu on each book to move book between shelves.
You can click on the "+" sign, it would bring you to the search page.
You can choose any book and move it to the desired page.
If you clean the search form, then the search page become empty.


