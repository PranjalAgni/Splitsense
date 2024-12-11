export interface Expense {
	[key: string]: number;
}

export interface ExpenseDetails {
	[key: string]: {
		title: string;
		cost: number;
	}[];
}

export interface ExpenseDescription {
	data: ExpenseDetails;
	refresh: () => Promise<ExpenseDetails>;
}
