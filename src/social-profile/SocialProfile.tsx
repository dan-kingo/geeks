import Button from "../components/Button";
import "./social.css";
import image from "../assets/image.png";
const SocialProfile = () => {
  const socialLinks = [
    "Github",
    "Linkedin",
    "Twitter",
    "Instagram",
    "Telegram",
    "Pintrest",
  ];
  return (
    <div className="social-card">
      <img className="rounded  mb-3" src={image} alt="image" />
      <h5 style={{ color: "#fff" }} className="mb-2">
        Dan Kingo
      </h5>
      <h6 style={{ color: "orange" }} className="mb-3">
        Bahir Dar, Ethiopia
      </h6>
      {socialLinks.map((link, index) => (
        <Button color="custom" key={index}>
          {link}
        </Button>
      ))}
    </div>
  );
};

export default SocialProfile;
