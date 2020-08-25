import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { BookImage } from '../../containers/BookProvider/types';

const styles = makeStyles(
	createStyles({
		img: {
			maxWidth: '100%',
			height: 'auto' /* default */
		}
	})
);

function BookCover({ image, size = 'default', alt = '' }: Props) {

	const c = styles();
	
	if (!image) return <Fragment />;
	
	let url = image.thumbnail;
	if (size === 'small' && image.smallThumbnail) {
		url = image.smallThumbnail;
	}
	if (size === 'large' && image.largeThumbnail) {
		url = image.largeThumbnail;
	}
	return <img src={url} alt={alt} className={c.img} />;
}

interface DirectProps {
	image: BookImage
	size: 'large' | 'default' | 'small'
	alt?: string
}

type Props = DirectProps

export default BookCover;