<script lang="ts">
	import type { Expense } from "$types/Expense";
	let { data }: { data: Expense } = $props();

	let totalSoFar = Object.values(data).reduce((a, b) => a + b, 0);
</script>

<main class="mt-10">
	<h2 class="flex flex-col justify-center items-center">Monthly expenses</h2>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each Object.entries(data) as [month, cost]}
			<div class="bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">{month}</h2>
					<pre>{cost}</pre>
				</div>
			</div>
		{/each}
	</div>

	<div class="stats shadow mt-5 flex flex-row justify-center items-center">
		<div class="stat place-items-center">
			<div class="stat-figure text-secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-8 w-8 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</div>
			<div class="stat-title">This month</div>
			<div class="stat-value">{data["November"]}</div>
			<div class="stat-desc">Jan 1st - Feb 1st</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-figure text-secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-8 w-8 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
					></path>
				</svg>
			</div>
			<div class="stat-title">In this year</div>
			<div class="stat-value">{totalSoFar}</div>
			<div class="stat-desc">↗︎ 400 (22%)</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-figure text-secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-8 w-8 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
					></path>
				</svg>
			</div>
			<div class="stat-title">New Registers</div>
			<div class="stat-value">1,200</div>
			<div class="stat-desc">↘︎ 90 (14%)</div>
		</div>
	</div>
</main>
