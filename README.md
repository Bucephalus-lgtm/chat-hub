# ChatHub

This is a simple chat app built with React Native and Expo Managed Workflow. The app allows users to send messages in real-time.

## Implementation Choices

The following implementation choices were made for this project:

- **React Native and Expo Managed Workflow**: React Native is a popular choice for building cross-platform apps, and Expo makes it easier to build and deploy React Native apps by providing an extensive set of tools and services.
- **TypeScript**: TypeScript is a superset of JavaScript that provides static type checking, making it easier to catch errors early in the development process.
- **styled-components**: styled-components is a popular library for styling React components. It allows developers to write CSS in their JavaScript code, making it easier to manage styles and avoid naming conflicts.

## Installation

To run the app, you'll need to have Node.js and the Expo CLI installed on your machine. You can download Node.js from the official website [here](https://nodejs.org/en/download/). You can install the Expo CLI by running the following command:

```bash
npm install -g expo-cli
```

Once you have Expo CLI installed, clone the repository and install the dependencies by running:

```bash
git clone https://github.com/Bucephalus-lgtm/chat-hub
cd chat-app
npm install
```

## Local Setup

To start the app, run the following command:

```bash
npm start
```

This will start the Expo development server and open a new tab in your default browser. From here, you can choose to run the app in a simulator, on a physical device, or in a web browser.

## Core Functionality

- A list of chat messages with timestamps.
- A text input field for composing messages.
- A send button to submit messages.

## File Structure

The project is structured as follows:

```bash
App.tsx
components/
	ChatScreen.tsx
types/
	ChatMessage.ts
assets/
	send_icon.png
```

- `App.tsx` is the main entry point for the app.
- `components/` directory contains all the reusable components.
- `types/` directory contains the type definition files for the app.
- `assets/` directory contains all the static assets used in the app.

## Author

- Name: Bhargab Nath
- Email: [bhargabnath691@gmail.com](mailto:bhargabnath691@gmail.com)
