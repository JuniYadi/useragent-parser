const app = require('express')();
const WhichBrowser = require('which-browser');

app.get('/api/browser', (req, res) => {
    const useragent = req.query['ua'];
    const browser = new WhichBrowser(useragent);

    res.json({
        data: {
            browser: browser,
            string: browser.toString(),
            useragent: useragent
        }
    });
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})