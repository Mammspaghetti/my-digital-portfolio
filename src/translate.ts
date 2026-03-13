import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./assets/i18n/fr.json";
import en from "./assets/i18n/en.json";
import it from "./assets/i18n/it.json";

i18n
  .use(initReactI18next) // <- important
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      it: { translation: it }
    },
    lng: localStorage.getItem("lang") || "fr",
    fallbackLng: "fr",
    interpolation: { escapeValue: false }
  });

export default i18n; // ça doit rester "export default i18n"