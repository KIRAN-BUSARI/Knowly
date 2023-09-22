// import React from 'react'
// import './Chat.css'
// import './Chatscript.js'

// // function username(props) {
// //     username('kiran');
// // }
// export default function Chat() {
//     return (
//         <>
//             <meta charSet="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Chat-bot</title>
//             <link rel="stylesheet" href="style.css" />
//             <div className="container">
//                 <div className="chatbox">
//                     <div className="chatbox__support">
//                         <div className="chatbox__header">
//                             <div className="chatbox__image--header">
//                                 <img src={require("../images/female.png")} alt="female-ing" />
//                             </div>
//                             <div className="chatbox__content--header">
//                                 <h4 className="chatbox__heading--header">Chat support</h4>
//                                 <p className="chatbox__description--header">
//                                     Hi. My name is sam. How can I help you?
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="chatbox__messages">
//                             <div />
//                         </div>
//                         <div className="chatbox__footer">
//                             <input type="text" placeholder="Write a message..." />
//                             <button className="chatbox__send--footer send__button">Send</button>
//                         </div>
//                     </div>
//                     <div className="chatbox__button">
//                         <button>
//                             <img src={require('../images/Chat.png')} alt="" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

import './Chat.css'

import React, { useState } from 'react';

function ChatboxApp() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    const onSendButton = () => {
        if (inputText === '') {
            return;
        }

        const userMessage = { name: 'User', message: inputText };
        setMessages([...messages, userMessage]);
        setInputText('');

        // Replace this with your fetch logic
        // ...
    };

    const updateChatText = () => {
        return messages.map((item, index) => {
            const messageClass =
                item.name === 'Sam'
                    ? 'messages__item messages__item--visitor'
                    : 'messages__item messages__item--operator';

            return (
                <div key={index} className={messageClass}>
                    {item.message}
                </div>
            );
        });
    };

    return (
        <div className="container">
            <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}>
                <div className="chatbox__support">
                    <div className="chatbox__header">
                        {/* Header content */}
                        <div className="chatbox__image--header">
                            <img src={require("../images/female.png")} alt="female-ing" />
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Chat support</h4>
                            <p className="chatbox__description--header">
                                Hi. My name is sam. How can I help you?
                            </p>
                        </div>
                    </div>
                    <div className="chatbox__messages">
                        {updateChatText()}
                    </div>
                    <div className="chatbox__footer">
                        <input
                            type="text"
                            placeholder="Write a message..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    onSendButton();
                                }
                            }}
                        />
                        <button
                            className="chatbox__send--footer send__button"
                            onClick={onSendButton}
                        >
                            Send
                        </button>
                    </div>
                </div>
                <div className="chatbox__button">
                    <button onClick={toggleState}>
                        {/* Button content */}
                        <img src={require('../images/Chat.png')} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatboxApp;
