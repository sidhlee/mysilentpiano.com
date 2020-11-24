import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled("div")`
  position: fixed;
  z-index: var(--z-header);
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height);
  padding-top: 2rem;
  background: var(--header-bg);

  font-family: "Futura PT", sans-serif;

  nav {
    max-width: var(--page-width);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      min-width: 500px;
      justify-content: space-around;
    }
  }
`;

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <nav>
        <div className="logo">
          <Link to="/">MySilentPiano</Link>
        </div>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/music">music</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
