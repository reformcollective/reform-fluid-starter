import Flag from "@/components/Flag";
import { far } from "@awesome.me/kit-ac6c036e20/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Select from "@radix-ui/react-select";

const CountryLanguagePicker = () => {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Country / Lang" />
        <Select.Icon>
          <FontAwesomeIcon icon={far["user"]} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton className="SelectScrollButton">
            <FontAwesomeIcon icon={far["magnifying-glass"]} />
          </Select.ScrollUpButton>
          <Select.Item value="en">
            <Select.ItemText>
              <Flag code="us" /> English
            </Select.ItemText>
            <Select.ItemIndicator>
              <FontAwesomeIcon icon={far["chevron-down"]} />
            </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="es">
            <Select.ItemText>
              <Flag code="mx" /> Spanish
            </Select.ItemText>
            <Select.ItemIndicator>
              <FontAwesomeIcon icon={far["chevron-down"]} />
            </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="fr">
            <Select.ItemText>
              <Flag code="fr" /> French
            </Select.ItemText>
            <Select.ItemIndicator>
              <FontAwesomeIcon icon={far["chevron-down"]} />
            </Select.ItemIndicator>
          </Select.Item>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CountryLanguagePicker;
