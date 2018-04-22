import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'react-icons/lib/io/ios-search-strong';
import {AutoComplete} from "antd";
import 'antd/lib/auto-complete/style/index.css';
import 'antd/lib/select/style/index.css';


function Search(props) {
    const {css} = props;
    const {clickThis,onSelect,handleSearch}= props;
    return (
        <div style={css}>
            <SearchIcon style={{fontSize: '20px', margin: '5px', paddingBottom: '5px'}}/>
            <AutoComplete
                children={<input onClick={clickThis} type={"text"} style={{borderRadius: '0', borderBottom: '1px solid black'}}/>}
                dataSource={['12345', '23456', '34567']}
                onSelect={onSelect}
                onSearch={handleSearch}
                placeholder="input here"
            />
        </div>
    );
}

Search.propTypes = {
    css: PropTypes.object.isRequired,
    clickThis:PropTypes.func.isRequired,
    onSelect:PropTypes.func.isRequired,
    handleSearch:PropTypes.func.isRequired
};

export default Search;
