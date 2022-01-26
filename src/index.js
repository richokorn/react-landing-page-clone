/** @jsxImportSource @emotion/react */
import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-feature-settings: 'liga', 'onum' 1;
        }

        body {
          height: 200vh;
          font-size: 14px;
          line-height: 20px;
          background: white;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
