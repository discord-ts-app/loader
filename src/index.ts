import fs from 'fs'

export default class Loader {
	private path: string
	private files: Array<string> = []

	constructor(path: string) {
		this.path = path
	}

	public fetch(): Array<any> {
		const files = fs.readdirSync(this.path)
		files.forEach((file: string) => {
			if (!file.endsWith('.js')) return
			this.files.push(`${this.path}/${file}`)
		})

		return this.files
	}
}
