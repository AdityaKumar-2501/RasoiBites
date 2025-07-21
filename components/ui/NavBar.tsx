import { NavLinks } from "@/constants";

const NavBar = () => {
  return (
    <div className="flex justify-between pt-8 gap-[40rem]">
      <a className="hero-heading text-3xl cursor-pointer" href="#">
        RasoiBites
      </a>

      <ul className="flex-center gap-20 text-xl body-text">
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