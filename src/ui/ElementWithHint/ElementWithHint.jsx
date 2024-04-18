import { useState } from 'react';
import cn from 'classnames';

const ElementWithHint = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="elementWithHint">
      <h4>{title}</h4>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className="icon icon--hint"
      />

      <div className={cn('elementWithHint__hint', {
        'elementWithHint__hint--visible': isOpen
      })}>
        {children}
      </div>
    </div>
  );
};

export default ElementWithHint;
