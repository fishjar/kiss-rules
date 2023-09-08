const FIXER_BR = "br";

export default [
  {
    pattern: "www.phoronix.com",
    selector: ".content",
    rootSlector: "",
    fixer: FIXER_BR,
  },
  {
    pattern: "t.me/s/*",
    selector: ".tgme_widget_message_text",
    rootSlector: ".tgme_channel_history",
    fixer: FIXER_BR,
  },
];
