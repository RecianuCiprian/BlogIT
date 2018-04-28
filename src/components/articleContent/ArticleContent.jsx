import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'react-icons/lib/io/ios-contact';
import {utils} from '../../utils/formatDate';


function ArticleContent(props) {
    const {description,user,createdAt,cssDiv} =props;
    return (
        <div className={cssDiv}>
            <div>
                {description}
            </div>
            <div style={{marginTop:'5px',fontFamily: 'Alex Brush'}}>
                <Contact style={{fontSize: '30px', margin: '5px',marginLeft:'0', paddingBottom: '5px'}}/>
                {user && `Created by ${user.firstname} ${user.lastname} in ${utils.formatDate(createdAt)}`}
            </div>
        </div>
    );
}

ArticleContent.propTypes = {
    cssDiv:PropTypes.string,
    description:PropTypes.string,
    user:PropTypes.object,
    createdAt:PropTypes.string
};

export default ArticleContent;
