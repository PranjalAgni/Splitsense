export interface Expense {
	[key: string]: number;
}

export interface ExpenseDescription {
	[key: string]: {
		title: string;
		cost: number;
	}[];
}
