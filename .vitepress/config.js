require('./genMetadata').watchPosts()

module.exports = {
  title: 'Home',
  description: 'Home page',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ]
}
