<script lang="ts">
	/* URL to the valid .vtt file. It must be on the same origin as `src` url, except for when `crossorigin` is set */
	type VttFileUrl = string

	/* BCP 47 language tag. https://r12a.github.io/app-subtags/ */
	type BCP47LanguageTag = string

	let {
		src,
		thumbnail,
		captions,
		subtitles,
		chapters,
		crossorigin
	}: {
		src: string
		thumbnail?: { url: string; width: number; height: number }[]
		captions?: { url: VttFileUrl; label: string; lang: BCP47LanguageTag }[]
		subtitles?: { url: VttFileUrl; label: string; lang: BCP47LanguageTag }[]
		chapters?: { startMs: number; endMs: number; label: string }[]
	} & Pick<import('svelte/elements').SvelteHTMLElements['video'], 'crossorigin'> = $props()
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video {src} controls class="w-full h-full bg-black" {crossorigin}>
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
