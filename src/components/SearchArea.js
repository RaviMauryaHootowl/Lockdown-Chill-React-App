import React, {useState} from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

function SearchArea(props){
    const history = useHistory();
    const [searchText, setSearchText] = useState(props.initialText);

    const callTheCallbackToSearch = () => {
        if(searchText != undefined && searchText != ''){
            console.log(`Route to /search?q=${searchText}`)
            history.push(`/search?q=${searchText}`);
        }
    }

    return (
        <div className="topContainer">
            <div className="searchBoxContainer">
                <input onKeyPress={(e) => {
                    if(e.key == 'Enter'){
                        callTheCallbackToSearch();
                    }
                }} placeholder="Search for Movies" defaultValue={props.initialText} className="searchBar" type="text" name="searchDB" id="searchDB" onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="searchBtn" onClick={callTheCallbackToSearch}>
                <MaterialIcon icon="search" />
                </button>
            </div>

        </div>
    );
}

export default SearchArea;