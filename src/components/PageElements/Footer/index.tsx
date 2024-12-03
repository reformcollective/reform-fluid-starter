import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@awesome.me/kit-ac6c036e20/icons/classic/brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="text-center py-28 flex flex-col gap-6">
      <div className="text-2xl font-bold">Logo</div>
      <div className="inline-flex gap-8 mx-auto">
        <div>Home</div>
        <div>Shop</div>
        <div>Cart</div>
      </div>
      <div className="flex flex-col sm:inline-flex sm:flex-row sm:mx-20 border-t border-black mt-8 pt-20 justify-between">
        <div className="flex flex-col sm:inline-flex sm:flex-row gap-4 justify-center sm:justify-start">
          <div className="text-sm">© 2024 Fluid. All rights reserved.</div>
          <div className="text-sm underline">Privacy Policy</div>
          <div className="text-sm underline">Terms of Service</div>
          <div className="text-sm underline">Cookies Settings</div>
        </div>
        <div className="inline-flex gap-4 justify-center sm:justify-start mt-4 sm:mt-0">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
