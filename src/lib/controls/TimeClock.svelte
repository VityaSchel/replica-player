<script lang="ts">
	let {
		currentTime,
		duration
	}: {
		currentTime: number
		duration: number
	} = $props()

	const isLivestream = $derived(duration === Infinity)
	const isValidDuration = $derived(!Number.isNaN(duration) && duration > 0)

	const formatTime = (seconds: number): string => {
		const h = Math.floor(seconds / 3600)
		const m = Math.floor((seconds % 3600) / 60)
		const s = Math.floor(seconds % 60)
		return h > 0
			? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
			: `${m}:${s.toString().padStart(2, '0')}`
	}
</script>

{#if !isLivestream && isValidDuration}
	<div
		class="px-[5px] h-full flex items-center justify-center whitespace-nowrap text-[13px] text-[#ddd]"
	>
		<span>{formatTime(currentTime)}</span>
		<span>&nbsp;/&nbsp;</span>
		<span>{formatTime(duration)}</span>
	</div>
{/if}
