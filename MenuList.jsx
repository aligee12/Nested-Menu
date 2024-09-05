import MenuItem from "./MenuItem";

const MenuList = ({ menusList = [] }) => {
  return (
    <ul className="pl-4 ml-2">
      {menusList && menusList.length
        ? menusList.map((menuItem) => (
            <MenuItem key={menuItem.title} item={menuItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
