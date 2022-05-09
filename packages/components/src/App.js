import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
    const [count, setCount] = useState(0);
    return (_jsx("div", { className: "App", children: _jsxs("header", { className: "App-header", children: [_jsx("img", { src: logo, className: "App-logo", alt: "logo" }), _jsx("p", { children: "Hello Vite + React!" }), _jsx("p", { children: _jsxs("button", { type: "button", onClick: () => setCount(count => count + 1), children: ["count is: ", count] }) }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "App.tsx" }), " and save to test HMR updates."] }), _jsxs("p", { children: [_jsx("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer", children: "Learn React" }), ' | ', _jsx("a", { className: "App-link", href: "https://vitejs.dev/guide/features.html", target: "_blank", rel: "noopener noreferrer", children: "Vite Docs" })] })] }) }));
}
export default App;
