import { Logo, Button } from "../ui";
import { Navbar } from "../common";

function Header({ isLogged = false }) {
  return (
    <header className="header">
      <Logo />

      <Navbar />

      <div className="actions">
        {isLogged && <Button>Réserver</Button>}

        {!isLogged && (
          <Button isLink={true} path={"/login"}>
            Se connecter
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
