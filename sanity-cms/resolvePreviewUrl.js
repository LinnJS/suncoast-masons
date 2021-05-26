const env = process.env.NODE_ENV || 'development'

 const resolvePreviewUrl = (document) => {
  const baseUrl = env === 'development' ? 'http://localhost:8000' : 'https://preview-suncoastmasonsmain.gtsb.io'
  switch (document._type) {
    case 'route':
      if (!document.slug || !document.slug.current) {
        return baseUrl
      }
      return `${baseUrl}/${document.slug.current}`
    default:
      return null
  }
}

export default resolvePreviewUrl