// class Chatbox {
//     constructor() {
//         this.args = {
//             openButton: document.querySelector('.chatbox__button'),
//             chatBox: document.querySelector('.chatbox__support'),
//             sendButton: document.querySelector('.send__button')
//         }

//         this.state = false;
//         this.messages = [];
//     }

//     display() {
//         const { openButton, chatBox, sendButton } = this.args;

//         openButton.addEventListener('click', () => this.toggleState(chatBox))

//         sendButton.addEventListener('click', () => this.onSendButton(chatBox))

//         const node = chatBox.querySelector('input');
//         node.addEventListener("keyup", ({ key }) => {
//             if (key === "Enter") {
//                 this.onSendButton(chatBox)
//             }
//         })
//     }

//     toggleState(chatbox) {
//         this.state = !this.state;

//         // show or hides the box
//         if (this.state) {
//             chatbox.classList.add('chatbox--active')
//         } else {
//             chatbox.classList.remove('chatbox--active')
//         }
//     }

//     onSendButton(chatbox) {
//         var textField = chatbox.querySelector('input');
//         let text1 = textField.value
//         if (text1 === "") {
//             return;
//         }

//         let msg1 = { name: "User", message: text1 }
//         this.messages.push(msg1);

//         fetch('http://127.0.0.1:5000/predict', {
//             method: 'POST',
//             body: JSON.stringify({ message: text1 }),
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(r => r.json())
//             .then(r => {
//                 let msg2 = { name: "Sam", message: r.answer };
//                 this.messages.push(msg2);
//                 this.updateChatText(chatbox)
//                 textField.value = ''

//             }).catch((error) => {
//                 console.error('Error:', error);
//                 this.updateChatText(chatbox)
//                 textField.value = ''
//             });
//     }

//     updateChatText(chatbox) {
//         var html = '';
//         this.messages.slice().reverse().forEach(function (item, index) {
//             if (item.name === "Sam") {
//                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
//             }
//             else {
//                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
//             }
//         });

//         const chatmessage = chatbox.querySelector('.chatbox__messages');
//         chatmessage.innerHTML = html;
//     }
// }


// const chatbox = new Chatbox();
// chatbox.display();

// import React, { useState } from 'react';

// function Chatbox() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [inputText, setInputText] = useState('');
//     const [messages, setMessages] = useState([]);

//     const toggleState = () => {
//         setIsOpen(!isOpen);
//     };

//     const onSendButton = () => {
//         if (inputText === '') {
//             return;
//         }

//         const userMessage = { name: 'User', message: inputText };
//         setMessages([...messages, userMessage]);
//         setInputText('');

//         fetch('http://127.0.0.1:5000/predict', {
//             method: 'POST',
//             body: JSON.stringify({ message: inputText }),
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then((response) => response.json())
//             .then((response) => {
//                 const samMessage = { name: 'Sam', message: response.answer };
//                 setMessages([...messages, samMessage]);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };

//     const updateChatText = () => {
//         return messages.map((item, index) => {
//             return (
//                 <div
//                     key={index}
//                     className={`messages__item ${item.name === 'Sam'
//                         ? 'messages__item--visitor'
//                         : 'messages__item--operator'
//                         }`}
//                 >
//                     {item.message}
//                 </div>
//             );
//         });
//     };

//     return (
//         <div>
//             <button className="chatbox__button" onClick={toggleState}>
//                 Open Chat
//             </button>
//             <div
//                 className={`chatbox__support ${isOpen ? 'chatbox--active' : ''
//                     }`}
//             >
//                 <div className="chatbox__messages">{updateChatText()}</div>
//                 <input
//                     type="text"
//                     value={inputText}
//                     onChange={(e) => setInputText(e.target.value)}
//                     onKeyUp={(e) => {
//                         if (e.key === 'Enter') {
//                             onSendButton();
//                         }
//                     }}
//                 />
//                 <button className="send__button" onClick={onSendButton}>
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Chatbox;

import React, { useState } from 'react';

function Chatbox() {
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

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: inputText }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                const samMessage = { name: 'Sam', message: response.answer };
                setMessages([...messages, samMessage]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleState}
            >
                Open Chat
            </button>
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } bg-gray-200 p-4 mt-4 rounded-lg`}
            >
                <div className="chatbox__messages">{updateChatText()}</div>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            onSendButton();
                        }
                    }}
                    className="border p-2 rounded w-full"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onSendButton}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chatbox;
