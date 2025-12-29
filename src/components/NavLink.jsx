import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    return <Link href={href} className={`${pathname.startsWith(href) && "bg-sky-400 px-3 py-2"}`}>{children}</Link>
};

export default NavLink;