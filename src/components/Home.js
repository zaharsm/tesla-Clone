import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../cars";

function Home(cars) {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        leftButton="Custom order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        image="solar-roof.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        title="Accessories"
        image="accessories.jpg"
        leftButton="shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
