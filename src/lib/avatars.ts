export const colors = [
	0x94409c, 0x7a1fa2, 0x78909c, 0x465a65, 0xec407a, 0xc2175b, 0x5c6bc0, 0x0288d1, 0x00579c,
	0x0098a6, 0x00887a, 0x004c3f, 0x689f39, 0x33691e, 0x8c6e63, 0x5d4038, 0x7e57c2, 0x512da8,
	0xef6c00, 0xf5511e, 0xbf360c
]

export const getAvatarColor = (name: string): string => {
	let hash = 0
	for (let i = 0; i < name.length; i++) {
		hash = ((hash << 5) - hash + name.charCodeAt(i)) >>> 0
	}
	return '#' + colors[hash % colors.length].toString(16).padStart(6, '0')
}
