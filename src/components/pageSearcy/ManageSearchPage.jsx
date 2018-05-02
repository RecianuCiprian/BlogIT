import React from 'react';
import SearchContent from "./SearchContent";
// eslint-disable-next-line import/named
import {Tags} from "../common/Tag";
import Category from "../common/Category/Category";
import BetweenDates from "../common/BetweenDates";
import PropTypes from "prop-types";
import ControllerContent from "./ControllerContent";


function ManageSearchPage(props) {
    const {listOfTags, titleTag, tagsSelected} = props;
    const {listOfCategories, titleCategory} = props;
    const {titleDate} = props;

    return (
        <SearchContent>
            <Category
                handleChange={props.handleChangeCategory}
                listOfItems={listOfCategories}
                css={categoryStyle}
                title={titleCategory}
                headerStyle={comonStyle}
            />
            <Tags
                listOfTags={listOfTags}
                title={titleTag}
                handleChangeTags={props.handleChangeTags}
                tagsSelected={tagsSelected}
                headingStyle={comonStyle}
            />
            <BetweenDates
                title={titleDate}
                onChange={props.handleChangeDates}
                headerStyle={comonStyle}
            />
            <ControllerContent
                createPost={props.createPost}
                resetSearch={props.resetSearch}
            />
        </SearchContent>
    );
}

ManageSearchPage.propTypes = {
    handleChangeTags: PropTypes.func.isRequired,
    listOfTags: PropTypes.array.isRequired,
    titleTag: PropTypes.string.isRequired,
    tagsSelected: PropTypes.array.isRequired,

    handleChangeCategory: PropTypes.func.isRequired,
    listOfCategories: PropTypes.array.isRequired,
    titleCategory: PropTypes.string.isRequired,

    titleDate: PropTypes.string.isRequired,
    handleChangeDates:PropTypes.func.isRequired,

    createPost: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
};

const categoryStyle = {
    width: '50%'
};

const comonStyle={
    fontSize: '15px',
    display: 'inline',
    marginRight:'8px',
    fontWeight:'bold'
};

export default ManageSearchPage;
