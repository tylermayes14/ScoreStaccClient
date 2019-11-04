let APIURL = '';

switch (window.location.hostname) {
    // local host name of react app
    case 'localhost' || '127.0.0.1' :
        //local ghost name of api
        APIURL = 'http://localhost:3000';
        break;

    // deployed version of react app
    case 'tm-scorestacc-client.herokuapp.com' :
        // full url of deployed api
        APIURL = 'https://tm-scorestacc-server.herokuapp.com'
}

export default APIURL;