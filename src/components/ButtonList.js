import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Valentines" />
      <Button name="Cooking" />
      <Button name="Thoughts" />
      <Button name="Fashion" />
    </div>
  );
};

export default ButtonList;
