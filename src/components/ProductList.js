import React from "react";
import Card from "../components/Card";

const ProductList = ({ exercise }) => (
  <div>
    {exercise.map((e) => {
      return (
        <Card
          key={e._id}
          nombre={e.nombre}
          precio={e.precio}
          img={e.img}
          descripcion={e.descripcion}
          // leftColor={e.leftColor}
          // rightColor={e.rightColor}
        />
      );
    })}
  </div>
);

export default ProductList;
