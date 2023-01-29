/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  routes: {
   es: {
     "projects": {
			"index": "proyectos"
		 },
     "contact-me": "contactame"
   }
  },
};
