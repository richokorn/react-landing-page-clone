/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { Tweet } from 'react-twitter-widgets';
import { ColorWheel } from './ColorWheel';
import AppBadge from './img/app-store-badge.svg';

// reused stuff

const contentContainer = css`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

const paddingContainer = css`
  padding-left: 24px;
  padding-right: 24px;
`;

const heroTextPadding = css`
  margin-top: 80px;
  padding-top: 24px;
`;

const textSection = css`
  max-width: 756px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const textCenter = css`
  text-align: center;
`;

const textShowOff = css`
  margin-top: 0px;
  margin-bottom: 18px;
  font-size: 30px;
  line-height: 36px;
  font-weight: bold;
`;

const productSection = css`
  height: 500px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-bottom: 40px;
  padding: 28px;
  border-radius: 32px;
  background-color: #f5f5f5;

  img {
    width: 100%;
  }
`;

// specific stuff

const divWithInline = css`
  display: flex;
  flex-direction: row;
`;

const stickyNav = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
`;

const navStuffLeft = css`
  display: flex;
  gap: 1em;
  width: 50%;
  float: left;
`;

const navPrettyProgress = css`
  position: relative;
  display: flex;
  height: 42px;
  gap: 1em;

  a {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

const navPrettyProgressGraphicContainer = css`
  // nothin
`;

const navPrettyProgressGraphic1 = css`
  position: relative;
  width: 42px;
  height: 42px;
  background: #3b4150;
  border-radius: 0.66rem;
`;

const navPrettyProgressGraphic2 = css`
  position: absolute;
  right: 3px;
  top: 19px;
  width: 20px;
  height: 20px;
  background: conic-gradient(#59d9d1 240deg, #232730 240deg 360deg);
  border-radius: 100%;
`;

const navPrettyProgressGraphic3 = css`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #3b4150;
  border-radius: 100%;
`;

const navPrettyProgressGraphic4 = css`
  position: absolute;
  left: 8px;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #59d9d1;
`;

const navPrettyProgressGraphic5 = css`
  position: absolute;
  top: 11.5px;
  left: 0.8px;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #59d9d1;
`;

const navPrettyProgressText = css`
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 0;
  top: 2px;

  span {
    margin: -0.05em;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const navStuffRight = css`
  display: flex;
  justify-content: right;
  position: relative;
  width: 50%;
  gap: 24px;
`;

const navProductHunt = css`
  display: flex;
  position: relative;
  justify-content: space-between;
  border: 1px solid #ea532a;
  height: 54px;
  width: 250px;
  border-radius: 0.66em;
  background-color: rgba(255, 255, 255, 0.9);

  a {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 250px;
    height: 54px;
  }
`;
const navProductHuntGraphic = css`
  position: relative;
  left: 10px;
  width: 30px;
  height: 30px;
  top: 12px;

  background: #ea532a;
  border-radius: 100%;
  align-items: center;

  span {
    position: absolute;
    left: 9px;
    line-height: 31px;
    font-size: 20px;
    font-weight: bolder;
    color: white;
  }
`;

const navProductHuntText1And2Wrapper = css`
  position: relative;
  flex-direction: column;
  margin-top: 6px;
`;

const navProductHuntText1 = css`
  color: #ea532a;
  font-size: 10px;
  font-weight: bolder;
  letter-spacing: 0.4pt;
`;
const navProductHuntText2 = css`
  color: #ea532a;
  font-size: 22px;
  font-weight: bold;
  margin-top: -6px;
`;

const navProductHuntText3 = css`
  text-align: center;
  margin-top: 0.5em;
  margin-right: 1.2em;
  color: #ea532a;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.15;
`;

const navDownloadButton = css`
  align-self: center;
  a {
    display: inline-block;
    text-decoration: none;
    color: #56efe6;
    border-radius: 20px;
    font-size: 18px;
    font-weight: bold;
    background: #3b4150;
    max-height: 37px;
    padding: 8px 24px;
    width: 100%;
    height: 100%;
  }
`;

const regularLinkButton = css`
  align-self: center;
  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    background: rgba(100, 100, 100, 0.5);
    max-height: 37px;
    padding: 8px 24px;
    width: auto;
    height: 100%;
  }
`;

const proButton = css`
  padding: 4px 12px;
  border-radius: 6px;
  background-color: rgba(89, 217, 209, 0.6);
  font-size: 14px;
  font-weight: bold;
  height: max-content;
`;

const customizeButton = css`
  margin-right: 12px;
  padding: 2px 12px;
  border-radius: 20px;
  background-color: rgba(59, 65, 80, 0.05);
`;

const customizeFontStyle = css`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  margin-top: 0px;
  margin-right: 24px;
  margin-bottom: 0px;
  color: #7a7a7a;
`;

const heroContainer = css`
  max-height: 800px;
  min-height: 800px;
  /* margin-top: 80px; */
  width: 100vw;
  background-image: url('https://prettyprogress.app/images/hero-img.png'),
    linear-gradient(180deg, #fff, #f5f5f5);
  background-position: 50% 100%, 0px 0px;
  background-size: 1132px, auto;
  background-repeat: no-repeat, repeat;
  background-attachment: scroll, scroll;
`;

const heroText = css`
  display: flex;
  flex-direction: column;
  max-width: 660px;
  margin-top: 24px;
  margin-bottom: 80px;
`;

const headingStyle = css`
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 52px;
  line-height: 60px;
  font-weight: bold;
`;

const paragraphStyle = css`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-top: 0;
  margin-bottom: 10px;
`;

const heroBubble = css`
  display: flex;
  margin-top: 2px;
  margin-bottom: 28px;
  padding: 2px 10px;
  align-items: center;
  border-radius: 8px;
  background-color: #f0f0f0;
  width: max-content;

  span {
    font-size: 36px;
    color: #59d9d1;
    margin-top: -0.15em;
    margin-left: -0.1em;
  }

  p {
    font-size: 16px;
    margin: 0px 0px 0px 6px;
    opacity: 0.5;
    color: #000;
    line-height: 22px;
  }
`;

const testimonialWrapper = css`
  display: flex;
`;

const testimonialColumn = css`
  width: 33.33%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
`;

const testimonialContainer = css`
  width: auto;
  height: min-content;
  margin-bottom: 20px;
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f1f1;
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.08);

  .starsRating {
    color: #eeb745;
    font-size: 26px;
    margin-bottom: 16px;
  }

  h4 {
    margin-top: 0px;
    margin-bottom: 8px;
    line-height: 26px;
    font-weight: bold;
    color: #000;
    font-size: 18px;
    letter-spacing: 0.01em;
  }

  p {
    margin-bottom: 8px;
    line-height: 26px;
    font-family: Inter, sans-serif;
    color: #000;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }
`;

const footerContainer = css`
  margin-top: 140px;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #f5f5f5;
`;

const footerStuffLeft = css``;

const footerStuffMiddle = css`
  p {
    margin: 0;
    margin-bottom: 12px;
    transition: opacity 200ms ease;
    color: #3b4150;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
  }
`;

const footerStuffRight = css`
  p {
    color: #989aa2;
    margin-top: 0;

    font-family: Inter, sans-serif;
    font-size: 16px;
    line-height: 12px;
    letter-spacing: 0.02em;
  }
`;
const credits = css`
  margin-bottom: 0px;
  color: #989aa2;
  font-size: 16px;
  letter-spacing: 0.02em;
`;

// products showoff links

const iPhone = css`
  background-image: url('https://prettyprogress.app/images/iPhone-show-off.jpg');
`;

const iPad = css`
  background-image: url('https://prettyprogress.app/images/iPad-show-off.jpg');
`;

const macBook = css`
  background-image: url('https://prettyprogress.app/images/Mac-show-off.jpg');
`;

const appleWatch = css`
  background-image: url('https://prettyprogress.app/images/Watch-show-off.jpg');
`;

function App() {
  return (
    <div>
      <nav css={[stickyNav, paddingContainer]}>
        <div css={navStuffLeft}>
          <div css={navPrettyProgress}>
            <div css={navPrettyProgressGraphicContainer}>
              <div css={navPrettyProgressGraphic1}>
                <div css={navPrettyProgressGraphic2}>
                  <div css={navPrettyProgressGraphic4} />
                  <div css={navPrettyProgressGraphic5} />
                  <div css={navPrettyProgressGraphic3} />
                </div>
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://prettyprogress.app/index.html"
            >
              {' '}
            </a>

            <div css={navPrettyProgressText}>
              <span>Pretty</span>
              <span>Progress</span>
              <br />
            </div>
          </div>
        </div>
        <div css={navStuffRight}>
          <div css={navProductHunt}>
            <div css={navProductHuntGraphic}>
              <span>P</span>
            </div>
            <div css={navProductHuntText1And2Wrapper}>
              <div css={navProductHuntText1}>FEATURED ON</div>
              <div css={navProductHuntText2}>Product Hunt</div>
            </div>
            <div css={navProductHuntText3}>
              ▲<br />
              206
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.producthunt.com/posts/pretty-progress?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-pretty-progress"
            >
              {' '}
            </a>
          </div>
          <div css={navDownloadButton}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/app/pretty-progress/id1597616326"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <div css={[heroContainer, paddingContainer]}>
        <div css={contentContainer}>
          <div css={[heroText, heroTextPadding]}>
            <h1 css={headingStyle}>
              Beautiful countdown &amp; progress bars widgets on your Home
              Screen.
            </h1>
            <p css={paragraphStyle}>
              Clear and convenient countdown widgets to track and remind
              yourself about the important things on the device you use every
              day.
            </p>
            <br />
            <div css={heroBubble}>
              <span>•</span>
              <p>iPad, Mac, Apple Watch &amp; Android coming very soon</p>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/app/pretty-progress/id1597616326"
            >
              <img src={AppBadge} alt="app-store-badge" />
            </a>
          </div>
        </div>
      </div>
      <div css={paddingContainer}>
        {/* Platforms */}
        <div css={contentContainer}>
          <div css={textSection}>
            <h2 css={[headingStyle, textCenter]}>
              Keep track of the important things with <em>Always On</em> reminders.
            </h2>
            <p css={[paragraphStyle, textCenter]}>
              Your life goals, <em>The Matrix</em> release, deadlines...
              Unlimited beautiful progress bars and countdowns that are always
              visible on your everyday device. <br />
              What better place to remind yourself about the things that matter?
            </p>
          </div>
          <div css={[productSection, iPhone]}>
            <div css={textShowOff}>On your iPhone.</div>
          </div>
          <div css={[productSection, iPad]}>
            <div css={textShowOff}>Soon, on your iPad.</div>
            <div css={regularLinkButton}>
              <a href="#newsletter">Notify me about this!</a>
            </div>
          </div>
          <div css={[productSection, macBook]}>
            <div css={textShowOff}>And on your Mac, too. 😉</div>
            <div css={regularLinkButton}>
              <a href="#newsletter">Notify me about this!</a>
            </div>
          </div>
          <div css={[productSection, appleWatch]}>
            <div css={textShowOff}>Oh! And on your Apple Watch.</div>
            <div css={regularLinkButton}>
              <a style={{ color: 'black' }} href="#newsletter">
                Notify me about this!
              </a>
            </div>
          </div>
        </div>
        {/* Styles */}
        <div css={contentContainer}>
          <div css={textSection}>
            <h2 css={[headingStyle, textCenter]}>
              Personalize your Home Screen with customizable designs.
            </h2>
            <p css={[paragraphStyle, textCenter]}>
              Create unique progress bars and countdowns customizing the
              templates, add them to your Home Screen, and feel inspired by your
              progress!
            </p>
          </div>
          <div css={productSection}>
            <div css={divWithInline}>
              <div css={navStuffLeft}>
                <div css={textShowOff}>Swiss Style</div>
              </div>
              <div css={navStuffRight}>
                <div css={proButton}>PRO</div>
              </div>
            </div>
            <img
              src="https://prettyprogress.app/images/swiss-style-widget-composition-horizontal.png"
              alt=""
              width="100%"
            />
            <br />
            <br />
            <div css={[customizeFontStyle, divWithInline]}>
              Customize:&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <div css={[customizeFontStyle, customizeButton]}>Colors</div>
              </div>
            </div>
          </div>
          <div css={productSection}>
            <div css={divWithInline}>
              <div css={navStuffLeft}>
                <div css={textShowOff}>The Grid</div>
              </div>
              <div css={navStuffRight}>
                <div css={proButton}>PRO</div>
              </div>
            </div>
            <img
              src="https://prettyprogress.app/images/the-grid-widget-composition-horizontal.png"
              alt=""
              width="100%"
            />
            <br />
            <br />
            <div css={[customizeFontStyle, divWithInline]}>
              Customize:&nbsp;&nbsp;&nbsp;&nbsp;
              <div css={divWithInline}>
                <div css={[customizeFontStyle, customizeButton]}>Colors</div>
                <div css={[customizeFontStyle, customizeButton]}>Layout</div>
                <div css={[customizeFontStyle, customizeButton]}>Item Size</div>
                <div css={[customizeFontStyle, customizeButton]}>
                  Item Shape
                </div>
                <div css={[customizeFontStyle, customizeButton]}>
                  Empty Progress Style
                </div>
              </div>
            </div>
          </div>
          <div css={productSection}>
            <div css={divWithInline}>
              <div css={navStuffLeft}>
                <div css={textShowOff}>Aqua</div>
              </div>
              <div css={navStuffRight}>
                <div css={proButton}>PRO</div>
              </div>
            </div>
            <img
              src="https://prettyprogress.app/images/aqua-widget-composition-horizontal.png"
              alt=""
              width="100%"
            />
            <br />
            <br />
            <div css={[customizeFontStyle, divWithInline]}>
              Customize:&nbsp;&nbsp;&nbsp;&nbsp;
              <div css={divWithInline}>
                <div css={[customizeFontStyle, customizeButton]}>Colors</div>
                <div css={[customizeFontStyle, customizeButton]}>
                  Gradient Style
                </div>
                <div css={[customizeFontStyle, customizeButton]}>
                  Gradient Fade
                </div>
              </div>
            </div>
          </div>
          <div css={productSection}>
            <div css={divWithInline}>
              <div css={navStuffLeft}>
                <div css={textShowOff}>Retro OS</div>
              </div>
              <div css={navStuffRight}>
                <div css={proButton}>PRO</div>
              </div>
            </div>
            <img
              src="https://prettyprogress.app/images/retro-os-widget-composition-horizontal.png"
              alt=""
              width="100%"
            />
            <br />
            <br />
            <div css={[customizeFontStyle, divWithInline]}>
              Customize:&nbsp;&nbsp;&nbsp;&nbsp;
              <div css={divWithInline}>
                <div css={[customizeFontStyle, customizeButton]}>
                  Operative System
                </div>
              </div>
            </div>
          </div>
          <div css={productSection}>
            <div css={divWithInline}>
              <div css={navStuffLeft}>
                <div css={textShowOff}>Minimal</div>
              </div>
              <div css={navStuffRight}>
                <div css={proButton}>PRO</div>
              </div>
            </div>
            <img
              src="https://prettyprogress.app/images/minimal-widget-composition-horizontal.png"
              alt=""
              width="100%"
            />
            <br />
            <br />
            <div css={[customizeFontStyle, divWithInline]}>
              Customize:&nbsp;&nbsp;&nbsp;&nbsp;
              <div css={divWithInline}>
                <div css={[customizeFontStyle, customizeButton]}>Colors</div>
                <div css={[customizeFontStyle, customizeButton]}>Icon</div>
                <div css={[customizeFontStyle, customizeButton]}>
                  Show / Hide icon
                </div>
                <div css={[customizeFontStyle, customizeButton]}>Bar size</div>
                <div css={[customizeFontStyle, customizeButton]}>Bar shape</div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div css={contentContainer}>
          <div css={textSection}>
            <h2 css={[headingStyle, textCenter]}>What our users say.</h2>
            <p css={[paragraphStyle, textCenter]}>
              Testimonials from our users ❤️
            </p>
          </div>
          <div css={testimonialWrapper}>
            <div css={testimonialColumn}>
              <div css={testimonialContainer}>
                <div className="starsRating">★★★★★</div>
                <h4>Simple and extensive</h4>
                <p>
                  Was looking for a great app to add personal goals and
                  deadlines. Really nice solution and great usability!
                </p>
                <p>
                  <em>Edgar Kussberg</em>
                </p>
              </div>
              <div css={testimonialContainer}>
                <div className="starsRating">★★★★★</div>
                <h4>Great job</h4>
                <p>
                  It's definitely the prettiest countdown / progress app out
                  there
                </p>
                <p>
                  <em>Native</em>
                </p>
              </div>
              <Tweet
                tweetId="1471069084620144643"
                options={{ conversation: 'none' }}
              />
            </div>
            <div css={testimonialColumn}>
              <div css={testimonialContainer}>
                <div className="starsRating">★★★★★</div>
                <h4>Beautiful themes and very customisable</h4>
                <p>
                  I love to remind myself of many things and the progress bar
                  percentage looks great on my phone. My favourite is the
                  gradient percentage and the retro windows styles.
                </p>
                <p>
                  <em>Ollie Boyers</em>
                </p>
              </div>
              <Tweet
                tweetId="1477677287806050310"
                options={{ conversation: 'none' }}
              />
            </div>
            <div css={testimonialColumn}>
              <div css={testimonialContainer}>
                <div className="starsRating">★★★★★</div>
                <h4>Recommended</h4>
                <p>
                  Easily the most beautifully designed countdown widgets I could
                  find on the App Store!
                </p>
                <p>
                  <em>Dogend Jenkins</em>
                </p>
              </div>
              <Tweet
                tweetId="1471041962379726848"
                options={{ conversation: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div css={[footerContainer, paddingContainer]}>
        <div css={contentContainer}>
          <div css={testimonialWrapper}>
            <div css={[testimonialColumn, footerStuffLeft]}>
              <div css={navPrettyProgress}>
                <div css={navPrettyProgressGraphicContainer}>
                  <div css={navPrettyProgressGraphic1}>
                    <div css={navPrettyProgressGraphic2}>
                      <div css={navPrettyProgressGraphic4} />
                      <div css={navPrettyProgressGraphic5} />
                      <div css={navPrettyProgressGraphic3} />
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://prettyprogress.app/index.html"
                >
                  {' '}
                </a>

                <div css={navPrettyProgressText}>
                  <span>Pretty</span>
                  <span>Progress</span>
                  <br />
                </div>
              </div>
            </div>
            <div css={[testimonialColumn, footerStuffMiddle]}>
              <p>Download</p>
              <p>How to add a Countdown widget on your iPhone's Home Screen</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies Policy</p>
            </div>
            <div css={[testimonialColumn, footerStuffRight]}>
              <p>😃 Feedback?</p>
              <p>🤔 Got ideas for a new theme/collaboration?</p>
              <p>🤑 Want to sell your design on the app?</p>
              <br />
              <p>Just drop a message on any channel!</p>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div css={[divWithInline, credits]}>
            <div css={navStuffLeft}>© 2022 Pretty Progress</div>
            <div css={navStuffRight}>Made by @RodrigoSanudo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
