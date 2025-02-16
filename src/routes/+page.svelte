<script>
	import * as Dropdown from '$lib/ui/actions/component:dropdown/index.js';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Dropdown.Root>
	<Dropdown.Button class="m-1">open or close</Dropdown.Button>
	<Dropdown.Portal>
		{#snippet children(base)}
			<ul class={base('menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm')}>
				<li><a>Item 1</a></li>
				<li><a>Item 2</a></li>
			</ul>
		{/snippet}
	</Dropdown.Portal>
</Dropdown.Root>
