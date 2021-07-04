import { CarouselData } from "../carouselData";
import { CarousalCard } from "./CarousalCard";
import { useState } from "react";
import "./Carousel.css";

export default function Carousal() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          selected == 0
            ? setSelected(CarouselData.length - 1)
            : setSelected(selected - 1);
        }}
      >
        <i class="fas fa-chevron-circle-left"></i>
      </button>
      {selected == 0 ? (
        <CarousalCard
          props={CarouselData[CarouselData.length - 1]}
          selected={false}
        />
      ) : (
        <CarousalCard props={CarouselData[selected - 1]} selected={false} />
      )}
      <CarousalCard props={CarouselData[selected]} selected={true} />
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
