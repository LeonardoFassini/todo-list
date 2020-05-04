import './index.css';

import { GlobalStyled } from '@app/modules/app/globals';
import { Container } from '@atomic/atm.container/container.component';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

ReactDOM.render(
  <BrowserRouter basename='/'>
    <Container>
      <GlobalStyled />
      <App />
    </Container>
  </BrowserRouter>,
  document.getElementById('root'),
);
