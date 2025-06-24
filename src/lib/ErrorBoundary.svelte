<script lang="ts">
	import { getContext } from 'svelte'
	import ErrorIcon from '$lib/icons/ErrorIcon.svelte'
	import { unexpectedFatalError } from '$m'
	import type { Locale } from '$lib/i18n/runtime'

	let {
		children
	}: {
		children: import('svelte').Snippet
	} = $props()

	const locale = getContext<Locale | undefined>('replicaPlayer_locale')
</script>

<svelte:boundary onerror={() => {}}>
	{@render children()}
	{#snippet failed()}
		<div
			class="bg-[#282828] w-full h-full text-[#eee] flex items-center justify-center text-left font-medium geometric-precision antialiased container-size scheme-only-light"
		>
			<div class="w-[85%] flex items-center gap-4 text-[3.5cqw] leading-[150%]">
				<ErrorIcon class="w-[10cqw] h-[10cqw] shrink-0" />
				<span>
					{unexpectedFatalError({}, { locale })}
				</span>
			</div>
		</div>
	{/snippet}
</svelte:boundary>
