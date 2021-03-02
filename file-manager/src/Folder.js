import React, { useState } from 'react';

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    const { name, children } = props;
  
    const handleClick = () => setIsOpen(!isOpen);
  
    return <div>
      <div style={{ fontWeight: 'bold' }} onClick={handleClick}>
        <i className='yellow folder icon' />
        {isOpen ? <i className='caret down icon' /> : <i className='caret right icon' />}
        {name}
      </div>
      <div style={{ marginLeft: '20px' }}>
        {isOpen ? children : null}
      </div>
    </div>
  };

  export default Folder;
  