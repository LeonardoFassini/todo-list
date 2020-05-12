import './index.css';

import { GlobalStyled } from '@app/modules/app/globals';
import { Container } from '@atomic/atm.container/container.component';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { FlashMessage } from '@atomic/mol.flash-message/flash-message.component';
import { FlashMessageProvider } from '@atomic/mol.flash-message/flash-message.provider';
import { AuthProvider } from '@app/modules/app/auth.provider';

ReactDOM.render(
  <BrowserRouter basename='/'>
    <Container>
      <AuthProvider>
        <FlashMessageProvider>
          <GlobalStyled />
          <FlashMessage />
          <App />
        </FlashMessageProvider>
      </AuthProvider>
    </Container>
  </BrowserRouter>,
  document.getElementById('root'),
);
