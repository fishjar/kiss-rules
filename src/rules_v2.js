const GLOBAL_KEY = "*";
const OPT_STYLE_DASHBOX = "dash_box"; // 虚线框
const OPT_STYLE_BLOCKQUOTE = "blockquote"; // 引用

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
  bgColor: "", // 译文颜色
  textDiyStyle: "", // 自定义译文样式
  selectStyle: "", // 选择器节点样式
  parentStyle: "", // 选择器父节点样式
  injectJs: "", // 注入JS
  injectCss: "", // 注入CSS
  transOnly: GLOBAL_KEY, // 是否仅显示译文
  transTag: GLOBAL_KEY, // 译文元素标签
  transTitle: GLOBAL_KEY, // 是否同时翻译页面标题
  transStartHook: "", // 钩子函数
  transEndHook: "", // 钩子函数
  autoScan: GLOBAL_KEY, // 是否自动识别文本节点
  hasRichText: GLOBAL_KEY, // 是否启用富文本翻译
  hasShadowroot: GLOBAL_KEY, // 是否包含shadowroot
  rootsSelector: "", // 翻译范围选择器
  ignoreSelector: "", // 不翻译的选择器
};

const RULES_MAP = {
  "www.google.com/search": {
    rootsSelector: `#rcnt`,
    textStyle: OPT_STYLE_BLOCKQUOTE,
  },
  "en.wikipedia.org": {
    ignoreSelector: `.button, code, footer, form, mark, pre, .mwe-math-element, .mw-editsection`,
    textStyle: OPT_STYLE_BLOCKQUOTE,
  },
  "news.ycombinator.com": {
    selector: `p, .titleline, .commtext`,
    rootsSelector: `#bigbox`,
    keepSelector: `code, img, svg, pre, .sitebit`,
    ignoreSelector: `button, code, footer, form, header, mark, nav, pre, .reply`,
    autoScan: `false`,
    textStyle: OPT_STYLE_BLOCKQUOTE,
  },
  "twitter.com, https://x.com": {
    selector: `[data-testid='tweetText']`,
    keepSelector: `img, svg, span:has(a), div:has(a)`,
    autoScan: `false`,
    textStyle: OPT_STYLE_DASHBOX,
  },
  "www.youtube.com": {
    rootsSelector: `ytd-page-manager`,
    transEndHook: `({ parentNode }) => {parentNode.parentElement.style.cssText += "-webkit-line-clamp: unset; max-height: none; height: auto;";}`,
    textStyle: OPT_STYLE_DASHBOX,
  },
};

const rules = Object.entries(RULES_MAP)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([pattern, rule]) => ({
    ...DEFAULT_RULE,
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
