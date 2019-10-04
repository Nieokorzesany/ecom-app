import React from "react";
import "./HomepageComponent.scss";
import MenuItem from "./components/menu-item/Menu-item";
import Directory from "./components/directory/Directory";

export default function HomepageComponent() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
