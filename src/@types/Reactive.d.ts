import { BookTasks } from './Book/BookTasks'

export type ReactionLevel = {
	Book: BookTasks
	Tab: {
		TabChange: { tabKey: string; bookName: string }
	}
}
