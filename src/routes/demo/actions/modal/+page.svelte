<script lang="ts">
	import Button from "$lib/ui/actions/component:button/index.js"
	import Modal from "$lib/ui/actions/component:modal/Modal.svelte"
	import ModalBackdrop from "$lib/ui/actions/component:modal/ModalBackdrop.svelte"
	import ModalBox from "$lib/ui/actions/component:modal/ModalBox.svelte"
	let modal: Modal
</script>

<Button onclick={() => modal.show()}>Open Modal</Button>
<Modal bind:this={modal}>
	<ModalBox>
		<h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">Press ESC key or click outside to close</p>
	</ModalBox>
	<ModalBackdrop>
		<button>close</button>
	</ModalBackdrop>
</Modal>
