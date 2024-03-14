import { Metadata } from "next";

export const metaGenerator = async (): Promise<Metadata> => {
	return {
		title: `Welcome to Cakkie - Homepage`,
		description: "Landing Page",
	};
};

