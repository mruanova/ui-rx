import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center'
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'gray'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
