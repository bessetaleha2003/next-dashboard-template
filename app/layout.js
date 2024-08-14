import '@/app/ui/global.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${lisitana.className} antialiased'}>{children}</body>
    </html>
  );
}
