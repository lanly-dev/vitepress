import './style.css'
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
library.add(faLinkedin, faGithub)

export default {
  ...DefaultTheme,
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}
