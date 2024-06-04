import '../styles/privacy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="privacy-policy">
      <h2>
        <FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy
      </h2>
      <p>
        At Zenith Freight Solutions, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
        We collect personal information such as name and contact details when you interact with our website or use our services.The information we collect is used to provide and improve our services, process transactions, communicate with you, and ensure a personalized user experience.We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        We do not sell, trade, or otherwise transfer your personal information to outside parties, except when necessary to provide our services or comply with the law.You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request restrictions on its use.
        For any questions or concerns regarding our Privacy Policy, please contact us at zenithfreightsolutions@gmail.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;