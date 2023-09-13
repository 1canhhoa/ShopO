import { NavLink } from "react-router-dom"
function NavItem({ navItems }) {
  const active = "text-[#9a3412] flex items-center justify-center text-sm font-medium "
  const normal = " flex items-center justify-center text-sm font-medium "
  // const active = "text-blue-500 "
  // const normal = ""
  return (
    navItems.map((n, i) => {
      return (
        <NavLink to={n.url} key={i} className={({ isActive }) => (isActive ? active : normal)} >
          <button >{n.title}</button>
          {n.chevron && <span>{n.chevron}</span>}
        </NavLink>
      )
    })
  );
}

export default NavItem;