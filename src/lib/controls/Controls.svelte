<script lang="ts">
	import { resumeButtonLabel, pauseButtonLabel } from '$m'
	import PlayPauseIcon from '$lib/icons/PlayPauseIcon.svelte'
	import MuteVolumeIcon from '$lib/icons/MuteVolumeIcon.svelte'
	import { getLang } from '$lib/context'

	let {
		paused = $bindable(),
		muted = $bindable(),
		volume = $bindable()
	}: {
		paused: boolean
		muted: boolean
		volume: number
	} = $props()

	const locale = getLang()
</script>

<div
	class="h-[98px] fade-gradient bg-bottom absolute bottom-0 left-0 w-full pointer-events-none flex items-end text-shadow-normal"
>
	<div
		class="flex flex-col items-center h-[45px] pointer-events-auto transition-opacity duration-100"
	>
		<div class="h-[5px]"></div>
		<div class="flex items-center h-10">
			<button
				class="w-[58px] pl-3 h-full flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-100"
				title={paused ? resumeButtonLabel({}, { locale }) : pauseButtonLabel({}, { locale })}
				onclick={() => (paused = !paused)}
			>
				<PlayPauseIcon {paused} />
			</button>
			<button
				class="w-10 h-10 flex items-center justify-center cursor-pointer"
				onclick={() => (muted = !muted)}
			>
				<MuteVolumeIcon {volume} {muted} />
			</button>
		</div>
	</div>
</div>
