import Button from "../components/Button";
import "./social.css";
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
      {/* <Button color="custom"> Custom</Button> */}

      {socialLinks.map((link, index) => (
        <Button color="custom" key={index}>
          {link}
        </Button>
      ))}
    </div>
  );
};

export default SocialProfile;
