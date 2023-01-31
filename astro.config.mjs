import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
		tailwind(),
		preact(),
		astroI18next(),
	]
});
