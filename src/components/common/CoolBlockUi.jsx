import React from 'react';
import PropTypes from 'prop-types';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import '../common/styles/blockUI.css';
import 'loaders.css/loaders.min.css';

function CoolBlockUi(props) {
    const {loading}=props;
    return (
        <BlockUi blocking={loading} loader={<Loader active type={'ball-spin-fade-loader'} color="#02a17c"/> }/>
    );
}

CoolBlockUi.propTypes = {
    loading:PropTypes.bool.isRequired
};
CoolBlockUi.defaultProps = {};

export default CoolBlockUi;
