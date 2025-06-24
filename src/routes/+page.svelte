<script lang="ts">
	import DemoPlayer from './DemoPlayer.svelte'
	import YouTubeEmbed from './YouTubeEmbed.svelte'
</script>

<div class="flex items-center justify-center flex-col gap-16 min-h-screen p-16">
	<h1 class="text-6xl font-bold">Replica Player</h1>
	<div class="flex items-center gap-4 w-[1200px] max-w-full">
		<YouTubeEmbed />
		<DemoPlayer />
	</div>
</div>
