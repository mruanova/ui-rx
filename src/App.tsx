import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Header from './scenes/Header/Header';
import { useStyles } from './useStyles';
import './App.css';
import Example from './scenes/Example/Example';
import Project from './interfaces/Project';
import ProjectsService from './services/ProjectsService';
import SortOrder from './enums/SortOrder';
import sortByColumnHeader from './utilities/sortByColumnHeader';

const App: FC = () => {
  const classes = useStyles();
  const defaultProjects: Project[] = [];
  const [projects, setProjects] = React.useState(defaultProjects);
  const [orderBy, setOrderBy] = React.useState('ProjectId');
  const [order, setOrder] = React.useState(SortOrder.asc);

  if (projects.length === 0) {
    /** get projects from database */
    ProjectsService.getProjects()
      .then((response: any) => {
        const temp = response.data.body.Items.sort((a: Project, b: Project) => {
          return a.ProjectId - b.ProjectId;
        });
        setProjects(temp);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  const handleRequestSort = (
    _event: React.ChangeEvent<{}>,
    property: string,
  ) => {
    console.log(property);
    console.log(order);
    let temp = order;
    if (orderBy === property && temp === SortOrder.asc) {
      temp = SortOrder.desc;
    } else if (orderBy === property && temp === SortOrder.desc) {
      temp = SortOrder.asc;
    }
    const sortedProjects = sortByColumnHeader(
      projects.slice(),
      temp,
      property,
    );
    setOrder(temp);
    setOrderBy(property);
    setProjects(sortedProjects);
  };
  /*
  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    <MenuIcon />
  </IconButton>
  */
  // <Button color="inherit">Login</Button>
  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Portfolio</Typography>

        </Toolbar>
      </AppBar>
      <Header></Header>
      <Example data={projects} onHandleRequestSort={handleRequestSort} orderBy={orderBy} order={order}></Example>
    </div>
  );
};

export default App;