import "./ItemCard.css";
import BlankItem from "../../assets/BlankItem";
import { useState } from "react";
import Cross from "../../assets/Cross";

export default function ItemCard({
  picture = <BlankItem />,
  id,
  name,
  price,
}: {
  picture?: JSX.Element;
  id?: string;
  name?: string;
  price?: string;
}) {
  const [itemClicked, setItemClicked] = useState(false);
  return (
    <>
      <div className="ItemCard" onClick={() => setItemClicked(!itemClicked)}>
        <div className="picture">{picture}</div>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      {itemClicked == true ? (
        <div className="buyingItem">
          NIE KUPISZ
          <div onClick={() => setItemClicked(!itemClicked)}>
            <Cross />
          </div>
        </div>
      ) : null}
    </>
  );
}
