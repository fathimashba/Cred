import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'CRED Garage Dashboard',
  description: 'Frontend Task – Fathia Ashba',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
