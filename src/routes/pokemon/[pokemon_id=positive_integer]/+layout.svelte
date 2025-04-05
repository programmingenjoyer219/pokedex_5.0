<script>
	var { children, data } = $props();
	var {
		pokemon: {
			name: { english: english_name }
		}
	} = data;
</script>

<main>
	<h1>{english_name}</h1>
	<div class="layout">
		{@render children()}
	</div>
</main>
