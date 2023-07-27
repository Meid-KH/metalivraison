import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	ar: () =>
		import("../dictionaries/ar.json").then((module) => module.default),
	fr: () =>
		import("../dictionaries/fr.json").then((module) => module.default),
	// en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

// let loadedDictionaries: { [locale: string]: any } = {};
//
// export const getDictionary = async (locale: Locale) => {
// 	// Check if the dictionary is already loaded
// 	if (loadedDictionaries[locale]) {
// 		return loadedDictionaries[locale];
// 	}
//
// 	// Load the dictionary
// 	const dictionary = dictionaries[locale];
// 	if (!dictionary) {
// 		// Handle the case when the dictionary for the given locale is not found
// 		throw new Error(`Dictionary for locale '${locale}' not found`);
// 	}
//
// 	// Store the loaded dictionary in the variable
// 	loadedDictionaries[locale] = dictionary;
// 	return dictionary;
// };
