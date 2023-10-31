import "./ProfilePageLine.css";

function ProfilePageLine({
  desc,
  userValue,
}: {
  desc?: string;
  userValue?: null;
}) {
  return (
    <div className="Line">
      <div>{desc}</div>
      <div>{userValue}</div>
    </div>
  );
}
export default ProfilePageLine;
