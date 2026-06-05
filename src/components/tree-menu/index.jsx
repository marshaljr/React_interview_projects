import MenuLists from "./menu-lists";
import "./style.css";

export default function TreeMenu({ menus = [] }) {
  return (
    <div className="tree-menu-container">
      <MenuLists list={menus} />
    </div>
  );
}
