## Username Availability Check with AJAX 🚀

In this project, we implement a form that allows users to check the availability of a username in real-time, using **AJAX** to send requests to the server without reloading the page.

### Key Features:
- **Username Availability Check**: The user can type a username and instantly check if it's available.
- **AJAX Request**: The form uses AJAX to asynchronously send the username to the server, avoiding page reloads.
- **Real-Time Feedback**: Users receive immediate feedback on whether their desired username is taken or available.
- **No Page Reload**: The AJAX request ensures that the page does not refresh during the checking process.

### Technologies Used:
- **HTML**: Used to structure the form and input fields for the username.
- **CSS**: Basic styling to make the form visually appealing.
- **JavaScript (AJAX)**: Used to send asynchronous requests to the server for username availability without refreshing the page.
- **PHP (or other backend language)**: The server-side script that checks the username availability by querying a database or a predefined list.

### How It Works:
1. **Form Structure**: A simple form is provided with an input field for the username and a submit button.
2. **AJAX Request**: As users type the username, the JavaScript function sends an AJAX request to the server to check if the username is available.
3. **Server-Side Validation**: The server (written in PHP or any other backend language) queries a database or a predefined list of usernames to check if the entered one is available.
4. **Real-Time Feedback**: The server returns the result (either "available" or "taken") and JavaScript dynamically updates the form without refreshing the page.
