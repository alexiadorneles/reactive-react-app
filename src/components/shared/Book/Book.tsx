import { Card, Divider, Image, Space } from 'antd'
import { Typography } from 'antd'

import Text from 'antd/lib/typography/Text'
import React from 'react'
import { BookModel } from '../../../@types'

import './Book.scss'

const { Title } = Typography
export interface BookPropTypes {
	book: BookModel
}

export function Book({ book }: BookPropTypes): JSX.Element {
	return (
		<Card className="Book">
			<Space className="Book__container" size="large">
				<Image width={200} src={book.volumeInfo.imageLinks?.thumbnail} />
				<Space direction="vertical">
					<Space direction="vertical" align="center">
						<Text type="secondary">Sobre: </Text>
						<Text className="Book__description">{book.volumeInfo.description}</Text>
					</Space>
				</Space>
			</Space>
			<Divider />
			<Title level={3}>{book.volumeInfo.title.toLocaleUpperCase()}</Title>

			<Space>
				<Space wrap={true}>
					<Space align="baseline">
						<Text type="secondary">Autor: </Text>
						<Text>{book.volumeInfo.authors?.join(', ')}</Text>
					</Space>
					<Space align="baseline">
						<Text type="secondary">Publicado por: </Text>
						<Text>{book.volumeInfo.publisher}</Text>
					</Space>
					<Space align="baseline">
						<Text type="secondary">Número de páginas: </Text>
						<Text>{book.volumeInfo.pageCount}</Text>
					</Space>
				</Space>
			</Space>
		</Card>
	)
}
