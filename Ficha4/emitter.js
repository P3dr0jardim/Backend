function emitter(){
    this.events={};
}
emitter.prototype.on = function (type, listener){
    if(this.events[type]==undefined){
        this.events[type]=[];
    }
    this.events[type].push(listener);
}
emitter.prototype.emit=function(event_name){
    if(this.events[event_name]!=undefined){
        var array=this.events[event_name];
    this.events[event_name].forEach(function(listener) {
        listener();
    });
    }
    
    }
module.exports= emitter;