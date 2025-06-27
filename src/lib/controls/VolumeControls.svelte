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
		onclick={() => {
			muted = !muted
			if (!muted && volume === 0) {
				volume = 1
			}
		}}
		onmouseenter={() => (showVolumeSlider = true)}
	>
		<MuteVolumeIcon {volume} {muted} />
	</button>
	<div
		class={[
			'transition-[width,margin] duration-200 shrink-0 overflow-clip flex self-stretch items-center ease-volume-controls-width',
			{
				'w-0 mr-0': !showVolumeSlider,
				'w-[52px] mr-[3px]': showVolumeSlider
			}
		]}
	>
		<input
			type="range"
			min="0"
			max="1"
			step="0.05"
			class="w-[52px] appearance-none accent-white range h-full bg-transparent outline-0 border-0 cursor-pointer"
			bind:value={
				() => (muted ? 0 : volume),
				(v) => {
					muted = v === 0
					volume = v
				}
			}
			style="--value: {muted ? 0 : volume}"
		/>
	</div>
</div>

<style lang="scss">
	.range {
		@mixin range-thumb {
			background: white;
			border: 0;
			width: 12px;
			height: 12px;
			border-radius: calc(1px * infinity);
		}
		&::-webkit-slider-thumb {
			appearance: none;
			// position: absolute;
			// top: 50%;
			// left: calc(var(--value, 0) * 40px);
			// transform: translateY(-50%);
			margin-top: -6px + 1.5px;
			@include range-thumb;
		}
		&::-moz-range-thumb {
			@include range-thumb;
		}
		@mixin range-track {
			background:
				linear-gradient(
					to right,
					white 0%,
					white calc(var(--value) * 100%),
					transparent calc(var(--value) * 100%)
				),
				rgba(255, 255, 255, 0.2);
			background-size:
				52px 100%,
				100% 100%;
			background-repeat: no-repeat, repeat;
			height: 3px;
		}
		&::-webkit-slider-container {
			position: relative;
		}
		&::-webkit-slider-runnable-track {
			appearance: none;
			position: relative;
			@include range-track;
		}
		&::-moz-range-track {
			@include range-track;
		}
	}
</style>
