import { Link } from "react-router-dom";
import "./BarIcon.css";

export default function BarIcon({
  text,
  icon,
  className,
  link,
  onClick,
}: {
  text?: string;
  icon: JSX.Element;
  className: string;
  link?: string;
  onClick?: () => void;
}) {
  return (
    <Link to={link ? link : ""} className={className} onClick={onClick}>
      <div style={{ width: "70%" }}>{text}</div>
      <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
        {icon}
      </div>
    </Link>
  );
}
