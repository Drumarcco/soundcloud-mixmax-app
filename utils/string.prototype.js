String.prototype.hasHttpPrefix = function() {
    return !!this.match(/^https*:\/\//i);
}
