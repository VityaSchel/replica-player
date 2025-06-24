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

<div class="w-full h-full relative">
	<div class="h-16 w-full flex items-center absolute left-0 top-0 z-[1]">
		<div class="p-3">
			<a href="/" class="rounded-full m-[5px] aspect-square w-10 h-10 block">
				<img
					src=""
					alt=""
					class="bg-neutral-500/50 w-full h-full rounded-full border-0 outline-0"
				/>
			</a>
		</div>
	</div>
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
</div>
