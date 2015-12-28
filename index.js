var express = require('express'),
    wechat = require('wechat'),
    app = express(),
    config = {
        token: 'myth',
        appid: 'wx915838469a97a026',
        encodingAESKey: 'ZIG4t6lIocAklugcN6JXClQfANkzjRov3fHh0wuFpAy'
    };

app.use(express.query());
app.use('/wechat', wechat(config, function(req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    res.reply("You typed: "+ message.content);
}));

app.get('/', function(req, res) {
    res.send('Hello World')
});

app.listen(process.env.PORT || 5050);
