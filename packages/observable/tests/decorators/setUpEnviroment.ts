import * as React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';


Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = {
    userAgent: 'node.js',
};

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}
(global as any).requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
};
(global as any).cancelAnimationFrame = function (id) {
    clearTimeout(id);
};
copyProps(window, global);