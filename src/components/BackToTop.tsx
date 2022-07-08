import { ScrollTop } from 'primereact/scrolltop';
import { AiOutlineArrowUp } from 'react-icons/ai';

function BackToTop() {
  return (
    <div>
      <ScrollTop
        style={{
          backgroundColor: `#fff`,
          borderRadius: `10px`,
          color: `#000`,
          fontSize: `1.5rem`,
          bottom: `50px`,
          right: `40px`,
          boxShadow: `0px 20px 100px 4px rgba(0, 0, 0, 0.3)`,
          transition: `all 0.6s ease-in-out`,
        }}
        className="shadow-2xl active:scale-75"
        icon={<AiOutlineArrowUp />}
      />
    </div>
  );
}

export default BackToTop;
