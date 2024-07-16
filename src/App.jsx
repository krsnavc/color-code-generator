import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#ab5454').all(5));
  function addColor(color) {
    try {
      const newColor = new Values(color).all(5);
      setColors(newColor);
    } catch (error) {
      toast.error('Invalid color,check the color code');
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
