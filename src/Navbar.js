import { ReactComponent as PetsPaw } from "./pets_paw.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        Pets
        <PetsPaw />
      </h1>
      <div className="links">
        {/* <img src="https://img.icons8.com/color/48/000000/dog-collar.png" /> */}
        <a href="/profile">Profile</a>
        <a href="/Vet">Doctor Saab</a>
        <a href="/food">Food Dada</a>
      </div>
    </nav>
  );
};

export default Navbar;
