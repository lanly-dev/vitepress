require('./genMetadata').watchPosts()

module.exports = {
  title: 'Helloworld',
  description: 'the description',
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
