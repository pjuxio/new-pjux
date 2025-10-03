# Express Bootstrap App

This project is a simple Express server application that serves static files from the `/public` directory and is designed for local development with a front-end built using Bootstrap 5.

## Project Structure

```
express-bootstrap-app
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
│   └── index.html
├── src
│   └── server.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd express-bootstrap-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Server

To start the Express server, run the following command:

```
npm start
```

The server will be running at `http://localhost:3000`, and you can access the application by navigating to this URL in your web browser.

### Project Files

- **public/index.html**: Main HTML document that serves as the entry point for the front-end application.
- **public/css/styles.css**: Custom styles for the application.
- **public/js/scripts.js**: Custom JavaScript code for interactivity.
- **src/server.js**: Entry point for the Express server.
- **package.json**: Configuration file for npm.
- **.gitignore**: Specifies files and directories to be ignored by Git.

## License

This project is licensed under the MIT License.