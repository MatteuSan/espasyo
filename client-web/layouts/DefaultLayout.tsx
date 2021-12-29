import React from 'react';
import Head from 'next/head';
import {
    HCAppbar, HCAppbarItem,
    HCButton,
    HCHeader,
    HCHeaderActions,
    HCHeaderBrand,
    HCHeaderDiv,
} from '../components';
import { site } from '../constants/site';
import { MdInfoOutline, MdOutlineHome } from 'react-icons/md';

interface DefaultLayoutProps {
    title: string;
    description?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{ `${ title } - ${ site.name }` }</title>

                <meta property="og:title" content={`${ title } - ${ site.name }`} />
                <meta property="og:description" content={ description || `Your personal expression space with a twist.` } />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={ `${site.url}/img/favicon.png` } />
                <meta property="og:url" content={ site.url } />

                <meta name="twitter:title" content={`${ title } - ${ site.name }`} />
                <meta name="twitter:description" content={ description || `Your personal expression space with a twist.` } />
                <meta name="twitter:image" content={ `${site.url}/img/favicon.png` } />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={ site.twitter } />
            </Head>
            <HCHeader>
                <HCHeaderBrand>
                    { 'Espasyo' || site.name }
                </HCHeaderBrand>
                <HCHeaderActions>
                    <HCAppbar>
                        <HCAppbarItem icon={ <MdOutlineHome /> } label="Home" />
                        <HCAppbarItem icon={ <MdInfoOutline /> } label="About" link="/about" />
                    </HCAppbar>
                </HCHeaderActions>
            </HCHeader>
            <main className="content-wrap">
                { children }
            </main>
        </>
    );
};

export default DefaultLayout;