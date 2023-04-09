import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyle } from '../src/components/globalStyle';

const Root = () => (
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
