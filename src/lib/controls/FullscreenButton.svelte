<script lang="ts">
	import { enterFullscreenButtonLabel, exitFullscreenButtonLabel } from '$m'
	import { onMount } from 'svelte'

	let { onclick }: { onclick: () => void } = $props()

	let fullscreen = $state(false)

	onMount(() => {
		const onFullscreenChange = () => {
			fullscreen = document.fullscreenElement !== null
		}
		document.addEventListener('fullscreenchange', onFullscreenChange)
		return () => {
			document.removeEventListener('fullscreenchange', onFullscreenChange)
		}
	})

	const label = $derived(fullscreen ? exitFullscreenButtonLabel() : enterFullscreenButtonLabel())
</script>

<button
	title={label}
	aria-label={label}
	onclick={() => {
		if (fullscreen) {
			document.exitFullscreen()
		} else {
			onclick()
		}
	}}
	class="h-full pr-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-100"
	aria-live="polite"
	aria-pressed={fullscreen}
>
	<svg version="1.1" viewBox="0 0 36 36" width="40" height="40">
		<g class="tl">
			<path fill="currentColor" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
		</g>
		<g class="tr">
			<path fill="currentColor" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
		</g>
		<g class="br">
			<path fill="currentColor" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
		</g>
		<g class="bl">
			<path fill="currentColor" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
		</g>
	</svg>
</button>

<style lang="scss">
	$directions: (
		tl: (
			-1px,
			-1px
		),
		tr: (
			1px,
			-1px
		),
		bl: (
			-1px,
			1px
		),
		br: (
			1px,
			1px
		)
	);

	@mixin direction-anim($name, $translate) {
		@keyframes #{$name}-anim {
			0%,
			100% {
				transform: translate(0px, 0px);
			}
			50% {
				transform: translate(unquote('#{nth($translate, 1)}'), unquote('#{nth($translate, 2)}'));
			}
		}
	}

	button:hover {
		@each $name, $translate in $directions {
			.#{$name} {
				animation: #{$name}-anim 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
			}
			@include direction-anim($name, $translate);
		}
	}
</style>
