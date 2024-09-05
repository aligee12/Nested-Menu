import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  console.log(item);
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(itemTitle) {
    setDisplayChildren({
      ...displayChildren,
      [itemTitle]: !displayChildren[itemTitle],
    });
  }

  return (
    <li className="my-1 p-2 list-none">
      <div className="flex gap-1">
        <p>{item.title}</p>
        {item && item.submenu && item.submenu.length ? (
          <span
            onClick={() => handleToggleChildren(item.title)}
            className="cursor-pointer"
          >
            {displayChildren[item.title] ? (
              <FaMinus size={10} />
            ) : (
              <FaPlus size={10} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.submenu &&
      item.submenu.length &&
      displayChildren[item.title] ? (
        <MenuList menusList={item.submenu} />
      ) : null}
    </li>
  );
};

export default MenuItem;
