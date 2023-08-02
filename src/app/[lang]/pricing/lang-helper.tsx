import React from "react";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n-config";

const dictionary: any = {
	fr: {
		city: "Ville",
		shippingFee: "Frais de livraison",
		refusalFee: "Frais de refus",
		returnFee: "Frais de retour",
		deliveryTime: "Temps de livraison",
		actions: "Actions",
		copy: "Copier les tarifs",
		deliverHere: "Livrer ici",
		viewMore: "En savoir plus",
		currency: "MAD",
		period: "Jour",
	},
	ar: {
		city: "مدينة",
		shippingFee: "تكاليف التوصيل",
		refusalFee: "رسوم الرفض",
		returnFee: "رسوم الإرجاع",
		deliveryTime: "موعد التسليم",
		actions: "إجراءات",
		copy: "نسخ الأسعار",
		deliverHere: "تسليم هنا",
		viewMore: "اقرأ المزيد",
		currency: "درهم",
		period: "يوم",
	},
};

const LangHelper: React.FC<{ col: string }> = ({ col }) => {
	const { lang } = useParams();
	// console.log(lang);

	return (
		<span className="flex-shrink-0 w-max">
			{" "}
			{dictionary?.[(lang as string) || "fr"]?.[col]}{" "}
		</span>
	);
};

export default LangHelper;
