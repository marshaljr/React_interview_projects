import { useState } from "react";
import MenuLists from "./menu-lists";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItems({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(currentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  }
  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="menu-item-container">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="white" size={12} />
            ) : (
              <FaPlus color="white" size={12} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuLists list={item.children} />
      ) : null}
    </li>
  );
}
