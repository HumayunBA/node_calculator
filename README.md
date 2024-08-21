# Node Calculator
This is a Node.js application for performing various calculations. The project is configured with Jest for testing and Babel for transpiling modern JavaScript features.

### To run the application:
npm start

The project uses several testing tools such as Jest, babel-jest, and @babel/preset-env. Here is a description of those test scripts:

### To run all tests:
npm test
### To run unit tests:
npm run test:unit
### To run integration tests:
npm run test:integration

The project uses the following dependencies:
@babel/preset-env: ^7.24.3"
babel-jest: "^29.7.0",
jest: "^29.7.0",
regenerator-runtime: "^0.14.1",
selenium-webdriver: "^4.18.1",
supertest: "^6.3.4"

### Continuous Integration (CI) Setup
### Jenkins Pipeline
To set up a Jenkins pipeline for this project, follow these steps:
- Install Jenkins and ensure it's running on your server.
- Create a new pipeline job in Jenkins.
- In the pipeline configuration, set up the repository URL under the "Source Code Management" section.
- Under the "Pipeline" section, set the Pipeline script to point to the Jenkinsfile in your project.
- Configure stages to install dependencies, run unit tests, and run integration tests.
- Set up post-build actions to publish test results.

### GitHub Actions Workflow
To set up a GitHub Actions workflow:
- In the node_calculator repository, navigate to the .github/workflows directory.
- Create a new YAML file to define the CI workflow.
- Define steps to:
Checkout the repository.
Set up Node.js.
Install dependencies.
Run unit tests and integration tests.
- Push the changes to your repository. The workflow will trigger automatically on each push or pull request.

