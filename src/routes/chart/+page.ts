import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch("http://localhost:6363/api/v1/expenses/monthly-spendings");
		if (!res.ok) {
			console.error("Failed to fetch monthly spendings:", res.status, await res.text());
			return {
				chartData: null,
				error: `Failed to load data: ${res.status}`
			};
		}
		const chartData = await res.json();
		return {
			chartData
		};
	} catch (error) {
		console.error("Error fetching monthly spendings:", error);
		return {
			chartData: null,
			error: "Failed to load data due to a network or parsing error."
		};
	}
};
