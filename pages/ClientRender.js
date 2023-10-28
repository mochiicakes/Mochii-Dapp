import ReactDOM from 'react-dom';
import index from './index';

export default function ClientRender() {
  return (
    <div id="root">
      <index />
    </div>
  );
}

// Call ReactDOM.render in a useEffect to ensure it's executed on the client side.
useEffect(() => {
  ReactDOM.render(<ClientRender />, document.getElementById('root'));
}, []);
