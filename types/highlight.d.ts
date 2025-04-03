// Define the interface for highlight.js
interface HighlightJS {
    highlightAll: () => void;
    highlightElement: (element: HTMLElement) => void;
    highlight: (code: string, options: { language: string }) => { value: string };
}

// Extend the Window interface to include hljs
interface Window {
    hljs: HighlightJS;
}