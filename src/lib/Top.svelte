<script lang="ts">
	import { getAvatarColor } from '$lib/avatars'
	import { getLang } from '$lib/context'
	import { avatarAlternativeText, videoTitlePlaceholder } from '$m'
	import type { Author } from '$lib/props'

	let props: { author: Author } | { title: string } | { author: Author; title: string } = $props()

	const locale = getLang()
</script>

<div class="absolute left-0 top-0 z-[1] fade-gradient h-[99px] w-full pointer-events-none">
	<div class="h-16 flex items-center pointer-events-auto pr-3">
		<div class="p-[7px] pr-[5px]">
			{#if 'author' in props}
				{@const author = props.author}
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
		<span class="text-[18px] truncate text-[#EEE]">
			{#if 'title' in props}
				{props.title}
			{:else}
				{videoTitlePlaceholder({ author: props.author.name }, { locale })}
			{/if}
		</span>
	</div>
</div>
