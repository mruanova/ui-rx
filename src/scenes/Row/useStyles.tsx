import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    row: {
        "&:nth-child(even)": {
            background: "#f2f2f2"
        }
    },
    ProjectId: {
        paddingTop: 10,
        verticalAlign: 'top',
        display: 'inline-block',
        marginRight: 15,
        textAlign: 'right',
        width: 15,
    },
    Position: {
        paddingTop: 10,
        verticalAlign: 'top',
        display: 'inline-block',
        textAlign: 'left',
        width: 300,
    },
    Website: {
        paddingTop: 10,
        verticalAlign: 'top',
        display: 'inline-block',
        textAlign: 'left',
        width: 150,
    },
    Address: {
        paddingTop: 10,
        verticalAlign: 'top',
        display: 'inline-block',
        textAlign: 'left',
        width: 250,
        whiteSpace: 'nowrap', 
        overflow: 'hidden',
        textOverflow: 'ellipsis' 
    },
    Coordinates: {
        paddingTop: 10,
        verticalAlign: 'top',
        display: 'inline-block',
        textAlign: 'right',
        width: 100,
    },
}));
