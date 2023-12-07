import React from "react";
import Nappi from "./Nappi";

//Ratkasu et vain yksi nappi toimii togglella oli et Nappi.js piti tehdä omana komponenttina ja importata tänne conditional renderöintiin omanaan.

const Buttons = (props) => {
  let setAmount = props.item;

  // CONDITIONAL RENDERING
  // voisko tän korjata jonkulaisella for loopilla?
  /*
const amountofNappi = () => {
    for (let montako = 0; montako < input; montako++) {
        tempRender = <Nappi/>
        vai pitääkö tehdä
        tempRender = <div> <Nappi/> </div>
    }
}

*/
  let tempRender = (
    <h2>Input error in amount of sets. Give a value between 1-5</h2>
  );
  if (setAmount === 1) {
    tempRender = (
      <div>
        <Nappi />
      </div>
    );
  }

  if (setAmount === 2) {
    tempRender = (
      <div>
        <Nappi />
        <Nappi />
      </div>
    );
  }

  if (setAmount === 3) {
    tempRender = (
      <div>
        <Nappi />
        <Nappi />
        <Nappi />
      </div>
    );
  }

  if (setAmount === 4) {
    tempRender = (
      <div>
        <Nappi />
        <Nappi />
        <Nappi />
        <Nappi />
      </div>
    );
  }
  if (setAmount === 5) {
    tempRender = (
      <div>
        <Nappi />
        <Nappi />
        <Nappi />
        <Nappi />
        <Nappi />
      </div>
    );
  }
  return <div>{tempRender}</div>;
};

export default Buttons;
