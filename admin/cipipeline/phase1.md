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

- Georgio
