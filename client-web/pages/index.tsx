import React from 'react';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { Formik, Form, FormikHelpers } from 'formik';
import { MdReport } from 'react-icons/md';

import DefaultLayout from '../layouts/DefaultLayout';
import { HCButton, HCCard, HCTextField, HCTitleBar } from '../components';
import { api } from '../api/config';

interface Post {
    poster?: string;
    body: string;
    background?: string;
    color?: string;
}

const HomePage: NextPage = ({ posts }: any) => {

    const router: NextRouter = useRouter();

    const submitHandler = (values: Post, { setSubmitting, setErrors, resetForm }: FormikHelpers<Post>): void => {
        // console.log(values);
        api.post('/post', {
            'poster': values.poster,
            'body': values.body,
            'background': values.background,
            'color': values.color
        }).then((res) => {
            if (res.data?.errors) {
                setErrors(res.data?.errors)
            }

            router.push('/');
            resetForm();
            setSubmitting(false);
        }).catch(err => {
            console.log(err);
        });
    };

    const reportHandler = async (postId: number) => {
        await api.post(`/report/${ postId }`, {
            'context': 'No context provided.'
        }).then(() => {
            window.alert('Report submitted successfully!');
        }).catch(err => {
            console.log(err);
        });
    }

    const initValues: Post = {
        poster: '',
        body: '',
        background: '#232323',
        color: '#ffffff'
    }

    return (
        <DefaultLayout title="Home">
            <HCTitleBar>Express yourself</HCTitleBar>
            <Formik initialValues={ initValues } onSubmit={ submitHandler }>
                {({ isSubmitting }) => (
                    <Form className="hc-form">
                        <HCTextField id="poster" label="Who are you?" helper="Put 'Anonymous' to keep your identity as a secret :>" type="text" isRequired />
                        <HCTextField id="body" label="What's going on in your mind right now?" type="textarea" isRequired />
                        <div className="hc-form__section row">
                            <HCTextField id="background" label="What background color do you want?" type="color" isRequired />
                            <HCTextField id="color" label="What text color do you want?" type="color" isRequired />
                        </div>
                        <HCButton type="filled" context="submit" isDisabled={ isSubmitting }>Post</HCButton>
                    </Form>
                )}
            </Formik>
            <HCTitleBar>Recent Thoughts</HCTitleBar>
            <section className="grid">
                { posts.map((post: any, key: React.Key) => {
                    return (
                        <HCCard
                            title={ post.body }
                            description={`by ${ post.poster } on ${ post.created_at.split('T')[0] }`}
                            key={ key }
                            style={ { backgroundColor: post.background, color: post.color } }
                        >
                            <HCButton type="filled" icon={ <MdReport /> } onClick={ () => reportHandler(post.id) } />
                        </HCCard>
                    );
                }).reverse() }
            </section>
        </DefaultLayout>
    );
};

export const getStaticProps = async () => {
    const res = await api.get('/post');

    return {
        props: {
            posts: res.data
        }
    };
};

export default HomePage;