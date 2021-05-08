"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRegex = void 0;
exports.validationRegex = {
    link: /(https?\:\/\/[^ ]+)/gi,
    mention: /\@([a-zA-Z0-9_]{4,})/gi,
    emote: /\:([a-z0-9]+)\:/gi,
    block: /\`(.*?)\`/gi,
    global: /(\`.*?\`)|(\@[a-zA-Z0-9_]{4,})|(\:[a-z0-9]+\:)|(https?\:\/\/[^ ]+)/gi
};
