import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
import * as ReactDOM from 'react-dom/client';
import { Root } from 'react-dom/client';


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="contact" />
    </StyledApp>
  );
}

class ContactRootAppElement extends HTMLElement {
  root!: Root;
  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />)
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('app-react-contact', ContactRootAppElement);
