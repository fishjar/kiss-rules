const GLOBAL_KEY = "*";

const DEFAULT_RULE = {
  pattern: "", // 匹配网址
  selector: "", // 选择器
  keepSelector: "", // 保留元素选择器
  terms: "", // 专业术语
  aiTerms: "", // AI专业术语
  apiSlug: GLOBAL_KEY, // 翻译服务
  fromLang: GLOBAL_KEY, // 源语言
  toLang: GLOBAL_KEY, // 目标语言
  textStyle: GLOBAL_KEY, // 译文样式
  transOpen: GLOBAL_KEY, // 开启翻译
  // bgColor: "", // 译文颜色 (作废)
  // textDiyStyle: "", // 自定义译文样式 (作废)
  textExtStyle: "", // 译文附加样式
  termsStyle: "", // 专业术语样式
  highlightStyle: "", // 高亮词汇样式
  selectStyle: "", // 选择器节点样式
  parentStyle: "", // 选择器父节点样式
  grandStyle: "", // 选择器父节点样式
  injectJs: "", // 注入JS
  // injectCss: "", // 注入CSS (作废)
  transOnly: GLOBAL_KEY, // 是否仅显示译文
  // transTiming: GLOBAL_KEY, // 翻译时机/鼠标悬停翻译  (暂时作废)
  transTag: GLOBAL_KEY, // 译文元素标签
  transTitle: GLOBAL_KEY, // 是否同时翻译页面标题
  // transSelected: GLOBAL_KEY, // 是否启用划词翻译 (移回setting)
  // detectRemote: GLOBAL_KEY, // 是否使用远程语言检测 (移回setting)
  // skipLangs: [], // 不翻译的语言 (移回setting)
  // fixerSelector: "", // 修复函数选择器 (暂时作废)
  // fixerFunc: GLOBAL_KEY, // 修复函数 (暂时作废)
  transStartHook: "", // 钩子函数
  transEndHook: "", // 钩子函数
  // transRemoveHook: "", // 钩子函数 (暂时作废)
  autoScan: GLOBAL_KEY, // 是否自动识别文本节点
  hasRichText: GLOBAL_KEY, // 是否启用富文本翻译
  hasShadowroot: GLOBAL_KEY, // 是否包含shadowroot
  rootsSelector: "", // 翻译范围选择器
  ignoreSelector: "", // 不翻译的选择器
  splitParagraph: GLOBAL_KEY, // 切分段落
  splitLength: 0, // 切分段落长度
  highlightWords: GLOBAL_KEY, // 高亮词汇
};

const RULES_MAP = {
  // "www.google.com/search": {
  //   rootsSelector: `#rcnt`,
  // },
  "en.wikipedia.org": {
    ignoreSelector: `.button, code, footer, form, mark, pre, .mwe-math-element, .mw-editsection`,
  },
  "news.ycombinator.com": {
    selector: `p, .titleline, .commtext, .hn-item-title, .hn-comment-text, .hn-story-title`,
    keepSelector: `code, img, svg, pre, .sitebit`,
    ignoreSelector: `button, code, footer, form, header, mark, nav, pre, .reply`,
    autoScan: `false`,
  },
  "twitter.com, https://x.com": {
    selector: `[data-testid='tweetText'], [data-testid='twitter-article-title'], .public-DraftStyleDefault-block`,
    keepSelector: `img, svg, a, span:has(a), div:has(a)`,
    ignoreSelector: `button, [data-testid='videoPlayer'], [role='group']`,
    autoScan: `false`,
  },
  "www.youtube.com/live_chat": {
    rootsSelector: `div#items`,
    selector: `span.yt-live-chat-text-message-renderer`,
    autoScan: `false`,
  },
  "www.youtube.com": {
    rootsSelector: `ytd-page-manager`,
    ignoreSelector: `aside, button, footer, form, header, pre, mark, nav, #player, #container, .caption-window, .ytp-settings-menu`,
  },
  "web.telegram.org": {
    autoScan: `false`,
    selector: ".text-content, .embedded-text-wrapper",
    rootsSelector: ".Transition",
  },
  "man7.org": {
    ignoreSelector: "table",
    keepSelector: "b, i",
    transStartHook: `({text})=>({text:text.replace(/[\r\n]+/g, "")})`,
    injectJs: `document.querySelectorAll('pre').forEach(pre=>pre.innerHTML = pre.innerHTML?.replace(/(?:\r\n|\r|\n){2,}/g, '<br /><br />'));`,
  },
  "github.com": {
    autoScan: `false`,
    selector: `h1, h2, h3, h4, h5, h6, .markdown-body li, p, dd, blockquote, figcaption, label, legend`,
  },
};

const rules = Object.entries(RULES_MAP).map(([pattern, rule]) => ({
  // ...DEFAULT_RULE,
  ...rule,
  pattern,
}));
const onRules = rules.map((rule) => ({ ...rule, transOpen: "true" }));
const offRules = rules.map((rule) => ({ ...rule, transOpen: "false" }));

export default {
  "kiss-rules_v2": rules,
  "kiss-rules-on_v2": onRules,
  "kiss-rules-off_v2": offRules,
};
