const File = (props) => {
    const { name } = props;
    const fileExtension = name.split('.')[1];
    const fileIcons = {
      png: 'file image outline icon',
      wav: 'music icon',
      mp3: 'music icon',
      mp4: 'file video outline icon',
      docx: 'file word icon',
      exe: 'window maximize outline icon'
    }
    
    return <div>
      <i className={fileIcons[fileExtension]} />
      {name}
    </div>
  };

  export default File;