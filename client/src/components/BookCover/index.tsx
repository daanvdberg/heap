import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';

const styles = makeStyles(
	createStyles({
		img: {
			maxWidth: '100%',
			height: 'auto' /* default */
		}
	})
);

function BookCover({ id, size = 'M', alt = '' }: Props) {
	const c = styles();
	if (!id) return <Fragment />;
	const url = `https://covers.openlibrary.org/b/olid/${id}-${size}.jpg`
	return <img src={url} alt={alt} className={c.img} />;
}

interface DirectProps {
	id: string
	size?: string
	alt?: string
}

type Props = DirectProps

export default BookCover;