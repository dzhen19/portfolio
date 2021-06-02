import React from "react";
import styled from "styled-components";
import "./intro.css";
import { device } from "../device";
import Typewriter from 'typewriter-effect';
import { trayInfo } from "./trayFixtures"


const TrayItem = (link, iconClassName) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class={iconClassName} style={{ fontSize: "2rem", marginRight: "5px", marginLeft: "5px" }}></i>
    </a >
  )
}

export default function Intro() {
  const Tray = styled.div`
    margin: 20px;
    color: black;
    text-align: center;
  `;

  const RedText = styled.div`
    display: inline;
    color: #ff2323;
  `;

  const IntroText = styled.div`
    font-size: 40px;
    font-family: Inconsolata;
    @media ${device.mobile} {
      font-size: 30px;
    }
  `;

  const IntroDiv = styled.div`
    padding: 5% 20%;
    margin-bottom: 100px;
    max-width: 700px;
    margin: auto;
    text-align: center;
    @media ${device.mobile} {
      padding: 5% 10%;
      text-align: block;
    }
  `;

  return (
    <div>
      <IntroDiv>
        <IntroText>
          <RedText>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hey I'm Derrick")
                  .start();
              }}
            />
          </RedText>
          I'm a CS student at Swarthmore College and a Full Stack Engineer.
        </IntroText>
        <Tray>
          {
            trayInfo.map(
              ({ link, iconClassName }) => {
                console.log(iconClassName)
                return TrayItem(link, iconClassName)
              }
            )
          }
        </Tray>
      </IntroDiv>
      <p style={{ textAlign: "center" }}>here's some stuff I've worked on: </p>
    </div>
  );
}
