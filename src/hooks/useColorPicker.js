import { useState } from 'react';

export default function useColorPicker() {
  const [fgColor, setFgColor] = useState('#ffcc00');
  const [bgColor, setBgColor] = useState('#212121');
  const [content, setContent] = useState('Hello, world!');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        break;
      case 'bgColor':
        setBgColor(value);
        break;
      case 'content':
        setContent(value);
        break;
    }
  };

  return {
    fgColor,
    bgColor,
    content,
    handleChange
  }
}
