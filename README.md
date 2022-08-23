
# Text Analyser

This is very basic level project in ReactJS which having functionality to change lowercase character to uppercase character
,uppercase to lowercase
,formating the word ,
calculate reading time,
 and such similar type of functionality having in this app


 
## Tech Stack
Bootstrap ,React JS


## Run Locally

Clone the project

```bash
  git clone https://github.com/jagdish4501/Text_analyser.git
```

Go to the project directory

```bash
  cd text_analyser
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Roadmap How to  I Create React App

```bash
npx create-react-app my-app
cd my-app
npm start
```


# Lessons From This Project
during this project i am learn that how single page application
working 
and become aware of react js
### what is Function and Class Components
This function is a valid React component because it accepts a 
single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
```bash
  function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
OR
```bash
  const Welcome = (props)=> {
  return <h1>Hello, {props.name}</h1>;
}
```

### How React Rendering a Component
Previously, we only encountered React elements that represent DOM tags:
like
```bash
const element = <div />;
```
However, elements can also represent user-defined components:
like
```bash
const element = <Welcome name="Sara" />;
```
And Now this user-defined-component are rendored 
on screen
by using this function
```bash
ReactDOM.render(
  <React.StrictMode>
    <element />
  </React.StrictMode>,
  document.getElementById('root')
);
```
 **All React components must act like pure functions with respect to their props
 that is function must never modify its own props.
 ## React Router
Create React App doesn't include page routing.
React Router is the most popular solution. we have to install
 ## React Hooks
 ### Why use state and not variables in React?
 Why use state and not variables in React?
The reason is if you useState it rerenders the view.
 Variables by themselves only change bits in memory and the state of your app can get out of sync with the view.

Hooks allow function components to have access to state and other React features.
Because of this, class components are generally no longer needed.
eg.useState, useEffect etc
## React Events
Just like HTML DOM events, React can perform actions based on user events.
React has the same events as HTML: click, change, mouseover etc.
