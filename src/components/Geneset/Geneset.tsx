import * as React from 'react';

export class Geneset extends React.Component<{}, {}> {
  // constructor(props: Readonly<P>) {
  //   super(props);
  // }
  public render() {
    return <h1>Hello world</h1>;
  }
}

// Styled components 💅 is library that allows you create components easily and
// style them, css-in-js style. It's totally optional, but I prefer to use it
// to build things quickly and have them look great every step of the way.
// import *styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...

// const ButtonWrapper = styled.button`
//   border-radius: 8px;
//   color: #fff;
//   background: mediumvioletred;
//   padding: 8px 15px;
//   border: none;
//   outline: none;
// `;

// Components are functions, and they must start with a capital letter
// function Geneset(props) {
//   // {...props} uses the the ES6 spread operator to send any props you may pass
//   // along without changing any of the contents. This is basically just creating
//   // a copy to pass along
//   //   return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
//   return null;
// }

// // This export will be picked up in ./index.js
// export default Geneset;

// const TextInput = ({ type = 'text', label, value, onChange }) => (
//   <div className="simple-form-group">
//     {label && <label className="simple-text-label">{label}</label>}
//     <input
//       type={type}
//       className="simple-text-input"
//       value={value}
//       onChange={e => onChange && onChange(e.target.value)}
//     />
//   </div>
// );

// export default TextInput;
