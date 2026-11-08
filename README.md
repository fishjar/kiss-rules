# kiss-rules

收录并生成用于 [KISS-Translator](https://github.com/fishjar/kiss-translator) 的订阅规则。

如果需求某个未收录网站的规则，请提交 [issues](https://github.com/fishjar/kiss-webfixer/issues/new/choose)。

## 规则写法

站点规则使用 `://域名/`，例如 `://github.com/`，避免路径中的 `github.com` 误匹配。带路径写为 `://go.dev/doc/`，子域名通配写为 `://*.notion.site/`；多个站点用逗号分隔并逐项限定。已有明确协议限制的规则保留协议，例如 `https://x.com/`。`/show_bug.cgi` 等有意跨站匹配的路径规则保持原样。

匹配引擎仍按整个 URL 模糊匹配，因此嵌套的完整 URL 仍可能命中。订阅更新后需刷新网页；规则匹配字符串变更后，之前禁用的对应规则可能需要重新禁用。

## 订阅地址

- [默认全局] https://fishjar.github.io/kiss-rules/kiss-rules.json
- [默认开启] https://fishjar.github.io/kiss-rules/kiss-rules-on.json
- [默认关闭] https://fishjar.github.io/kiss-rules/kiss-rules-off.json
