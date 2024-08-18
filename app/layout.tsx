import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";


export const metadata: Metadata = {
  title: "Erick's Blog",
  description: "Created by Me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'dark:bg-slate-800'}>
        <Navbar/>
        <ProfilePic/>
        {children}
        </body>
    </html>
  );
}
