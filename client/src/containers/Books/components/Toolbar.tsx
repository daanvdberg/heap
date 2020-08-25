import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Toolbar as MuiToolbar, IconButton, Typography, Tabs, Tab } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, typography, palette, shadows }: Theme) =>
	createStyles({
		iconButton: {
			fontSize: '1rem'
		},
		title: {
			paddingRight: spacing(2),
			flexGrow: 1,
			fontWeight: typography.fontWeightBold,
			color: palette.text.primary
		},
		header: {
			background: palette.background.paper,
			top: -1,
			//flexWrap: 'wrap',
			'& > .MuiToolbar-regular': {
				transition: 'all 150ms'
			}
		},
		isSticky: {
			boxShadow: shadows[4],
			'& > .MuiToolbar-regular': {
				minHeight: 50
			},
			'& $tabs': {
				marginTop: spacing(-2),
			}
		},
		tabs: {
			marginTop: spacing(-1.5),
			width: '100%'
		}
	})
);

function Toolbar() {

	const c = useStyles();

	const [tab, setTab] = useState(0);

	useEffect(() => {
		const header = document.getElementById('header');

		const observer = new IntersectionObserver(
			([e]) => e.target.classList.toggle(c.isSticky, e.intersectionRatio < 1),
			{ threshold: [1] }
		);

		if (header) {
			observer.observe(header);
		}

		return () => {
			observer.disconnect();
		}
	});

	const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => setTab(newValue);

	return (
		<AppBar id='header' position='sticky' elevation={0} color='transparent' className={c.header}>
			<MuiToolbar>
				<Typography variant='h5' className={c.title}>
					Books
				</Typography>
				<IconButton className={c.iconButton}>
					<FontAwesomeIcon icon={['fal', 'search']} />
				</IconButton>
			</MuiToolbar>

			<Tabs value={tab} onChange={handleTabChange} className={c.tabs} centered>
				<Tab label='My Books' />
				<Tab label='Search' />
			</Tabs>
		</AppBar>
	);
}

export default Toolbar;