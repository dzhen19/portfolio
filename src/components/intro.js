import React from "react";
import styled from "styled-components";
import "./intro.css";
import { device } from "../device";

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
          <RedText>Hey I'm Derrick.</RedText> I'm a student at Swarthmore
          College building data-driven web apps.
        </IntroText>

        <Tray>
          <a
            href="https://github.com/dzhen19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-github fa-2x icon"></i>
          </a>
          <a
            href="https://medium.com/@dzhen001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-medium fa-2x icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/derrick-zhen-791b53195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin fa-2x icon"></i>
          </a>
          <a
            href="mailto: dzhen001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-envelope fa-2x icon"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1RtvuQiL-xr_k5TRNTsDqKH4pTlVAHoVB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-file fa-2x icon"></i>
          </a>
        </Tray>
      </IntroDiv>
      <p style={{ textAlign: "center" }}>here's some stuff I've worked on: </p>
    </div>
  );
}
