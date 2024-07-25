import Flag from "@/components/Flag";
import { faChevronDown } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CountryLanguagePicker = () => {
  return (
    <div className="inline-flex gap-2 mr-4">
      <Flag height={24} width={45.6} code="us" />
      <div>US | EN </div>
      <FontAwesomeIcon className="mt-0.5" icon={faChevronDown} />
    </div>
  );
};

export default CountryLanguagePicker;
