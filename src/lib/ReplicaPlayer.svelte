<script lang="ts">
	import { BROWSER } from 'esm-env'
	import type { Locale } from '$lib/i18n/runtime'
	import { setContext } from 'svelte'
	import type { Author } from '$lib/props'
	import ErrorBoundary from '$lib/ErrorBoundary.svelte'
	import Top from '$lib/Top.svelte'
	import StartPlayButton from '$lib/StartPlayButton.svelte'
	import Controls from '$lib/controls/Controls.svelte'

	/* URL to the valid .vtt file. It must be on the same origin as `src` url, except for when `crossorigin` is set */
	type VttFileUrl = string

	/* BCP 47 language tag. https://r12a.github.io/app-subtags/ */
	type BCP47LanguageTag = string

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
		captions?: { url: VttFileUrl; label: string; lang: BCP47LanguageTag }[]
		subtitles?: { url: VttFileUrl; label: string; lang: BCP47LanguageTag }[]
		// chapters?: { startMs: number; endMs: number; label: string }[]
		author?: Author
	} & Pick<import('svelte/elements').SvelteHTMLElements['video'], 'crossorigin' | 'preload'> =
		$props()

	let player: HTMLVideoElement
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
</script>

<ErrorBoundary>
	<div
		class="w-full h-full relative font-sans text-left text-white font-normal geometric-precision antialiased scheme-only-light text-shadow-normal"
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
			bind:this={player}
		>
			{#if captions}
				{#each captions as track (track.url)}
					<track kind="captions" src={track.url} label={track.label} srclang={track.lang} />
				{/each}
			{/if}

			{#if subtitles}
				{#each subtitles as track (track.url)}
					<track kind="subtitles" src={track.url} label={track.label} srclang={track.lang} />
				{/each}
			{/if}
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
			<Controls bind:paused bind:muted bind:volume />
		{/if}
	</div>
</ErrorBoundary>

<style>
	.text-shadow-normal {
		text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
	}
</style>
