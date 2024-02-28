new Vue({
    el: "#app",
    template: `
    <div>
        <nav class="flex justify-between bg-gray-900 text-white w-screen sticky top-0">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                <a class="text-3xl font-bold font-heading" href="#">
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
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
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
                <div class="basis-2/5 border shadow-xl p-5 m-2 w-full">
                    <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Format/Edition</h1>
                    <div class="p-5 float-left">
                        <img src="../asset/sticker.jpg" class="w-full"/>
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

                <!-- Data -->
                <div class="basis-1/5  border shadow-xl p-5 m-2 w-2/3">
                    <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Data</h1>
                    <p class="text-sm font-bold mb-4">Data supplied</p>
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="pdf/x-la and pdf/x-3" name="data_supplied" @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">pdf/x-la and pdf/x-3</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input checked="checked" id="default-radio-2" type="radio" value="Other pdf, ai, eps, jpg" name="data_supplied"  @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other pdf, ai, eps, jpg</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-radio-3" type="radio" value="doc, docx, ppt, pub, cdr" name="data_supplied" @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">doc, docx, pp, pub, cdr</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-radio-4" type="radio" value="Typesetting & design" name="data_supplied" @change="onChangeData($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Typesetting & design</label>
                    </div>
                    <a link="#" class="text-sm">Info about data formats</a>
                </div>

                <!-- Shipment -->
                <div class="basis-1/5 border shadow-xl p-5 m-2 w-2/3">
                    <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Shipment</h1>
                    <div>
                        <p class="text-sm font-bold mb-4">Production time</p>
                        <div class="flex items-center mb-4">
                            <input id="pro_standard" checked="checked" @change="onChangeProduction($event)" type="radio" value="Standard" name="production" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="pro_standard" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Standard</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="pro_express" type="radio" value="Express"  @change="onChangeProduction($event)" name="production" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="pro_express" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Express</label>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm font-bold mb-4">Delivery country</p>
                        <div class="flex items-center mb-4">
                            <input id="delivery_1" type="radio"  value="Germany" name="delivery" @change="onChangeDelivery($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="delivery_1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input checked id="delivery_2" type="radio" value="Austria" name="delivery" @change="onChangeDelivery($event)" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="delivery_2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Austria</label>
                        </div>
                    </div>
                </div>

                <!-- Payment method-->
                <div class="basis-1/5 border shadow-xl p-5 m-2 w-full">
                    <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">Payment</h1>
                    <div>
                        <p class="text-sm font-bold mb-4">Payment method</p>
                        <div class="flex items-center mb-4">
                            <input id="pay_invoice" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="pay_invoice" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">The invoice</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input checked id="pay_half" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="pay_half" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">50% advance payment</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input checked id="pay_advance" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="pay_advance" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Payment in advance</label>
                        </div>
                    </div>
                    <div class="container border border-gray-500 shadow p-2 text-center text-sm">
                        <p>Online Discount</p>
                        <p>€5.00 net</p>
                        <p>€5.95 including VAT</p>
                    </div>
                </div>
            </div>
            <!-- Results Table-->
            <div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Print process
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Dimension[mm]
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Durability colors
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Adhesive Properties
                            </th>
                            <th scope="col" class="px-6 py-3">
                                surface
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Latest delivery
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex">
                                    Digital printing
                                </div>
                                <div class="flex">
                                    on white PVC film on fixed sheets
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                100 X 100
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">
                                        weatherproof
                                    </li>
                                    <li class="flex items-center mb-4">
                                        4c
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'Digital Printing'" type="radio" :name="'adhesive' + 'Digital Printing'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'adhesive' +  + 'Digital Printing'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">removable</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'Digital Printing'" type="radio" :name="'adhesive' + 'Digital Printing'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                                        <label :for="'adhesive' +  + 'Digital Printing'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">adherent</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'Digital Printing'" type="radio" :name="'surface' + 'Digital Printing'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                                        <label :for="'surface' +  + 'Digital Printing'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">glittering</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'Digital Printing'" type="radio" :name="'surface' + 'Digital Printing'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'surface' +  + 'Digital Printing'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">shiny laminate</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'Digital Printing'" type="radio" :name="'surface' + 'Digital Printing'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'surface' +  + 'Digital Printing'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">matt lami</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                Arriving Mon 03/03/24
                            </td>
                            <td class="px-6 py-4">
                                €96.76 net
                                <br>
                                <strong>€115.14 including VAT</strong>
                            </td>
                            <td class="px-6 py-4">
                                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex">
                                    screen printing
                                </div>
                                <div class="flex">
                                    on white pVC film cut individually
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                100 X 100
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">
                                        weatherproof
                                    </li>
                                    <li class="flex items-center mb-4">
                                        indoors
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'screenPrinting'" type="radio" :name="'adhesive' + 'screenPrinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'adhesive' +  + 'screenPrinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">removable</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'screenPrinting'" type="radio" :name="'adhesive' + 'screenPrinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                                        <label :for="'adhesive' +  + 'screenPrinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">adherent</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'screenPrinting'" type="radio" :name="'adhesive' + 'screenPrinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'adhesive' +  + 'screenPrinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">extremely adhesive</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">
                                        <label :for="'surface' +  + 'Digital Printing'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">glittering</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                Arriving Mon 03/13/24
                            </td>
                            <td class="px-6 py-4">
                                €412.30 net
                                <br>
                                <strong>€490.64 including VAT</strong>
                            </td>
                            <td class="px-6 py-4">
                                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex">
                                    UV offset printing
                                </div>
                                <div class="flex">
                                    on white PVC film delivered individually
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                250
                            </td>
                            <td class="px-6 py-4">
                                100 X 100
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">
                                        weatherproof
                                    </li>
                                    <li class="flex items-center mb-4">
                                        4c
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'uvoffsetprinting'" type="radio" :name="'adhesive' + 'uvoffsetprinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'adhesive' +  + 'uvoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">removable</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'adhesive' + 'uvoffsetprinting'" type="radio" :name="'adhesive' + 'uvoffsetprinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                                        <label :for="'adhesive' +  + 'uvoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">adherent</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'uvoffsetprinting'" type="radio" :name="'surface' + 'uvoffsetprinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                                        <label :for="'surface' +  + 'uvoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">glittering</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'uvoffsetprinting'" type="radio" :name="'surface' + 'uvoffsetprinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'surface' +  + 'uvoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">frosted</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                Arriving Mon 03/12/24
                            </td>
                            <td class="px-6 py-4">
                                €170.80 net
                                <br>
                                <strong>€203.25 including VAT</strong>
                            </td>
                            <td class="px-6 py-4">
                                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex">
                                    Adhesive paper offset printing
                                </div>
                                <div class="flex">
                                    delivered individually
                                </div>
                            </th>
                            <td class="px-6 py-4">
                                100
                            </td>
                            <td class="px-6 py-4">
                                100 X 100
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">
                                        weatherproof
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <select>
                                            <option>0/0</option>
                                            <option>1/0</option>
                                            <option>2/0</option>
                                            <option>3/0</option>
                                            <option>4/0</option>
                                            <option>5/0</option>
                                            <option>6/0</option>
                                        </select>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <select>
                                            <option>without special colors</option>
                                            <option>+ silver</option>
                                            <option>+ gold</option>
                                            <option>+ silver + gold</option>
                                        </select>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">         
                                        <label :for="'adhesive' +  + 'adhesivepaperoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">adherent</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                <ol>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'adhesivepaperoffsetprinting'" type="radio" :name="'surface' + 'adhesivepaperoffsetprinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                                        <label :for="'surface' +  + 'adhesivepaperoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">glittering</label>
                                    </li>
                                    <li class="flex items-center mb-4">          
                                        <input :id="'surface' + 'adhesivepaperoffsetprinting'" type="radio" :name="'surface' + 'adhesivepaperoffsetprinting'" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label :for="'surface' +  + 'adhesivepaperoffsetprinting'" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">describe</label>
                                    </li>
                                </ol>
                            </td>
                            <td class="px-6 py-4">
                                Arriving Mon 03/03/24
                            </td>
                            <td class="px-6 py-4">
                                €105.00 net
                                <br>
                                <strong>€124.95 including VAT</strong>
                            </td>
                            <td class="px-6 py-4">
                                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
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