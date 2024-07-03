# WEBD 3012 Business Systems Build and Testing
__Assignment #__: Coding Assignment: 13

__Prepared by__: Simon Neufville

## GitHub Repository Link
https://github.com/sneufville/webd-3012-coding-assignment13-cra

## Assignment specifics

This project uses continues from assignment 12 and adds pre-commit hooks (via Husky) for testing. A pipeline will also be set up to run

### Steps
✅ Add the pre-commit actions to `.husky/pre-commit`
* `npm run prettier:format` _formats the code using Prettier_
* `npm run lint` _uses ESLint to check for code quality_
* `npm run test:auto` _runs the test suite_

✅ Add workflow file `.github/workflows/main.yml` which sets up the pipeline and specifies triggers (`push`, `pull_request`) and the steps to be run using GitHub Actions
* Set up the workflow action specifying the `name` and other information
* Define the jobs that will run in this pipeline
* * ✅ Container setup
* * ✅ Permission setup
* * ✅ Specify steps (check out code, specify node environment, install dependencies, run each test as specified above but in the pipeline)

🛑 The pipeline will stop if any of the steps fail.

## How to run

This assumes docker is installed and works correctly

```shell
# build the image (docker build . -t <name>) if needed
# example below
docker build . -t "sneufville-coding-assign13:v1.0"
```

```shell
# run the image
docker run --name neufville_simon_coding_assignment13 -dp 8018:8018 sneufville-coding-assign13:v1.0
```

The Storybook application will be accessible at `http://localhost:8018`
