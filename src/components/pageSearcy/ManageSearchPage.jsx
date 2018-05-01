import React from 'react';
import Content from "./SearcyContent";
// eslint-disable-next-line import/named
import {Tags} from "../common/Categori";
import Category from "../common/Tags/Category";
import BetweenDates from "../common/BetweenDates";
import {getHeader} from "../../querys/article.graphql";
import PropTypes from "prop-types";

function ManageSearchPage(props) {

    const {listOfTags, titleTag, tagsSelected} = props;
    const {listOfCategories, titleCategory} = props;

    return (
        <Content>
            <Category
                handleChange={props.handleChangeCategory}
                listOfItems={listOfCategories}
                css={categoryStyle}
                title={titleCategory}
            />
            <Tags
                listOfTags={listOfTags}
                title={titleTag}
                handleChangeTags={props.handleChangeTags}
                tagsSelected={tagsSelected}
            />
            <BetweenDates/>
        </Content>
    );
}

ManageSearchPage.propTypes = {
    handleChangeTags: PropTypes.func.isRequired,
    listOfTags: PropTypes.array.isRequired,
    titleTag: PropTypes.string.isRequired,
    tagsSelected: PropTypes.array.isRequired,

    handleChangeCategory: PropTypes.func.isRequired,
    listOfCategories: PropTypes.array.isRequired,
    titleCategory: PropTypes.string.isRequired

};

const categoryStyle = {
    width: '50%'
};

export default ManageSearchPage;
