import { toast } from 'react-toastify';

function SingleColor({ color, index }) {
  const { hex, weight } = color;
  const style = {
    border: weight === 0 ? '2px dashed white' : '',
    background: `#${hex}`,
  };

  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Clipboard saved');
      } catch (error) {
        toast.error("Couldn't save to clipboard");
      }
    }
  }
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={style}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight == 0 ? 'Original' : weight + '%'}</p>

      <p className="color-value"> #{hex}</p>
    </article>
  );
}

export default SingleColor;
