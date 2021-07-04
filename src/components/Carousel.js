import { CarouselData } from "../carouselData";
import { CarousalCard } from "./CarousalCard";
import { useState } from "react";
import "./Carousel.css";

export default function Carousal() {
  const [selected, setSelected] = useState(0);

  return (
    <>
    {/* Previous Card Button */}
      <button
        // If the index gets out of bonds (negative), we display last card
        onClick={() => {
          selected == 0
            ? setSelected(CarouselData.length - 1)
            : setSelected(selected - 1);
        }}
      >
        <i class="fas fa-chevron-circle-left"></i>
      </button>
      {/* if selected card is first one, we diplay last one before it, else we show the card at selected-1 index */}
      {selected == 0 ? (
        <CarousalCard
          props={CarouselData[CarouselData.length - 1]}
          selected={false}
        />
      ) : (
        <CarousalCard props={CarouselData[selected - 1]} selected={false} />
      )}
      {/* Selected Card in the center */}
      <CarousalCard props={CarouselData[selected]} selected={true} />

      {/* if selected card is last one we diplay first card after it, else the card with selected+1 index */}
      {selected == CarouselData.length - 1 ? (
        <CarousalCard props={CarouselData[0]} selected={false} />
      ) : (
        <CarousalCard props={CarouselData[selected + 1]} selected={false} />
      )}
      <button
        onClick={() => {
          selected == CarouselData.length - 1
            ? setSelected(0)
            : setSelected(selected + 1);
        }}
      >
        <i class="fas fa-chevron-circle-right"></i>
      </button>
    </>
  );
}
