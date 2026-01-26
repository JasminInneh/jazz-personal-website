import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ArticlePage.css'

// Import individual article components
import OpenLibraryAPIArticle from '../articles/OpenLibraryAPIArticle'
import AccessibleWebAppsArticle from '../articles/AccessibleWebAppsArticle'
import FutureOfWebDevArticle from '../articles/FutureOfWebDevArticle'
import PerformanceOptimizationArticle from '../articles/PerformanceOptimizationArticle'

const articleComponents = {
  'open-library-api': OpenLibraryAPIArticle,
  'building-accessible-web-applications': AccessibleWebAppsArticle,
  'the-future-of-web-development': FutureOfWebDevArticle,
  'optimizing-performance-in-modern-javascript': PerformanceOptimizationArticle,
}

const ArticlePage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const ArticleComponent = articleComponents[slug]

  if (!ArticleComponent) {
    return (
      <div className="article-page">
        <div className="article-container">
          <h1>Article Not Found</h1>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <ArticleComponent />
    </div>
  )
}

export default ArticlePage
