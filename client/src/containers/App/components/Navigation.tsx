import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	AppBar,
	BottomNavigation,
	BottomNavigationAction,
	Button,
	IconButton,
	Toolbar,
	Typography
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const styles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		}
	})
);

function Navigation() {

	const classes = styles();

	const [value, setValue] = React.useState(0);

	return (
		<AppBar position='fixed' color='primary' style={{ top: 'auto', bottom: 0 }} component='footer'>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.root}
			>
				<BottomNavigationAction label='Books' icon={<FontAwesomeIcon icon={['fal', 'books']} />} />
				<BottomNavigationAction label='Records' icon={<FontAwesomeIcon icon={['fal', 'album-collection']} />} />
				<BottomNavigationAction label='Memories' icon={<FontAwesomeIcon icon={['fal', 'camera-retro']} />} />
			</BottomNavigation>
		</AppBar>
	);
}

export default Navigation;