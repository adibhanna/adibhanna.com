import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import tinytime from 'tinytime'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function Post({ meta, children, posts }) {
  const router = useRouter()
  const postIndex = posts.findIndex((post) => post.link === router.pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  return (
    <article className="divide-y divide-gray-200">
      <Head>
        <title>{meta.title} – Adib Hanna</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Adib_Hanna" />
        <meta name="twitter:creator" content="@Adib_Hanna" />
        <meta name="twitter:title" content={`${meta.title} – Adib Hanna`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://adibhanna.com${meta.image}`} />
        <meta property="og:url" content={`https://adibhanna.com${router.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} – Adib Hanna`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://adibhanna.com${meta.image}`} />
        <meta name="description" content={meta.description}></meta>
      </Head>
      <header className="pt-6 pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{meta.title}</PageTitle>
          </div>
        </div>
      </header>
      <div
        className="divide-y divide-gray-200 pb-16 xl:pb-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className="">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>

          <dl className="pb-10 pt-5">
            <dt className="sr-only">Author</dt>
            <dd>
              <ul className="flex justify-center space-x-8 space-y-8">
                {meta.authors.map((author) => (
                  <li key={author.twitter} className="flex items-center space-x-2">
                    <img src={author.avatar} alt="" className="w-10 h-10 rounded-full" />
                    <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900">Adib Hanna</dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        <a
                          href={`https://twitter.com/Adib_Hanna`}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          {author.twitter}
                        </a>
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>

        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200">
          {(next || previous) && (
            <div className="flex md:flex-row-reverse flex-col md:items-center md:justify-between py-8 md:space-y-0 space-y-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">Next Post</h2>
                  <div className="text-blue-500 hover:text-blue-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">Previous Post</h2>
                  <div className="text-blue-500 hover:text-blue-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/blog">
              <a className="text-blue-500 hover:text-blue-600">&larr; All posts</a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
