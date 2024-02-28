new Vue({
    el: "#app",
    template: `
    <div>
        <nav class="flex justify-between bg-gray-900 text-white w-screen sticky top-0">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="#">
            <!-- <img class="h-9" src="logo.png" alt="logo"> -->
            INnUP
            </a>
            <!-- Nav Links -->
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-200" to="/">Home</a></li>
            <li><a class="hover:text-gray-200" to="/">Products</a></li>
            <li><a class="hover:text-gray-200" to="/">Contact</a></li>
            <li><a class="hover:text-gray-200" to="/">About INnUP</a></li>
            </ul>
            <!-- Header Icons -->
            <div class="hidden xl:flex items-center space-x-5">
            <a class="flex items-center hover:text-gray-200" to="/carts">
                
                <span class="relative inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">0</span>
                </span>
            </a>
            <!-- Sign In / Register      -->
            <a class="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
            
            </div>
        </div>
        <!-- Responsive navbar -->
        <a class="xl:hidden flex mr-6 items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            </span>
            </span>
        </a>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </a>
        </nav>

        <div class="bg-gray-100 p-10">
            <div class="grid-cols-5 flex md:flex-row flex-col mb-10">
            <!-- Format / edition -->
                <div class="basis-2/5 border shadow-xl p-5 m-2">
                    <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Format/Edition</h1>
                    <div class="p-5 float-left">
                        <img src="../assets/sticker.jpg" class="w-full"/>
                    </div>
                    <div class="float-right">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width</label>
                            <input type="text" id="width" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                            <input type="text" id="height" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edition per montif</label>
                            <input type="text" id="edition" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="first_name" class="block flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of motifs</label>
                            <input type="text" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required value="1"/>
                        </div>
                    </div>
                </div>
            </div>
        <!-- INnUP SUPPORT -->
            <div class="bg-gray-100 p-5">
                <div class="container my-12 mx-auto px-2 md:px-4 w-1/2">
                    <section>
                        <div class="flex justify-center">
                            <div class="text-center md:max-w-xl lg:max-w-4xl">
                                <h2 class="mb-6 font-bold text-b-base xs:text-b-xs sm:text-b-sm lg:text-b-lg">
                                    INnUP SUPPORT
                                </h2>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-center">
                            <form class="mb-5  shrink-0 grow-0 basis-auto md:px-3 w-2/3">

                                <div class="mb-5 w-full">
                                    <label class="block font-medium mb-[2px]" htmlFor="exampleInput90">
                                            Tel
                                    </label>
                                    <input type="text" class="bg-gray px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" value="+49 (0)421 620 485 - 0" disabled/>
                                </div>

                                <div class="mb-5 w-full">
                                    <label class="block font-medium mb-[2px]" htmlFor="exampleInput90">
                                            Fax
                                    </label>
                                    <input type="email" class="bg-gray px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                                            value="+49 (0)421 620 485 - 29" disabled/>
                                </div>

                                <div class="mb-5 w-full">
                                    <label class="block font-medium mb-[2px]" htmlFor="exampleInput90">
                                            Email
                                    </label>
                                    <input type="email" class="bg-gray px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                                            value="info@innup.de" disabled/>
                                </div>
                                <div class="flex justify-center">
                                    <button type="submit" class="w-full bg-blue-500 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Contact Us</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <footer class="bg-gray-900 rounded-lg shadow m-4 dark:bg-white">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-base text-white sm:text-center dark:text-gray-400">© 2006-2024 INnUP Deutschland GmbH <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-base font-medium text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Contact</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Imprint</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About INnUP</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Vacancies</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">data Protection</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">AGB</a>
                    </li>

                </ul>
            </div>
        </footer>
    </div>
    `
});