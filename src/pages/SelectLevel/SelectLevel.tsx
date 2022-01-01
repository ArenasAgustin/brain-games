import React from "react";
import ButtonLevel from "../../components/ButtonLevel/ButtonLevel";

export default function SelectLevel() {
  return (
    <div className="select-level">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
        <ButtonLevel level={level} key={level} />
      ))}
    </div>
  );
}
