import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Projects {isOpen ? "▲" : "▼"}</button>
      {isOpen && (
        <ul>
          <li>
            <Link to={"/projects/xwinder"}>X-Winder</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
