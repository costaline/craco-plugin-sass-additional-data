import path from 'path'

export function createUseLines(baseDir, resources, tail) {
	return resources.reduce((target, resource) => {
		const relativePath = path.relative('src', baseDir).replace(/\\/g, '/')

		const use = `@use 'src/${relativePath}/${resource}' as *` + tail + '\r\n'

		return target + use
	}, '')
}
