<script lang="ts">
	import PlayPauseButton from '$lib/controls/PlayPauseButton.svelte'
	import VolumeControls from '$lib/controls/VolumeControls.svelte'
	import TimeClock from '$lib/controls/TimeClock.svelte'
	import FullscreenButton from '$lib/controls/FullscreenButton.svelte'

	let {
		paused = $bindable(),
		muted = $bindable(),
		volume = $bindable(),
		currentTime,
		duration,
		onfullscreen
	}: {
		paused: boolean
		muted: boolean
		volume: number
		currentTime: number
		duration: number
		onfullscreen: () => void
	} = $props()

	let volumeControls: { shrink: () => void }
</script>

<div
	class="h-[98px] fade-gradient bg-bottom absolute bottom-0 left-0 w-full pointer-events-none flex items-end text-shadow-normal"
>
	<div class="flex flex-col h-[45px] pointer-events-auto transition-opacity duration-100 w-full">
		<div class="h-[5px]"></div>
		<div class="flex items-center">
			<div
				class="flex items-center h-10 flex-1"
				onmouseleave={() => volumeControls.shrink()}
				role="toolbar"
				tabindex="0"
			>
				<PlayPauseButton bind:paused />
				<VolumeControls bind:muted bind:volume bind:this={volumeControls} />
				<TimeClock {currentTime} {duration} />
			</div>
			<div class="flex items-center shrink-0">
				<FullscreenButton onclick={onfullscreen} />
			</div>
		</div>
	</div>
</div>
