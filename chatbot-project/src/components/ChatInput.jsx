import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
      const [inputText, setInputText] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      function saveInputText(event) {
        setInputText(event.target.value);
      }

      function setKeyDown(event) {
        event.key === 'Enter' && sendMessage();
        event.key === 'Escape' && setInputText('');
      }

      async function sendMessage() {

        if (isLoading || inputText.trim() === '') {
          return;
        }

        setIsLoading(true);

        setInputText('');

        const newChatMessages = [     //to save the data sent by user in state
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ];

        setChatMessages([
          ...newChatMessages,
          {
            message: '__loading__',
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);   // get response from Chatbot

        setChatMessages([      // to save the state with the response received
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        setIsLoading(false);

      }

      return (
        <div className="chat-input-container">
          <input
            placeholder="Send a message to Chatbot"
            size="30"
            onChange={saveInputText}
            onKeyDown={setKeyDown}
            value={inputText}
            disabled={isLoading}
            className="chat-input"
          />
          <button
            className="send-button"
            onClick={sendMessage}
            disabled={isLoading || inputText.trim() === ''}
          >Send</button>
        </div>
      );
    }