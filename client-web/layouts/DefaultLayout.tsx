import React from 'react';
import Head from 'next/head';

interface DefaultLayoutProps {
    title: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            <main>{ children }</main>
        </>
    );
};

export default DefaultLayout;