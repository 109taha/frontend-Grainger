import React from 'react'

export default function SignInPopUp() {
  return (
    <div><section class="bg-white">
    <div class="flex  items-center justify-center px-2  lg:py-0">
      <div class="w-full bg-white  md:py-6  sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-300">
        <div class="p-3 space-y-2  md:space-y-2 sm:p-6">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-sm text-black">
            Sign In 
          </h1>
          <form class="space-y-2 md:space-y-2" action="#">
            <p>Sign In to access your account</p>
            <button
              type="submit"
              class="w-64 text-white bg-gray-800 hover:bg-black focus:ring-4  font-medium text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700"
            >
              Sign in
            </button>
            <button
              type="submit"
              class="w-full border border-3 border-black  bg-bg-transparent  hover:bg-black focus:ring-4 font-medium text-sm px-5 py-2.5 text-center custom-text-white "
            >
              Register
            </button>
            <div class="flex items-start">
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500 mr-3"
              >
                Forgot ID?
              </a>
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500 ml-3"
              >
                Forgot password?
              </a>
              </div>
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}
