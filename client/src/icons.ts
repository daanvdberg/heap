import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Import Light Icons
import {
	faAlbumCollection as falAlbumCollection,
	faBooks as falBooks,
	faCameraRetro as falCameraRetro
} from '@fortawesome/pro-light-svg-icons';

// Import Regular Icons
// import {} from '@fortawesome/pro-regular-svg-icons';

// Import Solid Icons
// import {} from '@fortawesome/pro-solid-svg-icons';

// Import Brand Icons
// import {} from '@fortawesome/free-brands-svg-icons';

// Combine Light Icons
const fal = [
	falAlbumCollection,
	falBooks,
	falCameraRetro
];

// Combine Regular Icons
// const far = [];

// Combine Solid Icons
// const fas = [];

// Combine Brand Icons
// const fab = [];

// Export for Font Awesome library
export const ICONS: IconDefinition[] = fal;