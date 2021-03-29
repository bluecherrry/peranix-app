// import React, { Component } from 'react'
// import firebaseConfig from '../../firebase/firebaseConfig';
// import * as firebaseui from "firebaseui";
// import firebase from "firebase";
// import 'firebaseui/dist/firebaseui.css'
// export default class RegisterCode extends Component {
//     componentDidMount() {
//         const fbase = firebase.initializeApp(firebaseConfig);
//         const uiConfig = {
//             signInSuccessUrl: "../RoomGame/Room.js", //This URL is used to return to that page when we got success response for phone authentication.
//             signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
//             tosUrl: "../RoomGame/Room.js"
//         };
//         var ui = new firebaseui.auth.AuthUI(firebase.auth());
//         ui.start("#firebaseui-auth-container", uiConfig);
//     }
//     render() {
//         return (

//             <>
//                 <div id="firebaseui-auth-container"></div>
//             </>
//         )
//     }
// }