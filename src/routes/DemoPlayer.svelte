<script lang="ts">
	import { ReplicaPlayer } from '$lib/index'
</script>

<div class="flex-1 aspect-video min-w-0 w-full">
	<ReplicaPlayer
		src="/steve-jobs-introduces-iphone-in-2007.webm"
		author={{ name: 'John Schroter', avatarUrl: '/john-schroter.jpg' }}
		title="Steve Jobs introduces iPhone in 2007"
		thumbnail={[{ url: '/steve-jobs-introduces-iphone-in-2007.jpg', width: 640, height: 480 }]}
	/>
</div>
