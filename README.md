
# POKE REACT

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v16.20.2

    $ npm --version
    v8.19.4

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install
Navigate to the project directory

    $ npm install


## Start & watch

    $ npm start

## Test Cases

    $ npm run test


## Languages & tools

### Typescript

- [React](http://facebook.github.io/react) is used for UI.
- [@tanstack/react-table](https://tanstack.com/table/latest) is used for UI and pagination
- [Redux-toolkit] for global scope
- [RTK-query] (https://redux-toolkit.js.org/rtk-query/overview) for querying and caching data
- [jest](https://jestjs.io/) for test cases.

## Features
- Displaying all Pokémon with pagination:
    - Fetches a list of Pokémon from the provided API endpoint.
    - Implements pagination to display a limited number of Pokémon per page.
    - Allows users to navigate between pages to view additional Pokémon.
- Details of a specific Pokémon:
    - Retrieves detailed information about a specific Pokémon when clicked from the list.
    - Displays the Pokémon's name, image, height, weight, and types.
- Added Unit and integration Test Cases for components.
- Properly handle UI with mobile responsiveness.

## Notes
- We can add `.env` files to handle BASE_URLs.
