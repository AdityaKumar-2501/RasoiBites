import { NavLinks } from "@/constants";

const NavBar = () => {
  return (
    <div className="flex-center pt-8 gap-[40rem]">
      <a className="hero-heading text-2xl cursor-pointer" href="#">
        RasoiBites
      </a>

      <ul className="flex-center gap-8 text-xl body-text">
        {NavLinks.map(nav => (
          <li key={nav.id}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default NavBar