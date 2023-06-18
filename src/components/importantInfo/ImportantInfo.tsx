import InfoCard from "../Infocard/InfoCard";
import "./ImportantInfo.css";

function ImportantInfo() {
  return (
    <div className="Info">
      <InfoCard
        src="/src/assets/faq2.png"
        smallDescription="Help & Contact"
        description="If you have any questions we are here to help you"
        buttonName="Check Now !"
      />
      <InfoCard
        src="/src/assets/poradyR.png"
        smallDescription="Any questions ?"
        description="Aligato tutorial includes helpful informations about many spieces of animals"
        buttonName="Check Now !"
      />
      <InfoCard
        src="/src/assets/zaletyR.png"
        smallDescription="Benefits"
        description="Check our offer to make the best deal possible !"
        buttonName="Check Now !"
      />
    </div>
  );
}
export default ImportantInfo;
