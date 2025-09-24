const FIXER_BR = "br";
const FIXER_BN = "bn";
const FIXER_BR_DIV = "brToDiv";
const FIXER_BN_DIV = "bnToDiv";

const GLOBAL_KEY = "*";

const DEFAULT_SELECTOR = `:is(li, p, h1, h2, h3, h4, h5, h6, dd, blockquote, .kiss-p)`;
const DEFAULT_KEEP_SELECTOR = `code, img, svg, pre, a:has(code)`;
const DEFAULT_RULE = {
  pattern: "", // 匹配网址
  selector: "", // 选择器
  keepSelector: "", // 保留元素选择器
  terms: "", // 专业术语
  translator: GLOBAL_KEY, // 翻译服务
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
  transTiming: GLOBAL_KEY, // 翻译时机/鼠标悬停翻译
  transTag: GLOBAL_KEY, // 译文元素标签
  transTitle: GLOBAL_KEY, // 是否同时翻译页面标题
  detectRemote: GLOBAL_KEY, // 是否使用远程语言检测
  skipLangs: [], // 不翻译的语言
  fixerSelector: "", // 修复函数选择器
  fixerFunc: GLOBAL_KEY, // 修复函数
};

const RULES_MAP = {
  "www.google.com/search": {
    selector: `h3, .IsZvec, .VwiC3b, .nDgy9d, .ITZIwc, .HzN33d>span`,
  },
  "news.google.com": {
    selector: `[data-n-tid], ${DEFAULT_SELECTOR}`,
  },
  "www.foxnews.com": {
    selector: `.headline, .sub-headline, .ob-rec-text, .title, .title>a, .article-body ${DEFAULT_SELECTOR}; [data-spotim-module="conversation"]>div >>> [data-spot-im-class="message-text"] p,  [data-spot-im-class="message-text"]`,
  },
  "bearblog.dev, www.theverge.com, www.tampermonkey.net/documentation.php": {
    selector: `${DEFAULT_SELECTOR}`,
  },
  "themessenger.com": {
    selector: `.leading-tight, .leading-tighter, .my-2 p, .font-body p, article ${DEFAULT_SELECTOR}`,
  },
  "www.telegraph.co.uk, go.dev/doc/": {
    selector: `article ${DEFAULT_SELECTOR}`,
  },
  "www.theguardian.com": {
    selector: `.show-underline, .dcr-hup5wm div, .dcr-7vl6y8 div, .dcr-12evv1c, figcaption, article ${DEFAULT_SELECTOR}, [data-cy="mostviewed-footer"] h4`,
  },
  "www.semafor.com": {
    selector: `${DEFAULT_SELECTOR}, .styles_intro__IYj__, [class*="styles_description"]`,
  },
  "www.noemamag.com": {
    selector: `.splash__title, .single-card__title, .single-card__type, .single-card__topic, .highlighted-content__title, .single-card__author, article ${DEFAULT_SELECTOR}, .quote__text, .wp-caption-text div`,
  },
  "restofworld.org": {
    selector: `${DEFAULT_SELECTOR}, .recirc-story__headline, .recirc-story__dek`,
  },
  "www.axios.com": {
    selector: `.h7, ${DEFAULT_SELECTOR}`,
  },
  "www.newyorker.com": {
    selector: `.summary-item__hed, .summary-item__dek, .summary-collection-grid__dek, .dqtvfu, .rubric__link, .caption, article ${DEFAULT_SELECTOR}, .HEhan ${DEFAULT_SELECTOR}, .ContributorBioBio-fBolsO, .BaseText-ewhhUZ`,
  },
  "time.com": {
    selector: `h1, h3, .summary, .video-title, #article-body ${DEFAULT_SELECTOR}, .image-wrap-container .credit.body-caption, .media-heading`,
  },
  "www.dw.com": {
    selector: `.ts-teaser-title a, .news-title a, .title a, .teaser-description a, .hbudab h3, .hbudab p, figcaption ,article ${DEFAULT_SELECTOR}`,
  },
  "www.bbc.com": {
    selector: `[data-component] ${DEFAULT_SELECTOR}, [data-testid="video-page-video-section"] ${DEFAULT_SELECTOR}, [data-testid="card-headline"], [data-testid="card-description"], [data-component="caption-block"]>span, [data-testid="section-title-wrapper"]>h2`,
  },
  "www.chinadaily.com.cn": {
    selector: `h1, .tMain [shape="rect"], .cMain [shape="rect"], .photo_art [shape="rect"], .mai_r [shape="rect"], .lisBox li, #Content ${DEFAULT_SELECTOR}`,
  },
  "www.facebook.com": {
    selector: `[role="main"] [dir="auto"]`,
  },
  "www.reddit.com, new.reddit.com, sh.reddit.com": {
    selector: `:is(#AppRouter-main-content, #overlayScrollContainer) :is([class^=tbIA],[class^=_1zP],[class^=ULWj],[class^=_2Jj], [class^=_334],[class^=_2Gr],[class^=_7T4],[class^=_1WO], ${DEFAULT_SELECTOR}); [id^="post-title"], :is([slot="text-body"], [slot="comment"]) ${DEFAULT_SELECTOR}, recent-posts h3, aside :is(span:has(>h2), p); shreddit-subreddit-header >>> :is(#title, #description); [data-testid="post-title-text"]`,
  },
  "www.quora.com": {
    selector: `.qu-wordBreak--break-word`,
  },
  "edition.cnn.com": {
    selector: `.container__title, .container__headline, .headline__text, .image__caption, [data-type="Title"], .article__content ${DEFAULT_SELECTOR}`,
  },
  "www.reuters.com": {
    selector: `[data-testid="Heading"], [data-testid="Body"], [data-testid^="paragraph"], .maintext, ${DEFAULT_SELECTOR}`,
  },
  "www.bloomberg.com": {
    selector: `[data-component="headline"], [data-component="related-item-headline"], [data-component="title"], article ${DEFAULT_SELECTOR}`,
  },
  "deno.land, docs.github.com": {
    selector: `main ${DEFAULT_SELECTOR}`,
    keepSelector: DEFAULT_KEEP_SELECTOR,
  },
  "www.indiehackers.com": {
    selector: `h1, h3, .content ${DEFAULT_SELECTOR}, .feed-item__title-link`,
  },
  "platform.openai.com/docs": {
    selector: `.docs-body ${DEFAULT_SELECTOR}`,
    keepSelector: DEFAULT_KEEP_SELECTOR,
  },
  "en.wikipedia.org": {
    selector: `h1, .mw-parser-output ${DEFAULT_SELECTOR}`,
    keepSelector: `.mwe-math-element`,
  },
  "stackoverflow.com, serverfault.com, superuser.com, stackexchange.com, askubuntu.com, stackapps.com, mathoverflow.net":
    {
      selector: `.s-prose ${DEFAULT_SELECTOR}, .comment-copy, .question-hyperlink, .s-post-summary--content-title, .s-post-summary--content-excerpt`,
      keepSelector: `${DEFAULT_KEEP_SELECTOR}, .math-container`,
    },
  "www.npmjs.com/package, developer.chrome.com/docs, medium.com, react.dev, create-react-app.dev, pytorch.org":
    {
      selector: `article ${DEFAULT_SELECTOR}`,
    },
  "news.ycombinator.com": {
    selector: `.title, p`,
    fixerSelector: `.toptext, .commtext`,
    fixerFunc: FIXER_BR,
  },
  "github.com": {
    selector: `.markdown-body :is(li, p, h1, h2, h3, h4, h5, h6, dd, blockquote, .kiss-p), .repo-description p, .Layout-sidebar .f4, .container-lg .py-4 .f5, .container-lg .my-4 .f5, .Box-row .pr-4, .Box-row article .mt-1, [itemprop="description"], .markdown-title, bdi, .ws-pre-wrap, .status-meta, span.status-meta, .col-10.color-fg-muted, .TimelineItem-body, .pinned-item-list-item-content .color-fg-muted, .markdown-body td, .markdown-body th, [data-testid="issue-pr-title-link"], h4.mb-2, h4.mb-2+span`,
    keepSelector: DEFAULT_KEEP_SELECTOR,
  },
  "twitter.com, https://x.com/": {
    selector: `[data-testid="tweetText"], [data-testid="birdwatch-pivot"]>div.css-1rynq56`,
    keepSelector: `img, a, .r-18u37iz, .css-175oi2r`,
  },
  "m.youtube.com": {
    selector: `.slim-video-information-title .yt-core-attributed-string, .media-item-headline .yt-core-attributed-string, .comment-text .yt-core-attributed-string, .typography-body-2b .yt-core-attributed-string, #ytp-caption-window-container .ytp-caption-segment`,
    selectStyle: `-webkit-line-clamp: unset; max-height: none; height: auto;`,
    parentStyle: `-webkit-line-clamp: unset; max-height: none; height: auto;`,
    keepSelector: `img, #content-text>a`,
  },
  "www.youtube.com": {
    selector: `h1>.ytd-watch-metadata, .yt-lockup-metadata-view-model-wiz__title, .shortsLockupViewModelHostMetadataTitle>a, #content-text>span, yt-attributed-string.ytd-text-inline-expander>span, #chat-messages #message, #video-title, #title,  #snippet-text, span.caption-visual-line>span, .ytp-caption-segment, .yt-lockup-metadata-view-model__title>span`, // 翻译字幕
    // selector: `h1>.ytd-watch-metadata, #video-title, #title, #content-text>span, #snippet-text, yt-attributed-string.ytd-text-inline-expander>span, span.caption-visual-line>span, #chat-messages #message`, // 不翻译字幕
    keepSelector: `img, #content-text>a, span[dir="auto"]:has(a), span:has(img), [role="tooltip"]`,
    // injectCss: `ytd-expander[should-use-number-of-lines][collapsed]>#content.ytd-expander { -webkit-line-clamp: unset; max-height: none; height: auto; }`,
    transEndHook: `(node, text) => {  node.parentElement.parentElement.style.cssText += "-webkit-line-clamp: unset; max-height: none; height: auto;";return text;}`,
  },
  "bard.google.com": {
    selector: `.query-content ${DEFAULT_SELECTOR}, message-content ${DEFAULT_SELECTOR}`,
  },
  "www.bing.com, copilot.microsoft.com": {
    selector: `.b_algoSlug, .rwrl_padref; .cib-serp-main >>> .ac-textBlock ${DEFAULT_SELECTOR}, .text-message-content div`,
  },
  "www.phoronix.com": {
    selector: `article ${DEFAULT_SELECTOR}`,
    fixerSelector: `.content`,
    fixerFunc: FIXER_BR,
  },
  "wx2.qq.com": {
    selector: `.js_message_plain`,
  },
  "app.slack.com/client/": {
    selector: `.p-rich_text_section, .c-message_attachment__text, .p-rich_text_list li`,
  },
  "discord.com/channels/": {
    selector: `div[class^=message], div[class^=headerText], div[class^=name_], section[aria-label='Search Results'] div[id^=message-content], div[id^=message]`,
    keepSelector: `li[class^='card'] div[class^='message'], [class^='embedFieldValue'], [data-list-item-id^='forum-channel-list'] div[class^='headerText']`,
  },
  "t.me/s/": {
    selector: `.js-message_text ${DEFAULT_SELECTOR}`,
    fixerSelector: `.tgme_widget_message_text`,
    fixerFunc: FIXER_BR,
  },
  "web.telegram.org/k": {
    selector: `div.kiss-p`,
    keepSelector: `div[class^=time], .peer-title, .document-wrapper, .message.spoilers-container custom-emoji-element, reactions-element`,
    fixerSelector: `.message`,
    fixerFunc: FIXER_BN_DIV,
  },
  "web.telegram.org/a": {
    selector: `.text-content > .kiss-p`,
    keepSelector: `.Reactions, .time, .peer-title, .document-wrapper, .message.spoilers-container custom-emoji-element`,
    fixerSelector: `.text-content`,
    fixerFunc: FIXER_BR_DIV,
  },
  "www.instagram.com/": {
    selector: `h1, article span[dir=auto] > span[dir=auto], ._ab1y`,
  },
  "www.instagram.com/p/,www.instagram.com/reels/": {
    selector: `h1, div[class='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1'] > span[class='x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj'], span[class='x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs xt0psk2 x1i0vuye xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj']`,
  },
  "mail.google.com": {
    selector: `.a3s.aiL ${DEFAULT_SELECTOR}, span[data-thread-id]`,
    fixerSelector: `.a3s.aiL`,
    fixerFunc: FIXER_BR,
  },
  "web.whatsapp.com": {
    selector: `.copyable-text > span`,
  },
  "chat.openai.com": {
    selector: `div[data-message-author-role] > div ${DEFAULT_SELECTOR}`,
    fixerSelector: `div[data-message-author-role='user'] > div`,
    fixerFunc: FIXER_BN,
  },
  "forum.ru-board.com": {
    selector: `.tit, .dats, .kiss-p, .lgf ${DEFAULT_SELECTOR}`,
    fixerSelector: `span.post`,
    fixerFunc: FIXER_BR,
  },
  "education.github.com": {
    selector: `${DEFAULT_SELECTOR}, a, summary, span.Button-content`,
  },
  "blogs.windows.com": {
    selector: `${DEFAULT_SELECTOR}, .c-uhf-nav-link, figcaption`,
    fixerSelector: `.t-content>div>ul>li`,
    fixerFunc: FIXER_BR,
  },
  "developer.apple.com/documentation/": {
    selector: `#main ${DEFAULT_SELECTOR}, #main .abstract .content, #main .abstract.content, #main .link span`,
    keepSelector: DEFAULT_KEEP_SELECTOR,
  },
  "greasyfork.org": {
    selector: `h2, .script-link, .script-description, #additional-info ${DEFAULT_SELECTOR}`,
  },
  "www.fmkorea.com": {
    selector: `#container ${DEFAULT_SELECTOR}`,
  },
  "forum.arduino.cc": {
    selector: `.top-row>.title, .featured-topic>.title, .link-top-line>.title, .category-description, .topic-excerpt, .fancy-title, .cooked ${DEFAULT_SELECTOR}`,
  },
  "docs.arduino.cc": {
    selector: `[class^="tutorial-module--left"] ${DEFAULT_SELECTOR}`,
  },
  "www.historydefined.net": {
    selector: `.wp-element-caption, ${DEFAULT_SELECTOR}`,
  },
  "gobyexample.com": {
    selector: `.docs p`,
    keepSelector: `code`,
  },
  "go.dev/tour": {
    selector: `#left-side ${DEFAULT_SELECTOR}`,
    keepSelector: DEFAULT_KEEP_SELECTOR,
  },
  "pkg.go.dev": {
    selector: `.Documentation-content ${DEFAULT_SELECTOR}`,
    keepSelector: `${DEFAULT_KEEP_SELECTOR}, a, span`,
  },
  "docs.rs, doc.rust-lang.org/std/, doc.rust-lang.org/nightly/, doc.rust-lang.org/stable/":
    {
      selector: `.docblock ${DEFAULT_SELECTOR}, .docblock-short`,
      keepSelector: DEFAULT_KEEP_SELECTOR,
    },
  "doc.rust-lang.org/book/, doc.rust-lang.org/cargo/, doc.rust-lang.org/rust-by-example/, doc.rust-lang.org/embedded-book/":
    {
      selector: `.content ${DEFAULT_SELECTOR}`,
      keepSelector: DEFAULT_KEEP_SELECTOR,
    },
  "randomnerdtutorials.com": {
    selector: `article ${DEFAULT_SELECTOR}`,
  },
  "notebooks.githubusercontent.com/view/ipynb": {
    selector: `#notebook-container ${DEFAULT_SELECTOR}`,
    keepSelector: DEFAULT_KEEP_SELECTOR,
  },
  "developers.cloudflare.com": {
    selector: `.content-panel ${DEFAULT_SELECTOR}, .WorkerStarter--description, tr > td`,
    keepSelector: `a[rel='noopener'], code`,
  },
  "ubuntuforums.org": {
    fixerSelector: `.postcontent`,
    fixerFunc: FIXER_BR,
  },
  "play.google.com/store/apps/details": {
    fixerSelector: `[data-g-id="description"]`,
    fixerFunc: FIXER_BR,
  },
  "news.yahoo.co.jp/articles/": {
    fixerSelector: `.sc-cTsKDU`,
    fixerFunc: FIXER_BN,
  },
  "chromereleases.googleblog.com": {
    fixerSelector: `.post-content, .post-content > span, li > span`,
    fixerFunc: FIXER_BR,
  },
  "fearlessrevolution.com": {
    selector: `.page-body ${DEFAULT_SELECTOR}, .topictitle, .forumtitle`,
    fixerSelector: ".content",
    fixerFunc: FIXER_BR,
  },
  "www.unknowncheats.me": {
    selector: `${DEFAULT_SELECTOR}, .tcat, [id^="thread_title_"]`,
    fixerSelector: "[id^='post_message_'],  [id^='post_message_'] table div",
    fixerFunc: FIXER_BR,
  },
  "xdaforums.com": {
    selector: `.p-body-main ${DEFAULT_SELECTOR}, .title, .structItem-title`,
    fixerSelector: ".bbWrapper, .bbCodeBlock-expandContent",
    fixerFunc: FIXER_BR,
  },
  "steamcommunity.com": {
    selector: `${DEFAULT_SELECTOR}, .topic, .forum_topic_name, .discussions_forumlist_forumname`,
    fixerSelector: ".content, .commentthread_comment_text",
    fixerFunc: FIXER_BR,
  },
  "forums.zotero.org": {
    selector: `h1, h3, .Title, .Summary, .Message ${DEFAULT_SELECTOR}`,
    fixerSelector: ".Message",
    fixerFunc: FIXER_BR,
  },
  "www.mdpi.com": {
    selector:
      ":is(li:not(.menu-item):not(.accordion-navigation):not(.accordion-direct-link), p, h1, h2, h3, h4, h5, h6, dd, blockquote, .affiliation-name, .art-abstract, .html-p, .html-caption, .pubhistory, .belongsTo, .html-gwd-group, .html-fig_description, .html-table_wrap_discription)",
    keepSelector:
      "code, img, svg, .math, a:has(code), sup, sub, .html-disp-formula-info, .MathJax",
  },
  "pubs.acs.org/doi": {
    selector:
      ':is(li:not(.header_mainmenu_current):not(.share__item), p:not([class^="article_"]), h1, h2:not(.fig-label), h3, h4, h5, h6, dd, blockquote, .title2, .kiss-p',
    keepSelector: "code, img, svg, .math, a:has(code), sup, sub, .MathJax",
    fixerSelector: ".NLM_p",
    fixerFunc: FIXER_BR,
  },
  "www.science.org/doi": {
    selector:
      ':is(li:not(ul.collateral-pill li):not(.nav-item):not(.list-inline-item), p:not(.footer__copyright p), h1, h2, h3, h4, h5, h6, dd, blockquote, [role="paragraph"], [role="doc-footnote"], .meta-panel__overline, div.caption)',
    keepSelector: "code, img, svg, .math, a:has(code), sup, sub, .MathJax",
  },
  "www.pnas.org/doi": {
    selector:
      ':is(li:not(ul.collateral-pill li):not(.nav-item):not(.list-inline-item), p:not(.footer__copyright p), h1, h2, h3, h4, h5, h6, dd, blockquote, [role="paragraph"], .meta-panel__subtype, figcaption)',
    keepSelector: "code, img, svg, .math, a:has(code), sup, sub, .MathJax",
  },
  "www.cell.com/*/fulltext": {
    selector:
      ':is(li:not(ul.collateral-pill li):not(ul.article-tools li):not(header li):not(.axel-related-articles__items li):not(.footer li), p:not(header p), h1, h2, h3, h4, h5, h6, dd, blockquote, [role="paragraph"], figcaption>div:not(.accordion), .figure-viewer__title)',
    keepSelector: "code, img, svg, .math, a:has(code), .MathJax",
    /* TODO: 无法保留上标或者下标，因为保留后部分段落无法翻译 */
  },
  "www.sciencedirect.com/*/article": {
    selector:
      ":is(li:not(header li):not(.accessbar li):not(figure li):not(footer li), p:not(#banner>div>p):not(footer p), h1, h2, h3, h4, h5, h6, dd, blockquote, section>div, #abstracts div, .keyword)",
    keepSelector: "code, img, svg, .math, a:has(code), sup, sub, .MathJax",
    /* TODO: 部分段落无法翻译，无论sup, sub是否保留 */
  },
  "www.cnbc.com": {
    selector: `${DEFAULT_SELECTOR}, .LatestNews-headline, .PackageItem-link, .FeaturedCard-packagedCardTitle>a, .SecondaryCard-headline>a, .RiverHeadline-headline>a, .Card-title, .TrendingNowItem-title, .InlineImage-imageEmbedCaption, .MostPopular-styles-makeit-linkWrap--G5cKW>a, a>.video-title, .MarketsBanner-teaser>a`,
  },
  "supermemo.guru": {
    selector: `${DEFAULT_SELECTOR}, .bs-callout`,
    fixerSelector: "td, .bs-callout-supermemo",
    fixerFunc: FIXER_BR,
  },
  "www.twitch.tv": {
    selector: `${DEFAULT_SELECTOR}, [data-a-target='chat-line-message-body']`,
    keepSelector: ".mention-fragment",
  },
  "www.linuxquestions.org": {
    selector: `${DEFAULT_SELECTOR}, .navbar_notice, [id^="post_message_"]`,
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
  "kiss-rules": rules,
  "kiss-rules-on": onRules,
  "kiss-rules-off": offRules,
};
