import { Link } from "react-router-dom";

function Button({ isLink = false, path, children }) {
  if (isLink) {
    return (
      <Link to={path} className="button">
        {children}
      </Link>
    );
  }

  return <button className="button">{children}</button>;
}

export default Button;
