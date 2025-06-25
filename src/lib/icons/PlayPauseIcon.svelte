<script lang="ts">
	let {
		paused
	}: {
		paused: boolean
	} = $props()

	let animateToPause: SVGAnimateElement
	let animateToPlay: SVGAnimateElement
	$effect(() => {
		if (paused) {
			animateToPlay.beginElement()
		} else {
			animateToPause.beginElement()
		}
	})

	const playPath = 'M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z'
	const pausePath = 'M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z'
</script>

<svg version="1.1" viewBox="0 0 36 36" height="40">
	<path d={playPath} fill="currentColor">
		<animate
			attributeName="d"
			dur="300ms"
			to={pausePath}
			fill="freeze"
			begin="indefinite"
			bind:this={animateToPause}
		/>
		<animate
			attributeName="d"
			dur="300ms"
			to={playPath}
			fill="freeze"
			begin="indefinite"
			bind:this={animateToPlay}
		/>
	</path>
</svg>
