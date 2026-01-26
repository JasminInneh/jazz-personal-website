import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Article.css'

const AccessibleWebAppsArticle = () => {
  const navigate = useNavigate()

  return (
    <article className="article-full">
      <div className="article-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
        <div className="article-meta-header">
          <span className="article-category-badge">Accessibility</span>
          <span className="article-date-header">December 2025</span>
          <span className="article-read-time-header">7 min read</span>
        </div>
        <h1 className="article-title-full">
          Building Accessible Web Applications
        </h1>
        <p className="article-subtitle">
          Accessibility isn't optional—it's essential. Learn practical techniques to make your web applications usable by everyone, including keyboard navigation and ARIA attributes.
        </p>
      </div>

      <div className="article-content">
        <div className="article-body">
          <p className="article-intro">
            Accessibility isn't optional—it's essential. Every user deserves the ability to interact with your web applications, regardless of ability or device. While building Story World Adventures and other projects, I've learned that accessibility isn't just a checklist—it's about designing experiences that everyone can use.
          </p>

          <p>
            In this article, I'll share practical techniques for creating accessible web applications, focusing on keyboard navigation, ARIA attributes, and other strategies that improve usability for all users.
          </p>

          <h2>1. Start With Semantic HTML</h2>
          <p>
            The foundation of accessibility is semantic HTML. Screen readers and assistive technologies rely on proper markup to understand content hierarchy and purpose.
          </p>

          <p><strong>Example:</strong></p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">HTML</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`<!-- Bad -->
<div class="button">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`<!-- Bad -->
<div class="button">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>`}</code></pre>
          </div>

          <p><strong>Why it matters:</strong></p>

          <ul className="article-list">
            <li>Using proper elements (like <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>) ensures default keyboard and screen reader behaviors.</li>
            <li>Avoids unnecessary JavaScript just to mimic functionality that HTML already provides.</li>
          </ul>

          <h2>2. Ensure Keyboard Navigation Works Everywhere</h2>
          <p>
            Many users rely on keyboards or assistive devices rather than a mouse. Test your app to make sure all interactive elements are reachable and usable via Tab, Enter, and Space keys.
          </p>

          <p><strong>Tip:</strong> Use the browser's built-in focus outline to check:</p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">CSS</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`/* Ensure focus is visible */
:focus {
  outline: 3px solid #1ABC9C;
  outline-offset: 2px;
}`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`/* Ensure focus is visible */
:focus {
  outline: 3px solid #1ABC9C;
  outline-offset: 2px;
}`}</code></pre>
          </div>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson learned</h3>
              <p>Never assume clickable elements are buttons—<code>&lt;div&gt;</code>s or <code>&lt;span&gt;</code>s without proper event handling can break keyboard navigation.</p>
            </div>
          </div>

          <h2>3. Leverage ARIA Attributes When Needed</h2>
          <p>
            ARIA (Accessible Rich Internet Applications) attributes provide extra context to assistive technologies when semantic HTML isn't enough.
          </p>

          <p><strong>Common examples:</strong></p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">HTML</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`<!-- Menu toggle button -->
<button aria-expanded="false" aria-controls="main-menu">Menu</button>

<!-- Alert message -->
<div role="alert">Your changes have been saved!</div>`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`<!-- Menu toggle button -->
<button aria-expanded="false" aria-controls="main-menu">Menu</button>

<!-- Alert message -->
<div role="alert">Your changes have been saved!</div>`}</code></pre>
          </div>

          <p><strong>Rule of thumb:</strong></p>

          <ul className="article-list">
            <li>Prefer native HTML first, then use ARIA for enhancements or dynamic UI components.</li>
            <li>Avoid redundant ARIA roles that conflict with existing elements.</li>
          </ul>

          <h2>4. Color Contrast & Visual Accessibility</h2>
          <p>
            Accessibility isn't just for screen readers—visual design matters too. Ensure sufficient contrast between text and background.
          </p>

          <ul className="article-list">
            <li>Use a contrast checker (like <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM</a>)</li>
            <li>Don't rely solely on color to convey meaning</li>
          </ul>

          <p><strong>Example:</strong></p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">CSS</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`/* Bad */
.status {
  color: green;
}

/* Good */
.status {
  color: green;
}
.status::after {
  content: "✔"; /* adds visual indicator */
}`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`/* Bad */
.status {
  color: green;
}

/* Good */
.status {
  color: green;
}
.status::after {
  content: "✔"; /* adds visual indicator */
}`}</code></pre>
          </div>

          <h2>5. Test With Real Users and Tools</h2>
          <p>
            Automated tools are great, but nothing beats manual testing with keyboard navigation and screen readers:
          </p>

          <ul className="article-list">
            <li><strong>VoiceOver</strong> (macOS / iOS)</li>
            <li><strong>NVDA</strong> (Windows)</li>
            <li><strong>ChromeVox</strong> (Chrome extension)</li>
          </ul>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson learned</h3>
              <p>Testing early and often catches issues before they affect users. Accessibility is part of the development process, not an afterthought.</p>
            </div>
          </div>

          <h2>6. Make Accessibility a Habit, Not a Task</h2>
          <p>
            Accessibility isn't a single feature—it's a mindset. From planning to design to coding:
          </p>

          <ul className="article-list">
            <li>Include accessibility in your user stories</li>
            <li>Document patterns for your team</li>
            <li>Encourage a culture of empathy for users with diverse abilities</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Building accessible web applications is both a technical and ethical responsibility. It's about removing barriers and creating inclusive experiences for everyone. By focusing on semantic HTML, keyboard navigation, ARIA attributes, and testing, you can make your apps usable, delightful, and professional.
          </p>

          <p>
            Remember: accessibility isn't optional—it's essential. And as a developer, every step you take toward inclusivity makes your products stronger.
          </p>

          <div className="visual-box">
            <div className="visual-content">
              <h3>💡 Next steps for readers:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>• Audit your current projects with a keyboard and screen reader</li>
                <li>• Implement one new accessibility improvement per week</li>
                <li>• Share your findings with your team to spread best practices</li>
              </ul>
            </div>
          </div>

          <div className="article-footer">
            <div className="article-tags">
              <span className="tag">Accessibility</span>
              <span className="tag">Web Development</span>
              <span className="tag">ARIA</span>
              <span className="tag">Semantic HTML</span>
              <span className="tag">User Experience</span>
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

export default AccessibleWebAppsArticle
