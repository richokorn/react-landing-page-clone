/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';

const testStyle = css`
  background-color: rgba(50, 50, 50, 0.5);
`;

function App() {
  return (
    <div>
      <div css={testStyle}>Hello</div>
    </div>
  );
}

export default App;
