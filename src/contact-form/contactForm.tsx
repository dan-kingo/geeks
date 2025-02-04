import { FormEvent, useState } from "react";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

const contactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setWebsite("");
    setResume(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(firstName, lastName, email, website, resume, mobileNumber);
  };
  return (
    <div className="p-2 card shadow-lg border-0">
      <h5 className="text-center text-primary">Fill out the form</h5>
      <InputGroup
        value={firstName}
        onInputChange={(e) => setFirstName(e.target.value)}
        label="First Name"
        placeholder="enter first name"
        type="text"
      />
      <InputGroup
        value={lastName}
        onInputChange={(e) => setLastName(e.target.value)}
        label="Last Name"
        placeholder="enter last name"
        type="text"
      />
      <InputGroup
        value={email}
        onInputChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="enter email"
        type="email"
      />
      <InputGroup
        value={mobileNumber}
        onInputChange={(e) => setMobileNumber(e.target.value)}
        label="Contact"
        placeholder="enter mobile number"
        type="number"
      />
      <InputGroup
        onInputChange={(e) =>
          setResume(e.target.files ? e.target.files[0] : null)
        }
        label="Upload Resume"
        type="file"
      />
      <InputGroup
        value={website}
        onInputChange={(e) => setWebsite(e.target.value)}
        label="Website URL"
        placeholder="enter website url"
        type="url"
      />
      <div>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
        <Button onClick={handleReset} color="danger">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default contactForm;
