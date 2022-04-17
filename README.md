# React 18, @reduxjs/toolkit 1.8.1, react-redux 8, CRA template
Basic SPAs with **React**, **Redux**, **Redux-Toolkit**, **React-Router**, **SASS/SCSS**, **TypeScript**, **CRA**.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `yarn server`

Base simulation for **RTK-query** (so you can create some sort of API with **Redux-Toolkit**) with **json-server**.
Runs on **port 5000**, all server data in **db.json** file. Might need to install json-server globally.


## Description

* Basic SPA - 3 routes: Home, Posts, Users.
* Users are fetched from **[jsonplaceholder](https://jsonplaceholder.typicode.com)**.
* Posts are working with **http://localhost:5000/** that runs with `yarn server` (so you can test API with **Redux-Toolkit** - GET, POST, PUT, DELETE).

### Structure

Main logic is in **src/redux** folder.

Hooks for **useActions** and **useTypedSelector** are in **src/redux/hooks** folder.

Data models (UserInterface, PostInterface) are in **src/redux/models** folder.

Reducers created with **createSlice** function from @reduxjs/toolkit are in **src/redux/reducers** folder.
Those are needed for managing state of the app for example.
Also, they can be used with remote API, in this case, you need to create **createAsyncThunk** for them (like in ActionCreators).
All actions are combined (for **useActions** hook) in **src/redux/actions/all-actions.ts**.

More robust solution is to use **createApi** from **RTK-query** and create services - **src/redux/services**.
In this case RTK-query will manage caching of the data and will fetch data from remote API. Also, RTK-query can handle long-polling.
