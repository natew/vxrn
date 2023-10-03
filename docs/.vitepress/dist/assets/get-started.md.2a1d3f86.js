import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.44af8271.js";const h=JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[],"relativePath":"get-started.md","filePath":"get-started.md"}'),l={name:"get-started.md"},o=p(`<h1 id="get-started" tabindex="-1">Get Started <a class="header-anchor" href="#get-started" aria-label="Permalink to &quot;Get Started&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please note, Vern is in early alpha. We need contributions!</p></div><p>Vern is a package that lets you serve your React Native apps using Vite. This is pretty cool as Vite typically doesn&#39;t seem like it would &quot;play well&quot; with React Native - React Native only supports CommonJS, even for hot reloading, whereas Vite is all-in on ESModules.</p><p>Luckily, with some effort, we&#39;ve put together a variety of plugins and configuration for Vite that make this work. We run a full <code>build</code> of your app on first request using Vite&#39;s internal Rollup, and make some modifications to the CJS it exports so that its well-suited for hot reloading as React Native expects.</p><p>Today it runs many simple apps well. We&#39;d like to get the community involved to make Vern viable for any scale of React Native app.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>For now Vern only works programatically as it must set up not only Vite but also Fastify, mostly because it re-uses great work by <a href="https://www.callstack.com/open-source/re-pack" target="_blank" rel="noreferrer">Repack</a> in order to provide the websocket for communicating with React Native.</p><p>Install:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@vite-react-native/vite-react-native</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-dom</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-native</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vite-react-native/vite-react-native</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-dom</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-native</span></span></code></pre></div><p>Create a file called <code>dev.js</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { create } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vite-react-native/vite-react-native&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dev</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dev</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">viteServer</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">start</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">stop</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      plugins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    buildConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      plugins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">closePromise</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  viteServer.</span><span style="color:#B392F0;">printUrls</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeExit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGINT&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;uncaughtException&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err?.message </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> closePromise</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { create } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vite-react-native/vite-react-native&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dev</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dev</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">viteServer</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">start</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">stop</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    root: process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    host: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    webConfig: {</span></span>
<span class="line"><span style="color:#24292E;">      plugins: [],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    buildConfig: {</span></span>
<span class="line"><span style="color:#24292E;">      plugins: [],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">closePromise</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  viteServer.</span><span style="color:#6F42C1;">printUrls</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;beforeExit&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">stop</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;SIGINT&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">stop</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;uncaughtException&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err?.message </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> err)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> closePromise</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Create a minimal app by creating an <code>index.jsx</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AppRegistry, View } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;react-native&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">AppRegistry.</span><span style="color:#B392F0;">registerComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">View</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ width: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, height: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, backgroundColor: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;"> }} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AppRegistry, View } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;react-native&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">AppRegistry.</span><span style="color:#6F42C1;">registerComponent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;main&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">View</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{ width: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, height: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, backgroundColor: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;"> }} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>And your web entry at <code>index.web.jsx</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRoot } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;react-dom/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">View</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ width: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, height: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, backgroundColor: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;"> }} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createRoot</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#root&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createRoot } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;react-dom/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">View</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{ width: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, height: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, backgroundColor: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;"> }} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">createRoot</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#root&#39;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(&lt;</span><span style="color:#005CC5;">App</span><span style="color:#24292E;"> /&gt;)</span></span></code></pre></div><p>And then run it:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">node</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev.js</span></span></code></pre></div><p>This will start a server on <code>8081</code> and on <code>1421</code>, your native and web servers respectively.</p><p>You&#39;ll need a React Native app to connect to the native app, and you should be able to hit <a href="http://localhost:1421" target="_blank" rel="noreferrer">http://localhost:1421</a> right away in your browser.</p><p>If that worked, well, you&#39;re lucky!</p><p>We&#39;ve got <a href="https://github.com/nate/vite-react-native" target="_blank" rel="noreferrer">a couple examples in the repo</a> that probably are easier to get started with.</p>`,21),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};
