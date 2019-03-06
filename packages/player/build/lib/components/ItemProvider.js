"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemProvider = function (props) {
    var item = props.item;
    switch (item.type) {
        case 'DISPLAY': {
            // return <Item {...props} />
        }
        case 'QUESTION': {
            // return <TextItem {...props} />
        }
        default: {
            return null;
        }
    }
};
exports.default = exports.ItemProvider;
//# sourceMappingURL=ItemProvider.js.map