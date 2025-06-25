<script lang="ts">
	import { playButtonLabel } from '$m'
	import { getLang } from '$lib/context'
	import PlayButtonIcon from '$lib/icons/PlayButtonIcon.svelte'

	let {
		onclick
	}: {
		onclick: () => void
	} = $props()

	const locale = getLang()
</script>

<button
	class="absolute top-0 left-0 w-full h-full cursor-pointer flex items-center justify-center"
	title={playButtonLabel({}, { locale })}
	{onclick}
>
	<PlayButtonIcon />
</button>
