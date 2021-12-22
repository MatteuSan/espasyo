import React, { MouseEventHandler, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HCAppbarItemProps {
    icon: ReactElement|any;
    label: string;
    link?: string|any;
    onClick?: MouseEventHandler;
}

const HCAppbar: React.FC = ({ children }) => {
    return (
        <nav className="hc-appbar">
            <ul>
                { children }
            </ul>
        </nav>
    );
};

const HCAppbarItem: React.FC<HCAppbarItemProps> = ({ icon, label, onClick, link = '/' }) => {
    const router = useRouter();
    const isActive = router.pathname === link;

    return (
        <li className={`hc-appbar__item${ isActive ? ' active' : '' }`} onClick={ onClick }>
            <Link href={ link } passHref>
                <a rel="noreferrer">
                    <i className="hc-appbar__icon" aria-hidden="true">{ icon }</i>
                    <span className="hc-appbar__label" aria-hidden="false">{ label }</span>
                </a>
            </Link>
        </li>
    );
}

export { HCAppbar, HCAppbarItem };