import React from 'react';
import { useStyles } from './useStyles';
import { TableSortLabel } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import classNames from 'classnames';
import Row from '../Row/Row';
import Project from '../../interfaces/Project';
import SortOrder from '../../enums/SortOrder';

interface Props {
  data: Project[];
  onHandleRequestSort: (
    event: React.MouseEvent,
    property: string,
  ) => void;
  orderBy: string,
  order: SortOrder
}

const columns = ['ProjectId', 'Position', 'Website', 'Address', 'Coordinates'];

const Example = (props: Props) => {
  const { data, onHandleRequestSort, orderBy, order } = props;
  const classes = useStyles(props);

  const createSortHandler = (property: string) => (event: React.MouseEvent) => {
    onHandleRequestSort(event, property);
  };

  const indents = (
    <div className={classes.container}>
      {columns.map((column) => {
        return (<TableSortLabel
          active={column ? orderBy === column : false}
          className={classNames(classes.column, classes[column])}
          direction={order}
          data-order={order}
          id={`sortheader-${column}`}
          key={column}
          onClick={createSortHandler(column)}
        >
          {column}
        </TableSortLabel>);
      })}
      <List
        className={classes.list}
        height={150}
        // height={36 * data.length}
        // itemCount={1000}
        itemCount={data.length}
        // itemSize={150}
        itemSize={36}
        // width={300}
        width={'100%'}
        itemData={data}
      >
        {Row}
      </List>
    </div>
  );
  return indents;
};

export default Example;
