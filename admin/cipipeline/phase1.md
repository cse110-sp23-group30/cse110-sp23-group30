# CI/CD Pipeline Phase 1

## Linting and Code Style Enforcement (may happen in pipeline and/or in editor)

- Pratyush

For linting and code style enforcement, we plan on using npm lint– a command-line tool that checks code for syntax issues, stylistic inconsistencies, and potential errors. By using npm lint, we can catch errors before they make it into our production stage which will improve our code quality as a whole. To integrate npm lint into our CI/CD pipeline, we plan to add a linting step to our build process. This will ensure that all code changes adhere to our defined standards before they are merged into the main branch. In order to do this, we can use editor extensions or plugins to enforce code style standards during development. By doing this, we are essentially omitting the need for manual code reviews and ensuring that all code adheres to the defined standards. In addition, this will integrate well with GitHub Actions since we can run automated tests on all code changes. These tests will include running npm lint on all JavaScript files in our project, helping us catch errors and style violations early in the development process.

## Code Quality via Tool (ex. Codeclimate, Codacy, etc.)

- Zihan

## Code Quality via Human Review (ex. Pull Requests)

- Ryan

Our team will use Github Pull Requests as a tool to ensure that code quality is maintained at a high standard in our CI/CD pipeline. With Pull Requests, each of us will be able to submit proposed changes to the codebase for review by the team before the changes are merged into the main branch. During the review process, we can provide feedback on code quality, style, and functionality, and suggest improvements or point out potential issues. By utilizing Pull Requests for all changes, we can ensure that every change undergoes a full review and that any potential issues are identified and resolved before being validated. This will lead to a more stable and reliable codebase, as well as a more efficient development process, as issues can be addressed early on. Ultimately, by utilizing Pull Requests as part of our CI/CD pipeline, we will improve code quality, reduce the risk of bugs and errors, and deliver software more efficiently.

## Unit Tests via Automation (ex. Jest, Tape, Ava, Cypress, Mocha/Chai, etc.)

Unit testing is important to us in all stages as we develop our web-app. Whether we are working out the details in the early basic stages or later, more complicated stages of the online service, we desire to verify the correctness and functionality of the different parts of our web-app. Unit tests help ensure that each component of the web app behaves as expected and performs its intended functionality.
We wanted to focus on doing automated unit tests through different methods, but we decided to settle on tools such as Jest. Jest is a testing framework that is rather simple to use with, which is really useful for our purposes in using Javascript and also very simple web-app functions. Jest is also really compatible across the board and has a very fast testing time, while also ensuring reliability and stability. Jest provides built-in code coverage reporting, allowing developers to identify areas of the code that lack test coverage. This helps ensure comprehensive testing and improves the overall quality of the application. It is made to be easy to be used for newcomers, which helps us as we are building a web-app together for the first time in a joint venture. Furthermore, Jest has a large community of users, meaning its a trusted framework that has been used to test many different varities of Javascript usage and constantly updated tools and patches.

## Documentation Generation via Automation (ex. JSDocs)

One way to generate automation in JavaScript is through the use of code generation techniques, such as JSDocs. JSDoc is a popular documentation tool that allows developers to add structured comments to their code, enabling the generation of automated documentation. However, JSDocs can also be leveraged beyond just documentation generation. By utilizing JSDoc annotations effectively, developers can generate code or perform automated tasks.

To generate automation using JSDocs, one can use custom scripts or build tools to parse and analyze the annotated code. For instance, by writing JSDoc annotations to describe function signatures, parameter types, and return values, one can automatically generate code snippets, unit tests, or even API clients. These automated processes can save developers significant time and effort by eliminating repetitive tasks and reducing the likelihood of errors.

Additionally, JSDoc annotations can be used to enforce coding standards, generate type information, or aid in code analysis. By accurately annotating JavaScript code, static analysis tools or transpilers can extract useful information about the codebase. This information can be utilized for tasks like optimizing performance, identifying potential bugs, or providing intelligent code suggestions in integrated development environments (IDEs).

In summary, JSDoc annotations in JavaScript offer a powerful way to generate automation. By leveraging the structured comments and incorporating custom scripts or build tools, developers can automate various tasks such as code generation, documentation, testing, and code analysis. This not only enhances productivity but also improves code quality and maintainability.
