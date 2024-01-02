import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Catalog', to: '/Catalog', current: true },
  { name: 'Find A Branch', to: '#', current: false },
  { name: 'KeepStock', to: '#', current: false },  
  { name: 'Help', to: '#', current: false },
  {name:'1-800-GRAINGER' ,to:'#',current:false}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0">
            <div className="relative flex h-13 py-2 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center bg-black  rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6  " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 bg-black " aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="26" width="130" viewBox="0 0 130 32">
                                
                                    <g fill="none" fill-rule="evenodd">
                                        <path fill="#C8102E" d="M128.536 23.376l-1.31 8.08H25.553l1.302-8.08h101.682zm-102.747 0l-1.303 8.08h-4.018l1.303-8.08h4.018zm-5.855 0l-1.303 8.08h-3.28l1.302-8.08h3.281zm-5.854 0l-1.303 8.08h-2.543l1.302-8.08h2.544zm-5.853 0l-1.303 8.08H5.117l1.302-8.08h1.808zm-5.854 0l-1.303 8.08H0l1.303-8.08h1.07z"></path>
                                        <path fill="#FFF" d="M21.048 1.21h8.966c2.07.145 4.304 1.339 4.936 3.466.66 2.268-.255 4.465-1.902 5.978-.655.574-1.349 1.071-2.134 1.32l-.265.074 1.882 3.245h1.682l-.661 4.043h-4.5l-3.592-6.46-.387 2.417h1.019l-.661 4.043h-7.315l.65-4.043h1.35L21.773 5.04h-1.334l.609-3.83h8.966zm43.004-.005l-.607 3.829H62.11l-1.669 10.253h1.34l-.647 4.038-7.77.01.649-4.048h1.346l1.65-10.253h-1.335l.62-3.83h7.758zM3.646 3.917C6.256.962 10.416-.15 14.084 1.222a3.61 3.61 0 0 1 1.082.615l.3.374.164-1.002h3.72l-.986 6.145h-4.232c-.235-.992-1.247-1.925-2.233-2.137-1.812-.402-3.6.164-4.751 1.629-1.269 1.773-1.692 4.633-.494 6.57.824 1.3 2.234 1.867 3.715 1.633 1.153-.213 2.281-1.137 2.774-2.223l-4.715-.004.59-3.677h9.935l-1.648 10.188h-3.829l.256-1.522c-1.6 1.302-3.762 1.537-5.76 1.465-2.728-.473-5.596-2.573-6.488-5.34-1.06-3.521-.096-7.326 2.162-10.02zM94.64 1.222c.3.114.601.258.878.456l.203.159.301.374.163-1.002h3.721l-.987 6.145h-4.232c-.235-.992-1.247-1.926-2.232-2.137-1.813-.402-3.6.164-4.752 1.629-1.269 1.773-1.69 4.633-.494 6.57.824 1.3 2.234 1.867 3.715 1.633 1.086-.2 2.149-1.03 2.682-2.033l.094-.19-4.717-.004.59-3.677h9.935L97.86 19.333h-3.829l.258-1.522c-1.6 1.302-3.764 1.537-5.762 1.465-2.728-.473-5.595-2.573-6.49-5.34-1.058-3.521-.093-7.326 2.165-10.02C86.81.962 90.972-.149 94.64 1.222zm-23.746-.013l4.68 9.004.838-5.175h-1.333l.613-3.829h7.506l-.616 3.83H81.24l-2.314 14.294H74.89l-5.114-10.15-.974 6.11h1.339l-.646 4.04h-7.561l.645-4.04h1.334L65.58 5.037h-1.34l.608-3.829h6.045zm44.66 0l-.913 5.674h-4.47l.293-1.844h-3.358l-.421 2.658h3.932l-.704 4.361h-3.924l-.53 3.234h3.562l.355-2.288h4.598l-1.027 6.33H98.662l.657-4.042h1.356l1.669-10.253h-1.335l.62-3.83h13.925zm10.097-.001c2.07.143 4.305 1.337 4.936 3.464.661 2.268-.255 4.466-1.902 5.978-.656.575-1.348 1.072-2.133 1.32l-.266.074 1.882 3.246h1.683l-.66 4.042h-4.501l-3.594-6.46-.385 2.418h1.019l-.661 4.042h-7.315l.65-4.042h1.35l1.656-10.253h-1.334l.609-3.83h8.966zm-76.168.001l2.383 14.083h1.346l-.655 4.04H44.79l.65-4.04h1.337l-.189-1.497h-4.678l-.672 1.497h1.355l-.664 4.04h-7.554l.662-4.04h1.325l5.22-10.254H40.24l.614-3.829h8.629zm83.359 14.238a1.91 1.91 0 0 1 1.928 1.942 1.912 1.912 0 0 1-1.934 1.921 1.914 1.914 0 0 1-1.917-1.932c0-1.113.886-1.931 1.923-1.931zm.01.173c-.993 0-1.759.792-1.759 1.758 0 .987.788 1.758 1.749 1.758.99 0 1.749-.775 1.756-1.753a1.734 1.734 0 0 0-1.745-1.763zm-.042.543c.28 0 .415 0 .56.053a.582.582 0 0 1 .369.55c0 .335-.243.53-.54.579.26.098.34.24.388.532.047.304.066.442.137.612l.041.089h-.405c-.053-.109-.074-.217-.097-.331-.01-.055-.048-.325-.058-.386-.064-.323-.227-.39-.511-.404l-.1-.003h-.173v1.124h-.35v-2.415h.739zm.06.27h-.443v.738h.45c.175-.002.507-.029.507-.378a.357.357 0 0 0-.114-.268c-.074-.065-.156-.084-.303-.09l-.097-.001zM45.767 5.714l-1.835 4.265h2.21l-.375-4.266zm-18.934-.445l-.146-.002-.642 3.97c1.182-.054 2.536.26 3.406-.543.73-.569 1.035-1.395.919-2.27-.478-1.48-2.21-1.152-3.537-1.155zm95.638-.004l-.146-.002-.643 3.97c1.182-.054 2.537.26 3.407-.543.729-.568 1.034-1.395.919-2.269-.48-1.48-2.21-1.153-3.537-1.156zM96.022 2.211v.008l.004-.003-.004-.005zm-80.556 0v.008l.005-.003-.005-.005z"></path>
                                    </g>
                                </svg>
                </div>
                <div className="hidden sm:ml-3 sm:block  ">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'underline text-white' : 'text-white  hover:text-underline',
                          ' px-1 py-1 text-xs'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                  <Link className='text-white px-1 py-1 mr-2 text-xs font-bold' to='/Register'>Register</Link>
                  <Link className='text-white px-3 py-1 text-xs bg-primary rounded-pill font-bold' to='/Register'>Sign In</Link>
                    {/* when user is login in show these  */}
                    {/* <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button> */}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-gray-200 ">
            <div className="  pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'underline text-black ' : 'hover:underline text-black ',
                    'block  px-3 py-2 font-medium font-bold bg-white border-b border-gray-300'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
