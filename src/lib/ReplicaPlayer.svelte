<script lang="ts">
	import {
		avatarAlternativeText,
		videoTitlePlaceholder,
		playButtonLabel,
		resumeButtonLabel,
		pauseButtonLabel
	} from '$m'
	import { getAvatarColor } from '$lib/avatars'
	import { BROWSER } from 'esm-env'
	import PlayButtonIcon from '$lib/icons/PlayButtonIcon.svelte'
	import ErrorBoundary from '$lib/ErrorBoundary.svelte'
	import type { Locale } from '$lib/i18n/runtime'
	import { setContext } from 'svelte'
	import PlayPauseIcon from '$lib/icons/PlayPauseIcon.svelte'

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
		author?: { name: string; avatarUrl?: string }
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
		class="w-full h-full relative font-sans text-left text-white font-normal geometric-precision antialiased scheme-only-light"
	>
		{#if title || author}
			<div class="absolute left-0 top-0 z-[1] fade-gradient h-[99px] w-full pointer-events-none">
				<div class="h-16 flex items-center pointer-events-auto pr-3">
					<div class="p-[7px] pr-[5px]">
						{#if author}
							<a
								href="/"
								class="rounded-full m-[5px] aspect-square w-10 h-10 flex items-center justify-center container-size"
								style="background-color: {author.avatarUrl
									? 'transparent'
									: getAvatarColor(author.name)};"
								aria-label={author.avatarUrl
									? undefined
									: avatarAlternativeText({ name: author.name }, { locale })}
							>
								{#if author.avatarUrl}
									<img
										src={author.avatarUrl}
										alt={avatarAlternativeText({ name: author.name }, { locale })}
										class="bg-neutral-500 w-full h-full rounded-full border-0 outline-0 text-white text-[9px]"
									/>
								{:else}
									<span class="uppercase text-white text-[50cqh]">{author.name.charAt(0)}</span>
								{/if}
							</a>
						{/if}
					</div>
					<span class="text-[18px] truncate text-shadow-title text-[#EEE]">
						{title ?? videoTitlePlaceholder({ author: author!.name }, { locale })}
					</span>
				</div>
			</div>
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
			<button
				class="absolute top-0 left-0 w-full h-full cursor-pointer flex items-center justify-center"
				title={playButtonLabel({}, { locale })}
				onclick={() => {
					started = true
					paused = false
				}}
			>
				<PlayButtonIcon />
			</button>
		{/if}
		{#if BROWSER && started}
			<div
				class="h-[98px] fade-gradient bg-bottom absolute bottom-0 left-0 w-full pointer-events-none flex items-end"
			>
				<div class="flex flex-col items-center h-[45px] pointer-events-auto">
					<div class="h-[5px]"></div>
					<div class="flex items-center h-10">
						<button
							class="w-[58px] pl-3 h-full flex items-center justify-center cursor-pointer"
							title={paused ? resumeButtonLabel({}, { locale }) : pauseButtonLabel({}, { locale })}
							onclick={() => (paused = !paused)}
						>
							<PlayPauseIcon bind:paused />
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</ErrorBoundary>

<style>
	.text-shadow-title {
		text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
	}
</style>
