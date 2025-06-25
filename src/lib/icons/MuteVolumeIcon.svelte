<script lang="ts">
	import { untrack } from 'svelte'

	let { muted, volume }: { muted: boolean; volume: number } = $props()

	let animateToLowVolume: SVGAnimateElement
	let animateToHighVolume: SVGAnimateElement
	let animateToMuted: SVGAnimateElement
	let animateToUnmuted: SVGAnimateElement
	let animateToMuted2: SVGAnimateElement
	let animateToUnmuted2: SVGAnimateElement

	$effect(() => {
		if (muted) {
			animateToMuted.beginElement()
			animateToMuted2.beginElement()
			if (untrack(() => volume) < 0.5) {
				animateToHighVolume.beginElement()
			}
		} else {
			animateToUnmuted.beginElement()
			animateToUnmuted2.beginElement()
			if (untrack(() => volume) < 0.5) {
				animateToLowVolume.beginElement()
			}
		}
	})

	$effect(() => {
		if (volume < 0.5) {
			if (untrack(() => !muted)) animateToLowVolume.beginElement()
		} else {
			if (untrack(() => !muted)) animateToHighVolume.beginElement()
		}
	})

	const maskId = $props.id()

	const lowVolume =
		'M8 21L12 21L17 26L17 10L12 15L8 15L8 21ZM19 14L19 22C20.48 21.32 21.5 19.77 21.5 18C21.5 16.26 20.48 14.74 19 14ZM19 11.29C22 12 24 14 24 18C24 22 22 24 19 24.72L19 24.72C22 24 24 22 24 18C24 14 22 12 19 11.29L19 11.29Z'

	const highVolume =
		'M8 21L12 21L17 26L17 10L12 15L8 15L8 21ZM19 14L19 22C20.48 21.32 21.5 19.77 21.5 18C21.5 16.26 20.48 14.74 19 14ZM19 11.29C21.89 12.15 24 14.83 24 18C24 21.17 21.89 23.85 19 24.71L19 26.77C23.01 25.86 26 22.28 26 18C26 13.72 23.01 10.14 19 9.22L19 11.29Z'
</script>

<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
	<rect
		x="7.75"
		y="11"
		width="2"
		height="0"
		transform="rotate(-45 7.717173 10.697052)"
		fill="currentColor"
		fill-opacity="1"
	>
		<animate
			attributeName="height"
			dur="300ms"
			to="23"
			fill="freeze"
			begin="indefinite"
			bind:this={animateToMuted}
		/>
		<animate
			attributeName="height"
			dur="300ms"
			to="0"
			fill="freeze"
			begin="indefinite"
			bind:this={animateToUnmuted}
		/>
	</rect>
	<mask id="mask-{maskId}">
		<rect width="100%" height="100%" fill="white" />
		<rect
			x="8"
			y="8.376587"
			width="2"
			height="0"
			transform="rotate(-45 8.037672 8.376587)"
			fill="black"
			fill-opacity="1"
		>
			<animate
				attributeName="height"
				dur="300ms"
				to="25"
				fill="freeze"
				begin="indefinite"
				bind:this={animateToMuted2}
			/>
			<animate
				attributeName="height"
				dur="300ms"
				to="0"
				fill="freeze"
				begin="indefinite"
				bind:this={animateToUnmuted2}
			/>
		</rect>
	</mask>
	<path d={highVolume} fill="currentColor" mask="url(#mask-{maskId})">
		<animate
			attributeName="d"
			dur="300ms"
			to={lowVolume}
			fill="freeze"
			begin="indefinite"
			bind:this={animateToLowVolume}
		/>
		<animate
			attributeName="d"
			dur="300ms"
			to={highVolume}
			fill="freeze"
			begin="indefinite"
			bind:this={animateToHighVolume}
		/>
	</path>
</svg>
