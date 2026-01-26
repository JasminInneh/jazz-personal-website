import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Article.css'

const OpenLibraryAPIArticle = () => {
  const navigate = useNavigate()

  return (
    <article className="article-full">
      <div className="article-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
        <div className="article-meta-header">
          <span className="article-category-badge">DevRel</span>
          <span className="article-date-header">January 2026</span>
          <span className="article-read-time-header">6 min read</span>
        </div>
        <h1 className="article-title-full">
          What I Learned Building on the Open Library API
        </h1>
        <p className="article-subtitle">
          Integrating the Open Library API for Story World Adventures taught me invaluable lessons about working with real-world data. From handling missing fields and pagination quirks to designing experiences for non-technical users, I share practical tips and insights for developers building on public APIs.
        </p>
      </div>

      <div className="article-content">
        <div className="article-body">
          <p className="article-intro">
            When I first set out to build Story World Adventures, a platform designed to help children explore books in an engaging way, I knew I needed a rich, accessible source of book data. Enter the Open Library API,a free, public API maintained by the Internet Archive that promises access to millions of books, authors, and editions.
          </p>

          <p>
            What I quickly learned is that while the API is powerful, working with real-world data is never as straightforward as it looks on paper. In this article, I'll walk through the technical journey, challenges, and lessons I learned along the way, especially from a developer experience perspective.
          </p>

          <h2>1. Understanding the API</h2>
          <p>
            The first step in any integration is understanding what the API can and cannot do. The Open Library API offers endpoints for:
          </p>

          <ul className="article-list">
            <li><strong>Books</strong> (<code>/books/OLID.json</code>)</li>
            <li><strong>Authors</strong> (<code>/authors/OLID.json</code>)</li>
            <li><strong>Search</strong> (<code>/search.json?q=</code>)</li>
          </ul>

          <p>
            For example, to fetch a book by its Open Library ID (OLID):
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`fetch("https://openlibrary.org/books/OL7353617M.json")
  .then((res) => res.json())
  .then((data) => console.log(data));`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`fetch("https://openlibrary.org/books/OL7353617M.json")
  .then((res) => res.json())
  .then((data) => console.log(data));`}</code></pre>
          </div>

          <p>
            This returns a JSON object with metadata like title, authors, publish date, and subjects. Simple enough… until you realize not all books have complete data, and fields are sometimes inconsistent.
          </p>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson #1</h3>
              <p><strong>Always expect missing or inconsistent data.</strong> An API might return null or empty arrays for fields you assume will always exist. Build your code defensively.</p>
            </div>
          </div>

          <h2>2. Handling Pagination and Rate Limits</h2>
          <p>
            The <code>/search.json</code> endpoint is great for querying books, but it returns results in pages of 100 by default. For example:
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`fetch("https://openlibrary.org/search.json?q=children&limit=100&page=1")
  .then((res) => res.json())
  .then((data) => console.log(data.docs));`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`fetch("https://openlibrary.org/search.json?q=children&limit=100&page=1")
  .then((res) => res.json())
  .then((data) => console.log(data.docs));`}</code></pre>
          </div>

          <p>
            If you want more than 100 results, you have to loop through pages—and that's where rate limits come into play. Hitting the API too fast triggers errors.
          </p>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson #2</h3>
              <p><strong>Implement pagination logic and request throttling early.</strong> It saves headaches and prevents overwhelming the server. A simple delay between requests or using libraries like <code>p-limit</code> in Node.js can make your integration much smoother.</p>
            </div>
          </div>

          <h2>3. Designing for Non-Technical Users</h2>
          <p>
            Story World Adventures isn't just a tool for developers, it's for children and parents. This meant translating raw API data into user-friendly experiences:
          </p>

          <ul className="article-list">
            <li>Convert technical fields (e.g., OLID, publish_date) into readable labels</li>
            <li>Handle empty or malformed data gracefully, e.g., "Author unknown"</li>
            <li>Limit choices to ensure a simple, navigable interface</li>
          </ul>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">JavaScript</span>
              <button className="copy-button" onClick={() => {
                navigator.clipboard.writeText(`const formatBook = (book) => ({
  title: book.title || "Untitled",
  author: book.authors?.[0]?.name || "Author unknown",
  year: book.publish_date || "Unknown year",
});`)
              }}>
                Copy
              </button>
            </div>
            <pre><code>{`const formatBook = (book) => ({
  title: book.title || "Untitled",
  author: book.authors?.[0]?.name || "Author unknown",
  year: book.publish_date || "Unknown year",
});`}</code></pre>
          </div>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson #3</h3>
              <p><strong>APIs serve developers, but products serve humans.</strong> Always consider the end-user when shaping the data experience.</p>
            </div>
          </div>

          <h2>4. Debugging Real-World Data</h2>
          <p>
            One of the biggest surprises was data inconsistencies across endpoints. A search result might include an author key that doesn't match the <code>/authors</code> endpoint perfectly. Similarly, subjects were sometimes empty or misformatted.
          </p>

          <p>
            To handle this, I implemented:
          </p>

          <ul className="article-list">
            <li><strong>Logging and monitoring:</strong> Track which requests fail or return empty data</li>
            <li><strong>Fallback strategies:</strong> Use default values or alternative endpoints</li>
            <li><strong>Unit tests for API responses:</strong> Ensure your code gracefully handles edge cases</li>
          </ul>

          <div className="visual-box highlight-box">
            <div className="visual-content">
              <h3>Lesson #4</h3>
              <p><strong>Expect the unexpected.</strong> APIs, even official, well-documented ones—require testing and error handling in production.</p>
            </div>
          </div>

          <h2>5. Reflections and Takeaways</h2>
          <p>
            Building on the Open Library API was not just about fetching JSON—it was about designing developer-friendly and user-friendly experiences simultaneously. Here are my key takeaways:
          </p>

          <ol className="article-list">
            <li><strong>Read the docs, but test everything:</strong> Documentation is a guide, not a guarantee.</li>
            <li><strong>Prepare for missing data:</strong> Build defaults and fallbacks into your system.</li>
            <li><strong>Throttling and pagination matter:</strong> Respect API limits from the start.</li>
            <li><strong>Always think of the end-user:</strong> The best APIs still need thoughtful presentation.</li>
            <li><strong>Transparency is powerful:</strong> Logging, debugging, and sharing lessons help both your team and the community.</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Integrating the Open Library API taught me lessons beyond code: empathy for both developers and users, patience when working with imperfect data, and the importance of designing for clarity and reliability.
          </p>

          <p>
            If you're building with this API or any public API—my advice is simple: embrace the quirks, document your lessons, and share them. Other developers will thank you.
          </p>

          <div className="visual-box">
            <div className="visual-content">
              <h3>✨ Next Steps:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>• Try fetching a small set of books and display them with formatted fields.</li>
                <li>• Experiment with search queries and pagination.</li>
                <li>• Share your findings with the community—it's the DevRel way!</li>
              </ul>
            </div>
          </div>

          <div className="article-footer">
            <div className="article-tags">
              <span className="tag">API Integration</span>
              <span className="tag">Web Development</span>
              <span className="tag">User Experience</span>
              <span className="tag">Open Library</span>
              <span className="tag">DevRel</span>
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

export default OpenLibraryAPIArticle
