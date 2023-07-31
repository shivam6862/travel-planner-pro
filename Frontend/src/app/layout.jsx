"use client";
import "../styles/globals.css";
import "../styles/leaflet.css";
import { Inter } from "next/font/google";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
const inter = Inter({ subsets: ["latin"] });
import Notifications from "../components/Notification/Notifications";
import { NotificationContextProvider } from "../Store/Notification-context";
import Footer from "../components/Footer";
import Script from "next/script";
import NewNavbar from "../components/NewNavbar";
import ChatBot from "../components/chatBot/ChatBot";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [toggleChat, setToggleChat] = useState(false);
  const [chat, setChat] = useState([
    {
      message: "Hello!",
      isUser: "false",
    },
  ]);
  return (
    <html lang="en">
      {/* <link rel="icon" href="/logo1.jpeg" sizes={"any"} /> */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>
        <NotificationContextProvider>
          <AuthenticationContextProvider>
            <NewNavbar />
            <Notifications />
            {children}
            {toggleChat && (
              <ChatBot
                setToggleChat={setToggleChat}
                chat={chat}
                setChat={setChat}
              />
            )}
            <div
              style={{
                position: "fixed",
                right: "1rem",
                bottom: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setToggleChat(true);
              }}
            >
              <MarkUnreadChatAltIcon style={{ fontSize: 36 }} />
            </div>
            <Footer />
          </AuthenticationContextProvider>
        </NotificationContextProvider>
        <Script />
      </body>
    </html>
  );
}
