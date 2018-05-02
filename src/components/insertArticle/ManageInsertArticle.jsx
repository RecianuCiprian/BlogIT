import React, {Component} from 'react';
import Input from "../common/Input";
import InsertArticleContainer from "./InsertArticleContainer";
import Category from "../common/Category/Category";
import {Tags} from "../common/Tag";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {postsActions} from "../../actions";
import {connect} from "react-redux";
import {Button} from 'antd';
import '../common/styles/antbuttons.css';
import 'antd/lib/button/style/index.css';
import {history} from "../../store/ConfigureStore";
import toastr from "toastr";

class ManageInsertArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articleTitle: "",
            articleDescription: "",
            categoryId: "",
            tagsSelected: []
        };
    }

    componentWillMount() {
        this.props.actions.getTagsCategory();
    }

    handleChangeTags = (tag, checked) => {
        this.setState(prevState => {
            const {tagsSelected} = prevState;
            const nextSelectedTags = checked ?
                [...tagsSelected, tag] :
                tagsSelected.filter(t => t !== tag);
            return {
                tagsSelected: nextSelectedTags
            };
        });
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleChangeCategory = (categoryId) => {
        this.setState({
            categoryId: categoryId
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {articleTitle, articleDescription, categoryId, tagsSelected} = this.state;
        this.props.actions.savePost(articleTitle, articleDescription, categoryId, tagsSelected).then(() => {
            history.push('/');
            toastr.success("Data saved");
        }).catch((error) => {
            toastr.error(error);
            this.setState({
                articleTitle: "",
                articleDescription: "",
                tagsSelected: []
            });
        });
    };

    render() {
        const {articleTitle, articleDescription, tagsSelected} = this.state;
        const {postCategories, tags} = this.props;

        return (
            <InsertArticleContainer>
                <div style={{textAlign: "center", fontSize: "30px"}}>Add courses info</div>
                <Input
                    labelText={"Article Title"}
                    handleChange={this.handleChange}
                    typeInput={"text"}
                    value={articleTitle}
                    fieldProp={"articleTitle"}
                />
                <Input
                    labelText={"Article Description"}
                    handleChange={this.handleChange}
                    typeInput={"text"}
                    value={articleDescription}
                    fieldProp={"articleDescription"}
                />
                <Category
                    handleChange={this.handleChangeCategory}
                    listOfItems={postCategories}
                    title={"Article Category"}
                />
                <Tags
                    listOfTags={tags}
                    title={"Article Tags"}
                    handleChangeTags={this.handleChangeTags}
                    tagsSelected={tagsSelected}
                />
                <Button
                    type="primary"
                    onClick={this.onSubmit}
                    style={{width: '10%'}}
                >Save</Button>
            </InsertArticleContainer>
        );
    }
}

ManageInsertArticle.propTypes = {
    postCategories: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {postCategories, tags, error} = state.postsQueryData;
    return {
        postCategories,
        tags,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInsertArticle);
