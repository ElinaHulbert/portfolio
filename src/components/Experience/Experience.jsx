import React from "react";
import "./Experience.css";
import { GoPrimitiveDot } from "react-icons/go";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Development</h3>
          <div className="experience__content">
            {/* #1 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Vanilla JavaScript</h4>
                <small className="text-light">
                  Local & session storage, API's, quiz, Date object
                </small>
              </div>
            </article>
            {/* #2 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>MongoDB, Node.js & Express</h4>
                <small className="text-light">
                  MERN briefs, creating an API
                </small>
              </div>
            </article>
            {/* #3 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">
                  MERN briefs, calculator, API's
                </small>
              </div>
            </article>
            {/* #4 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">
                  Quiz, Firebase Authentication
                </small>
              </div>
            </article>
            {/* #5 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">
                  SCSS/SASS, Bootstrap, Tailwind, Flex, Grid
                </small>
              </div>
            </article>
            {/* #6 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Phaser</h4>
                <small className="text-light">Seabattle game</small>
              </div>
            </article>
            {/* #7 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Responsive Web Design & Accessibility</h4>
                <small className="text-light">Lighthouse</small>
              </div>
            </article>
            {/* #8 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Agile Methodology</h4>
                <small className="text-light">Scrum & Kanban</small>
              </div>
            </article>
            {/* #9 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Git, GitHub</h4>
              </div>
            </article>
            {/* #10 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Pair-Programming & Mob-Programming</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Art</h3>
          <div className="experience__content">
            {/* #1 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Typography Composition</h4>
                <small className="text-light">
                  A personal project as a part of bachelors
                </small>
              </div>
            </article>
            {/* #2 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Design for the User</h4>
                <small className="text-light">
                  A client project as a part of module at Hyper Island
                </small>
              </div>
            </article>
            {/* #3 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Coloristics</h4>
                <small className="text-light">
                  As a part of an interior design module
                </small>
              </div>
            </article>
            {/* #4 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Illustration </h4>
                <small className="text-light">Illustration for kids</small>
              </div>
            </article>
            {/* #5 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Digital Art</h4>
                <small className="text-light">Both vector and scalar</small>
              </div>
            </article>
            {/* #6 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>3D Modelling</h4>
                <small className="text-light">
                  General object building and UV-mapping
                </small>
              </div>
            </article>
            {/* #7 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Painting</h4>
                <small className="text-light">Watercolors, gouache, oils</small>
              </div>
            </article>
            {/* #8 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Architectural Drawing</h4>
                <small className="text-light">
                  Application Task for bachelors
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="container__second__experience">
        <div className="experience__first">
          <h3>Software</h3>
          <div className="experience__content">
            {/* #1 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            {/* #2 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Visual Studio Code</h4>
              </div>
            </article>
            {/* #3 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Adobe Illustrator</h4>
              </div>
            </article>
            {/* #4 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Adobe Photoshop</h4>
              </div>
            </article>
            {/* #5 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Adobe Indesign</h4>
              </div>
            </article>
            {/* #6 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Trello</h4>
              </div>
            </article>
            {/* #7 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Miro</h4>
              </div>
            </article>
            {/* 8 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Autodesk Maya</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__second">
          <h3>Soft Skills</h3>

          <div className="experience__content">
            {/* #1 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Fast Learner</h4>
              </div>
            </article>
            {/* #2 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Ability To Work In a Team</h4>
              </div>
            </article>
            {/* #3 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Patience</h4>
              </div>
            </article>
            {/* #4 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Accuracy</h4>
              </div>
            </article>
            {/* #5 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Social Skills</h4>
              </div>
            </article>
            {/* #6 */}
            <article className="experience__details">
              <GoPrimitiveDot size={13} className="experience__details-icon" />
              <div>
                <h4>Flexibility & Adaptibility</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
