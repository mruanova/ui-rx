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
  return (<div key={index} style={style} className={classes.row}>
    <div className={classes.ProjectId} title={data[index].ProjectId.toString()}>{data[index].ProjectId}</div>
    <div className={classes.Position} title={data[index].Position}>{data[index].Position}</div>
    <div className={classes.Website} title={data[index].Website}>{data[index].Website}</div>
    <div className={classes.Address} title={data[index].Address}>{data[index].Address}</div>
    <div className={classes.Coordinates} title="Coordinates">{data[index].Coordinates[0]},&nbsp;{data[index].Coordinates[1]}</div>
  </div>);
};

export default Row;
