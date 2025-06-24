<script lang="ts">
	import DemoPlayer from './DemoPlayer.svelte'
	import YouTubeEmbed from './YouTubeEmbed.svelte'
</script>

<div
	class="flex items-center justify-center flex-col gap-8 md:gap-16 md:min-h-screen py-8 md:py-16 px-4 lg:p-16"
>
	<h1 class="text-3xl 480px:text-5xl md:text-6xl font-bold">Replica Player</h1>
	<div class="flex flex-col md:flex-row items-center gap-4 w-[1200px] max-w-full">
		<YouTubeEmbed />
		<DemoPlayer />
	</div>
</div>
