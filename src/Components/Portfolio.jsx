/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Basic Machine Learning",
    description:
      "Learn the basics of Machine Learning, how to implement them in Python and take your first step towards AI.",
    url: "https://dev.to/tanveershahriar/machine-learning-basic-2lp1",
  },
  {
    title: "Univariate Linear Regression",
    description:
      "Learn how to implement Univariate Linear Regression in Python and how to use it to predict future values.",
    url: "https://dev.to/tanveershahriar/univariate-linear-regression-1anl",
  },
  {
    title: "Azure Virtual Machine",
    description:
      "Learn about Azure Virtual Machine, how to create one and how to connect to it. Take your first step towards Cloud Computing.",
    url: "https://dev.to/tanveershahriar/azure-virtual-machine-5fo",
  },
  {
    title: "Basic Web Development Project with React",
    description:
      "A website to sale fruits with authentication, authorization and payment gateway with React, Firebase and Stripe.",
    url: "https://assignment11-3d880.web.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
