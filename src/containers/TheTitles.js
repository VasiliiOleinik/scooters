import React from 'react';
import { Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import routes from 'src/routes';
import history from 'src/utils/history';
console.log('history', history);

const TheTitles = () => {
    const title = routes.filter(route => route.path === history.location.pathname);
    console.log('title', title);
    return (

        title.length === 0
            ? <Redirect to="/404" />
            : <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title[0].name}</title>
                </Helmet>
                <h1>{title[0].name}</h1>
            </>


    )
}
export default TheTitles