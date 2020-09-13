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
          >
            <i class="fa fa-linkedin fa-2x icon"></i>
          </a>

          <a href="https://www.instagram.com/djznuts/" target="_blank">
            <i class="fa fa-instagram fa-2x icon"></i>
          </a>
          <a
            href="https://s3.amazonaws.com/handshake.production/documents/documents/019/584/025/original/Derrick_Zhen_Resume_Sept_2020.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAILGI2B7PIOQKG5EA%2F20200913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200913T062828Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=54bafb2af7f5a725c8c4359410e61d9d84579a980527865ecf76389ccffa0e6b"
            target="_blank"
          >
            <i class="fa fa-file fa-2x icon"></i>
          </a>
          <a href="mailto: dzhen001@gmail.com" target="_blank">
            <i class="fa fa-envelope fa-2x icon"></i>
          </a>
        </Tray>
      </div>

      <small>here's some stuff I've made: </small>
    </div>
  );
}
