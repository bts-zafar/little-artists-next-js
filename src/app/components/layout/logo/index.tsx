import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    // We can use the same logo URL for all states
    const logoUrl = "/images/logo/new-logo.png"; 

    return (
        <Link href="/">
            {/* --- Desktop Logo --- */}
            <Image
                src={logoUrl}
                alt="logo"
                width={120} // Base width for aspect ratio
                height={41} // Base height (assuming 120 * 34 / 100)
                style={{ width: '120px', height: 'auto' }} // Keep auto-height
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            
            {/* --- Mobile Logo (FIXED) --- */}
            <Image 
                src={logoUrl} 
                alt='logo' 
                width={120} // FIX: Increased width from 40
                height={41} // FIX: Set height for aspect ratio
                style={{ width: '120px', height: 'auto' }} // Set explicit width
                quality={100}
                priority={true}
                className='block xsm:hidden' // Shows on mobile
            />
        </Link>
    );
};

export default Logo;