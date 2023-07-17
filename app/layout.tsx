 import { Nunito } from 'next/font/google'
 import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
// import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
// import { IoMdClose } from 'react-icons/io';
import ToasterProvider from './providers/ToasterProvider';
import RentModal from './components/modals/RentModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import SearchModal from './components/modals/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}
const font=Nunito({
  subsets:["latin"]
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SearchModal/>
        <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser={currentUser}/>
        <div className='pb-20 pt-25'>
        {children}
        </div>
        </body>
    </html>
  )
}
