//date.js - custom functions for date object

Date.prototype.addDays = function(d) {
    this.setDate(this.getDate() + d);
    return this;
};
Date.prototype.addMinutes = function(h) {
    this.setMinutes(this.getMinutes() + h);
    return this;
};
Date.prototype.getFormatedTime = function() {
    var timeFormatOptions = { hour: "2-digit", minute: "2-digit" };
    return this.toLocaleTimeString("en-us", timeFormatOptions);
};

Date.prototype.getTimeStamp = function(date){
    var pad = function(amount, width) {
        var padding = "";
        while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
            padding += "0";
        return padding + amount.toString();
    }
    date = date ? date : this;
    var offset = date.getTimezoneOffset();
    return pad(date.getFullYear(), 4) + "-" + 
    pad(date.getMonth() + 1, 2) + "-" + pad(date.getDate(), 2) + 
    "T" + pad(date.getHours(), 2) + ":" + pad(date.getMinutes(), 2) + ":" + 
    pad(date.getSeconds(), 2) + (offset > 0 ? "-" : "+") + 
    pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);

};