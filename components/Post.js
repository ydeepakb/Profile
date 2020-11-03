import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post

    return (
        <>
        <div className="blog-post-conatiner">
        <article>
                <HeadPost meta={meta} />
                <Link href={'/blog' + link}>
                    <a>Read more &rarr;</a>
                </Link>
            </article>
        </div>
          
            <style jsx>
                {`
                    article {
                        margin-bottom: 3rem;
                        background: #044340;
                        padding: 10px;
                        border: 1px groove #ddd;
                        border-radius: 17px;
                    }
                    .blog-post-conatiner{
                        
                    }
                `}
            </style>
        </>
    )
}
