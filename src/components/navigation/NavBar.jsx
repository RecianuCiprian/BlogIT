import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import styleable from 'react-styleable';
import GoSignOut from 'react-icons/lib/go/sign-out';
import Contact from 'react-icons/lib/io/ios-contact';
import SearchIcon from 'react-icons/lib/io/ios-search-strong';
import {AutoComplete} from "antd";
import 'antd/dist/antd.css';

const NavBar = (props) => {
    const {css} = props;
    return (
        <nav className={css['nav']}>
            <div className={css['user-controls']}>

                <div style={{display: 'inline',marginRight:'5px'}}>
                    <SearchIcon style={{fontSize:'20px',margin:'5px',paddingBottom:'5px'}}/>
                    <AutoComplete
                        children={<input type={"text"} style={{borderRadius:'0',borderBottom:'1px solid black'}}/> }
                        dataSource={['12345', '23456', '34567']}
                        onSelect={()=>{}}
                        onSearch={()=>{}}
                        placeholder="input here"
                    />
                </div>

                <div style={{display: 'inline',marginRight:'5px'}}>
                    <Contact style={{fontSize:'20px',margin:'5px',paddingBottom:'5px'}}/>
                    User Name
                </div>

                <div style={{display: 'inline',marginRight:'10px'}}>
                    <GoSignOut style={{color:'#000',margin:'5px',paddingBottom:'5px'}}/>
                    Sing Out
                </div>




            </div>
        </nav>
    );
};

NavBar.propTypes = {
    css:PropTypes.object.isRequired
};
NavBar.defaultProps = {};

export default styleable(css)(NavBar);
