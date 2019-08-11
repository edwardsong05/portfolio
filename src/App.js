import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
