// The reference page (Framer SSR output) uses a `name` attribute on plain
// HTML elements (e.g. <div name="...">). @types/react doesn't allow it on
// non-form elements, so augment the shared HTML attributes interface.
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    name?: string;
  }
}

export {};