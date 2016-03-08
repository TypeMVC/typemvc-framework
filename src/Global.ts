/// <reference path="TypeMVC.ts" />

var _ = <LoDash.LoDashStatic> require('lodash');
var fs = <NodeJS.FS.FSStatic> require('fs');
var path = <NodeJS.Path> require('path');
var deprecate: (message: string) => void = require('depd')('typemvcframework');

var extend = function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

module TF {
    export interface ICookieOption {
        domain?: string;
        path?: string;
        secure?: boolean;
        httpOnly?: boolean;
        expires?: Date;
        maxAge?: number;
        signed?: boolean;
    }
}