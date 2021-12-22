import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../../layouts/DefaultLayout';

const DashboardHomePage: NextPage = () => {
    return (
        <DefaultLayout title="My Dashboard">
            Dashboard
        </DefaultLayout>
    );
};

export default DashboardHomePage;