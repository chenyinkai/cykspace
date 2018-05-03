<template>
  <div class="articles">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-expand">
            <div class="comment-body markdown-body">
              <h1 id="css-js-">CSS 和 JS 实现持续的动画效果</h1>
              <p>逛论坛的时候看到一个问题,
                <code>js</code>是怎么实现持续的动画效果的? 第一时间想到的是定时器, 后来看到有同学提到了
                <code>requestAnimationFrame</code>, 由于之前没有对相关方法有所了解, 于是便去查了下, 顺便也记录了下
                <code>animation</code> 的使用.</p>
              <h2 id="animation-css-">animation(CSS)</h2>
              <h3 id="-">兼容性与属性</h3>
              <blockquote>
                <p>猛戳
                  <a href="https://caniuse.com/#search=animation">这里</a>查看兼容性</p>
              </blockquote>
              <ul>
                <li>animation-name: 动画名称</li>
                <li>animation-duration: 动画时长</li>
                <li>animation-timing-function: 动画执行方式</li>
                <li>animation-delay: 动画延迟执行时间</li>
                <li>animation-iteration-count: 动画执行次数</li>
                <li>animation-direction: 是否反向执行动画</li>
                <li>animation-fill-mode: 动画执行前后的样式</li>
              </ul>
              <h3 id="-">实例</h3>
              <p>
                <a href="https://jsfiddle.net/tbqagefk/">jsfiddle预览</a>
              </p>
              <pre><code class="lang-css"><span class="hljs-class">.box</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">200</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">200</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background-color</span>:<span class="hljs-value"> aqua</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">animation</span>:<span class="hljs-value"> test <span class="hljs-number">3</span>s linear <span class="hljs-number">2</span>s infinite</span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-at_rule">@<span class="hljs-keyword">keyframes</span> test </span>{
  <span class="hljs-tag">from</span> <span class="hljs-rules">{
  <span class="hljs-rule">}</span></span>
  <span class="hljs-tag">to</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">50</span>px</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">50</span>px</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">background-color</span>:<span class="hljs-value"> red</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">opacity</span>:<span class="hljs-value"> <span class="hljs-number">0.5</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">500</span>px</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">500</span>px</span></span>;
  <span class="hljs-rule">}</span></span>
}
</code></pre>
              <pre><code class="lang-html">&lt;<span class="hljs-keyword">div</span> <span class="hljs-type">class</span>=<span class="hljs-string">"box"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;
</code></pre>
              <h2 id="requestanimationframe-js-">requestAnimationFrame(JS)</h2>
              <h3 id="-">兼容性与基本概念</h3>
              <blockquote>
                <p>猛戳
                  <a href="https://caniuse.com/#search=requestAnimationFrame">这里</a>查看兼容性</p>
              </blockquote>
              <p>优势：</p>
              <ul>
                <li>浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果</li>
                <li>一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了CPU、GPU和电力</li>
              </ul>
              <p>使用：</p>
              <blockquote>
                <p>持续调用
                  <code>requestAnimFrame</code> 即可</p>
              </blockquote>
              <blockquote>
                <p>可以使用
                  <code>cancelAnimationFrame</code> 清除动画</p>
              </blockquote>
              <h3 id="-">举例</h3>
              <p>
                <a href="https://jsfiddle.net/aotc24bx/90/">jsfiddle预览</a>
              </p>
              <pre><code class="lang-css"><span class="hljs-id">#anim</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">0</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">150</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">150</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">line-height</span>:<span class="hljs-value"> <span class="hljs-number">150</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> aqua</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> white</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">1</span>em</span></span>;
<span class="hljs-rule">}</span></span>
</code></pre>
              <pre><code class="lang-html">&lt;<span class="hljs-keyword">div</span> <span class="hljs-property">id</span>=<span class="hljs-string">"anim"</span>&gt; Click here <span class="hljs-keyword">to</span> start animation&lt;/<span class="hljs-keyword">div</span>&gt;
</code></pre>
              <pre><code class="lang-js"><span class="hljs-comment">// 兼容性处理</span>
window.requestAnimFrame = (<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
  <span class="hljs-keyword">return</span> (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(callback, element)</span> {</span>
      window.setTimeout(callback, <span class="hljs-number">1000</span> / <span class="hljs-number">60</span>)
    }
  )
})()

<span class="hljs-keyword">var</span> elem = document.getElementById(<span class="hljs-string">'anim'</span>)
<span class="hljs-keyword">var</span> startTime = <span class="hljs-literal">undefined</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">render</span><span class="hljs-params">(time)</span> {</span>
  time = <span class="hljs-built_in">Date</span>.now()
  <span class="hljs-keyword">if</span> (startTime === <span class="hljs-literal">undefined</span>) {
    startTime = time
  }
  elem.style.left = ((time - startTime) / <span class="hljs-number">10</span>) % <span class="hljs-number">300</span> + <span class="hljs-string">'px'</span>
  elem.style.top = ((time - startTime) / <span class="hljs-number">10</span>) % <span class="hljs-number">300</span> + <span class="hljs-string">'px'</span>
  elem.style.borderRadius = ((time - startTime) / <span class="hljs-number">10</span>) % <span class="hljs-number">300</span> + <span class="hljs-string">'px'</span>
  elem.style.opacity = <span class="hljs-built_in">Math</span>.floor((time - startTime / <span class="hljs-number">100</span>)) % <span class="hljs-number">2</span> === <span class="hljs-number">0</span> ? <span class="hljs-number">1</span> : <span class="hljs-number">0.3</span>
}

elem.onclick = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
  (<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">animloop</span><span class="hljs-params">()</span> {</span>
    render()
    requestAnimFrame(animloop, elem)
  })()
}
</code></pre>
              <h2 id="-">参考</h2>
              <p>
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame">requestAnimationFrame MDN</a>
              </p>
              <p>
                <a href="http://javascript.ruanyifeng.com/htmlapi/requestanimationframe.html">requestanimationframe</a>
              </p>
              <p>
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation">animation MDN</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer-bar></footer-bar>
    <scroll-bar></scroll-bar>
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import footerBar from './common/footerBar'
import scrollBar from './common/scrollBar'
export default {
  name: 'articles',
  data() {
    return {}
  },
  mounted() {},
  components: {
    headerBar,
    footerBar,
    scrollBar
  }
}
</script>

<style lang="less" scoped>
@import '../style/md.css';
@import '../style/md2.css';

.comment-body {
  width: 100%;
  padding: 15px;
  overflow: visible;
  font-size: 14px;
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.markdown-body blockquote {
  margin-left: 0;
}
a {
  color: #0366d6;
  text-decoration: none;
}
.hljs,
.hljs-tag,
.css .hljs-rules,
.css .hljs-value,
.css .hljs-function .hljs-preprocessor,
.hljs-pragma {
  color: inherit;
}
.hljs-variable,
.hljs-params,
.hljs-class .hljs-title {
  color: inherit;
}
</style>
