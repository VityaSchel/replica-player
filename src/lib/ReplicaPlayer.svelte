<script lang="ts">
	import { BROWSER } from 'esm-env'
	import { setContext } from 'svelte'
	import ErrorBoundary from '$lib/ErrorBoundary.svelte'
	import Top from '$lib/Top.svelte'
	import StartPlayButton from '$lib/StartPlayButton.svelte'
	import Controls from '$lib/controls/Controls.svelte'
	import type { Locale } from '$lib/i18n/runtime'
	import type { Author } from '$lib/props'
	import { transformTextTracks, type TextTrack, type TextTrackProp } from '$lib/text-tracks'

	let {
		src,
		locale,
		title,
		thumbnail,
		captions,
		subtitles,
		// chapters,
		crossorigin,
		author,
		preload
	}: {
		src: string
		/** If not specified, will try to determine user‘s preferred language and then fallback to English */
		locale?: Locale
		title?: string
		thumbnail?: { url: string; width: number; height: number }[]
		captions?: TextTrackProp
		subtitles?: TextTrackProp
		// chapters?: { startMs: number; endMs: number; label: string }[]
		author?: Author
	} & Pick<import('svelte/elements').SvelteHTMLElements['video'], 'crossorigin' | 'preload'> =
		$props()

	let player: HTMLDivElement
	let video: HTMLVideoElement
	let currentTime: HTMLVideoElement['currentTime'] = $state(0)
	let playbackRate: HTMLVideoElement['playbackRate'] = $state(1)
	let paused: HTMLVideoElement['paused'] = $state(true)
	let volume: HTMLVideoElement['volume'] = $state(1)
	let muted: HTMLVideoElement['muted'] = $state(false)

	// Readonly properties
	let duration: HTMLVideoElement['duration'] = $state(0)
	let buffered: import('svelte/elements').SvelteMediaTimeRange[] = $state([])
	let seekable: import('svelte/elements').SvelteMediaTimeRange[] = $state([])
	let seeking: HTMLVideoElement['seeking'] = $state(false)
	let ended: HTMLVideoElement['ended'] = $state(false)
	let readyState: HTMLVideoElement['readyState'] = $state(0)
	let played: import('svelte/elements').SvelteMediaTimeRange[] = $state([])

	let started = $state(false)

	let poster = $derived.by(() => {
		if (thumbnail && thumbnail.length > 0) {
			return thumbnail[0].url
		}
	})

	setContext<Locale | undefined>('replicaPlayer_locale', locale)

	const textTracks: TextTrack[] = $derived(transformTextTracks(subtitles, captions))
	let textTrackSelected: TextTrack['id'] | null = $state(null)

	$effect(() => {
		for (const { id } of textTracks) {
			const element = video.textTracks.getTrackById(id)
			if (!element) continue
			if (id === textTrackSelected) {
				element.mode = 'showing'
			} else {
				element.mode = 'disabled'
			}
		}
	})
</script>

<ErrorBoundary>
	<div
		class="w-full h-full relative font-sans text-left text-white font-normal geometric-precision antialiased scheme-only-light text-shadow-normal"
		bind:this={player}
	>
		{#if title && author}
			<Top {title} {author} />
		{:else if title}
			<Top {title} />
		{:else if author}
			<Top {author} />
		{/if}
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			{src}
			controls={!BROWSER}
			class="w-full h-full bg-black"
			{crossorigin}
			{poster}
			preload={preload || (thumbnail ? 'none' : 'auto')}
			tabindex={BROWSER ? -1 : undefined}
			bind:currentTime
			bind:playbackRate
			bind:paused
			bind:volume
			bind:muted
			bind:duration
			bind:buffered
			bind:seekable
			bind:seeking
			bind:ended
			bind:readyState
			bind:played
			bind:this={video}
		>
			{#each textTracks as track (track.id)}
				<track
					id={track.id}
					kind={track.kind}
					src={track.url}
					label={track.label}
					srclang={track.lang}
					default={textTrackSelected === track.id}
				/>
			{/each}
		</video>
		{#if BROWSER && !started}
			<StartPlayButton
				onclick={() => {
					started = true
					paused = false
				}}
			/>
		{/if}
		{#if BROWSER && started}
			<Controls
				bind:paused
				bind:muted
				bind:volume
				{currentTime}
				{duration}
				onfullscreen={() => player.requestFullscreen()}
				{textTracks}
				bind:textTrackSelected
			/>
		{/if}
	</div>
</ErrorBoundary>

<style>
	.text-shadow-normal {
		text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
	}
	video::cue {
		margin-bottom: 20px;
		background-position: 0px 10px;
	}
</style>
