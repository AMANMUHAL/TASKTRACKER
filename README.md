# TASKTRACKER

Task Tracker is a web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and Redux for state management. It allows users to track and manage their tasks efficiently. The application is deployed using Cyclic.sh, an alternative to Heroku that simplifies the deployment process by allowing frontend and backend deployment in a single place.

## Features

- Task management: Users can create, update, and delete tasks. Each task has a title, description, priority, and status (e.g., "To Do," "In Progress," "Completed").
- Filtering and sorting: Users can filter tasks by status and search for specific tasks. Tasks can be sorted by priority or creation date.
- Responsive design: The application is designed to be fully responsive and work seamlessly across different devices and screen sizes.

## Prerequisites

To run Task Tracker locally, make sure you have the following software installed on your system:

- Node.js (v14 or later)
- MongoDB
- Git

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-tracker.git
   ```

2. Navigate to the project directory

3. Install the dependencies for both the frontend and backend:

   ```bash
   npm install
   cd task-tracker
   npm install
   cd ..
   ```

4. Set up the environment variables:

   - Create a `.env` file in the root directory and add the following variables:

     ```plaintext
     MONGODB_URI=<your-mongodb-uri>
     ```

     Replace `<your-mongodb-uri>` with the MongoDB connection URI.

5. Build the frontend:

   ```bash
   npm run build
   ```

6. Start the application:

   ```bash
   npm start
   ```

   This command will start the server and serve the application at `http://localhost:8000`.

7. Open a web browser and visit `http://localhost:8000` to access Task Tracker.

## Deployment with Cyclic.sh

Task Tracker can be easily deployed using Cyclic.sh, which allows for frontend and backend deployment in a single place. Follow these steps to deploy Task Tracker using Cyclic.sh:

1. Sign up for a Cyclic.sh account at [https://cyclic.sh](https://cyclic.sh) if you haven't already.

2. Create a new application on Cyclic.sh and follow the instructions provided to set up the deployment configuration.

3. Once you have configured your deployment on Cyclic.sh, commit and push your code to your Git repository. Cyclic.sh will automatically build and deploy your application based on the configuration.

4. After the deployment is complete, you will be provided with a URL where your Task Tracker application is accessible.

## Contributing

Contributions to Task Tracker are welcome! If you find any issues or want to suggest improvements, please open an issue or submit a pull request on the GitHub repository at [https://github.com/your-username/task-tracker](https://github.com/your-username/task-tracker).

When contributing, please follow the existing code style and ensure that your changes are well-documented.

## Acknowledgments

- The Task Tracker application was inspired by various task management tools and tutorials available online.
- Thanks to the creators and contributors of the MERN stack, Redux, and Cyclic.sh for their excellent tools and resources.
