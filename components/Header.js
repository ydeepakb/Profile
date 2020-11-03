import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav>
        <h1>
          <Link href='/'>
            <a>Deepak (The CodeTweaker)</a>
          </Link>
        </h1>
        <div>
        <Link href='/'>
            <a className='text'>Posts</a>
          </Link>
          <Link href='/about'>
            <a className='text'>About</a>
          </Link>
          <Link href='/education'>
            <a className='text'>Education</a>
          </Link>
          <Link href='/brands'>
            <a className='text'>Brands</a>
          </Link>
          <Link href='/projects'>
            <a className='text'>Projects</a>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            width: auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            background-color: #065052;
            background: linear-gradient(to bottom,#1b7e5ede 0%,#0b5357 66%,#0b4723 100%);
          }
          nav a {
            margin-right: 1rem;
            text-decoration: none;
            color: var(--accents-3);
            font-weight: 600;
            letter-spacing: -0.02em;
            color: #fff;
          }
          nav h1 a {
            font-weight: 800;
            font-size: 1.75rem;
           
            color: #fff;
            font-family: fangsong;
          }
          `
        }
      </style>
    </>
  )
}
