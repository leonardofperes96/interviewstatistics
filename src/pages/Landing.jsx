import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import main from "../assets/main.svg";
import favicon from "../assets/favicon.ico";

const Wrapper = styled.div`
  background: var(--lightest-purple);
  padding: 1em;
  .nav {
    height: 7rem;
  }
  .logo-link {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 2rem;
    text-decoration: none;
    color: var(--light-purple);
  }
  h1{
    margin-bottom: 1.5rem;
  }

  .page {
    min-height: calc(100vh - 2em);
  }
  .main-img {
    display: none;
  }
  .main {
    margin-top: 20%;
    display: grid;
    place-items: center;
  }
  .title-span{
    color: var(--light-purple);
    font-weight: 700;
  }
  p{
    color: var(--dark-gray);
    font-size: 18px;
  }

  @media (min-width: 992px) {
    .main {
      margin-top: 10%;
      grid-template-columns: 1fr 1fr;
      gap: 2em;
    }
    .main-img {
      display: block;
    }
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        <nav className="nav">
          <Link className="logo-link" to="/">
            <img src={favicon} alt="Logo" />
            InterviewStatistics
          </Link>
        </nav>
        <main className="main">
          <div>
            <h1>
              Job <span className="title-span">Tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id ab, asperiores totam, laudantium odio impedit maxime in provident cum quis autem, quibusdam ad nihil enim qui neque! Harum, atque.
            </p>
            <Link className='btn' to='/register'>Login/Register</Link>
          </div>
          <img
            src={main}
            alt="Interview Landing Image"
            className="img main-img"
          />
        </main>
      </div>
    </Wrapper>
  );
};

export default Landing;
