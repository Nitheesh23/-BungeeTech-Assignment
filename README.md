**Project Name**
I have developed a movie app primarily using React.js and the TMDB API.
----------------------------------------------------------------------------------------------------------------------------------
**Table of Contents**
Features
Setup and Run Instructions
Usage
Assumptions and Decisions
Screenshots
API Reference
Technologies Used
-----------------------------------------------------------------------------------------------------------------------------------
**Features**
    **Feature 1:** I have implemented filter options for both year and genre in my movie app.
    **Feature 2:** I have added a search option to my movie app.
    **Feature 3:** I have incorporated a watchlist feature in my movie app..
-----------------------------------------------------------------------------------------------------------------------------------
**Setup and Run Instructions**
**Clone the repository:**
git clone https: https://github.com/Nitheesh23/-BungeeTech-Assignment.git

**Navigate to the project directory:**
cd project-directory

**API Key:**
Obtain an API key from [TMDB API].
Replace the placeholder variable in the relevant file (e.g., index.js) with your own API key:
const API_KEY = "your-api-key-here";
my api key : 1749ee86927c862e6ac40360e3eb8c0d
`https://api.themoviedb.org/3/movie/upcoming?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1`
**Run the application:**
Open the index.html file in a browser to view the application.
------------------------------------------------------------------------------------------------------------------------------------
**Usage**
**Feature 1:** I have implemented filter options based on year and genre, enabling users to easily identify movies according to these criteria.
**Feature 2:** I have implemented a user-friendly and easily accessible search option in my movie app. This feature allows users to effortlessly search for movies.
**Feature 3:** I have implemented a watchlist option in my movie app that lets users add movies to their watchlist. They can later view their favorite movies from this list. 
-----------------------------------------------------------------------------------------------------------------------------------------------
**Interaction**
In the movie app, users can easily navigate through various sections, enhancing their overall experience. Here’s how the interaction unfolds:
1. **Home Tab**: 
   - Upon launching the app, users land on the Home tab, where they can explore a diverse selection of movies. Each movie card displays essential information, such as the title, genre, and release year.
2. **Search Feature**: 
   - Users can utilize the search bar at the top of the Home tab to quickly find specific movies. The search is user-friendly and responsive, providing results as the user types.
3. **Filter Options**: 
   - Users can filter movies by year and genre using dropdown menus. This feature allows for efficient navigation, making it easier to identify movies based on preferred criteria.
4. **Watchlist Tab**: 
   - Clicking on the "Watchlist" tab takes users to a dedicated section where they can view all movies they've added to their watchlist. This tab displays movie titles along with options to remove them from the list if they choose to.
5. **Adding to Watchlist**: 
   - When users find a movie they want to save, they can simply click the "Add to Watchlist" button on the movie card. This action instantly adds the movie to their watchlist and confirms the addition with a brief notification.
6. **Viewing Favorites**: 
   - In the Watchlist tab, users can easily access their favorite movies anytime. The layout is clean and organized, allowing for quick browsing through their selected films.
7. **User-Friendly Navigation**: 
   - The app's design ensures seamless navigation between tabs. Users can switch between the Home tab and Watchlist tab effortlessly, providing a smooth experience.
Overall, the interaction design prioritizes user convenience, allowing them to discover, filter, and save their favorite movies with ease.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**API Reference**

**API provider :** TMDB API 
**API link:** https://www.themoviedb.org/login
  1) Endpoint 1: I have utilized an endpoint to display movie details, including the name, rating, and year.
     curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' \
     --header 'Authorization: Bearer          
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGFlNTZmZWE1NjU3ZjU0YTU3YjU4MWNlZDA2NDNlMCIsIm5iZiI6MTcyODI3ODQ3Ny4yMzYxMTcsInN1YiI6IjY2ZWZhMjFjNWVlNjFmYmI3MzhkNjE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hv__oo8LZZv3EZvOlbcx2tX8Hl3McCuHqTERkIW5q30' \
     --header 'accept: application/json'
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Technologies Used:**
**Frontend:** List frontend technologies React js.
**APIs:** TMDB API (https://www.themoviedb.org/)
