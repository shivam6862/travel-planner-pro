"use client";
import "../styles/globals.css";
import "../styles/leaflet.css";
import { Inter } from "next/font/google";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Notifications from "../Components/Notification/Notifications";
import { NotificationContextProvider } from "../Store/Notification-context";
import Footer from "../components/Footer";
import Script from "next/script";
import NewNavbar from "../components/NewNavbar";

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
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        />
      </body>
    </html>
  );
}
