import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Container, Row, CardGroup } from "react-bootstrap";
import Design from "./Components/Design";
import Plans from "./HomeScreeen/Plans";
import Stories from "./HomeScreeen/Stories";
import WorkSolution from "./HomeScreeen/WorkSolution";
import Mainscreen from "./HomeScreeen/Mainscreen";

import StoryItems from "./Data/stories";
import DesignCard from "./Components/DesignCard";
import Designs from "./Data/designs";
import templates from "./Data/templatess";
import Templates from "./Components/Templates";

const App = () => {
  return (
    <div className='App'>
      <Header />

      <main className='py-3'>
        <Container>
          <Design />

          <CardGroup>
            {Designs.map((design) => (
              <DesignCard design={design} />
            ))}
          </CardGroup>

          <Mainscreen />

          <h1 className='py-3' style={{ textAlign: "center" }}>
            Templates for absolute nothing
          </h1>
          <p className='py-3' style={{ textAlign: "center" }}>
            {" "}
            Customise an office template, or design something more personal like
            and invitation
          </p>

          <Row>
            {templates.map((template) => (
              <Templates template={template} />
            ))}
          </Row>

          <WorkSolution />
          <Plans />

          <h1 style={{ textAlign: "center" }}>
            Loved by People and Bussiness around the world
          </h1>

          <CardGroup>
            {StoryItems.map((Story) => (
              <Stories story={Story} />
            ))}
          </CardGroup>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
