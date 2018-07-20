import React from 'react';
import ReactDOM from 'react-dom';

//variable to hold the API key
const API_KEY  = 'AIzaSyDCdWEUdEmkClwVHt3NZsvBjKXWGtJdRWk';
//const because key never change

//Create a new component. This component should produce 
//some html

const App =  () =>{
    return <div>Hi!</div>; //this an JXS turns into hmtl
}


// Take this component's generated HTML and put it 
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // use the component make sure to wrap it around the JSX text

//<App /> this is to make the react object
// We need container class, class container, class app.
// div the entire root node of the whole react app
// all the root child become one of the element in the app container
//use the querySelector