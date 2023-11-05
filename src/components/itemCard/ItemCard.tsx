import "./ItemCard.css";
// import BlankItem from "../../assets/BlankItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCard({
  picture,
  id,
  name,
  price,
  data,
}: {
  picture?: string;
  id: string;
  name?: string;
  price?: string;
  data?: any;
}) {
  const [itemClicked, setItemClicked] = useState(false);

  useEffect(() => {
    null;
  }, [picture]);

  return (
    <Link
      to={"/" + id}
      state={{ data: data }}
      className="ItemCard"
      onClick={() => setItemClicked(!itemClicked)}
    >
      <div className="picture">
        <img
          src={"/productIcons/" + picture + ".png"}
          width="100vw"
          bacground-color="red"
          aspect-ratio="1:1"
        ></img>
      </div>
      <div className="name">{name}</div>
      <div className="price">{price} $</div>
    </Link>
  );
}
