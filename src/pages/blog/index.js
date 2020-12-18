import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Adib_Hanna" />
        <meta name="twitter:creator" content="@Adib_Hanna" />
        <meta name="twitter:title" content="Blog - Adib Hanna" />
        <meta name="twitter:description" content="Blog posts from Adib Hanna" />
        <meta name="twitter:image" content={`https://adibhanna.com${twitterCard}`} />
        <meta property="og:url" content="https://adibhanna.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Adib Hanna" />
        <meta property="og:description" content="Blog posts from Adib Hanna" />
        <meta property="og:image" content={`https://adibhanna.com${twitterCard}`} />
        <title>Blog – Adib Hanna</title>
        <meta name="description" content="Blog posts from Adib Hanna" />
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="font-extrabold text-gray-900 tracking-tight text-4xl">Posts</h1>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-2 xl:space-y-0 xl:items-baseline">
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="flex xl:flex-row flex-col xl:justify-between xl:items-center text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>

                      <span className="text-sm leading-6 font-bold text-gray-600 xl:rounded xl:bg-gray-200 xl:px-3 xl:mr-2 xl:p-1">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </span>
                    </h2>
                    <div className="prose max-w-none text-gray-600">
                      <Component />
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link href={link}>
                      <a
                        className="text-blue-500 hover:text-blue-600"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
