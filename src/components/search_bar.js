//import React from 'react' ;
import React, { Component} from 'react' ;
//give the searchBar many functionality from the React.Component

class SearchBar extends Component{
    constructor (props){
        super(props);
        this.state = {term: ''}; //only inside the constructor we can change state like this
    }
    render() {
        return (
        <div>
            <input
            value = {this.state.term}
            onChange={event => this.setState({term:event.target.value})}/>
        </div>
        )
    }

    //on or handle, event and then name of the event itself
    //event object describe the object or content of the event
}


export default SearchBar;
//this is to export the SearchBar