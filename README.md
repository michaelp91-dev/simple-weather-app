# Simple Interactive Weather App

A straightforward web application that allows users to fetch and display current weather conditions for any given city using an external API. This project showcases frontend development skills, including API integration, asynchronous JavaScript, and dynamic UI updates.

## Features

-   **City Search:** Input field to enter a city name.
-   **Current Weather Display:** Shows temperature, weather description, and an icon.
-   **API Integration:** Fetches data from the OpenWeatherMap API.
-   **Error Handling:** Provides user-friendly messages for invalid city names or network issues.
-   **Responsive Design:** Styled to adapt to different screen sizes.

## Technologies Used

-   **HTML5:** For the fundamental structure of the web page.
-   **CSS3:** For styling and layout (including Flexbox/Grid for responsiveness).
-   **JavaScript (ES6+):** For all interactive logic, API calls (`Workspace`), and DOM manipulation.

## How to Use

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/michaelp91-dev/simple-weather-app.git
    cd simple-weather-app
    ```
    (Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and adjust the repo name if different)

2.  **Obtain an API Key:**
    -   Sign up for a free account on [OpenWeatherMap.org](https://openweathermap.org/).
    -   Generate an API key from your profile settings.
    -   **Important:** Replace `'YOUR_API_KEY_HERE'` in `script.js` with your actual OpenWeatherMap API key.

3.  **Open in Browser:**
    Simply open the `index.html` file in your web browser, or access the live demo link below.

## Live Demo

Experience the app live here:
[https://michaelp91-dev.github.io/simple-weather-app/](https://michaelp91-de .github.io/simple-weather-app/)

## API Key Security Note

For this project, the API key is included directly in `script.js` for simplicity of demonstration. In a production environment, API keys should *never* be exposed directly in client-side code. They should be handled securely on a backend server or through environment variables.

## Future Enhancements (Optional Ideas)

-   Add a loading spinner or indicator.
-   Implement geolocation to automatically detect the user's current city.
-   Display forecast data (e.g., 3-day or 5-day forecast).
-   Allow users to switch between Celsius and Fahrenheit.
-   Improve UI/UX with better styling or animations.

## Contribution

Feel free to fork this repository, make improvements, and submit pull requests.

---

Developed by Michael Puckett as a portfolio project.
