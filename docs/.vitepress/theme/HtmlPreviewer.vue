<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import semanticusStyles from '../../../dist/semanticus.min.css?raw';
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import { useData } from 'vitepress'
import githubLight from 'highlight.js/styles/github.css?raw'
import githubDark from 'highlight.js/styles/github-dark.css?raw'

// isDark is a reactive Ref<boolean>
const { isDark } = useData();

const cssStyles = computed(() => {
  return isDark.value ? githubDark : githubLight;
});

// Register HTML language
hljs.registerLanguage('html', html)

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  minHeight: {
    type: Number,
    default: 100
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  }
});

const iframeRef = ref(null);
const iframeHeight = ref(props.minHeight);
const code = ref(props.code);
const uid = `html-previewer-${Math.random().toString(36).substr(2, 9)}`;

const iframeContent = computed(() => {
  return `
<!DOCTYPE html>
<html lang="en" data-theme="${isDark.value ? 'dark' : 'light'}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark">
  <style id="semanticus-styles">${semanticusStyles}</style>
  <style>
    body {
      margin: 0;
      padding: 1.5rem;
    }
  </style>
</head>
<body>
  ${code.value}

  <script>
    // Send height updates to parent for auto-resize
    function sendHeight() {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'html-previewer-resize', id: '${uid}', height: height }, '*');
    }

    window.addEventListener('load', sendHeight);
    window.addEventListener('resize', sendHeight);

    // Watch for DOM changes that might affect height
    const observer = new MutationObserver(sendHeight);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    // Handle anchor links for :target pseudo-class (CSS-only modals, tabs, etc.)
    // This prevents iframe reloads when clicking hash links
    document.addEventListener('click', function(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const hash = anchor.getAttribute('href');
        if (hash === '#') {
          // Clear the hash (for close buttons)
          history.pushState(null, null, ' ');
        } else {
          // Set the hash (for opening modals, tabs, etc.)
          location.hash = hash;
        }
        // Trigger :target styles by dispatching a hashchange event
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    });
  <\/script>
</body>
</html>
`;
});

const highlightedCode = hljs.highlight(code.value || '', { language: 'html' }).value;

function updateContent(event) {
  code.value = event.target.innerText;
}

// Handle messages from the iframe (for auto-resize)
function handleMessage(event) {
  if (event.data && event.data.type === 'html-previewer-resize' && event.data.id === uid && props.autoResize) {
    iframeHeight.value = Math.max(event.data.height, props.minHeight);
  }
}

onMounted(() => window.addEventListener('message', handleMessage));
onUnmounted(() => window.removeEventListener('message', handleMessage));
</script>

<template>
  <component :is="'style'" v-html="cssStyles"></component>
  <div class="html-preview-container">
    <div class="preview-iframe-container language-html">
      <iframe
        ref="iframeRef"
        title="Semanticus CSS Examples Preview"
        class="preview-iframe"
        sandbox="allow-scripts allow-same-origin"
        :style="{ height: iframeHeight + 'px' }"
        :srcdoc="iframeContent"
      ></iframe>

      <span class="lang">live preview</span>
    </div>

    <div class="language-html">
      <button title="Copy Code" class="copy"></button>
      <span class="lang">{{ editable ? 'editable html' : 'html' }}</span>
      <pre><code class="language-html" v-html="highlightedCode" :contenteditable="editable" @input="updateContent"></code></pre>
    </div>
  </div>
</template>

<style scoped>
.html-preview-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.preview-iframe-container {
  border-bottom: 1px solid var(--vp-c-divider);

  .lang {
    top: unset !important;
    bottom: 2px;
  }
}

.preview-iframe {
  width: 100%;
  min-height: 100px;
  border: none;
}

.language-html {
  margin: 0 !important;
  border-radius: 0 !important;
  outline: none;
  cursor: text;
}
</style>
