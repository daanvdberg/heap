import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const styles = makeStyles(({ transitions }: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		actionRoot: {
			'& .svg-inline--fa': {
				width: 'auto',
				fontSize: 21,
				transform: 'scale(1)',
				transition: transitions.create(['transform'], { duration: transitions.duration.complex })
			},
			'&$iconOnly': {
				paddingTop: 6,
				'& .svg-inline--fa': {
					transform: 'scale(0.8)'
				}
			}
		},
		action: {
			display: 'none'
		},
		iconOnly: {}
	})
);

type Props = RouteComponentProps

function Navigation({ history, location }: Props) {

	const c = styles();

	useEffect(() => {
		if (location.pathname.startsWith('/books')) {
			setValue(0);
		} else if (location.pathname.startsWith('/records')) {
			setValue(1);
		} else if (location.pathname.startsWith('/memories')) {
			setValue(2);
		} else {
			setValue(null);
		}
	}, [location]);

	const [value, setValue] = useState<number | null>(null);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
		switch (newValue) {
			case 0: history.push('/books'); break;
			case 1: history.push('/records'); break;
			case 2: history.push('/memories'); break;
		}
	}

	return (
		<AppBar position='fixed' color='primary' style={{ top: 'auto', bottom: 0 }} component='footer'>
			<BottomNavigation
				value={value}
				onChange={handleChange}
				className={c.root}
			>
				<BottomNavigationAction
					label='Books'
					icon={<FontAwesomeIcon icon={['fas', 'books']} fixedWidth />}
					classes={{ root: c.actionRoot, iconOnly: c.iconOnly, label: c.action }}
				/>
				<BottomNavigationAction
					label='Records'
					icon={<FontAwesomeIcon icon={['fas', 'album-collection']} />}
					classes={{ root: c.actionRoot, iconOnly: c.iconOnly, label: c.action }}
				/>
				<BottomNavigationAction
					label='Memories'
					icon={<FontAwesomeIcon icon={['fas', 'camera-retro']} />}
					classes={{ root: c.actionRoot, iconOnly: c.iconOnly, label: c.action }}
				/>
			</BottomNavigation>
		</AppBar>
	);
}

export default withRouter(Navigation);