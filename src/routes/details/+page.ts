import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch("http://localhost:6363/api/v1/expenses/monthly-descriptions");
	const expenses = await res.json();

	return expenses;
};
