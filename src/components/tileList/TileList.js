import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        const { name, ...description } = item;
        return <Tile key={index} name={name} description={description} />;
      })}
    </div>
  );
};
