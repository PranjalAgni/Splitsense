<script lang="ts">
	import type { ExpenseDescription } from "$types/Expense";
	let { data }: { data: ExpenseDescription } = $props();

	const months = Object.keys(data);
	let selectedOption: string = $state("Select a month");
	let isMonthSelected: boolean = $state(false);

	function handleChange() {
		isMonthSelected = true;
	}
</script>

<main class="flex flex-col justify-center items-center">
	<h1>Your monthly expenses</h1>
	<select
		class="mt-10 select select-bordered w-full max-w-xs"
		bind:value={selectedOption}
		onchange={handleChange}
	>
		<option disabled selected>Select a month</option>
		{#each months as month}
			<option>{month}</option>
		{/each}
	</select>

	<div class="mt-5">
		{#if isMonthSelected}
			<h2 class="text-2xl">Selected option: {selectedOption}</h2>
			<div class="overflow-x-auto mt-5">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Cost</th>
						</tr>
					</thead>
					<tbody>
						{#each data[selectedOption] as expense, index}
							<tr>
								<th>{index + 1}</th>
								<th>{expense.title}</th>
								<td>{expense.cost}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</main>
