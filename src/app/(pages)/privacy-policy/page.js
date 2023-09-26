import React from 'react';
import Bottom from "../../(components)/Bottom";
import Navbar from "../../(components)/Navbar";
const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
        <Navbar policy={true}/>
    <div className="max-w-7xl mx-auto p-4 text-gray-700 ">
      <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy applies to the Gammainnovations.com website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information we collect</h2>
      <p className="mb-2">
        <strong>Contact information:</strong> We might collect your name, email, mobile number, phone number, street, city, state, pincode, country, and IP address.
      </p>

      <p className="mb-2">
        <strong>Payment and billing information:</strong> We might collect your billing name, billing address, and payment method when you buy a course. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner.
      </p>

      <p className="mb-2">
        <strong>Information you post:</strong> We collect information you post in a public space on our website or on a third-party social media site belonging to Gammainnovations.com.
      </p>

      <p className="mb-2">
        <strong>Demographic information:</strong> We may collect demographic information about you, pages you like, exams you intend to take, or any other information provided by you during the use of our website. We might collect this as a part of a survey also.
      </p>

      <p className="mb-2">
        <strong>Other information:</strong> If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How we collect information</h2>
      <p>We collect information in different ways:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>
          We collect information directly from you. We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email.
        </li>
        <li>
          We collect information from you passively. We use tracking tools like Google Analytics, Google Webmaster, browser cookies, and web beacons for collecting information about your usage of our website.
        </li>
        <li>
          We get information about you from third parties. For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Use of your personal information</h2>
      <p>
        We use information to contact you: We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes.
      </p>

      <p>
        We use information to respond to your requests or questions. We might use your information to confirm your registration for a course or any other product offered on Gammainnovations.com.
      </p>

      <p>
        We use information to improve our products and services. We might use your information to customize your experience with us. This could include displaying content based upon your preferences.
      </p>

      <p>
        We use information to look at site trends and customer interests. We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.
      </p>

      <p>
        We use information for security purposes. We may use information to protect our company, our customers, or our websites.
      </p>

      <p>
        We use information for marketing purposes. We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you buy a course or any other products from us, we'll enroll you in our newsletter.
      </p>

      <p>
        We use information to send you transactional communications. We might send you emails or SMS about your account or a product (course) purchase.
      </p>

      <p>We use information as otherwise permitted by law.</p>
    </div>
    <Bottom/>
    </div>
  );
};

export default PrivacyPolicy;
