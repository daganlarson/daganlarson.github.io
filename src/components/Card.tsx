import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  button?: string;
  title: string;
  to: string;
}

function Card({ children, button = "View", title, to }: Props) {
  return (
    <div className="card">
      <image className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
      </div>
      <Link className="btn btn-primary" to={to}>
        {button}
      </Link>
    </div>
  );
}

export default Card;
