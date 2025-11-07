import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            <Image
                src={sticky ? "/images/logo/new-logo.png" : "/images/logo/new-logo.png"}
                alt="logo"
                width={100}
                height={34}
                style={{ width: '120px', height: 'auto' }}
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            <Image src={sticky ? "/images/logo/new-logo.png" : "/images/logo/new-logo.png"} alt='logo' width={40} height={40} className='block xsm:hidden' />
        </Link>
    );
};

export default Logo;
