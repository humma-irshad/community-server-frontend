import {Inter} from 'next/font/google';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/footer/index';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Student Community App',
  description:
    'A student community app for resource sharing, connecting with alumni, and discussions',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
