import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Ujjwal Bansal Blog',
  description: 'Personal blog built with Next.js and Markdown.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
