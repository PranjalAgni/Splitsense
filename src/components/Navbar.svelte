<script lang="ts">
	let isRefreshClicked = $state(false);
	let isUpdated = $state(false);
	async function updateData() {
		try {
			const response = await fetch("http://localhost:6363/api/v1/splitwise/refresh");
			isRefreshClicked = true;
			window.dispatchEvent(new CustomEvent("navbarRefresh"));

			if (response.ok) {
				isUpdated = true;
			}
		} catch (error) {
			isUpdated = false;
			console.log(error);
		}

		setTimeout(() => {
			isRefreshClicked = false;
			isUpdated = false;
		}, 3000);
	}
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
		</div>
		<a class="btn btn-ghost text-2xl" href="/">Splitsense</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<button class="btn" onclick={updateData}>Refresh</button>
		<ul class="menu menu-horizontal px-1">
			<li><a href="/details">Details</a></li>
		</ul>
	</div>
</div>
<div class="flex flex-col justify-center items-center">
	{#if isRefreshClicked}
		{#if isUpdated}
			<h2>Updated ✅</h2>
		{:else}
			<h2>Failed ❌</h2>
		{/if}
	{/if}
</div>
