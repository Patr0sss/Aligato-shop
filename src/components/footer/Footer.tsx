import "./Footer.css";

function Footer() {
  const footerData = [
    "Statute",
    "Privacy Policy",
    "Cookie Settings",
    "Cookies Policy",
  ];
  return (
    <div className="Footer">
      <div className="footerInside">
        {footerData.map((data) => (
          <>
            <div className="footerData">{data}</div>
            {data != "Cookies Policy" ? (
              <div className="footerMiniBar"></div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}
export default Footer;
