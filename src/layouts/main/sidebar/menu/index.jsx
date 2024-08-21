import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../assets/utils/consts";
import Button from "../../../../assets/components/button";
import More from "../menu/more";
import New from "../menu/new";
export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex  items-center gap-5 group-hover:bg-[color:var(--background-third)] duration-300",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px]  rounded-full absolute bg-[color:var(--color-primary)] border border-[color:var(--background-primary)] text-[color:var(--background-primary)] -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {isActive && menu.icons.active}
                {!isActive && menu.icons.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More/>
      <New/>
    </nav>
  );
}
