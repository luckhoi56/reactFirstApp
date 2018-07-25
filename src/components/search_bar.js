//import React from 'react' ;
import React, { Component} from 'react' ;
//give the searchBar many functionality from the React.Component
class SearchBar extends Component{
    render() {
        return <input onChange={event => console.log(event.target.value)}/>;
    }

    //on or handle, event and then name of the event itself
    //event object describe the object or content of the event
}


export default SearchBar;
//this is to export the SearchBar