import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCfPTV1qXHa1VnCXDOle9SKWwisf1ipyAk';


//create a new component. This component should produce some HTML
// const App = () => {
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     );
// }

class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'rotk'}, (videos) => {
            this.setState({ videos });
            //this.setState({ videos : videos}); //if the key and the property has the same name
        });

    }

    render(){
        return(
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }

}


//Take this component's generated HTML and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));
