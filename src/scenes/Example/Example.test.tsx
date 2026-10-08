import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import SortOrder from '../../enums/SortOrder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Example
      data={[]}
      onHandleRequestSort={() => undefined}
      orderBy="ProjectId"
      order={SortOrder.asc}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
