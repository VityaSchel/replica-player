<script lang="ts">
	import { resumeButtonLabel, pauseButtonLabel } from '$m'
	import PlayPauseIcon from '$lib/icons/PlayPauseIcon.svelte'
	import { getLang } from '$lib/context'

	let { paused = $bindable() }: { paused: boolean } = $props()

	const locale = getLang()
</script>

<button
	class="w-[58px] pl-3 h-full flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-100 ease-in-sin-alt"
	title={paused ? resumeButtonLabel({}, { locale }) : pauseButtonLabel({}, { locale })}
	onclick={() => (paused = !paused)}
	aria-live="polite"
	aria-pressed={paused}
>
	<PlayPauseIcon {paused} />
</button>
