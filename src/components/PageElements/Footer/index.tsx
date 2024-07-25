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
      <hr className="border-0.5 border-blask mx-20 mt-20" />
      <div className="inline-flex px-20 w-full mt-8 justify-between">
        <div className="inline-flex gap-4">
          <div className="text-sm">© 2024 Fluid. All rights reserved.</div>
          <div className="text-sm underline">Privacy Policy</div>
          <div className="text-sm underline">Terms of Service</div>
          <div className="text-sm underline">Cookies Settings</div>
        </div>
        <div className="inline-flex gap-4">
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
