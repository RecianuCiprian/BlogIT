import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Input from "../common/Input";
import InsertArticleContainer from "./InsertArticleContainer";

class ManageInsertArticle extends Component {

    constructor(props){
        super(props);
        this.state={
            values:{
                articleTitle:""
            }
        };
    }

    render() {
        let {values} = this.state;

        return (
            <Fragment>
                <InsertArticleContainer>
                    <Input
                        labelText={"Article Title"}
                        handleChange={()=>{}}
                        typeInput={"text"}
                        value={values['articleTitle']}
                        fieldProp={"articleTitle"}
                    />
                </InsertArticleContainer>
            </Fragment>
        );
    }
}

ManageInsertArticle.propTypes = {};
ManageInsertArticle.defaultProps = {};

export default ManageInsertArticle;
