// import App from './App.jsx';

export default function TabButton({ children, onSelect }){
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    )
}