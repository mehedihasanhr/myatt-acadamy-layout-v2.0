
import * as React from 'react'

export const useScrollToTop = () => {
    React.useEffect(() => {
        setTimeout(() => {
          window.scroll(0, 0);
        }, 50);
      }, []);

    return null;
};  