import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import { HCTitleBar } from '../components';

const AboutPage: NextPage = () => {
    return (
        <DefaultLayout title="Trends">
            <HCTitleBar>About Espasyo</HCTitleBar>
        </DefaultLayout>
    );
};

export default AboutPage;