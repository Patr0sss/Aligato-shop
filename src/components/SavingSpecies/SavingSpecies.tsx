import "./SavingSpecies.css";

function SavingSpecies() {
  return (
    <div className="SavingBlock">
      <div className="Saving">
        <div className="SavingLeft">
          <div className="SavingLeftInside"></div>
        </div>

        <div className="SavingRight">
          <div className="SavingRightBold">They may extinct !</div>
          <div className="SavingRightDSC">
            We are fundrasing for endangered species. If you want to help our
            initiative click the button below
          </div>
          <a
            className="ExtinctButton"
            href="https://www.worldwildlife.org/initiatives/protecting-species"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
}
export default SavingSpecies;
