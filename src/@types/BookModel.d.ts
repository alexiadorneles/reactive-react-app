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
	saleInfo: {
		country: string
		saleability: string
		isEbook: boolean
		buyLink: boolean
	}
	accessInfo: {
		country: string
		viewability: string
		embeddable: boolean
		publicDomain: boolean
		textToSpeechPermission: string
		epub: {
			isAvailable: boolean
			downloadLink: string
		}
		pdf: {
			isAvailable: boolean
			downloadLink: string
		}
		webReaderLink: string
		accessViewStatus: string
		quoteSharingAllowed: boolean
	}
	searchInfo: {
		textSnippet: string
	}
}
