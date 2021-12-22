import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import { HCTextField } from '../components';

const HomePage: NextPage = () => {
    return (
        <DefaultLayout title="Home">
            <HCTextField id="q" type="textarea" label="Post something" helper="Helper text" />
        </DefaultLayout>
    );
};

export default HomePage;