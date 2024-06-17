# WEBD 3012 Business Systems Build and Testing
__Assignment #__: Coding Assignment: 13

__Prepared by__: Simon Neufville

## GitHub Repository Link
https://github.com/sneufville/webd-3012-coding-assignment13-cra

## Assignment specifics

This project uses continues from assignment 12 and adds pre-commit hooks for testing

## How to run

This assumes docker is installed and works correctly

```shell
# build the image (docker build . -t <name>) if needed
# example below
docker build . -t "sneufville-coding-assign13:v1.0"
```

```shell
# run the image
docker run --name neufville_simon_coding_assignment13 -dp 8083:8083 sneufville-coding-assign13:v1.0
```

The Storybook application will be accessible at `http://localhost:8083`
