import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// // The translation function 't'
// export const t = async (locale: Locale, key: string): Promise<string> => {
// 	try {
// 		const dictionary = await getDictionary(locale);
// 		const keys = key.split("."); // Split the nested keys
// 		let translation = dictionary;
//
// 		// Traverse the nested keys in the dictionary
// 		for (const nestedKey of keys) {
// 			if (translation[nestedKey]) {
// 				translation = translation[nestedKey];
// 			} else {
// 				// Handle the case when the nested key is not found in the dictionary
// 				throw new Error(
// 					`Translation key '${key}' not found for locale '${locale}'`
// 				);
// 			}
// 		}
//
// 		return translation as string;
// 	} catch (error) {
// 		// Handle any errors that may occur during translation retrieval
// 		console.error(error);
// 		return ""; // Return an empty string as a fallback
// 	}
// };
