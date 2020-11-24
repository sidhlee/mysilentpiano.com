import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { GlobalStyle } from "../styles";

import Layout from "../components/layout";

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: var(--header-height);
    background: black;
    z-index: 100;
  }

  iframe {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function Home() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/idm0uif.css"
        ></link>
      </Helmet>
      <Layout>
        <VideoWrapper>
          <iframe
            src="https://player.vimeo.com/video/481845228"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      </Layout>
    </>
  );
}
