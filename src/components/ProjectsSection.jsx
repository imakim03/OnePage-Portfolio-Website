import React from "react";
import Carousel from 'react-grid-carousel';
import '../styles/ProjectsSection.css';

const ProjectsSection = () => {
    return(
        <section id="sectionTwo">
            <Carousel cols={2} rows={1} gap={10} >
                <Carousel.Item  >
                <div className="projectCard">
                    <a href="#">
                    <img
                        className="projectImage"
                        width="100%"
                        src="https://picsum.photos/800/600?random=10"
                        alt="Project 1"
                    />
                    <div className="overlay">
                        <div className="projectInfo">
                            <h3 className="title">Project Name 1</h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="projectDate">
                            2020 - 2019
                        </div>
                    </div>
                    </a>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="projectCard">
                    <a href="#">
                    <img
                        className="projectImage"
                        width="100%"
                        src="https://picsum.photos/800/600?random=1"
                        alt="Project 2"
                    />
                    <div className="overlay">
                        <div className="projectInfo">
                            <h3 className="title">Project Name 2</h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="projectDate">
                            2020 - 2019
                        </div>
                    </div>
                    </a>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="projectCard">
                    <a href="#">
                    <img
                        className="projectImage"
                        width="100%"
                        src="https://picsum.photos/800/600?random=2"
                        alt="Project 3"
                    />
                    <div className="overlay">
                        <div className="projectInfo">
                            <h3 className="title">Project Name 3</h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            </div>
                        <div className="projectDate">
                            2020 - 2019
                        </div>
                    </div>
                    </a>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="projectCard">
                    <a href="#">
                    <img
                        className="projectImage"
                        width="100%"
                        src="https://picsum.photos/800/600?random=8"
                        alt="Project 4"
                    />
                    <div className="overlay">
                        <div className="projectInfo">
                            <h3 className="title">Project Name 4</h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="projectDate">
                            2020 - 2019
                        </div>
                    </div>
                    </a>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="projectCard">
                    <a href="#">
                    <img
                        className="projectImage"
                        width="100%"
                        src="https://picsum.photos/800/600?random=5"
                        alt="Project 5"
                    />
                    <div className="overlay">
                        <div className="projectInfo">
                            <h3 className="title">Project Name 5</h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="projectDate">
                            2020 - 2019
                        </div>
                    </div>
                    </a>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="projectCard">
                    <a href="#">
                    <img
                        className="projectImage"
                        width="100%"
                        src="https://picsum.photos/800/600?random=7"
                        alt="Project 6"
                    />
                    <div className="overlay">
                        <div className="projectInfo">
                            <h3 className="title">Project Name 6</h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="projectDate">
                            2020 - 2019
                        </div>
                    </div>
                    </a>
                </div>
                </Carousel.Item>
            </Carousel>
            <h1 className="title">Projects</h1>
        </section>
    );
};

export default ProjectsSection;