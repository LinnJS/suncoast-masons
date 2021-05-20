import windowCheck from './windowCheck';

const isMobileInstalled = windowCheck() && window.matchMedia('(display-mode: standalone)').matches;

export default isMobileInstalled;
