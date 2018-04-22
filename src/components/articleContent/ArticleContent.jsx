import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'react-icons/lib/io/ios-contact';

function formatDate(date){
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();

    if(dd<10) {
        dd = '0'+dd;
    }

    if(mm<10) {
        mm = '0'+mm;
    }

    return mm + '.' + dd + '.' + yyyy;
}

function ArticleContent(props) {
    const {description,user,createdAt,cssDiv} =props;
    const date = new Date(createdAt);
    return (
        <div className={cssDiv}>
            <div>
                {description}
            </div>
            <div style={{marginTop:'5px',fontFamily: 'Alex Brush'}}>
                <Contact style={{fontSize: '30px', margin: '5px',marginLeft:'0', paddingBottom: '5px'}}/>
                {user && `Created by ${user.firstname} ${user.lastname} in ${formatDate(date)}`}
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
