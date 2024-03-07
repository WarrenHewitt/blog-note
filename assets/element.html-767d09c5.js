import{_ as e,M as o,p as c,q as l,Q as i,R as n,N as a,V as t,t as p,a1 as u}from"./framework-7e1a102e.js";const r={},k={class:"table-of-contents"},d=u(`<p>[toc]</p><h1 id="html元素相关" tabindex="-1"><a class="header-anchor" href="#html元素相关" aria-hidden="true">#</a> html元素相关</h1><h2 id="批量动态插入元素" tabindex="-1"><a class="header-anchor" href="#批量动态插入元素" aria-hidden="true">#</a> 批量动态插入元素</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">loopInsert</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> attribute<span class="token punctuation">.</span>length<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s<span class="token punctuation">[</span>attribute<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> attribute<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> attribute <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/a/css/b.css</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;rel&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">stylesheet</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">loopInsert</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> <span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滑动到页面指定位置" tabindex="-1"><a class="header-anchor" href="#滑动到页面指定位置" aria-hidden="true">#</a> 滑动到页面指定位置</h2><h3 id="返回顶部按钮" tabindex="-1"><a class="header-anchor" href="#返回顶部按钮" aria-hidden="true">#</a> 返回顶部按钮</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> divEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> style <span class="token operator">=</span> <span class="token string">&#39;cursor:pointer;position:fixed;width:60px;height:60px;background:rgba(210,210,210,.5);bottom:30%;right:10%;text-align:center;line-height:60px;color:#fff;border-radius:50%&#39;</span><span class="token punctuation">;</span>
    divEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">;</span>

    divEle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;Top&#39;</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>divEle<span class="token punctuation">)</span>

    divEle<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滑动到页面底部" tabindex="-1"><a class="header-anchor" href="#滑动到页面底部" aria-hidden="true">#</a> 滑动到页面底部</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scrollToPageBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>
    <span class="token keyword">var</span> c <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
    <span class="token keyword">var</span> px <span class="token operator">=</span> s<span class="token operator">-</span>c<span class="token punctuation">;</span> <span class="token comment">// 表示滑到底部</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>scrollTo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> px<span class="token punctuation">,</span>
            <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任意元素滑动到页面顶部" tabindex="-1"><a class="header-anchor" href="#任意元素滑动到页面顶部" aria-hidden="true">#</a> 任意元素滑动到页面顶部</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">backToTop</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> v <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top<span class="token operator">+</span>window<span class="token punctuation">.</span>pageYOffset
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">msie</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> v<span class="token punctuation">,</span>
            <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取本地文件" tabindex="-1"><a class="header-anchor" href="#获取本地文件" aria-hidden="true">#</a> 获取本地文件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 获取本地文件 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getFileFromLocal <span class="token operator">=</span> <span class="token punctuation">(</span>callback<span class="token punctuation">,</span> inputId <span class="token operator">=</span> <span class="token string">&#39;cusSelectPhoto&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> inputElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>inputId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>inputElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 这里删除的原因是为了防止同一个页面有多个该功能，导致所有的input都挂载同一个回调方法 */</span>
        inputElement<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>inputElement<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    inputElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>
    inputElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> inputId<span class="token punctuation">)</span>
    inputElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span>
    inputElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;display:none&#39;</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>inputElement<span class="token punctuation">)</span>
    inputElement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    inputElement<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function v(m,b){const s=o("router-link");return c(),l("div",null,[i(`
 * @LastEditTime: 2022-10-18 16:53:55
`),n("nav",k,[n("ul",null,[n("li",null,[a(s,{to:"#批量动态插入元素"},{default:t(()=>[p("批量动态插入元素")]),_:1})]),n("li",null,[a(s,{to:"#滑动到页面指定位置"},{default:t(()=>[p("滑动到页面指定位置")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#返回顶部按钮"},{default:t(()=>[p("返回顶部按钮")]),_:1})]),n("li",null,[a(s,{to:"#滑动到页面底部"},{default:t(()=>[p("滑动到页面底部")]),_:1})]),n("li",null,[a(s,{to:"#任意元素滑动到页面顶部"},{default:t(()=>[p("任意元素滑动到页面顶部")]),_:1})])])]),n("li",null,[a(s,{to:"#获取本地文件"},{default:t(()=>[p("获取本地文件")]),_:1})])])]),d])}const h=e(r,[["render",v],["__file","element.html.vue"]]);export{h as default};