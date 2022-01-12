import { useEffect, useState } from 'react';

export default function useAffirmation(bgColor, fgColor) {
  const [affirmation, setAffirmation] = useState('init');

  useEffect(() => {
    // I got rid of the didChange state, but I forgot that useEffect runs on the initial render, so here's my janky work around
    if(affirmation === 'init') {
      setAffirmation('')
    } else {
      const affirmations = [
        'Great choice!',
        'I love that color!',
        'Looks good!',
        'What a great color combo!',
        'Ooh la la, so fancy',
      ];
      // Generate a random whole number between 0 and the last index of the array
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      setAffirmation(affirmations[randomIndex]);
    }
  }, [bgColor, fgColor]);

  return affirmation;
}
