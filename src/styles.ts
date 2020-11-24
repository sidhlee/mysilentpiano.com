import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --text-main: #eee;
  --text-secondary: #999;
  --page-width: 970px;
  --header-height: 95px;

  --z-header: 1000;
}

html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}


body {
  background: #070707;
  font-family: 'Minion Pro', serif;
  color: var(--text-main);
  margin: 0;
}

h1, h2, h3 {
  font-family: 'Futura PT', sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--text-main);
}

`;
