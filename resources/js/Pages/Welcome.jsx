import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';

import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome(props) {


    return (
        <>
            <Head title="Welcome" />

            <div className='bg-dark_bg h-fit w-screen'>
                <ApplicationLogo classProp="h-80 w-100 ml-10" />
            </div>

            <div className='flex justify-around'>
                <div className='border'>
                    <p className='font-bold text-2xl'>Welcome to Spicy Reads!</p>
                </div>
                <div className='border'>
                    <PrimaryButton><a href={route('register')}>Sign Up</a></PrimaryButton>
                    <PrimaryButton><a href={route('login')}>Login</a></PrimaryButton>
                </div>
            </div>
        </>
    );
}
