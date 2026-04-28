import fs from 'fs';
import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer.mjs'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'

// Ensure that these files are included in the bundle
const rawSemanticusStyles = fs.readFileSync('./dist/semanticus.css', 'utf-8')
const rawIframeContent = fs.readFileSync('./docs/.vitepress/plugins/html-preview/iframe-content.html', 'utf-8')

// TODO: replace highlight.js with https://shiki.style/guide/install#shorthands

// Register HTML language
hljs.registerLanguage('html', html)

function escapeForAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
}

export function htmlPreviewPlugin(md: MarkdownIt) {
  const defaultFence: RenderRule = md.renderer.rules.fence!.bind(md.renderer.rules)

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const info = token.info.trim()

    if (info === 'html-preview') {
      const code = token.content.trim()

      // Highlight the code using highlight.js
      const highlightedCode = hljs.highlight(code, { language: 'html' }).value

      const iframeContent = rawIframeContent.replace('${customStyles}', rawSemanticusStyles).replace('${code}', code)

      const copyButtonHtml = `<button class="copy-code-button" title="Copy to clipboard">
        <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="copy-text">Copy</span>
        <span class="copied-text" style="display:none">Copied!</span>
      </button>`

      return `<div>
  <div class="preview-section">
    <div class="preview-label">Preview</div>
    <iframe class="preview-iframe" srcdoc="${escapeForAttr(iframeContent)}" sandbox="allow-same-origin allow-scripts" title="Preview"></iframe>
  </div>
  <div class="code-section">
    <div class="code-header">
      <div class="code-label">Code</div>
      ${copyButtonHtml}
    </div>
    <pre><code class="hljs language-html">${highlightedCode}</code></pre>
  </div>
</div>`
    }

    return defaultFence(tokens, idx, options, env, self)
  }
}
