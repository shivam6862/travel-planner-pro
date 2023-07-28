import "../styles/globals.css";
import { Inter } from "next/font/google";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Planner",
  description: "by puspendra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpeg" />
      <body className={inter.className}>
        <AuthenticationContextProvider>
          {children}
        </AuthenticationContextProvider>
      </body>
    </html>
  );
}
