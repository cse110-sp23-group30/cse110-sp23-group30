# CI/CD Pipeline Phase 1

## linting and code style enforcement (may happen in pipeline and/or in editor)

- Pratyush

For linting and code style enforcement, we plan on using npm lint– a command-line tool that checks code for syntax issues, stylistic inconsistencies, and potential errors. By using npm lint, we can catch errors before they make it into our production stage which will improve our code quality as a whole. To integrate npm lint into our CI/CD pipeline, we plan to add a linting step to our build process. This will ensure that all code changes adhere to our defined standards before they are merged into the main branch.  In order to do this, we can use editor extensions or plugins to enforce code style standards during development. By doing this, we are essentially omitting the need for manual code reviews and ensuring that all code adheres to the defined standards. In addition, this will integrate well with GitHub Actions since we can run automated tests on all code changes. These tests will include running npm lint on all JavaScript files in our project, helping us catch errors and style violations early in the development process. 

## code quality via tool (ex. Codeclimate, Codacy, etc.)

- Zihan

## code quality via human review (ex. Pull Requests)

- Ryan

## unit tests via automation (ex. Jest, Tape, Ava, Cypress, Mocha/Chai, etc.)\*

- Eric

## documentation generation via automation (ex. JSDocs)

One way to generate automation in JavaScript is through the use of code generation techniques, such as JSDocs. JSDoc is a popular documentation tool that allows developers to add structured comments to their code, enabling the generation of automated documentation. However, JSDocs can also be leveraged beyond just documentation generation. By utilizing JSDoc annotations effectively, developers can generate code or perform automated tasks.

To generate automation using JSDocs, one can use custom scripts or build tools to parse and analyze the annotated code. For instance, by writing JSDoc annotations to describe function signatures, parameter types, and return values, one can automatically generate code snippets, unit tests, or even API clients. These automated processes can save developers significant time and effort by eliminating repetitive tasks and reducing the likelihood of errors.

Additionally, JSDoc annotations can be used to enforce coding standards, generate type information, or aid in code analysis. By accurately annotating JavaScript code, static analysis tools or transpilers can extract useful information about the codebase. This information can be utilized for tasks like optimizing performance, identifying potential bugs, or providing intelligent code suggestions in integrated development environments (IDEs).

In summary, JSDoc annotations in JavaScript offer a powerful way to generate automation. By leveraging the structured comments and incorporating custom scripts or build tools, developers can automate various tasks such as code generation, documentation, testing, and code analysis. This not only enhances productivity but also improves code quality and maintainability.
