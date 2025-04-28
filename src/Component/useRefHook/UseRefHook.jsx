//accessing DOM nodes directly
//preserving the state value accross renders, and didn't activates render byItself even it dodge the mount render as well.
//keeping previous state in function component

//1- Focus on input Field
// import { useRef } from "react";

// function UseRefHook() {
//     const inputRef = useRef(null); // No need for <HTMLInputElement | null>

//     const focusInput = () => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//             console.log('Focused input element:', inputRef.current);
//         }
//     };

//     return (
//         <div>
//             <input ref={inputRef} type="text" placeholder="Type something..." />
//             <button onClick={focusInput}>ref Focus</button>
//         </div>
//     );
// }

// export default UseRefHook;


//2- Accessing DOM Elements directly
// import { useMemo, useRef } from "react";

// function UseRefHook(params) {
//     const domRef = useRef(null);

//     const changeBackground = () => {
//         domRef.current.style.backgroundColor = 'lighblue';
//     };

//     const resetBackgroundColor = () => {
//         domRef.current.style.backgroundColor = '';
//     };

//     return (
//         <div>
//             <div 
//             ref={domRef}
//             style={{ width: '200px', height: '100px', border: '1px solid black' }} 
//             >Hover Me Over! </div>

//             <button onClick={changeBackground}>change Background</button>
//             <button onClick={resetBackgroundColor}>Reset Background</button>
//         </div>
//     ); 
// };

// export default UseRefHook;

//3- Tracking Scroll Position of A div
// import { useRef } from "react";

// function UseRefHook() {
//     const divRef = useRef(null);

//     console.log('div-->',divRef.current);
    

//     const handleScroll = () => {
//         const scrollPosition = divRef.current.scrollTop;
//         console.log('Scroll Position', scrollPosition);
//     };

//     return (
//         <div>
//             <div
//                 ref={divRef}
//                 style={{ width: '200px', height: '100px', overflowY: 'scroll', border: '1px solid black' }}
//                 onScroll={handleScroll}>
//                 <div style={{ height: '300px' }}> Scroll Me!</div>
//             </div>
//         </div>
//     );
// };

// export default UseRefHook;


//4- Storing Previous State value
// import { useRef,useState,useEffect } from "react";

// function UseRefHook(){
//     const [count,setCount] = useState(0);
//     const previousRef = useRef(null);

//     useEffect(() => {
//         previousRef.current = count;
//     },[count]);

//     return (
//         <div>
//             <p>Current Count : {count}</p>
//             <p>Previous Count : {previousRef.current}</p>
//             <button onClick={()=>{ setCount(count+1) }}>Increment Count</button>
//         </div>
//     ); 
// };

// export default UseRefHook;
