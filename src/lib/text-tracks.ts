import { hash } from '$lib/utils'

/* URL to the valid .vtt file. It must be on the same origin as `src` url, except for when `crossorigin` is set */
export type VttFileUrl = string

/* BCP 47 language tag. https://r12a.github.io/app-subtags/ */
export type BCP47LanguageTag = string

export type TextTrackProp = { url: VttFileUrl; label: string; lang: BCP47LanguageTag }[]

export type TextTrack = {
	url: VttFileUrl
	label: string
	lang: BCP47LanguageTag
	kind: 'subtitles' | 'captions'
	id: string
}

export const transformTextTracks = (
	subtitles?: TextTrackProp,
	captions?: TextTrackProp
): TextTrack[] => {
	const ids: TextTrack['id'][] = []
	return [
		...(subtitles?.map((i) => ({ kind: 'subtitles', ...i }) as const) || []),
		...(captions?.map((i) => ({ kind: 'captions', ...i }) as const) || [])
	].map((track) => {
		const id = hash(track.kind + track.url + track.lang + track.label).toString(16)
		if (ids.includes(id)) {
			throw new Error(
				`Player can't have more than one identical subtitles or captions track. Found ${JSON.stringify(track)}`
			)
		}
		ids.push(id)
		return {
			id,
			...track
		}
	})
}
