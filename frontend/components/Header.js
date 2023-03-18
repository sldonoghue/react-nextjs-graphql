import Link from "next/dist/client/link";
import styled from "styled-components";

import Nav from "./Nav";

const LogoStyles = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/">
          <LogoStyles> React Store </LogoStyles>
        </Link>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
}