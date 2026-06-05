import MenuItems from "./menu-items";

export default function MenuLists({ list = [] }) {
  return (
    <ul className="menu-lists-container">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItems key={listItem.link} item={listItem} />
          ))
        : null}
    </ul>
  );
}
