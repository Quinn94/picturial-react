import { useState, useEffect } from 'react';
import { projectDatabase } from '../firebase/Firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectDatabase.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        let documents = [];
        snapshot.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id })
        });
        setDocs(documents);
      })
    return () => {
      unsub()
      // Why do we need to unmount?
    }
  }, [collection])

  return { docs };
}

export default useFirestore;