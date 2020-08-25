import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Import Light Icons
import {
	faAlbumCollection as falAlbumCollection,
	faBooks as falBooks,
	faCameraRetro as falCameraRetro,
	faSearch as falSearch
} from '@fortawesome/pro-light-svg-icons';

// Import Regular Icons
import {
	faChevronDown as farChevronDown,
	faChevronLeft as farChevronLeft,
	faChevronRight as farChevronRight,
	faChevronUp as farChevronUp
} from '@fortawesome/pro-regular-svg-icons';

// Import Solid Icons
import {
	faAlbumCollection as fasAlbumCollection,
	faBooks as fasBooks,
	faCameraRetro as fasCameraRetro,
	faCaretDown as fasCaretDown
} from '@fortawesome/pro-solid-svg-icons';

// Import Brand Icons
// import {} from '@fortawesome/free-brands-svg-icons';

// Combine Light Icons
const fal = [
	falAlbumCollection,
	falBooks,
	falCameraRetro,
	falSearch
];

// Combine Regular Icons
const far = [
	farChevronDown,
	farChevronLeft,
	farChevronRight,
	farChevronUp
];

// Combine Solid Icons
const fas = [
	fasAlbumCollection,
	fasBooks,
	fasCameraRetro,
	fasCaretDown
];

// Combine Brand Icons
// const fab = [];

// Export for Font Awesome library
export const ICONS: IconDefinition[] = fal.concat(far, fas);