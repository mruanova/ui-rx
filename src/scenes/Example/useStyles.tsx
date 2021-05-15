import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type classIndexTypes =
    | string
    | 'ProjectId'
    | 'Position'
    | 'Website'
    | 'Address'
    | 'Coordinates';

export const useStyles = makeStyles(
    (theme: Theme) => {
        // const light = theme.palette.type === 'light';
        return createStyles<classIndexTypes, any>({
            container: {
                display: 'inline-block',
                margin: 'auto',
                width: 960,
            },
            list: {
                boxShadow: '1px 1px 1px 0 rgba(38, 82, 175, 0.2)',
                fontSize: 12,
                [theme.breakpoints.down('xl')]: {},
                [theme.breakpoints.down('lg')]: {},
                [theme.breakpoints.down('md')]: {},
                [theme.breakpoints.down('sm')]: {
                    display: 'none!important',
                },
                [theme.breakpoints.down('xs')]: {
                    display: 'none!important',
                },
            },
            column: {
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 2,
                marginLeft: '12px!important',
                paddingLeft: 5,
                textAlign: 'left',
            },
            ProjectId: {
                // backgroundColor: 'aqua!important',
                margin: 0,
                width: 75,
            },
            Position: {
                // backgroundColor: 'aqua!important',
                width: 275,
            },
            Website: {
                // backgroundColor: 'aqua!important',
                width: 125,
            },
            Address: {
                // backgroundColor: 'aqua!important',
                width: 250,
            },
            Coordinates: {
                // backgroundColor: 'aqua!important',
                width: 160,
            }
        });
    },
    { name: 'Example' },
);
