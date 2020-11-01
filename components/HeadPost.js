export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ? 'great-title' : null} >{meta.title}</h1>
    <div className='details'>
      {
        isBlogPost ? null : <p>{meta.description}</p>
      }
      <span>{meta.date}</span>
      <span role='img' aria-label='one coffee'>
        ☕ {meta.readTime + ' min read'}
      </span>
    </div>
    <style jsx>
      {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #000;
            white-space: break-spaces;
          }
          .great-title {
              font-size: 2rem;
          }
          .details span {
            color: #999;
            margin-right: .5rem;
            font-size: 0.9rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
    </style>
  </>
)
