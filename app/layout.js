import '@/app/ui/global.css';
import { lusitana } from './ui/fonts';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${lisitana.className} antialiased'}>{children}</body>
    </html>
  );
}
