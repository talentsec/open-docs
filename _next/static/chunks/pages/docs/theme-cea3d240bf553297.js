(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[994],{4358:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/theme",function(){return n(3291)}])},8177:function(s,e,n){"use strict";var r=n(5893),l=n(7294);e.Z={logo:(0,r.jsx)("span",{children:"Talentsec 公开文档"}),project:{link:"https://github.com/shuding/nextra"},toc:{extraContent:(0,r.jsx)(l.Fragment,{})},useNextSeoProps:()=>({titleTemplate:"%s – TalenctSec"}),project:{link:"https://github.com/talentsec/open-docs"},footer:{text:(0,r.jsxs)("span",{children:["MIT ",new Date().getFullYear()," \xa9"," ",(0,r.jsx)("a",{href:"https://talentsec.cn",target:"_blank",children:"TalentSec"}),"."]})},docsRepositoryBase:"https://github.com/talentsec/open-doc/tree/main"}},3291:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h.Z}});var r,l,o,i=n(5893),t=n(3390),a=n(8177);n(5513);var c=n(5152);n(5675);var h=n(3595);let d={filePath:"pages/docs/theme.mdx",route:"/docs/theme",frontMatter:{},pageMap:[{kind:"Meta",data:{index:{title:"Nextra",type:"page",display:"hidden"},docs:{title:"文档",type:"page"},links:{title:"链接",type:"menu",items:{website:{title:"官网",href:"https://www.talentsec.cn",newWindow:!0},"asm-community":{title:"ASM指纹社区",href:"https://www.cc.cc",newWindow:!0}}}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"ASM",route:"/docs/ASM",children:[{kind:"Meta",data:{"get-started":"开始使用",usage:"使用说明"}},{kind:"MdxPage",name:"get-started",route:"/docs/ASM/get-started"},{kind:"MdxPage",name:"index",route:"/docs/ASM"},{kind:"MdxPage",name:"usage",route:"/docs/ASM/usage"}]},{kind:"Folder",name:"BAS",route:"/docs/BAS",children:[{kind:"Meta",data:{"get-started":"开始使用",usage:"使用说明"}},{kind:"MdxPage",name:"get-started",route:"/docs/BAS/get-started"},{kind:"MdxPage",name:"index",route:"/docs/BAS"},{kind:"MdxPage",name:"usage",route:"/docs/BAS/usage"}]},{kind:"Meta",data:{index:"开始","---":{type:"separator"},community:"潮汐指纹社区",ASM:"ASM",BAS:"BAS"}},{kind:"Folder",name:"community",route:"/docs/community",children:[{kind:"MdxPage",name:"1-1",route:"/docs/community/1-1"},{kind:"MdxPage",name:"1-2",route:"/docs/community/1-2"},{kind:"Meta",data:{"1-1":"1-1 指纹说明","1-2":"1-2 相关说明"}}]},{kind:"MdxPage",name:"contact",route:"/docs/contact"},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"MdxPage",name:"theme",route:"/docs/theme"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{depth:1,value:"Docs Theme"},{depth:2,value:"Quick Start from Template"},{depth:3,value:"Deploy to Vercel"},{depth:3,value:"Fork the Template"},{depth:2,value:"Start as New Project"},{depth:3,value:"Install"},{depth:3,value:"Add Next.js Config"},{depth:3,value:"Create Docs Theme Config"},{depth:3,value:"Ready to Go!"}],flexsearch:{codeblocks:!0}},x=Symbol.for("__nextra_internal__"),p=(r=globalThis)[x]||(r[x]=Object.create(null));function k(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",img:"img",a:"a",strong:"strong",code:"code",div:"div",pre:"pre",span:"span"},(0,c.a)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Docs Theme"}),"\n","\n",(0,i.jsx)(e.p,{children:"Nextra Docs Theme is a theme that includes almost everything you need to build a modern documentation website. It includes a top navigation bar, a search bar, a pages sidebar, a TOC sidebar, and other built-in components."}),"\n",(0,i.jsx)(e.p,{children:"This website itself is built with the Nextra Docs Theme."}),"\n",(0,i.jsx)(e.h2,{id:"quick-start-from-template",children:"Quick Start from Template"}),"\n",(0,i.jsx)(e.h3,{id:"deploy-to-vercel",children:"Deploy to Vercel"}),"\n",(0,i.jsx)(e.p,{children:"You can start by creating your own Nextra site and deploying to Vercel by clicking the link:"}),"\n",(0,i.jsx)("a",{className:"inline-flex mt-3",target:"_blank",href:"https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fshuding%2Fnextra-docs-template&showOptionalTeamCreation=false",children:(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://vercel.com/button",alt:""})})}),"\n",(0,i.jsxs)(e.p,{children:["Vercel will fork the ",(0,i.jsx)(e.a,{href:"https://github.com/shuding/nextra-docs-template",children:"Nextra Docs template"})," and deploy the site for you. Once done, every commit in the repository will be deployed automatically."]}),"\n",(0,i.jsx)(e.h3,{id:"fork-the-template",children:"Fork the Template"}),"\n",(0,i.jsxs)(e.p,{children:["You can also manually fork the ",(0,i.jsx)(e.a,{href:"https://github.com/shuding/nextra-docs-template",children:"template repository"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"start-as-new-project",children:"Start as New Project"}),"\n",(0,i.jsxs)("div",{className:"steps-container",children:[(0,i.jsx)(e.h3,{id:"install",children:"Install"}),(0,i.jsxs)(e.p,{children:["To create a Nextra Docs site manually, you have to install ",(0,i.jsx)(e.strong,{children:"Next.js"}),", ",(0,i.jsx)(e.strong,{children:"React"}),", ",(0,i.jsx)(e.strong,{children:"Nextra"}),", and ",(0,i.jsx)(e.strong,{children:"Nextra Docs Theme"}),". In your project directory, run the following command to install the dependencies:"]}),(0,i.jsxs)(t.mQ,{items:["pnpm","npm","yarn"],children:[(0,i.jsx)(t.OK,{children:(0,i.jsx)(e.code,{children:"bash pnpm i next react react-dom nextra nextra-theme-docs "})}),"\n",(0,i.jsx)(t.OK,{children:(0,i.jsx)(e.code,{children:"bash npm i next react react-dom nextra nextra-theme-docs "})}),"\n",(0,i.jsx)(t.OK,{children:(0,i.jsx)(e.code,{children:"bash yarn add next react react-dom nextra nextra-theme-docs "})})]}),(0,i.jsx)(t.UW,{children:(0,i.jsxs)(e.p,{children:["If you already have Next.js installed in your project, you only need to\ninstall ",(0,i.jsx)(e.code,{children:"nextra"})," and ",(0,i.jsx)(e.code,{children:"nextra-theme-docs"})," as the add-ons."]})}),(0,i.jsx)(e.h3,{id:"add-nextjs-config",children:"Add Next.js Config"}),(0,i.jsxs)(e.p,{children:["Create the following ",(0,i.jsx)(e.code,{children:"next.config.js"})," file in your project’s root directory:"]}),(0,i.jsx)(e.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(e.pre,{"data-language":"js","data-theme":"default",filename:"next.config.js",children:(0,i.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"withNextra"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nextra'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")({"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  theme"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nextra-theme-docs'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  themeConfig"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./theme.config.jsx'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"withNextra"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:" "}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// If you have other Next.js configurations, you can pass them as the parameter:"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// module.exports = withNextra({ /* other next.js config */ })"})})]})})}),(0,i.jsxs)(e.p,{children:["With the above configuration, Nextra can handle Markdown files in your Next.js project, with the specified theme. Other Nextra configurations can be found in ",(0,i.jsx)(e.a,{href:"/docs/guide",children:"Guide"}),"."]}),(0,i.jsx)(e.h3,{id:"create-docs-theme-config",children:"Create Docs Theme Config"}),(0,i.jsxs)(e.p,{children:["Lastly, create the corresponding ",(0,i.jsx)(e.code,{children:"theme.config.jsx"})," file in your project’s root directory. This will be used to configure the Nextra Docs theme:"]}),(0,i.jsx)(e.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",filename:"theme.config.jsx",children:(0,i.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  logo"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">My Nextra Documentation</"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  project"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    link"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://github.com/shuding/nextra'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})}),(0,i.jsxs)(e.p,{children:["Full theme configurations can be found ",(0,i.jsx)(e.a,{href:"/docs/docs-theme/theme-configuration",children:"here"}),"."]}),(0,i.jsx)(e.h3,{id:"ready-to-go",children:"Ready to Go!"}),(0,i.jsxs)(e.p,{children:["Now, you can create your first MDX page as ",(0,i.jsx)(e.code,{children:"pages/index.mdx"}),":"]}),(0,i.jsx)(e.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(e.pre,{"data-language":"mdx","data-theme":"default",filename:"pages/index.mdx",children:(0,i.jsxs)(e.code,{"data-language":"mdx","data-theme":"default",children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)",fontWeight:"bold"},children:"# Welcome to Nextra"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:" "}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Hello, world!"})})]})})}),(0,i.jsxs)(e.p,{children:["And run the ",(0,i.jsx)(e.code,{children:"pnpm next"})," command to start developing the project! \uD83C\uDF89"]})]}),"\n",(0,i.jsx)(e.p,{children:"Next, check out the next section to learn about organizing the documentation structure and configuring the website theme:"}),"\n",(0,i.jsx)(e.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(e.pre,{"data-language":"tsx","data-theme":"default",children:(0,i.jsxs)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Cards"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Card"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"icon"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"svg"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"xmlns"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://www.w3.org/2000/svg'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fill"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'none'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"viewBox"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'0 0 24 24'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeWidth"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1.5"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"stroke"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'currentColor'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'w-6 h-6'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      >"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"path"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeLinecap"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'round'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeLinejoin"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'round'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"d"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        />"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"svg"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"title"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Page Structure'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/docs/docs-theme/page-configuration'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Card"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"icon"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"svg"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"xmlns"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://www.w3.org/2000/svg'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fill"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'none'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"viewBox"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'0 0 24 24'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeWidth"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1.5"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"stroke"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'currentColor'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'w-6 h-6'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      >"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"path"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeLinecap"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'round'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeLinejoin"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'round'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"d"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        />"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"svg"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"title"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Theme Configuration'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/docs/docs-theme/theme-configuration'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Card"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"icon"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"svg"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"xmlns"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://www.w3.org/2000/svg'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fill"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'none'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"viewBox"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'0 0 24 24'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeWidth"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1.5"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"stroke"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'currentColor'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'w-6 h-6'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      >"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"path"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeLinecap"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'round'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strokeLinejoin"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'round'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"d"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        />"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"svg"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"title"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Built-in Components'"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/docs/docs-theme/built-ins'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Cards"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})})})]})}p.pageMap=d.pageMap,p.route=d.route,(l=p).context||(l.context=Object.create(null)),(o=p).refreshListeners||(o.refreshListeners=Object.create(null)),p.Layout=t.ZP;let j="Docs Theme";d.title="string"==typeof j&&j||"Docs Theme",p.context["/docs/theme"]={Content:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.a)(),s.components);return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(k,{...s})}):k(s)},pageOpts:d,themeConfig:a.Z}}},function(s){s.O(0,[774,289,888,179],function(){return s(s.s=4358)}),_N_E=s.O()}]);