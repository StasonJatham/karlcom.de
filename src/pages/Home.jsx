import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Cookie from '../layout/Cookie'

import Hero from '../sections/Hero'
import Serivces from '../sections/Services'
import Profile from '../sections/Profile'

export default function Home() {
    return (
        <>
            <div className='md:mx-4 sm:mx-2'>

                <Navbar />
                <Hero />
                <Serivces />

                <Footer />
                <Cookie />
            </div>

        </>
    )
}
