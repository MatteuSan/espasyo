import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';

const HomePage: NextPage = () => {
    return (
        <DefaultLayout title="HOME">
            Hello
        </DefaultLayout>
    );
};

export default HomePage;