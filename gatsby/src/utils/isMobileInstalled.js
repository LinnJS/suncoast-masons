const isMobileInstalled = typeof window !== `undefined` && window.matchMedia('(display-mode: standalone)').matches;

export default isMobileInstalled;
