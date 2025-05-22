<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';
	import type { PageData } from './$types';

	export let data: PageData;

	let canvas: HTMLCanvasElement;
	let chart: Chart | null = null;

	Chart.register(...registerables);

	onMount(() => {
		if (canvas && data && data.chartData && !data.error) {
			const chartDataContext = canvas.getContext('2d');
			if (chartDataContext) {
				// Prepare data for Chart.js
				const labels = Object.keys(data.chartData);
				const values = Object.values(data.chartData);

				chart = new Chart(chartDataContext, {
					type: 'bar',
					data: {
						labels: labels,
						datasets: [
							{
								label: 'Monthly Expenses',
								data: values,
								backgroundColor: 'rgba(75, 192, 192, 0.5)', // A pleasant teal
								borderColor: 'rgba(75, 192, 192, 1)',
								borderWidth: 1
							}
						]
					},
					options: {
						responsive: true,
						maintainAspectRatio: false,
						scales: {
							y: {
								beginAtZero: true,
								ticks: {
									// Optional: callback to format Y-axis labels (e.g., add currency)
									callback: function (value) {
										return '$' + value;
									}
								}
							},
							x: {
								title: {
									display: true,
									text: 'Month'
								}
							}
						},
						plugins: {
							legend: {
								display: true,
								position: 'top'
							},
							tooltip: {
								callbacks: {
									label: function (context) {
										let label = context.dataset.label || '';
										if (label) {
											label += ': ';
										}
										if (context.parsed.y !== null) {
											label += new Intl.NumberFormat('en-US', {
												style: 'currency',
												currency: 'USD'
											}).format(context.parsed.y);
										}
										return label;
									}
								}
							}
						}
					}
				});
			}
		}
		return () => {
			chart?.destroy(); // Clean up the chart instance when the component is destroyed
		};
	});
</script>

<svelte:head>
	<title>Monthly Expense Chart</title>
</svelte:head>

<div class="container">
	<h1>Monthly Expense Analysis</h1>

	{#if data.error}
		<p class="error-message">
			Could not load chart data: {data.error}
		</p>
	{:else if data.chartData}
		<div class="chart-container">
			<canvas bind:this={canvas} />
		</div>
	{:else}
		<p>Loading chart data...</p>
	{/if}
</div>

<style>
	.container {
		max-width: 800px;
		margin: 2rem auto;
		padding: 1rem;
		text-align: center;
	}

	h1 {
		color: #333;
		margin-bottom: 2rem;
	}

	.chart-container {
		position: relative;
		height: 400px; /* Adjust height as needed */
		width: 100%;
	}

	.error-message {
		color: red;
		font-weight: bold;
	}
</style>
