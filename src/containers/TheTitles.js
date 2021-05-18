import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import routes from 'src/routes';
import history from 'src/utils/history';
console.log('history', history);

const TheTitles = () => {
    const title = routes.filter(route => route.path === history.location.pathname);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ title[0].name }</title>
            </Helmet>
            <h1>{ title[0].name }</h1>
        </>
    )
}
export default TheTitles