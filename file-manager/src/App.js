import Folder from './Folder';
import File from './File';

function App() {
  return (
    <div>
      <Folder name="Desktop" isOpen={false}>
        <Folder name="Music">
          <File name="beats.wav" />
          <File name="sounds.mp3" />
        </Folder>
        <Folder name="Videos">
          <File name="bananas.mp4" />
          <File name="monkeys.mp4" />
        </Folder>
        <File name="biscuits.png" />
        <File name="notes.docx" />
      </Folder>

      <Folder name="Applications">
        <File name="Word.exe" />
        <File name="Chrome.exe" />
      </Folder>
    </div>
  );
}

export default App;
