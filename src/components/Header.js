import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="flex flex-wrap items-center md:justify-between justify-center py-4">
        <div className="flex items-center justify-center mr-6 py-3 text-grey-darkest">
          <Link href="/">
            <a className="font-semibold text-xl tracking-tight">Adib Hanna</a>
          </Link>
        </div>

        <ul className="flex lg:justify-end justify-center list-reset w-full md:w-auto">
          <li className="">
            <Link href="/blog">
              <a
                aria-label="Adib Hanna Blog"
                className="font-semibold block md:inline-block px-4 md:py-3 py-0 no-underline text-gray-700 hover:text-gray-900"
              >
                Blog
              </a>
            </Link>
          </li>

          <li className="">
            <Link href="/workshops">
              <a className="font-semibold block md:inline-block px-4 md:py-3 py-0 no-underline text-gray-700 hover:text-gray-900">
                Workshops
              </a>
            </Link>
          </li>

          <li className="">
            <Link href="/about">
              <a className="font-semibold block md:inline-block px-4 md:py-3 py-0 no-underline text-gray-700 hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
