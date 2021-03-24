import { PlainObject } from './PlainObject'

export interface BookModel {
	kind: string
	id: string
	etag: string
	selfLink: string
	volumeInfo: {
		title: string
		authors: string[]
		publisher: string
		description: string
		industryIdentifiers: PlainObject[]
		readingModes: {
			text: boolean
			image: boolean
		}
		pageCount: number
		printType: string
		maturityRating: string
		allowAnonLogging: boolean
		contentVersion: string
		panelizationSummary: {
			containsEpubBubbles: boolean
			containsImageBubbles: boolean
		}
		imageLinks: {
			smallThumbnail: string
			thumbnail: string
		}
		language: string
		previewLink: string
		infoLink: string
		canonicalVolumeLink: string
	}
	saleInfo: PlainObject
	accessInfo: PlainObject
	searchInfo: PlainObject
}
