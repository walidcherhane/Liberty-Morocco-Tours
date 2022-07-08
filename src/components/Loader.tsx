import { ProgressSpinner } from 'primereact/progressspinner';
function Loader() {
  return (
    <div className="bg-gray-50 h-screen fixed inset-0 z-50 flex items-center justify-center">
      <ProgressSpinner style={{ width: 70, height: 70 }} />
    </div>
  );
}

export default Loader;
