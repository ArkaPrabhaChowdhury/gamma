import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ContactBg from "./ContactBg";

const ContactForm = ({service}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const finalSelectedOption = selectedOption || "Others";

  useEffect(() => {
    // Logic to set the default value based on the pageId from the URL
    const pageId = window.location.pathname.split('/').pop();
    const defaultValue = determineDefaultValue(pageId);
    console.log(pageId);
    setSelectedOption(defaultValue);
  }, []);

  const determineDefaultValue = (pageId) => {

    switch (pageId) {
      case 'web-development':
        return 'Website development';
      case 'app-development':
        return 'App development';
      case 'software-development':
        return 'Customized Software development';
      case 'design':
        return 'Designing';
      case 'digital-marketing':
        return 'Digital marketing';
      case 'tech-consultancy':
        return 'Tech consultancy';
      default:
        return '';
    }
  };

  const handleSubmit = () => {
    if (name == "") {
      toast("Please enter your name");
      return;
    } else if (email == "") {
      toast("Please enter your email");
      return;
    } else if (message == "") {
      toast("Please enter your message");
      return;
    }
    fetch(
      "https://24cv70uwh3.execute-api.ap-northeast-1.amazonaws.com/default/sendContactEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: name,
          senderEmail: email,
          message: message,
          selectedOption: finalSelectedOption,
        }),
      }
    );
    toast("Thanks for reaching out! We will contact you soon.");
  };
  return (
    <div>
      <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          value={name}
          className="border-[f0f0f0] w-full rounded border py-3 my-4 px-[14px] text-base text-body-color outline-none focus:border-gray-400 focus-visible:shadow-none"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          value={email}
          className="border-[f0f0f0] w-full rounded border py-3 my-4 px-[14px] text-base text-body-color outline-none focus:border-gray-400 focus-visible:shadow-none"
        />
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
          className="border-[f0f0f0] w-full rounded border py-3 my-4 px-[14px] text-base outline-none focus:border-gray-400 focus-visible:shadow-none"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Website development">Website development</option>
          <option value="App development">App development</option>
          <option value="Customized Software development">
            Customized Software development
          </option>
          <option value="Digital marketing">Digital marketing</option>
          <option value="Designing">Designing</option>
          <option value="Tech consultancy">Tech consultancy</option>
          <option value="Others">Others</option>
        </select>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          value={message}
          className="border-[f0f0f0] w-full resize-none rounded border h-32 py-3 my-4 px-[14px] text-base text-body-color outline-none focus:border-gray-400 focus-visible:shadow-none"
        />

        <div>
          <button
            className="w-full p-3 text-white transition border rounded border-gray-400 bg-[#006b9f] hover:bg-opacity-90"
            onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
          >
            Send Message
          </button>
        </div>
        <ContactBg/>    
      </div>
    </div>
  );
};

export default ContactForm;
