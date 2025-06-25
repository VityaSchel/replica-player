<script lang="ts">
	import PlayPauseButton from '$lib/controls/PlayPauseButton.svelte'
	import VolumeControls from '$lib/controls/VolumeControls.svelte'
	import TimeClock from '$lib/controls/TimeClock.svelte'

	let {
		paused = $bindable(),
		muted = $bindable(),
		volume = $bindable(),
		currentTime,
		duration
	}: {
		paused: boolean
		muted: boolean
		volume: number
		currentTime: number
		duration: number
	} = $props()
</script>

<div
	class="h-[98px] fade-gradient bg-bottom absolute bottom-0 left-0 w-full pointer-events-none flex items-end text-shadow-normal"
>
	<div
		class="flex flex-col items-center h-[45px] pointer-events-auto transition-opacity duration-100"
	>
		<div class="h-[5px]"></div>
		<div class="flex items-center h-10">
			<PlayPauseButton bind:paused />
			<VolumeControls bind:muted bind:volume />
			<TimeClock {currentTime} {duration} />
		</div>
	</div>
</div>
