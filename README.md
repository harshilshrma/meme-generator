# 🃏Meme Generator

Live Demo: https://meme-generator-by-harshil.vercel.app/

**Note:** This project was built entirely by hand as part of my React fundamentals learning path. No AI coding tools or autocomplete, just writing everything myself to properly understand how React handles state, effects, and external API data.

This isn't a full meme editor with download support, and not every meme fits the classic top-text/bottom-text format, but the point wasn’t perfection. I built this mainly to learn useEffect, API fetching, and dynamic state updates in React.

## Overview

This Meme Generator is a simple React app where users can load random meme images and add their own text to create a custom meme.  The project was built to understand how to fetch and use external data inside React components, and how UI updates as state changes.



## What I Learned

This project helped reinforce:

- `useEffect` for fetching data on component load  
- Fetching external APIs and working with JSON response data  
- Updating state based on user input (`useState`)  
- Working with controlled form fields  
- Selecting random items from an array  
- Passing data between components  
- Organizing React files into components  
- Styling React apps with modular CSS


## Features

- Fetches meme image templates from an external API  
- Displays a random meme image from the fetched list  
- Allows user to enter custom top/bottom text  
- Updates UI reactively whenever state changes  
- Fully handwritten for skill-building and practice  

## Tech Stack

- React (state, effects, controlled inputs)
- Vite (bundler + dev server)
- JavaScript (ES6+)
- CSS


## Screenshot

![Final Look](./public/finalLook.png)


## File Structure

```
src/
 ├─ assets/
 │   └─ troll-image.png
 ├─ components/
 │   ├─ Header.jsx
 │   └─ Main.jsx
 ├─ App.jsx
 ├─ App.css
 ├─ index.css
 └─ main.jsx

public/
 └─ finalLook.png
```


## How to Run

Install dependencies:

```
npm install
```

Run local development server:

```
npm run dev
```

