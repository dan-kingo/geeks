import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

const contactForm = () => {
  return (
    <div className="p-2 card shadow-lg border-0">
      <h5 className="text-center text-primary">Fill out the form</h5>
      <InputGroup
        label="First Name"
        placeholder="enter first name"
        type="text"
      />
      <InputGroup label="Last Name" placeholder="enter last name" type="text" />
      <InputGroup label="Email" placeholder="enter email" type="email" />
      <InputGroup
        label="Contact"
        placeholder="enter mobile number"
        type="number"
      />
      <InputGroup label="Upload Resume" type="file" />
      <InputGroup
        label="Website URL"
        placeholder="enter website url"
        type="url"
      />
      <div>
        <Button color="primary">Submit</Button>
        <Button color="danger">Reset</Button>
      </div>
    </div>
  );
};

export default contactForm;
