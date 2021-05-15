import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import Project from '../../interfaces/Project';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const detailsStyles: React.CSSProperties = { whiteSpace: 'pre-wrap' };
  const data: Project[] = [];
  ReactDOM.render(<Row index={1} style={detailsStyles} data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
