"use client";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
import Navbar from "./Navbar";
const inter = Inter({ subsets: ["latin"] });
import { useLocationLocalStorage } from "../Hook/LocationLocalStorage";

export const metadata = {
  title: "Travel Planner",
  description: "by puspendra",
};

export default function RootLayout({ children }) {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const userdet = fetchPersonalDetails();
  return (
    <html lang="en">
      <link rel="icon" href="/logo1.jpeg" />
      <body className={inter.className}>
        <AuthenticationContextProvider>
          <Navbar userdet={userdet} />
          {children}
        </AuthenticationContextProvider>
      </body>
    </html>
  );
}
