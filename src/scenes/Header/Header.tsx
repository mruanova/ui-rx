import React from 'react';
// import logo from '../../giphy.gif';
import aws from '../../aws-certified-logo_color-horz_270x45.png';
import { useStyles } from './useStyles';

const Header: React.FC = () => {
    const classes = useStyles();
    
    // <img src={logo} className={classes.appLogo} alt="logo" />

    return (
        <header className={classes.appHeader}>
            <h1>Mauricio Ruanova</h1>
            <h2 className={classes.appLink}>Software Engineer</h2>
            <img src={aws} className={classes.awsLogo} alt="aws" />
        </header>
    );
}

export default Header;