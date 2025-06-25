<script lang="ts">
	import MuteVolumeIcon from '$lib/icons/MuteVolumeIcon.svelte'

	let { muted = $bindable(), volume = $bindable() }: { muted: boolean; volume: number } = $props()
</script>

<button
	class="w-10 h-10 flex items-center justify-center cursor-pointer"
	onclick={() => (muted = !muted)}
>
	<MuteVolumeIcon {volume} {muted} />
</button>
