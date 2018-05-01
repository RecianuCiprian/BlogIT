import React, {Component, Fragment} from 'react';
import style from 'react-styleable';
import css from './style.scss';
import NavBar from "../navigation/NavBar";
import ManageSearchPage from "../pageSearcy/ManageSearchPage";
import ArticleManagement from "../articleContent/ArticleManagement";
import PropTypes from 'prop-types';
import {getPosts} from "../../querys/article.graphql";
import {getDataForSearch} from "../../querys/searchPage.graphql";
import CoolBlockUi from "../common/CoolBlockUi";
import {Query} from "react-apollo/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postsActions} from "../../actions";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            variables: {
                dataOptions: {
                    skip: 0,
                    limit: 5
                },
                dataFilter: {}
            },
            selectedTags: [],
        };
    }

    componentWillMount() {
        this.props.actions.getAllPosts(this.state.variables);
    }

    componentDidMount() {
        document.body.classList = this.props.css['bg'];
    }

    loadMoreArticles = (e) => {
        e.preventDefault();
        const {posts} = this.props;
        let {variables} = this.state;
        variables.dataOptions.skip = posts.length;
        this.props.actions.getAllPosts(variables);
    };

    handleChangeTags = (tag, checked) => {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);

        this.setState((prevState) => {

            let {variables} = prevState;
            if (nextSelectedTags.length > 0) {
                variables.dataFilter.tagIds = {
                    $in: nextSelectedTags
                };
            } else {
                variables.dataFilter = {};
            }
            variables.dataOptions = {
                skip: 0,
                limit: 5
            };
            this.props.actions.filterPosts(variables);
            return ({
                selectedTags: nextSelectedTags,
                variables: variables,
            });
        });
    };

    handleChangeCategory = (categoryId) => {
        this.setState((prevState) => {

            let {variables} = prevState;
            variables.dataFilter.categoryId = categoryId;
            variables.dataOptions = {
                skip: 0,
                limit: 5
            };
            this.props.actions.filterPosts(variables);
            return ({
                variables: variables,
            });
        });
    };

    render() {
        const {posts} = this.props;

        return (
            <Fragment>
                <NavBar/>

                <div className={this.props.css['container']}>
                    <Query
                        query={getDataForSearch}
                    >
                        {({loading, error, data}) => {
                            if (loading) return <CoolBlockUi loading={loading}/>;
                            if (error) return `Error! ${error.message}`;
                            return (
                                <ManageSearchPage
                                    listOfTags={data.tags}
                                    tagsSelected={this.state.selectedTags}
                                    handleChangeTags={this.handleChangeTags}
                                    titleTag={"Tags:"}

                                    listOfCategories={data.postCategories}
                                    handleChangeCategory={this.handleChangeCategory}
                                    titleCategory={"Category:"}
                                />
                            );
                        }}
                    </Query>

                    <div className={css['container-articles']}>
                        <ArticleManagement
                            entries={posts}
                            onLoadMore={this.loadMoreArticles}
                        />
                    </div>

                </div>
            </Fragment>
        );
    }
}

HomePage.propTypes = {
    css: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {posts, error} = state.postsQueryData;
    return {
        posts,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postsActions, dispatch)
    };
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default style(css)(connectedHomePage);
