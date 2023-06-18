import "./InfoCard.css";

function InfoCard({
  src,
  smallDescription,
  description,
  buttonName,
}: {
  src?: string;
  smallDescription?: string;
  description?: string;
  buttonName?: string;
}) {
  return (
    <div className="InfoCard">
      <img className="CardPicture" src={src}></img>
      <div className="CardDescription">
        <div className="smallDsc">{smallDescription}</div>
        <div className="bigDsc">{description}</div>
      </div>
      <div className="CardButton">
        <div className="ButtonInCard"> {buttonName} </div>
      </div>
    </div>
  );
}
export default InfoCard;
