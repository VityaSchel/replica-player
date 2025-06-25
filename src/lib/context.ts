import { getContext } from 'svelte'
import type { Locale } from '$lib/i18n/runtime'

export const getLang = () => getContext<Locale | undefined>('replicaPlayer_locale')
