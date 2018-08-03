import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//variable to hold the API key
const API_KEY  = 'AIzaSyDCdWEUdEmkClwVHt3NZsvBjKXWGtJdRWk';



class App extends Component {
    constructor (props){
        super (props);
        this.state = { videos: [] };
    

    YTSearch ({key:API_KEY, term: 'surfboards'}, (videos) =>{
        this.setState ({videos});
        //this.setState({vi deos});
    });

}
    render(){
    return( 
        <div>
            <SearchBar />
            <VideoList videos= {this.state.videos} />
        </div> //this an JXS turns into hmtl
    );
}
}


// Take this component's generated HTML and put it 
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // use the component make sure to wrap it around the JSX text

//<App /> this is to make the react object
// We need container class, class container, class app.
// div the entire root node of the whole react app
// all the root child become one of the element in the app container
//use the querySelector