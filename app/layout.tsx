import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'Notepaths | Thoughtful Travel in Indonesia',description:'Discover thoughtfully curated tours in Bali and Bandung, Indonesia.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
