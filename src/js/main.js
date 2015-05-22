require(["require-config"], function () {
    require(['polyfills'], function(){
        require(['app'], function () {
            console.log("App started");
        });
    });
});
