import React from "react";
import HeroImage from "../assets/restauranfood.jpg";
import SaladImage from "../assets/greek salad.jpg";
import LemonImage from "../assets/lemon dessert.jpg";
import BruchettaImage from "../assets/bruchetta.svg";
import MenuItem from "./MenuItem";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero-section">
        <div className="container hero">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn" onClick={() => navigate("/booking")}>
              Reserve a Table
            </button>
          </div>
          <div className="relative">
            <img src={HeroImage} width={300} className="hero-img" />
          </div>
        </div>
      </section>
      <section className="container menu-section">
        <div className="flex">
          <h1 className="heading-2">This weeks specials!</h1>
          <button className="btn">Online Menu</button>
        </div>

        <div className="grid">
          <MenuItem
            img={SaladImage}
            title="Greek Salad"
            price={13.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
          />
          <MenuItem
            img={BruchettaImage}
            title="Greek Salad"
            price={13.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
          />
          <MenuItem
            img={LemonImage}
            title="Greek Salad"
            price={13.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
