import { lgpdConsentText } from "@/lib/constants";
import { CheckboxLine } from "@/components/ui/form";

export function Consent() {
  return (
    <CheckboxLine>
      <input className="mt-1 h-4 w-4" name="consentLgpd" type="checkbox" required />
      <span>{lgpdConsentText}</span>
    </CheckboxLine>
  );
}
