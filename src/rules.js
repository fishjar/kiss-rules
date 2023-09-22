const GLOBAL_KEY = "*";
const defaultRule = {
  pattern: "",
  selector: "",
  translator: GLOBAL_KEY,
  fromLang: GLOBAL_KEY,
  toLang: GLOBAL_KEY,
  textStyle: GLOBAL_KEY,
  transOpen: GLOBAL_KEY,
  bgColor: "",
  textDiyStyle: "",
};

const defaultSelector = `:is(li, p, h1, h2, h3, h4, h5, h6, dd, blockquote)`;
const rulesMap = {
  "www.google.com/search": `h3, .IsZvec, .VwiC3b`,
  "news.google.com": `[role="link"], .DY5T1d, .ifw3f`,
  "www.foxnews.com": `h1, h2, .title, .sidebar [data-type="Title"], .article-content ${defaultSelector}; [data-spotim-module="conversation"]>div >>> [data-spot-im-class="message-text"] p,  [data-spot-im-class="message-text"]`,
  "bearblog.dev, www.theverge.com, www.tampermonkey.net/documentation.php": `${defaultSelector}`,
  "themessenger.com": `.leading-tight, .leading-tighter, .my-2 p, .font-body p, article ${defaultSelector}`,
  "www.telegraph.co.uk": `article ${defaultSelector}`,
  "www.theguardian.com": `.show-underline, .dcr-hup5wm div, .dcr-7vl6y8 div, .dcr-12evv1c, figcaption, article ${defaultSelector}, [data-cy="mostviewed-footer"] h4`,
  "www.semafor.com": `${defaultSelector}, .styles_intro__IYj__, [class*="styles_description"]`,
  "www.noemamag.com": `.splash__title, .single-card__title, .single-card__type, .single-card__topic, .highlighted-content__title, .single-card__author, article ${defaultSelector}, .quote__text, .wp-caption-text div`,
  "restofworld.org": `${defaultSelector}, .recirc-story__headline, .recirc-story__dek`,
  "www.axios.com": `.h7, ${defaultSelector}`,
  "www.newyorker.com": `.summary-item__hed, .summary-item__dek, .summary-collection-grid__dek, .dqtvfu, .rubric__link, .caption, article ${defaultSelector}, .HEhan ${defaultSelector}, .ContributorBioBio-fBolsO`,
  "time.com": `h1, h3, .summary, .video-title, #article-body ${defaultSelector}, .image-wrap-container .credit.body-caption, .media-heading`,
  "www.dw.com": `.ts-teaser-title a, .news-title a, .title a, .teaser-description a, .hbudab h3, .hbudab p, figcaption ,article ${defaultSelector}`,
  "www.bbc.com": `h1, h2, .media__link, .media__summary, article ${defaultSelector}, .ssrcss-y7krbn-Stack, .ssrcss-17zglt8-PromoHeadline, .ssrcss-18cjaf3-Headline, .gs-c-promo-heading__title, .gs-c-promo-summary, .media__content h3, .article__intro`,
  "www.chinadaily.com.cn": `h1, .tMain [shape="rect"], .cMain [shape="rect"], .photo_art [shape="rect"], .mai_r [shape="rect"], .lisBox li, #Content ${defaultSelector}`,
  "www.facebook.com": `[role="main"] [dir="auto"]`,
  "www.reddit.com": `[slot="title"], [slot="text-body"] ${defaultSelector}, #-post-rtjson-content p`,
  "www.quora.com": `.qu-wordBreak--break-word`,
  "edition.cnn.com": `.container__title, .container__headline, .headline__text, .image__caption, [data-type="Title"], .article__content ${defaultSelector}`,
  "www.reuters.com": `#main-content [data-testid="Heading"], #main-content [data-testid="Body"], .article-body__content__17Yit ${defaultSelector}`,
  "www.bloomberg.com": `[data-component="headline"], [data-component="related-item-headline"], [data-component="title"], article ${defaultSelector}`,
  "deno.land, docs.github.com": `main ${defaultSelector}`,
  "doc.rust-lang.org": `#content ${defaultSelector}`,
  "www.indiehackers.com": `h1, h3, .content ${defaultSelector}, .feed-item__title-link`,
  "platform.openai.com/docs": `.docs-body ${defaultSelector}`,
  "en.wikipedia.org": `h1, .mw-parser-output ${defaultSelector}`,
  "stackoverflow.com": `h1, .s-prose p, .comment-body .comment-copy`,
  "www.npmjs.com/package, developer.chrome.com/docs, medium.com, developers.cloudflare.com, react.dev, create-react-app.dev, pytorch.org": `article ${defaultSelector}`,
  "news.ycombinator.com": `.title, .commtext`,
  "github.com": `.markdown-body ${defaultSelector}, .repo-description p, .Layout-sidebar .f4, .container-lg .py-4 .f5, .container-lg .my-4 .f5, .Box-row .pr-4, .Box-row article .mt-1, [itemprop="description"], .markdown-title, bdi`,
  "twitter.com": `[data-testid="tweetText"]`,
  "m.youtube.com": `.slim-video-information-title .yt-core-attributed-string, .media-item-headline .yt-core-attributed-string, .comment-text .yt-core-attributed-string, .typography-body-2b .yt-core-attributed-string, #ytp-caption-window-container .ytp-caption-segment`,
  "www.youtube.com": `h1, #video-title, #content-text, #title, yt-attributed-string>span>span, #ytp-caption-window-container .ytp-caption-segment`,
  "bard.google.com": `.query-content ${defaultSelector}, message-content ${defaultSelector}`,
  "www.bing.com": `.b_algoSlug, .rwrl_padref; .cib-serp-main >>> .ac-textBlock ${defaultSelector}, .text-message-content div`,
};

const globalRules = Object.entries(rulesMap)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([pattern, selector]) => ({
    ...defaultRule,
    pattern,
    selector,
  }));
const onRules = globalRules.map((rule) => ({ ...rule, transOpen: "true" }));
const offRules = globalRules.map((rule) => ({ ...rule, transOpen: "false" }));

export default {
  "kiss-rules": globalRules,
  "kiss-rules-on": onRules,
  "kiss-rules-off": offRules,
};
