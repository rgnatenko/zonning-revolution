import { useEffect, useRef } from 'react';

const YourComponent = () => {
  const firstElementRef = useRef(null);
  const secondElementRef = useRef(null);

  // Event handler for scrolling the first element
  const handleFirstElementScroll = () => {
    if (secondElementRef.current) {
      secondElementRef.current.scrollTop = firstElementRef.current.scrollTop;
    }
  };

  // Event handler for scrolling the second element
  const handleSecondElementScroll = () => {
    if (firstElementRef.current) {
      firstElementRef.current.scrollTop = secondElementRef.current.scrollTop;
    }
  };

  useEffect(() => {
    const firstElement = firstElementRef.current;
    const secondElement = secondElementRef.current;

    // Attach event listeners
    if (firstElement && secondElement) {
      firstElement.addEventListener('scroll', handleFirstElementScroll);
      secondElement.addEventListener('scroll', handleSecondElementScroll);
    }

    // Remove event listeners on component unmount
    return () => {
      if (firstElement && secondElement) {
        firstElement.removeEventListener('scroll', handleFirstElementScroll);
        secondElement.removeEventListener('scroll', handleSecondElementScroll);
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div
        ref={firstElementRef}
        style={{ width: '50%', height: '500px', overflowY: 'scroll' }}
      >
        Hello world
      </div>

      {/* Second Element */}
      <div
        ref={secondElementRef}
        style={{ width: '50%', height: '500px', overflowY: 'scroll' }}
      >
        Ilysm
      </div>
    </div>
  );
};

export default YourComponent;