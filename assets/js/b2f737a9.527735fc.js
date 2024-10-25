"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["42022"],{83738:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"i18n/git","title":"i18n - Using git","description":"A possible translation strategy is to version control the translation files with Git (or any other VCS).","source":"@site/docs/i18n/i18n-git.mdx","sourceDirName":"i18n","slug":"/i18n/git","permalink":"/docs/i18n/git","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-git.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1729789882000,"frontMatter":{"id":"git","slug":"/i18n/git"},"sidebar":"docs","previous":{"title":"Tutorial","permalink":"/docs/i18n/tutorial"},"next":{"title":"Using Crowdin","permalink":"/docs/i18n/crowdin"}}'),s=t("24246"),a=t("80980"),i=t("15398"),l=t("58636");let o={id:"git",slug:"/i18n/git"},c="i18n - Using git",d={},u=[{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",level:3},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",level:3},{value:"Translate the files",id:"translate-the-files",level:3},{value:"Repeat",id:"repeat",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Markdown translations",id:"markdown-translations",level:3},{value:"JSON translations",id:"json-translations",level:3},{value:"Localize edit URLs",id:"localize-edit-urls",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"i18n---using-git",children:"i18n - Using git"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"possible translation strategy"})," is to ",(0,s.jsx)(n.strong,{children:"version control the translation files"})," with Git (or any other ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Version_control",children:"VCS"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,s.jsx)(n.p,{children:"This strategy has advantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Easy to get started"}),": just commit the ",(0,s.jsx)(n.code,{children:"i18n"})," folder to Git"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Easy for developers"}),": Git, GitHub and pull requests are mainstream developer tools"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Free"})," (or without any additional cost, assuming you already use Git)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Low friction"}),": does not require signing up to an external tool"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Rewarding"}),": contributors are happy to have a nice contribution history"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Using Git also present some shortcomings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hard for non-developers"}),": they do not master Git and pull-requests"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hard for professional translators"}),": they are used to SaaS translation software and advanced features"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hard to maintain"}),": you have to keep the translated files ",(0,s.jsx)(n.strong,{children:"in sync"})," with the untranslated files"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Some ",(0,s.jsx)(n.strong,{children:"large-scale technical projects"})," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."]}),(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3317",children:"Docusaurus i18n RFC"})," for our notes and links studying these systems."]})]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsxs)(n.p,{children:["This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,s.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"i18n tutorial"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"prepare-the-docusaurus-site",children:"Prepare the Docusaurus site"}),"\n",(0,s.jsx)(n.p,{children:"Initialize a new Docusaurus site:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest website classic\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add the site configuration for the French language:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Translate the homepage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"initialize-the-i18n-folder",children:["Initialize the ",(0,s.jsx)(n.code,{children:"i18n"})," folder"]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command to initialize the JSON translation files for the French locale:"]}),"\n",(0,s.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"--messagePrefix '(fr) '"})," option to make the untranslated strings stand out."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Hello"})," will appear as ",(0,s.jsx)(n.code,{children:"(fr) Hello"})," and makes it clear a translation is missing."]})]}),"\n",(0,s.jsx)(n.p,{children:"Copy your untranslated Markdown files to the French folder:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add all these files to Git."}),"\n",(0,s.jsx)(n.h3,{id:"translate-the-files",children:"Translate the files"}),"\n",(0,s.jsxs)(n.p,{children:["Translate the Markdown and JSON files in ",(0,s.jsx)(n.code,{children:"i18n/fr"})," and commit the translation."]}),"\n",(0,s.jsx)(n.p,{children:"You should now be able to start your site in French and see the translations:"}),"\n",(0,s.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn run start --locale fr\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run start --locale fr\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"You can also build the site locally or on your CI:"}),"\n",(0,s.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n# or\nnpm run build -- --locale fr\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build\n# or\nyarn build --locale fr\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n# or\npnpm run build --locale fr\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"repeat",children:"Repeat"}),"\n",(0,s.jsx)(n.p,{children:"Follow the same process for each locale you need to support."}),"\n",(0,s.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,s.jsxs)(n.p,{children:["Keeping translated files ",(0,s.jsx)(n.strong,{children:"consistent"})," with the originals ",(0,s.jsx)(n.strong,{children:"can be challenging"}),", in particular for Markdown documents."]}),"\n",(0,s.jsx)(n.h3,{id:"markdown-translations",children:"Markdown translations"}),"\n",(0,s.jsxs)(n.p,{children:["When an untranslated Markdown document is edited, it is ",(0,s.jsx)(n.strong,{children:"your responsibility to maintain the respective translated files"}),", and we unfortunately don't have a good way to help you do so."]}),"\n",(0,s.jsxs)(n.p,{children:["To keep your translated sites consistent, when the ",(0,s.jsx)(n.code,{children:"website/docs/doc1.md"})," doc is edited, you need ",(0,s.jsx)(n.strong,{children:"backport these edits"})," to ",(0,s.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"json-translations",children:"JSON translations"}),"\n",(0,s.jsxs)(n.p,{children:["To help you maintain the JSON translation files, it is possible to run again the ",(0,s.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command:"]}),"\n",(0,s.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"New translations will be appended, and existing ones will not be overridden."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Reset your translations with the ",(0,s.jsx)(n.code,{children:"--override"})," option."]})}),"\n",(0,s.jsx)(n.h3,{id:"localize-edit-urls",children:"Localize edit URLs"}),"\n",(0,s.jsxs)(n.p,{children:["When the user is browsing a page at ",(0,s.jsx)(n.code,{children:"/fr/doc1"}),", the edit button will link by default to the unlocalized doc at ",(0,s.jsx)(n.code,{children:"website/docs/doc1.md"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Your translations are on Git, and you can use the ",(0,s.jsx)(n.code,{children:"editLocalizedFiles: true"})," option of the docs and blog plugins."]}),"\n",(0,s.jsxs)(n.p,{children:["The edit button will link to the localized doc at ",(0,s.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},58636:function(e,n,t){t.d(n,{Z:()=>i});var r=t("24246");t("27378");var s=t("90496");let a="tabItem_pnkT";function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a,i),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>v});var r=t("24246"),s=t("27378"),a=t("90496"),i=t("54947"),l=t("3620"),o=t("844"),c=t("97486"),d=t("32263"),u=t("16971");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var f=t("71607");let j="tabList_Qoir",m="tabItem_AQgk";function x(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==s&&(d(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.Z)("tabs__item",m,i?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[j,m]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),i=(0,c._X)(a);return[i,(0,s.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[x,g]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[a,i]=(0,u.Nk)(r);return[a,(0,s.useCallback)(e=>{if(!!r)i.set(e)},[r,i])]}({groupId:r}),b=(()=>{let e=j??x;return p({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{b&&f(b)},[b]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),g(e)},[m,g,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",j),children:[(0,r.jsx)(x,{...n,...e}),(0,r.jsx)(g,{...n,...e})]})}function v(e){let n=(0,f.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(27378);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);