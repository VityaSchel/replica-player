<script lang="ts">
	import { subtitlesToggleButtonLabel } from '$m'
	import type { TextTrack } from '$lib/text-tracks'

	let {
		textTracks,
		textTrackSelected = $bindable()
	}: {
		textTracks: TextTrack[]
		textTrackSelected: TextTrack['id'] | null
	} = $props()

	let preferredTextTrackId: TextTrack['id'] | null = $state(null)
</script>

<button
	title={subtitlesToggleButtonLabel()}
	aria-label={subtitlesToggleButtonLabel()}
	aria-pressed={false}
	class="h-full flex items-center justify-center cursor-pointer not-disabled:opacity-90 disabled:opacity-50 hover:opacity-100 transition-opacity duration-100 w-10 relative ease-in-sin-alt"
	onclick={() => {
		if (textTracks.length === 0) return
		if (textTrackSelected) {
			textTrackSelected = null
		} else {
			textTrackSelected = preferredTextTrackId ?? textTracks[0].id
		}
	}}
	disabled={!textTracks.length}
>
	<svg version="1.1" viewBox="0 0 36 36" height="40">
		<path
			d="M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 L16,17 L25,17 L25,19 L25,19 Z"
			fill="currentColor"
		></path>
	</svg>
	<span
		class={[
			'absolute h-0.5 left-1/2 bottom-2 rounded-full bg-[#e1002d] -translate-x-1/2 transition-[width] ease-in-sin-alt',
			{
				'w-0': !textTrackSelected,
				'w-5': textTrackSelected && textTracks.length > 0
			}
		]}
	></span>
</button>
