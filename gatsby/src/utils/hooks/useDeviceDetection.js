import { useState, useEffect } from 'react';

const useDeviceDetection = () => {
  const [isMobile, setMobile] = useState(false);
  const [userAgent, setUserAgent] = useState(null);

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setMobile(mobile);
    setUserAgent(userAgent);
  }, []);

  return { isMobile };
};

export default useDeviceDetection;
