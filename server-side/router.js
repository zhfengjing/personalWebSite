const readFile = require('./readFile');
const path = require('path');
module.exports = async (ctx, next) => {
    console.log('router-ctx.url', ctx.url, ctx.method);
    // const {request:{url}}=ctx;
    console.log('path=',path.resolve(__dirname,'./index.html'));
    switch (ctx.url) {
        case '/':
           const data = await readFile('./index.html');
           console.log('res=',data);
           ctx.body=data;
            break;
        case '/login':
            ctx.body = 'this is login page,please input your username and password,then you will go to home page';
            break;
        case '/register':
            ctx.body = 'this is register page,please form in your personal infomation';
            break;
        case '/node_modules/socket.io/client-dist/socket.io.js':
            const jsData = await readFile('./node_modules/socket.io/client-dist/socket.io.js');
            console.log('res=',jsData);
            ctx.body=jsData;
            break;
        default:
            ctx.status = 302;
            ctx.set('cookie', '1234567890');
            ctx.redirect('/login');
    }
}