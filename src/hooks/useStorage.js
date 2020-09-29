import { useState, useEffect } from 'react';
import { projectStorage, projectDatabase, timestamp } from '../firebase/Firebase';

const useStorage = (file) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectDatabase.collection('images');

    //uploading the file to the reference above
    storageRef.put(file).on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage)
    }, (err) => {
      setError(err);
    }, async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt});
      setUrl(url)
    })
  }, [file]);

  return { progress, url, error };
};

export default useStorage;