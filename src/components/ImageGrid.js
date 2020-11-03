import React from 'react';
import useFireStore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore('images');

  return (

    <div className='image-grid'>
      {docs && docs.map(doc => (
        <motion.div
          layout
          whileHover={{ opacity: 1 }}
          className="img-wrap"
          key={doc.id}
          onClick={() => setSelectedImg(doc.url)} >
          <motion.img src={doc.url} alt="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }} />
        </motion.div>
      ))}
    </div>

  )
}

export default ImageGrid;