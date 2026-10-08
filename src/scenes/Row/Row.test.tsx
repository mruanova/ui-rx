import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import Project from '../../interfaces/Project';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const detailsStyles: React.CSSProperties = { whiteSpace: 'pre-wrap' };
  const data: Project[] = [new Project({ id: 1 })];
  ReactDOM.render(<Row index={0} style={detailsStyles} data={data} />, div);
  expect(div.textContent).toContain('1');
  ReactDOM.unmountComponentAtNode(div);
});
