import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    appHeader: {
        backgroundColor: 'white',
        // minHeight: '100vh',
        // display: 'inline-block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#282c34',
        padding: 30,
        marginTop: 10,
        verticalAlign: 'top'
    },
    appLogo: {
        height: '40vmin'
    },
    appLink: {
        color: 'goldenrod'
    },
    awsLogo: {
        display: 'block',
        margin: 'auto'
    }
}));
