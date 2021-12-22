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
import { MdDashboard, MdHome, MdOutlineTrendingUp } from 'react-icons/md';

interface DefaultLayoutProps {
    title: string;
    description?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{ `${ title } - ${ site.name }` }</title>
                <link href={`https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp`} rel="stylesheet" />

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
                        <HCAppbarItem icon={ <MdHome /> } label="Home" />
                        <HCAppbarItem icon={ <MdOutlineTrendingUp /> } label="Trends" link="/trends" />
                        <HCAppbarItem icon={ <MdDashboard /> } label="Dashboard" link="/dashboard" />
                    </HCAppbar>
                </HCHeaderActions>
                <HCHeaderDiv>
                    <HCButton type="filled inverted">Sign Up</HCButton>
                </HCHeaderDiv>
            </HCHeader>
            <main className="content-wrap">
                { children }
            </main>
        </>
    );
};

export default DefaultLayout;