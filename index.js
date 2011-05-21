(function(){
    //简易控制台
    if (!window.console) {
        window.console = {
            log: function(s){
                alert(s);
            },
            dir: function(s){
                alert(s);
            },
            warn: function(s){
                alert("[warn]:" + s);
            },
            error: function(s){
                alert("[error]:" + s);
            }
        };
    }
    //当前页面路径
    var pagePath = location.href.split("#")[0].split("index.html")[0];
    //seajs配置
    //通过alies配置top-level模块采用debug版本,配置appp,config,libs的实际地址
    seajs.config({
        debug: true,
        alias: {
            'backbone': 'backbone-debug',
            'underscore': 'underscore-debug',
            'jquery': 'jquery-debug',
            'app': pagePath + 'app',
            'config': pagePath + 'config',
            'libs': pagePath + 'libs'
        },
        charset: 'utf-8',
        timeout: 20000
    });
    //onload中安全启动Magix
    window.onload = function(){
        seajs.use(['libs/magix/main', 'config/ini'], function(main, ini){
            main(ini);
        });
    };
})();