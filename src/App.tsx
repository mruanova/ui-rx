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
import PROJECTS from './mocks/PROJECTS';
const App: FC = () => {
  const classes = useStyles();
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [orderBy, setOrderBy] = React.useState('ProjectId');
  const [order, setOrder] = React.useState(SortOrder.asc);

  React.useEffect(() => {
    const fallbackProjects = PROJECTS.map((project) => new Project(project))
      .sort((a, b) => a.ProjectId - b.ProjectId);

    ProjectsService.getProjects()
      .then((response: any) => {
        const items = response.data?.body?.Items;
        const temp: Project[] = Array.isArray(items)
          ? items
            .map((item: any) => new Project(item))
            .sort((a, b) => a.ProjectId - b.ProjectId)
          : fallbackProjects;
        if (temp.length > 1) {
          setProjects(temp);
        } else {
          setProjects(fallbackProjects);
        }
      }).catch((error: any) => {
        console.error(error);
        setProjects(fallbackProjects);
      });
  }, []);

  const handleRequestSort = (
    _event: React.ChangeEvent<{}>,
    property: string,
  ) => {
    const nextOrder =
      orderBy === property
        ? order === SortOrder.asc
          ? SortOrder.desc
          : SortOrder.asc
        : SortOrder.asc;

    const sortedProjects = sortByColumnHeader(
      projects.slice(),
      nextOrder,
      property,
    );
    setOrder(nextOrder);
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