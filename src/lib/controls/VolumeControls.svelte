<script lang="ts">
	import MuteVolumeIcon from '$lib/icons/MuteVolumeIcon.svelte'

	let { muted = $bindable(), volume = $bindable() }: { muted: boolean; volume: number } = $props()

	let showVolumeSlider = $state(false)

	export function shrink() {
		showVolumeSlider = false
	}
</script>

<div class="flex items-center">
	<button
		class="w-10 h-10 flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-100"
		onclick={() => (muted = !muted)}
		onmouseenter={() => (showVolumeSlider = true)}
	>
		<MuteVolumeIcon {volume} {muted} />
	</button>
	<div
		class={[
			'w-0 transition-[width] duration-200 shrink-0',
			{
				'w-[52px]': showVolumeSlider
			}
		]}
	></div>
</div>
