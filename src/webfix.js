const FIXER_BR = "br";
const FIXER_BN = "bn";
const FIXER_BR_DIV = "brToDiv";
const FIXER_BN_DIV = "bnToDiv";

const webfixRules = [
  {
    pattern: "www.phoronix.com",
    selector: ".content",
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "t.me/s/",
    selector: ".tgme_widget_message_text",
    rootSelector: ".tgme_channel_history",
    fixer: FIXER_BR,
  },
  {
    pattern: "forum.ru-board.com",
    selector: "span.post",
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "blogs.windows.com",
    selector: ".t-content>div>ul>li",
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "chat.openai.com",
    selector: "div[data-message-author-role='user'] > div",
    rootSelector: "",
    fixer: FIXER_BN,
  },
  {
    pattern: "ubuntuforums.org",
    selector: ".postcontent",
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "play.google.com/store/apps/details",
    selector: `[data-g-id="description"]`,
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "news.yahoo.co.jp/articles/",
    selector: `.sc-cTsKDU`,
    rootSelector: "",
    fixer: FIXER_BN,
  },
  {
    pattern: "chromereleases.googleblog.com",
    selector: `.post-content, .post-content > span, li > span`,
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "mail.google.com",
    selector: `div`,
    rootSelector: "div[data-message-id] div[class='']",
    fixer: FIXER_BR,
  },
];

export default {
  "kiss-webfix": webfixRules,
};
