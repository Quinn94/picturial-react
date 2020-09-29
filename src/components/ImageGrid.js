import React  from 'react';
import useFireStore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
  const { docs } = useFireStore('images');

  console.log(docs); //Why did the console logged twice

  return (
    <div className='image-grid'> 
      {docs && docs.map(doc => (
        <motion.div
          layout
          whileHover={{ opacity: 1 }}
          className="img-wrap"
          key={doc.id}
          onClick={() => setSelectedImg(doc.url)} >
          <img src={doc.url} alt="gallery"/>
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;