export function hash(input: string): number {
	let hash = 5381
	for (let i = 0; i < input.length; i++) {
		hash = (hash * 33) ^ input.charCodeAt(i)
	}
	return hash >>> 0
}
