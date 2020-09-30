import React, {useState} from 'react';
import Title from './components/Title';
import AddFile from './components/AddFile';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title />
      <AddFile />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg= {setSelectedImg} />}
    </div>
  );
}

export default App;
