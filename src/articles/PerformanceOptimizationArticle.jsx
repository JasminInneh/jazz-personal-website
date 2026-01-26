import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Article.css'

const PerformanceOptimizationArticle = () => {
  const navigate = useNavigate()

  return (
    <article className="article-full">
      <div className="article-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
        <div className="article-meta-header">
          <span className="article-category-badge">JavaScript</span>
          <span className="article-date-header">October 2025</span>
          <span className="article-read-time-header">8 min read</span>
        </div>
        <h1 className="article-title-full">
          Optimizing Performance in Modern JavaScript
        </h1>
        <p className="article-subtitle">
          Performance matters. Dive into techniques for optimizing JavaScript applications, including code splitting, lazy loading, and efficient state management.
        </p>
      </div>

      <div className="article-content">
        <div className="article-body">
          <p className="article-intro">
            Performance is a critical part of building high-quality web applications. Users expect fast, responsive experiences, and even small delays can impact engagement and satisfaction. Optimizing JavaScript is essential, especially as applications grow in complexity and interactivity.
          </p>

          <p>
            In this article, we will explore practical techniques to improve performance in modern JavaScript applications, including code splitting, lazy loading, and efficient state management.
          </p>

          <h2>1. Code Splitting for Faster Load Times</h2>
          <p>
            Large JavaScript bundles can slow down your application, especially for first-time visitors. Code splitting allows you to break your code into smaller chunks that load only when needed.
          </p>

          <p><strong>Example with Webpack:</strong></p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`import(/* webpackChunkName: "charts" */ './charts.js')
  .then(module => {
    module.renderCharts();
  });`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`import(/* webpackChunkName: "charts" */ './charts.js')
  .then(module => {
    module.renderCharts();
  });`}</code></pre>
          </div>

          <p><strong>Why it matters:</strong></p>

          <ul className="article-list">
            <li>Reduces initial load time</li>
            <li>Improves perceived performance</li>
            <li>Helps users interact with the application faster</li>
          </ul>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Tip</h3>
              <p>Use dynamic <code>import()</code> and libraries that support tree-shaking to remove unused code.</p>
            </div>
          </div>

          <h2>2. Lazy Loading Components and Assets</h2>
          <p>
            Lazy loading is another technique to improve performance by deferring the loading of resources until they are needed. This is particularly useful for images, components, and third-party libraries.
          </p>

          <p><strong>Example in React:</strong></p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`}</code></pre>
          </div>

          <p>
            <strong>Benefit:</strong> Reduces the amount of JavaScript and resources loaded upfront, improving page speed and user experience.
          </p>

          <h2>3. Efficient State Management</h2>
          <p>
            State management can affect performance if not handled carefully. Large or deeply nested state objects can cause unnecessary re-renders and slow down your application.
          </p>

          <p><strong>Tips for optimizing state:</strong></p>

          <ul className="article-list">
            <li>Use local state for UI-specific data</li>
            <li>Memoize components with <code>React.memo</code> or <code>useMemo</code></li>
            <li>Consider libraries like Zustand or Redux Toolkit for predictable, performant state handling</li>
          </ul>

          <p><strong>Example:</strong></p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`const expensiveCalculation = useMemo(() => computeHeavyTask(data), [data]);`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`const expensiveCalculation = useMemo(() => computeHeavyTask(data), [data]);`}</code></pre>
          </div>

          <h2>4. Minimize Repaints and Reflows</h2>
          <p>
            Browser rendering performance matters. Avoid excessive DOM manipulations and batch updates when possible.
          </p>

          <p><strong>Tips:</strong></p>

          <ul className="article-list">
            <li>Manipulate DOM elements outside of loops when possible</li>
            <li>Use <code>requestAnimationFrame</code> for animations</li>
            <li>Avoid changing layout styles repeatedly</li>
          </ul>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Insight</h3>
              <p>Small adjustments can have a big impact on perceived performance, especially on mobile devices.</p>
            </div>
          </div>

          <h2>5. Optimize Network Requests</h2>
          <p>
            Even with optimized JavaScript, slow network requests can hinder performance. Techniques include:
          </p>

          <ul className="article-list">
            <li>Debounce or throttle API calls</li>
            <li>Use caching strategies and service workers</li>
            <li>Compress and minify assets</li>
          </ul>

          <p>
            <strong>Example:</strong> Use IntersectionObserver to lazy-load images only when they enter the viewport.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));`}</code></pre>
          </div>

          <h2>6. Continuous Performance Monitoring</h2>
          <p>
            Performance is not a one-time fix. Use monitoring tools to measure and track improvements:
          </p>

          <ul className="article-list">
            <li>Chrome DevTools and Lighthouse</li>
            <li>Web Vitals metrics</li>
            <li>Real user monitoring with analytics</li>
          </ul>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson</h3>
              <p>Regularly measure performance metrics and iterate for continuous improvement.</p>
            </div>
          </div>

          <h2>Conclusion</h2>
          <p>
            Optimizing performance in modern JavaScript requires a combination of techniques: code splitting, lazy loading, efficient state management, and careful network and DOM handling. By incorporating these strategies, you can build applications that feel faster, more responsive, and more enjoyable for your users.
          </p>

          <p>
            Performance matters, and small improvements can lead to big gains in usability, engagement, and satisfaction.
          </p>

          <div className="visual-box">
            <div className="visual-content">
              <h3>💡 Next Steps:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>• Audit your application with Lighthouse to identify bottlenecks</li>
                <li>• Implement dynamic imports and lazy-loaded components</li>
                <li>• Review state management patterns to reduce unnecessary re-renders</li>
                <li>• Monitor performance regularly and iterate</li>
              </ul>
            </div>
          </div>

          <div className="article-footer">
            <div className="article-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Performance</span>
              <span className="tag">Code Splitting</span>
              <span className="tag">Lazy Loading</span>
              <span className="tag">State Management</span>
              <span className="tag">Web Optimization</span>
            </div>
            <div className="article-share">
              <p>Share this article:</p>
              <div className="share-buttons">
                <button className="share-btn">Twitter</button>
                <button className="share-btn">LinkedIn</button>
                <button className="share-btn">Copy Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PerformanceOptimizationArticle
