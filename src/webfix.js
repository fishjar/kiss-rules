const FIXER_BR = "br";
const FIXER_FONTSIZE = "fontSize";

const webfix = [
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
    pattern: "baidu.com",
    selector: "html",
    rootSelector: "",
    fixer: FIXER_FONTSIZE,
  },
  {
    pattern: "blogs.windows.com",
    selector: ".t-content>div>ul>li",
    rootSelector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "chat.openai.com",
    selector: "div.flex.flex-grow.flex-col",
    rootSelector: "",
    fixer: FIXER_BR,
  },
];

export default {
  "kiss-webfix": webfix,
};
