"use client";
import "../styles/globals.css";
import "../styles/leaflet.css";
import { Inter } from "next/font/google";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
import Navbar from "../Components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Notifications from "../Components/Notification/Notifications";
import { NotificationContextProvider } from "../Store/Notification-context";
import Footer from "../Components/Footer";
import Script from "next/script";
import NewNavbar from "../Components/NewNavbar";

// export const metadata = {
//   title: "Travel Planner",
//   description: "by puspendra",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo1.jpeg" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>
        <NotificationContextProvider>
          <AuthenticationContextProvider>
            <Navbar />
            <Notifications />
            {children}
            <Footer />
          </AuthenticationContextProvider>
        </NotificationContextProvider>
        <Script />
      </body>
    </html>
  );
}
