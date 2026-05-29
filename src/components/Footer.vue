<template>
    <!-- <footer class="bg-green-800 text-white py-4 text-center"> -->
    <footer class="bg-green-800 text-white px-8 py-10 text-center mt-12">
        <div class="flex flex-wrap justify-between gap-8">

            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
               
                <p class="text-sm text-green-200 "></p>
            </div>
            <!-- Quick links -->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick links</h3>
                <ul class=" spae-y-2 text-sm">
                    <li>
                        <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contacts" class="hover:text-yellow-300">Contacts</RouterLink>
                    </li>
                  
                </ul>
                </div>
                <!-- Destination -->
                <div>
                <h4 class="text-yellow-300 font-bold text-lg mb-3 text-center">Destination</h4>
                <ul class="space-y text-sm text-center">

                    <li>
                        <RouterLink to="/dest/western" class="block px-4 py-2 text-white hover:text-yellow-300">
                            Western province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dest/eastern" class="block px-4 py-2 text-white hover:text-yellow-300">
                            Eastern province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dest/northern" class="block px-4 py-2 text-white hover:text-yellow-300 ">
                            Northern province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dest/southern" class="block px-4 py-2 text-white hover:text-yellow-300 ">
                            Southern province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dest/kigali" class="block px-4 py-2 text-white hover:text-yellow-300 ">
                            Kigali City</RouterLink>
                    </li>
                </ul>
                </div>
                <!-- contact -->
                <div>
                    
                    <h5 class="text-yellow-300 font-bold text-lg  mb-3">Contacts</h5>
                    <ul class="space-y-2  text-green-300">
                        <li>ahantunyaburanga@gmail.com</li>
                        <li>+0788823626266262</li>
                        <li>Kagugu Kigali Rwanda</li>
                    </ul>
                </div>
            </div>
           <!-- copyright -->
            <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
               <p>&copy; 2026 Tembera urwanda. All rights reserved.</p>
            </div>
        
    </footer>
</template>