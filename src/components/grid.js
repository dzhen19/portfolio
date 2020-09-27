import React from "react";
import styled from "styled-components";
import "./grid.css";
import { device } from "../device";

export default function Grid() {
  const GridChild = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 2px;
    transition: 0.2s;
  `;

  const GridChildText = styled.div`            
    text-align: center;
    color: white;
    position: relative;
    top: 30%;
    width: 50%;
    margin: auto;
    opacity: 0%;
    transition: .2s;
    ${GridChild}:hover & {
      opacity: 100%;
    }
  }}`;

  const Filter = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0%;
    transition: 0.2s;
    ${GridChild}:hover & {
      opacity: 50%;
    }
  `;

  const Wrapper = styled.div`
    display: grid;
    grid-auto-rows: 23rem;
    grid-template-columns: 50% 1fr;
    margin: auto;
    grid-gap: 2rem;
    @media ${device.mobile} {
      grid-template-columns: 1fr;
    }
    @media${device.laptop} {
      max-width: 915px;
    }
  `;

  const projectList = {
    1: {
      title: "Radiofeed",
      url: "http://radiofeed.herokuapp.com",
      thumbnail: "https://i.imgur.com/nLfr0sF.png",
      description:
        "Radiofeed helps Phildadelphia based on-air hosts research & write scripts efficiently.",
    },
    2: {
      title: "TitanicRF",
      url: "http://titanicrf.herokuapp.com",
      thumbnail: "https://i.imgur.com/HvCIF3i.png",
      description:
        "TitanicRF uses random forests to determine how you would've fared on the Titanic.",
    },
    3: {
      title: "Wellspring",
      url: "http://joinwellspring.com",
      thumbnail: "https://i.imgur.com/Vvt3j8T.png",
      description:
        "Front facing website for a Chicago based mental health startup",
    },
    4: {
      title: "Chief Humanity Officer",
      url: "http://chofficer.netlify.app",
      thumbnail: "https://i.imgur.com/ZGrf0N2.png",
      description: "A blog about human happiness, run by a Swarthmore Alum",
    },
    5: {
      title: "Open Source Data",
      url:
        "https://www.kaggle.com/derrickzhen/rolling-stone-080720-to-051220-with-entities",
      thumbnail: "https://i.imgur.com/SWYgfJU.png",
      description:
        "1,012 Rolling Stone articles I scraped with labeled sentiments & keywords",
    },
    6: {
      title: "Derrick Learns Coding",
      url: "http://derricklearnscoding.com",
      thumbnail: "https://i.imgur.com/DvzEUgZ.png",
      description: "Take a look at my coding journey!",
    },
  };

  return (
    <div style={{ margin: "2rem" }}>
      <Wrapper>
        {Object.keys(projectList).map((key) => (
          <GridChild
            className="bruh"
            style={{
              backgroundImage: `url(${projectList[key].thumbnail})`,
            }}
            onClick={() => {
              window.open(projectList[key].url);
            }}
          >
            <Filter />

            <GridChildText>
              <h4>{projectList[key].title}</h4>
              <p>{projectList[key].description}</p>
            </GridChildText>
          </GridChild>
        ))}
      </Wrapper>
    </div>
  );
}
