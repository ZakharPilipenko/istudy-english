import React from "react";
import classes from "./DropDown.module.css"


const DropDown = ({open, trigger, menu}) => {

  return (
    <div className={classes.dropdown}>
      {trigger}
      {open ? (
        <ul className={classes.menu} style={menu.length > 4 ? { overflowY: 'scroll' } : {}}>
          {menu.map((menuItem, index) => (
            <li key={index} className={classes.menuitem}>{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
