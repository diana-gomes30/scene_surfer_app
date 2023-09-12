import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="bg-black sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between w-full md:w-auto">
          <Link
            href={'/'}
            className="flex font-medium items-center text-red-500"
          >
            <span>SceneSurfer</span>
          </Link>

          <div className="block md:hidden">
            <button
              onClick={() => setisOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-white hover:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faBars}
                className={`fill-current h-5 w-5 ${
                  isOpen ? 'hidden' : 'block'
                }`}
              />
              <FontAwesomeIcon
                icon={faXmark}
                className={`fill-current h-5 w-5 ${
                  isOpen ? 'block' : 'hidden'
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`block flex-grow w-full md:flex md:items-center md:w-auto justify-end ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            className="block my-2 md:mr-6 md:inline-block md:my-0 text-white hover:text-gray-300"
            href={'/'}
          >
            Home
          </Link>
          <Link
            className="block my-2 md:mr-6 md:inline-block md:my-0 text-white hover:text-gray-300"
            href={'/movies'}
          >
            Movies
          </Link>
          <Link
            className="block my-2 md:mr-6 md:inline-block md:my-0 text-white hover:text-gray-300"
            href={'/series'}
          >
            Tv Shows
          </Link>
          <Link
            className="block my-2 md:inline-block md:my-0 text-white hover:text-gray-300"
            href={'/my-list'}
          >
            My List
          </Link>
        </div>
      </div>
    </div>
  );
}
