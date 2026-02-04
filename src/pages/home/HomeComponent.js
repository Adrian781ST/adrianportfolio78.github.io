import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
