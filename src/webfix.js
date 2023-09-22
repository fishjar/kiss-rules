const FIXER_BR = "br";
const FIXER_FONTSIZE = "fontSize";

export default [
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
    pattern: "app.slack.com/client",
    selector: ".p-rich_text_section",
    rootSelector: ".c-virtual_list__scroll_container",
    fixer: FIXER_BR,
  },
  {
    pattern: "baidu.com",
    selector: "html",
    rootSelector: "",
    fixer: FIXER_FONTSIZE,
  },
];
