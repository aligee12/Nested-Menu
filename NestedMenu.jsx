import React from "react";

import MenuList from "./MenuList";

const NestedMenu = ({ menus = [] }) => {
  return (
    <div className="bg-slate-400 h-screen w-1/4 mt-0">
      <MenuList menusList={menus}></MenuList>
    </div>
  );
};

export default NestedMenu;
