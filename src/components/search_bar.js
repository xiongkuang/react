import React, { Component } from 'react';//equals to const Component = React.Component;

// //function based component
// const SearchBar = () => {
//     return <input />;
// }


//class based component
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: 'Search'};
    }

    render(){
        // this.state.term = event.target.value;//BAD!!
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
    )
    }



    onInputChange(term){
        this.setState({term: term});
        this.props.onSearchTermChange(term);

    }
}

export default SearchBar;