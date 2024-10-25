"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["20717"],{97640:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/social-card-105335e6b4ebb3f62aa9b04e33a76dea.png"},92679:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/social-card-105335e6b4ebb3f62aa9b04e33a76dea.png"},51179:function(e,s,n){n.r(s),n.d(s,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return t},toc:function(){return d}});var t=n(65098),a=n(24246),r=n(80980);n(14522);var i=n(51118);let o={title:"Docusaurus 3.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-05-03T00:00:00.000Z")},l=void 0,c={image:n(97640).Z,authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"Prepare for React 19",id:"prepare-for-react-19",level:3},{value:"<code>createSitemapItems</code>",id:"createsitemapitems",level:3},{value:"Pages plugin improvements",id:"pages-plugin-improvements",level:3},{value:"Other changes",id:"other-changes",level:2}];function u(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["We are happy to announce ",(0,a.jsx)(s.strong,{children:"Docusaurus 3.3"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Upgrading should be easy. Our ",(0,a.jsx)(s.a,{href:"/community/release-process",children:"release process"})," respects ",(0,a.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". Minor versions do not include any breaking changes."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Docusaurus blog post social card",src:n(92679).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,a.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,a.jsx)(s.h3,{id:"prepare-for-react-19",children:"Prepare for React 19"}),"\n",(0,a.jsxs)(s.p,{children:["The React core team recently ",(0,a.jsxs)(s.a,{href:"https://react.dev/blog/2024/04/25/react-19",children:["released the first ",(0,a.jsx)(s.strong,{children:"React 19 beta"})]}),". They also ",(0,a.jsxs)(s.a,{href:"https://react.dev/blog/2024/04/25/react-19-upgrade-guide",children:["published an upgrade guide and a ",(0,a.jsx)(s.strong,{children:"React v18.3 release"})]})," with new warnings to help us identify issues ",(0,a.jsx)(s.strong,{children:"before upgrading to React 19"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus v3 depends on React ",(0,a.jsx)(s.code,{children:"18.x"}),". When initializing a new Docusaurus sites, it will use that new React ",(0,a.jsx)(s.code,{children:"18.3"})," release. It's also the case if you decide to upgrade your dependencies, or re-generate your package manager lockfile."]}),"\n",(0,a.jsxs)(s.p,{children:["It turns out in its current state, ",(0,a.jsx)(s.strong,{children:"Docusaurus had a few of those extra warnings to fix"}),", notably this one immediately appearing on your dev console on any page load and navigation:"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Warning: LoadableComponent uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["In ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10079",children:"#10079"}),", we got Docusaurus ready for React 19. We fixed all the React 18.3 warnings we encountered. In case we missed any, don't hesitate to ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/10099",children:(0,a.jsx)(s.strong,{children:"report new warnings"})})," if you see them, to us but also to other Docusaurus third-party plugin authors."]}),"\n",(0,a.jsx)(s.h3,{id:"createsitemapitems",children:(0,a.jsx)(s.code,{children:"createSitemapItems"})}),"\n",(0,a.jsxs)(s.p,{children:["In ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10083",children:"#10083"}),", we introduced a new flexible ",(0,a.jsx)(s.code,{children:"createSitemapItems()"})," hook to the sitemap plugin. This enables users to create/filter/transform/enhance the sitemap items with their own custom logic."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        sitemap: {\n          // highlight-start\n          createSitemapItems: async ({\n            defaultCreateSitemapItems,\n            ...params\n          }) => {\n            const items = await defaultCreateSitemapItems(params);\n            return items.filter((item) => !item.url.includes('/tags/'));\n          },\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(s.h3,{id:"pages-plugin-improvements",children:"Pages plugin improvements"}),"\n",(0,a.jsxs)(s.p,{children:["The Docusaurus ",(0,a.jsx)(s.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-pages",children:"pages plugin"})," has historically been lagging behind the docs and blog plugins in terms of available feature."]}),"\n",(0,a.jsxs)(s.p,{children:["In ",(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10032",children:"#10032"})," we normalized the options available on each core content plugins by adding a few the missing page plugins APIs related to the edit url and the last update metadata displayed at the bottom on Markdown pages."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        pages: {\n          // highlight-start\n          editUrl:\n            'https://github.com/facebook/docusaurus/tree/main/website/src/pages',\n          editLocalizedFiles: true,\n          showLastUpdateAuthor: true,\n          showLastUpdateTime: true,\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(i.Z,{url:"/examples/markdownPageExample"}),"\n",(0,a.jsx)(s.admonition,{title:"Only for Markdown pages",type:"note",children:(0,a.jsx)(s.p,{children:"These new plugin options only apply to Markdown pages, and have no effect on React pages for which you have full control over the layout with JSX."})}),"\n",(0,a.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10064",children:"#10064"}),": new site config option ",(0,a.jsx)(s.code,{children:"siteConfig.markdown.anchors.maintainCase"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9767",children:"#9767"}),": new ",(0,a.jsx)(s.code,{children:"docusaurus deploy --target-dir"})," option"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10042",children:"#10042"}),": new (experimental) plugin API: ",(0,a.jsx)(s.code,{children:"route.props"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10060",children:"#10060"}),": optimizes the App entrypoint, avoid useless re-renders on navigations"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10080",children:"#10080"}),": ",(0,a.jsx)(s.code,{children:"<Admonition>"})," component can render properly without heading/icon"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10091",children:"#10091"}),": ",(0,a.jsx)(s.code,{children:"<Tabs>"})," props can now override defaults"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10090",children:"#10090"}),": ",(0,a.jsx)(s.code,{children:"docusaurus serve"})," works better with a ",(0,a.jsx)(s.code,{children:"/baseUrl/"})," pathname prefix"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10070",children:"#10070"}),": add missing theme translations for ",(0,a.jsx)(s.code,{children:"pt-BR"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10025",children:"#10025"}),": doc sidebar item label now impacts the doc pagination label"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Check the ",(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"/changelog/3.3.0",children:"3.3.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},51118:function(e,s,n){n.d(s,{Z:function(){return r}});var t=n(24246);n(27378);var a=n(14522);function r(e){let{url:s}=e;return(0,t.jsx)("div",{style:{padding:10},children:(0,t.jsx)(a.Z,{url:s,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,t.jsx)("iframe",{src:s,title:s,style:{display:"block",width:"100%",height:300}})})})}},14522:function(e,s,n){n.d(s,{Z:()=>p});var t=n("24246");n("27378");var a=n("90496");let r="browserWindow_my1Q",i="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",c="dot_giz1",d="browserWindowMenuIcon_Vhuh",u="bar_rrRL",h="browserWindowBody_Idgs";function p(e){let{children:s,minHeight:n,url:p="http://localhost:3000",style:g,bodyStyle:m}=e;return(0,t.jsxs)("div",{className:r,style:{...g,minHeight:n},children:[(0,t.jsxs)("div",{className:i,children:[(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)("span",{className:c,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:c,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:c,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,a.Z)(l,"text--truncate"),children:p}),(0,t.jsx)("div",{className:d,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:u}),(0,t.jsx)("span",{className:u}),(0,t.jsx)("span",{className:u})]})})]}),(0,t.jsx)("div",{className:h,style:m,children:s})]})}},80980:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var t=n(27378);let a={},r=t.createContext(a);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}},65098:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/3.3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.3/index.mdx","source":"@site/blog/releases/3.3/index.mdx","title":"Docusaurus 3.3","description":"We are happy to announce Docusaurus 3.3.","date":"2024-05-03T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":2.56,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.3","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2024-05-03T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1729789882000,"lastUpdatedBy":"S\xe9bastien Lorber","prevItem":{"title":"Docusaurus 3.4","permalink":"/blog/releases/3.4"},"nextItem":{"title":"Docusaurus 3.2","permalink":"/blog/releases/3.2"}}')}}]);