import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY_LIGHT = '#e9997d';
const PRIMARY = '#e07a5f';
const PRIMARY_DARK = '#ae5543';

const SECONDARY_LIGHT = '#9bc9b4';
const SECONDARY = '#81b29a';
const SECONDARY_DARK = '#5a816c';

const TEXT = '#3d405b';
const TEXT_SECONDARY = '#76798c';
const TEXT_DISABLED = '#c1c4ce';

const BACKGROUND = '#f4f1de';

const ALTERNATE = '#f2cc8f';

const HEADING_FONT = ['Signika Negative', 'Helvetica', 'Arial', 'sans-serif'].join(',');
const BODY_FONT = ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'].join(',');

export default createMuiTheme({
	palette: {
		primary: {
			light: PRIMARY_LIGHT,
			main: PRIMARY,
			dark: PRIMARY_DARK,
			contrastText: '#fff'
		},
		secondary: {
			light: SECONDARY_LIGHT,
			main: SECONDARY,
			dark: SECONDARY_DARK,
			contrastText: '#fff'
		},
		background: {
			default: BACKGROUND
		},
		text: {
			primary: TEXT,
			secondary: TEXT_SECONDARY,
			disabled: TEXT_DISABLED
		}
	},
	typography: {
		fontFamily: BODY_FONT,
		h1: {
			fontFamily: HEADING_FONT,
			fontSize: "2.25rem"
		},
		h2: {
			fontFamily: HEADING_FONT,
			fontSize: "2rem"
		},
		h3: {
			fontFamily: HEADING_FONT,
			fontSize: "1.75rem"
		},
		h4: {
			fontFamily: HEADING_FONT,
			fontSize: "1.5rem"
		},
		h5: {
			fontFamily: HEADING_FONT,
			fontSize: "1.25rem"
		},
		h6: {
			fontFamily: HEADING_FONT,
			fontSize: "1.125rem"
		},
		body1: {
			fontWeight: 400
		},
		body2: {
			fontWeight: 400
		},
		subtitle1: {
			fontWeight: 600
		},
		subtitle2: {
			fontWeight: 600
		}
	}
});