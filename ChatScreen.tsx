import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

const ChatList = styled.FlatList`
  flex-grow: 1;
`;

const MessageContainer = styled.View<{ isAlternate: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${({ isAlternate }) =>
    isAlternate ? "#F5F5F5" : "#FFFFFF"};
  width: 100%;
`;

const SendMessageContainer1 = styled.View`
  flex-shrink: 0;
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  padding: 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const SendMessageContainer = styled.View`
  flex-shrink: 0;
  padding: 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const MessageInput = styled.TextInput`
  height: 40px;
  flex: 1;
  border: 1px solid #dadada;
  border-radius: 16px;
  padding: 0 12px;
  width: 100%; // Change this line
`;

const SendButton = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const SendIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

const MessageText = styled.Text`
  margin-left: 12px;
  font-size: 16px;
  width: 80%;
`;

const Circle = styled.View<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: ${({ color }) => color};
`;

const Time = styled.Text`
  font-size: 12px;
  color: #9b9b9b;
`;

const MessageContent = styled.Text`
  margin-left: 12px;
  font-size: 16px;
`;

type ChatMessage = {
  id: string;
  color: string;
  content: string;
  time: string;
};

export const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const newMessage: ChatMessage = {
      id: Math.random().toString(),
      color: getRandomColor(),
      content: inputValue,
      time: getTime(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const receivedMessage: ChatMessage = {
        id: Math.random().toString(),
        color: getRandomColor(),
        content: "Message Received",
        time: getTime(),
      };
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    }, 1000);
  };

  const getRandomColor = (): string => {
    const colors = [
      "#F5A623",
      "#F8E71C",
      "#7ED321",
      "#50E3C2",
      "#4A90E2",
      "#BD10E0",
      "#9013FE",
      "#000000",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getTime = (): string => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minute}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
      <ChatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
        renderItem={({ item, index }) => (
          <MessageContainer isAlternate={index % 2 !== 0}>
            <Circle color={item.color} />
            <MessageContent>{item.content}</MessageContent>
            <Time>{item.time}</Time>
          </MessageContainer>
        )}
      />
      <SendMessageContainer>
        <MessageInput
          placeholder="Type a message..."
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          onSubmitEditing={handleSend}
        />
        <SendButton onPress={handleSend}>
          <SendIcon
            source={require("./assets/send_icon.png")}
            resizeMode="contain"
          />
        </SendButton>
      </SendMessageContainer>
    </View>
  );
};
