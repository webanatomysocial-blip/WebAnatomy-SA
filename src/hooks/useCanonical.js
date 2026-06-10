import { useEffect } from 'react';

const useCanonical = (url) => {
  useEffect(() => {
    if (!url) return;

    let link = document.querySelector("link[rel~='canonical']");
    const isCreated = !link;

    if (isCreated) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    
    const previousHref = link.href;
    link.href = url;

    return () => {
      if (isCreated && link && link.parentNode) {
        link.parentNode.removeChild(link);
      } else if (!isCreated && link) {
        link.href = previousHref;
      }
    };
  }, [url]);
};

export default useCanonical;
