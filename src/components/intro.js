import React from "react";
import styled from "styled-components";
import "./intro.css";

export default function Intro() {
  const Tray = styled.div`
    margin: 20px;
    color: black;
  `;

  const RedText = styled.div`
    display: inline;
    color: #ff2323;
  `;

  const IntroText = styled.div`
    font-size: 40px;
    font-family: Inconsolata;
  `;

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          padding: "5% 20%",
          marginBottom: "100px",
        }}
      >
        <IntroText>
          <RedText>Hey I'm Derrick</RedText>, a student and full-stack developer
          based in Swarthmore, PA.
        </IntroText>

        <Tray>
          <a
            href="https://www.linkedin.com/in/derrick-zhen-791b53195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin fa-2x icon"></i>
          </a>

          <a
            href="https://www.instagram.com/djznuts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-instagram fa-2x icon"></i>
          </a>
          <a
            href="https://app.joinhandshake.com/documents/19584025/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-file fa-2x icon"></i>
          </a>
          <a
            href="mailto: dzhen001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-envelope fa-2x icon"></i>
          </a>
        </Tray>
      </div>

      <small>here's some stuff I've made: </small>
    </div>
  );
}
