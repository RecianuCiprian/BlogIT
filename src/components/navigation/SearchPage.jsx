import React, {Component, Fragment} from 'react';
import Search from "../common/Search";

class SearchPage extends Component {

    //TODO de implementat functiile
    onSelect = (value) => {
        console.log('onSelect', value);

    };

    handleSearch = (value) => {
        console.log(value);
    };

    clickThis = (value) => {
        console.log(value.target.value);
    };


    render() {
        return (
            <Fragment>
                <Search
                    css={{display: 'inline', marginRight: '5px'}}
                    clickThis={this.clickThis}
                    handleSearch={this.handleSearch}
                    onSelect={this.onSelect}
                />
            </Fragment>
        );
    }
}

SearchPage.propTypes = {};
SearchPage.defaultProps = {};

export default SearchPage;
