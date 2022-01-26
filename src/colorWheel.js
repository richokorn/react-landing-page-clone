import './ColorWheel.css';
import { css } from '@emotion/react';

const rotatedGradProps = css`
  background: conic-gradient(
    rgb(0, 255, 98) 250deg,
    rgba(255, 255, 255, 0) 0deg 360deg
  );
`;
const boobleColorRotation = css`
  background-color: rgb(0, 255, 98);
  transform: rotate(250deg);
`;

const mainColor = css`
  background-color: darkblue;
`;

const sizeSet = css`
  width: 400px;
  height: 400px;
`;

export function ColorWheel() {
  return (
    <div>
      <div className="mainWrapper" css={[mainColor, sizeSet]}>
        <div className="centerFill" css={mainColor} />
        <div className="whiteShadedFill">
          <div className="mainBooble boobleProps" css={boobleColorRotation} />
          <div
            className="rotatedBooble boobleProps"
            css={boobleColorRotation}
          />
        </div>
        <div css={rotatedGradProps} />
      </div>
    </div>
  );
}
