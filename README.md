Chatbot Project (React)

A simple chatbot application built with React (via CDN + Babel) that allows user to flip a coin, roll a dice, or get current date.
This project demonstrates controlled inputs, async chatbot responses, loading states, conditional rendering, and smooth UI behavior.

Features

1. Clean Startup State

Chat starts empty
No hardcoded/default messages
Below welcome message is shown when there are no chat messages which disappears automatically when the user sends their first message.

"Welcome to the chatbot project! Send a message using the textbox below"

2. Controlled Chat Input

Input text is fully controlled using React state
Supports keyboard shortcuts:
  Enter → send message
  Escape → clear input

3.Input Validation

Messages cannot be sent when:
  Input text is empty or contains only spaces

4. Loading State & Spinner

While waiting for the chatbot response:
  Input field is disabled
  Send button is disabled
  A loading spinner appears as the chatbot reply placeholder
  Spinner is replaced automatically by the chatbot response

5. Chat Message UI

User messages are aligned to the right
Bot messages are aligned to the left

Each message includes:
  Profile icon (user / robot)
  Message bubble with max width
  Messages scroll automatically to the bottom

6. Auto-Scrolling Chat Window

Chat window automatically scrolls to the newest message
No manual scrolling required

7. Modern Styling

Responsive layout with max-width container
Flexbox-based layout
Rounded message bubbles
Smooth, clean UI

Technologies Used

  React (via CDN)
  ReactDOM
  Babel (in-browser JSX support)
  Supersimpledev Chatbot API
  HTML + CSS
  No build tools or frameworks required.

Key Concepts Demonstrated

  Lifting state up in React
  Controlled components
  Async / await with UI feedback
  Conditional rendering
  Loading state management
  Auto-scroll using useRef and useEffect
