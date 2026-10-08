import React from 'react';
// import Header from './scenes/Header/Header';
import { useStyles } from './useStyles';
import { ListChildComponentProps } from 'react-window';
import Project from '../../interfaces/Project';

interface Props extends ListChildComponentProps {
  index: number;
  style: React.CSSProperties;
  data: Project[];
}

const Row = (props: Props) => {
  const classes = useStyles();
  const { index, style, data } = props;
  const project = data[index];

  if (!project) {
    return <div style={style} className={classes.row} />;
  }

  const coordinates = Array.isArray(project.Coordinates)
    ? project.Coordinates.join(', ')
    : '';

  return (<div key={index} style={style} className={classes.row}>
    <div className={classes.ProjectId} title={String(project.ProjectId ?? '')}>{project.ProjectId}</div>
    <div className={classes.Position} title={project.Position ?? ''}>{project.Position}</div>
    <div className={classes.Website} title={project.Website ?? ''}>{project.Website}</div>
    <div className={classes.Address} title={project.Address ?? ''}>{project.Address}</div>
    <div className={classes.Coordinates} title="Coordinates">{coordinates}</div>
  </div>);
};

export default Row;
