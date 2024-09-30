<template>
  <div>
    <div class="confetti">
      <div
        v-for="n in 15"
        :key="n"
        class="confetti-piece"
        :style="getRandomStyle()"
      >
        <img src="@/assets/images/petal.png" />
      </div>
    </div>

    <div class="flex justify-center pt-20 px-4 md:py-4 min-h-screen">
      <div
        class="bg-hero-pattern w-full h-20 light-pattern bg-repeat-x absolute top-0 z-10"
        style="zoom: 65%"
        data-aos="fade-down"
        data-aos-delay="500"
      ></div>
      <div class="flex flex-wrap items-center max-w-6xl mx-auto mt-5 md:mt-6">
        <div class="w-full md:w-1/2 text-center">
          <div
            class="text-red-700 text-md md:text-xl font-medium mb-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            WEDNESDAY, October 30, 2024
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="600"
            src="@/assets/images/db1.png"
            class="w-full mx-auto hidden md:block"
            alt="Deepankar & Boby "
            height="50px"
            width="50px"
            style="height: 50%; width: 50%"
          />
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            class="text-xl md:text-2xl mt-2"
          >
            Are getting married!
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-5 md:mt-10">
          <img
            data-aos="fade-up"
            data-aos-delay="600"
            src="@/assets/images/photo.png"
            class="w-full mx-auto hidden md:block"
            alt="Deepankar & Boby "
          />

          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src="@/assets/images/photo.png"
            class="w-full mx-auto block md:hidden"
            alt="Deepankar & Boby "
          />
        </div>
      </div>
      <transition
        enter-class="transform translate-y-10 opacity-0"
        enter-active-class="transition-all duration-300 ease-in-out"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-class="transform translate-y-0 opacity-100"
        leave-active-class="transition-all duration-300 ease-in-out"
        leave-to-class="transform translate-y-20 opacity-0"
      >
        <div
          v-if="showArrow"
          id="arrow"
          v-scroll-to="'#celebrate'"
          class="absolute bottom-0 mb-8 hidden md:block cursor-pointer hover:bg-red-700 border-red-700 border rounded-full p-4 transition ease-in-out duration-150"
        >
          <svg
            class="w-6 h-6 text-red-700 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </transition>
    </div>
    <div id="celebrate" class="container mx-auto p-4">
      <div
        class="text-center font-medium font-display text-3xl md:text-5xl mb-12"
      >
        <div
          style="width: 200px"
          class="mx-auto"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <svg
            id="Layer_1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 400 400"
            style="enable-background: new 0 0 400 400; margin-left: 50px"
            xml:space="preserve"
          >
            <g class="confetti-cone">
              <path
                class="conf0"
                d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l65.5-170.7L131.5,172.6z"
              />

              <path
                class="conf1"
                d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l6.7-17.5l-53.6-152.9L131.5,172.6z"
              />

              <path
                class="conf2"
                d="M274.2,184.2c-1.8,1.8-4.2,2.9-7,2.9l-129.5,0.4c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.9-9.9l129.5-0.4

       c5.4,0,9.8,4.4,9.8,9.8C277,180,275.9,182.5,274.2,184.2z"
              />

              <polygon
                class="conf3"
                points="231.5,285.4 174.2,285.5 143.8,205.1 262.7,204.7 			"
              />

              <path
                class="conf4"
                d="M166.3,187.4l-28.6,0.1c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.9-9.9l24.1-0.1c0,0-2.6,5-1.3,10.6

       C161.8,183.7,166.3,187.4,166.3,187.4z"
              />

              <ellipse
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -89.8523 231.0278)"
                class="conf2"
                cx="233.9"
                cy="224"
                rx="5.6"
                ry="5.6"
              />

              <path
                class="conf5"
                d="M143.8,205.1l5.4,14.3c6.8-2.1,14.4-0.5,19.7,4.8c7.7,7.7,7.6,20.1-0.1,27.8c-1.7,1.7-3.7,3-5.8,4l11.1,29.4

       l27.7,0l-28-80.5L143.8,205.1z"
              />

              <path
                class="conf2"
                d="M169,224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9,36.7c2.1-1,4.1-2.3,5.8-4C176.6,244.4,176.6,231.9,169,224.2z"
              />

              <ellipse
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.0946 221.1253)"
                class="conf6"
                cx="207.4"
                cy="254.3"
                rx="11.3"
                ry="11.2"
              />
            </g>

            <rect
              x="113.7"
              y="135.7"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -99.5348 209.1582)"
              class="conf7"
              width="178"
              height="178"
            />

            <line class="conf7" x1="76.8" y1="224.7" x2="328.6" y2="224.7" />

            <polyline
              class="conf7"
              points="202.7,350.6 202.7,167.5 202.7,98.9 	"
            />

            <!-- here comes the confettis-->

            <circle id="b1" class="conf2" cx="195.2" cy="232.6" r="5.1" />

            <circle id="b2" class="conf0" cx="230.8" cy="219.8" r="5.4" />

            <circle id="c2" class="conf0" cx="178.9" cy="160.4" r="4.2" />

            <circle id="d2" class="conf6" cx="132.8" cy="123.6" r="5.4" />

            <circle id="d3" class="conf0" cx="151.9" cy="105.1" r="5.4" />

            <path
              id="d1"
              class="conf0"
              d="M129.9,176.1l-5.7,1.3c-1.6,0.4-2.2,2.3-1.1,3.5l3.8,4.2c1.1,1.2,3.1,0.8,3.6-0.7l1.9-5.5

    C132.9,177.3,131.5,175.7,129.9,176.1z"
            />

            <path
              id="b5"
              class="conf6"
              d="M284.5,170.7l-5.4,1.2c-1.5,0.3-2.1,2.2-1,3.3l3.6,3.9c1,1.1,2.9,0.8,3.4-0.7l1.8-5.2

    C287.4,171.9,286.1,170.4,284.5,170.7z"
            />

            <circle id="c3" class="conf6" cx="206.7" cy="144.4" r="4.5" />

            <path
              id="c1"
              class="conf2"
              d="M176.4,192.3h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2

    C179.3,191,178,192.3,176.4,192.3z"
            />

            <path
              id="b4"
              class="conf2"
              d="M263.7,197.4h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2

    C266.5,196.1,265.2,197.4,263.7,197.4z"
            />

            <!-- yellow-strip-1-->

            <path
              id="yellow-strip"
              d="M179.7,102.4c0,0,6.6,15.3-2.3,25c-8.9,9.7-24.5,9.7-29.7,15.6c-5.2,5.9-0.7,18.6,3.7,28.2

    c4.5,9.7,2.2,23-10.4,28.2"
            />

            <path
              id="yellow-strip"
              class="conf8"
              d="M252.2,156.1c0,0-16.9-3.5-28.8,2.4c-11.9,5.9-14.9,17.8-16.4,29c-1.5,11.1-4.3,28.8-31.5,33.4"
            />

            <path
              id="a1"
              class="conf0"
              d="M277.5,254.8h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2

    C280.4,253.5,279.1,254.8,277.5,254.8z"
            />

            <path
              id="c4"
              class="conf3"
              d="M215.2,121.3L215.2,121.3c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3l0,0c-0.5,0.4-0.7,1.1-0.6,1.7v0

    c0.3,1.6-1.4,2.8-2.8,2l0,0c-0.6-0.3-1.2-0.3-1.8,0h0c-1.4,0.7-3.1-0.5-2.8-2v0c0.1-0.6-0.1-1.3-0.6-1.7l0,0

    c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1v0C212.5,119.8,214.5,119.8,215.2,121.3z"
            />

            <path
              id="b3"
              class="conf3"
              d="M224.5,191.7L224.5,191.7c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3v0c-0.5,0.4-0.7,1.1-0.6,1.7l0,0

    c0.3,1.6-1.4,2.8-2.8,2h0c-0.6-0.3-1.2-0.3-1.8,0l0,0c-1.4,0.7-3.1-0.5-2.8-2l0,0c0.1-0.6-0.1-1.3-0.6-1.7v0

    c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1l0,0C221.7,190.2,223.8,190.2,224.5,191.7z"
            />

            <path
              id="a2"
              class="conf3"
              d="M312.6,242.1L312.6,242.1c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3l0,0c-0.5,0.4-0.7,1.1-0.6,1.7v0

    c0.3,1.6-1.4,2.8-2.8,2l0,0c-0.6-0.3-1.2-0.3-1.8,0h0c-1.4,0.7-3.1-0.5-2.8-2v0c0.1-0.6-0.1-1.3-0.6-1.7l0,0

    c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1v0C309.9,240.6,311.9,240.6,312.6,242.1z"
            />

            <path
              id="yellow-strip"
              class="conf8"
              d="M290.7,215.4c0,0-14.4-3.4-22.6,2.7c-8.2,6.2-8.2,23.3-17.1,29.4c-8.9,6.2-19.8-2.7-32.2-4.1

    c-12.3-1.4-19.2,5.5-20.5,10.9"
            />
          </svg>
        </div>

        <div data-aos="fade-up" data-aos-duration="400">
          We invite you to our <br />son's Ring Ceremony!
        </div>

        <img
          data-aos="fade-up"
          data-aos-duration="400"
          src="@/assets/images/separator.svg"
          class="w-64 mx-auto mt-12"
          alt="Separator"
        />
      </div>

      <div class="flex justify-center">
        <div class="text-center">
          <div
            class="font-medium text-sm md:text-base tracking-widest"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <!-- <span class="highlight-container">
              <span class="highlight">HALDI</span>
            </span> -->
          </div>

          <div
            class="font-sans text-red-700 font-semibold text-xl md:text-3xl mt-4 mb-2"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            WEDNESDAY<br />

            OCTOBER 22, 2022
          </div>

          <div
            class="font-sans text-sm md:text-base font-medium"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            11:00 AM Onwards
          </div>
        </div>
      </div>

      <div
        class="text-center font-medium font-display text-3xl md:text-5xl mb-12"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="400"
          src="@/assets/images/separator.svg"
          class="w-64 mx-auto mt-12"
          alt="Separator"
        />
      </div>

      <div class="flex justify-center">
        <div class="text-right pr-6 md:pr-16 border-r border-gray-400">
          <!-- <div
            class="font-medium text-sm md:text-base tracking-widest"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span class="highlight-container">
              <span class="highlight">BARANUGAMANA</span>
            </span>
          </div> -->

          <!-- <div
            class="font-sans text-red-700 font-semibold text-xl md:text-3xl mt-4 mb-2"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            SUNDAY<br />

            JANUARY 23, 2022
          </div> -->

          <!-- <div
            class="font-sans text-sm md:text-base font-medium"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            10:00 AM Onwards
          </div> -->
        </div>

        <!-- <div class="text-left pl-6 md:pl-16">
          <div
            class="font-medium text-sm md:text-base tracking-wider"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <span class="highlight-container">
              <span class="highlight">RECEPTION</span>
            </span>
          </div>

          <div
            class="font-sans text-red-700 font-semibold text-xl md:text-3xl mt-4 mb-2"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            MONDAY<br />

            JANUARY 24, 2022
          </div>

          <div
            class="font-sans text-sm md:text-base font-medium"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            Dinner 6:00 PM Onwards
          </div>
        </div> -->
      </div>

      <!-- BARANUGAMANA venue text starts here -->

      <div class="mt-12 text-center">
        <div
          class="font-medium text-sm md:text-base tracking-wider mb-4"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <span class="highlight-container">
            <span class="highlight"> VENUE</span>
          </span>
        </div>

        <div
          class="font-medium"
          translate="no"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          JAMAUA SOROAN ALLAHABAD UP
        </div>

        <a
          href="https://goo.gl/maps/TjPBrNbDRKMSe7AQA"
          class="my-6 inline-block"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <span class="inline-flex rounded-full shadow-sm">
            <button
              type="button"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:border-red-800 focus:shadow-outline-indigo active:bg-red-800 transition ease-in-out duration-150"
            >
              Get direction

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#fff"
                class="ml-3 -mr-1 h-5 w-5 text-white"
                viewBox="0 0 510 510"
                style="enable-background: new 0 0 510 510"
                xml:space="preserve"
              >
                <g>
                  <g id="directions">
                    <path
                      d="M502.35,237.149l-229.5-229.5l0,0c-10.199-10.2-25.5-10.2-35.7,0l-229.5,229.5c-10.2,10.2-10.2,25.501,0,35.7l229.5,229.5

l0,0c10.2,10.2,25.501,10.2,35.7,0l229.5-229.5C512.55,262.65,512.55,247.35,502.35,237.149z M306,318.75V255H204v76.5h-51v-102

c0-15.3,10.2-25.5,25.5-25.5H306v-63.75l89.25,89.25L306,318.75z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </span>
        </a>

        <div
          class="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.40575284242!2d81.9013401!3d25.6282194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab82a7a1855ed%3A0x3011125f48d5b679!2sJamua%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696079262953!5m2!1sen!2sin"
            class="rounded-md"
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <img
        src="@/assets/images/footer-separator.svg"
        alt="Footer Separator"
        class="w-64 mx-auto mt-12"
      />

      <!-- Baranagu Separator ends here -->

      <!-- RECEPTION venue text starts here -->

      <div class="mt-12 text-center">
        <!-- <div
          class="font-medium text-sm md:text-base tracking-wider mb-4"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <span class="highlight-container">
            <span class="highlight">RECEPTION VENUE</span>
          </span>
        </div> -->

        <!-- <div
          class="font-medium"
          translate="no"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Saanaira Resorts, Gopalpur Sea Beach, Odisha
        </div> -->

        <!-- <a
          href="https://goo.gl/maps/sFupRHHK6npRFzW3A"
          class="my-6 inline-block"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <span class="inline-flex rounded-full shadow-sm">
            <button
              type="button"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:border-red-800 focus:shadow-outline-indigo active:bg-red-800 transition ease-in-out duration-150"
            >
              Get direction

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#fff"
                class="ml-3 -mr-1 h-5 w-5 text-white"
                viewBox="0 0 510 510"
                style="enable-background: new 0 0 510 510"
                xml:space="preserve"
              >
                <g>
                  <g id="directions">
                    <path
                      d="M502.35,237.149l-229.5-229.5l0,0c-10.199-10.2-25.5-10.2-35.7,0l-229.5,229.5c-10.2,10.2-10.2,25.501,0,35.7l229.5,229.5

l0,0c10.2,10.2,25.501,10.2,35.7,0l229.5-229.5C512.55,262.65,512.55,247.35,502.35,237.149z M306,318.75V255H204v76.5h-51v-102

c0-15.3,10.2-25.5,25.5-25.5H306v-63.75l89.25,89.25L306,318.75z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </span>
        </a> -->

        <!-- <div
          class="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.5480316037924!2d84.90803591495856!3d19.258519686983504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d59badd67f227%3A0x137d3c0f1eba2d3!2sSaanaira%20Resorts%20%26%20Spa!5e0!3m2!1sen!2sin!4v1640531584630!5m2!1sen!2sin"
            class="rounded-md"
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </div> -->
      </div>

      <!-- <img
        src="@/assets/images/footer-separator.svg"
        alt="Footer Separator"
        class="w-64 mx-auto mt-12"
      /> -->

      <!-- Separator ends here -->

      <!-- <div
        class="text-center mt-12 mb-10 font-display text-xl md:text-3xl"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        Enjoy the wedding invitation video

        <span class="hidden md:inline"><br /></span>
      </div> -->

      <!-- <div
        class="max-w-3xl rounded-md mx-auto"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <LazyYoutubeVideo src="https://www.youtube.com/embed/ZiEsRa3yie0" />
      </div> -->

      <div
        class="text-center font-medium font-display text-3xl md:text-5xl mb-12"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="400"
          src="@/assets/images/separator.svg"
          class="w-64 mx-auto mt-12"
          alt="Separator"
        />
      </div>

      <div
        class="text-center mt-8 mb-6 font-display text-xl md:text-3xl"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        With best compliments<br />

        <!-- The Patras -->

        <span class="hidden md:inline"><br /></span>
      </div>

      <div class="w-full m-auto mt-4">
        <!-- <img
          data-aos="fade-up"
          data-aos-delay="600"
          src="@/assets/images/patra-family.jpeg"
          class="w-full mx-auto hidden md:block"
          alt="Deepankar & Boby"
        /> -->

        <!-- <img
          data-aos="fade-up"
          data-aos-delay="100"
          src="@/assets/images/patra-family.jpeg"
          class="w-full mx-auto block md:hidden"
          alt="Deepankar & Boby"
        /> -->
      </div>

      <div
        class="text-center font-medium font-display text-3xl md:text-5xl mb-12"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="400"
          src="@/assets/images/separator.svg"
          class="w-64 mx-auto mt-12"
          alt="Separator"
        />
      </div>

      <div
        class="flex flex-wrap align-center justify-center mt-16 px-4"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <div
          class="select-none cursor-pointer rounded-full border border-gray-400 hover:border-blue-500 hover:bg-blue-200 px-4 py-2 mr-3 mb-3 transition ease-in-out duration-150"
          @click="updateReaction('blessed')"
        >
          <div class="flex items-center">
            <img
              alt="Blessed"
              class="w-10 md:w-12 mx-auto"
              src="https://res.cloudinary.com/maxix/image/upload/v1623986342/blessed_vqdfel.gif"
            />

            <div class="pl-2 pr-2 text-2xl">
              {{ reactions.blessed | formatNumber }}
            </div>
          </div>
        </div>

        <div
          class="select-none cursor-pointer rounded-full border border-gray-400 hover:border-blue-500 hover:bg-blue-200 px-4 py-2 mr-3 mb-3 transition ease-in-out duration-150"
          @click="updateReaction('clap')"
        >
          <div class="flex items-center">
            <img
              alt="Clap"
              class="w-10 md:w-12 mx-auto"
              src="https://res.cloudinary.com/maxix/image/upload/v1623986338/clap_hcjxp0.gif"
            />

            <div class="pl-2 pr-2 text-2xl">
              {{ reactions.clap | formatNumber }}
            </div>
          </div>
        </div>

        <div
          class="select-none cursor-pointer rounded-full border border-gray-400 hover:border-blue-500 hover:bg-blue-200 px-4 py-2 mr-3 mb-3 transition ease-in-out duration-150"
          @click="updateReaction('love')"
        >
          <div class="flex items-center">
            <img
              alt="Love"
              class="w-10 md:w-12 mx-auto"
              src="https://res.cloudinary.com/maxix/image/upload/v1623986340/love_qoxuvz.gif"
            />

            <div class="pl-2 pr-2 text-2xl">
              {{ reactions.love | formatNumber }}
            </div>
          </div>
        </div>

        <div
          class="select-none cursor-pointer rounded-full border border-gray-400 hover:border-blue-500 hover:bg-blue-200 px-4 py-2 mr-3 mb-3 transition ease-in-out duration-150"
          @click="updateReaction('superlike')"
        >
          <div class="flex items-center">
            <img
              alt="Superlike"
              class="w-10 md:w-12 mx-auto"
              src="https://res.cloudinary.com/maxix/image/upload/v1623986343/superlike_qttsgq.gif"
            />

            <div class="pl-2 pr-2 text-2xl">
              {{ reactions.superlike | formatNumber }}
            </div>
          </div>
        </div>

        <div
          class="select-none cursor-pointer rounded-full border border-gray-400 hover:border-blue-500 hover:bg-blue-200 px-4 py-2 mb-3 transition ease-in-out duration-150"
          @click="updateReaction('cool')"
        >
          <div class="flex items-center">
            <img
              alt="Cool"
              class="w-10 md:w-12 mx-auto"
              src="https://res.cloudinary.com/maxix/image/upload/v1623986342/cool_qctmrh.gif"
            />

            <div class="pl-2 pr-2 text-2xl">
              {{ reactions.cool | formatNumber }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <img
          alt="Deepankar & Boby "
          data-aos="fade-up"
          data-aos-duration="400"
          src="@/assets/images/footer-logo.png"
          class="mx-auto w-24 md:w-32"
        />
      </div>

      <div class="mt-5 text-center py-4 text-sm">
        <div>With ❤ by</div>

        <a
          class="text-base border-b border-gray-400 inline-block hover:text-red-700 hover:border-red-700"
          href="https://www.instagram.com/ibibhu/"
          target="_blank"
          @click="updateReaction('profileB')"
          >bd</a
        >
      </div>

      <div class="flex justify-center mt-8">
        <!-- <div
          class="cursor-pointer transform translate-y-0 hover:-translate-y-1 transition-all ease-in-out duration-150"
        >
          <ShareNetwork
            network="facebook"
            url="https://abinash-pravanjana.netlify.app/"
            title="Deepankar & Boby  | Are getting married!"
            description="You are cordially invited to celebrate our marriage."
            hashtags="wedding,invitation,BikyCaughtTitly"
          >
            <img
              src="@/assets/images/share-on-facebook-button.svg"
              class="w-16"
            />
          </ShareNetwork>
        </div> -->

        <!-- <div
          class="cursor-pointer mx-6 transform translate-y-0 hover:-translate-y-1 transition-all ease-in-out duration-150"
        >
          <ShareNetwork
            network="twitter"
            url="https://abinash-pravanjana.netlify.app/"
            title="Deepankar & Boby  | Are getting married!"
            description="You are cordially invited to celebrate our marriage."
            hashtags="wedding,invitation,BikyCaughtTitly"
          >
            <img
              src="@/assets/images/share-on-twitter-button.svg"
              class="w-16"
            />
          </ShareNetwork>
        </div> -->

        <!-- <div
          class="cursor-pointer transform translate-y-0 hover:-translate-y-1 transition-all ease-in-out duration-150"
        >
          <ShareNetwork
            network="whatsapp"
            url="https://abinash-pravanjana.netlify.app/"
            title="Deepankar & Boby  | Are getting married!"
            description="You are cordially invited to celebrate our marriage."
            hashtags="wedding,invitation,BikyCaughtTitly"
          >
            <img
              src="@/assets/images/share-on-whatsapp-button.svg"
              class="w-16"
            />
          </ShareNetwork>
        </div> -->
      </div>
    </div>
    <div class="bg-footer-pattern w-full h-20 footer-pattern bg-repeat-x"></div>
  </div>
</template>

<script>
import AOS from 'aos'
import { fireDb } from '@/plugins/firebase.js'
export default {
  filters: {
    formatNumber(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num)
    },
  },
  data() {
    return {
      reactions: {
        blessed: 0,
        clap: 0,
        love: 0,
        superlike: 0,
        cool: 0,
        profileB: 0,
      },
      showArrow: true,
    }
  },
  mounted() {
    this.fetchReactions()
    const vm = this
    setTimeout(function () {
      vm.showArrow = true
    }, 1000)
  },
  methods: {
    getRandomStyle() {
      const left = Math.random() * 100 // Random left position (0% to 100%)
      const animationDuration = Math.random() * 5 + 5 // Random duration (5s to 10s)
      const animationDelay = Math.random() * 3 // Random delay (0s to 3s)

      return {
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
      }
    },
    async updateReaction(name) {
      const ref = fireDb.collection('reactions').doc('gandhi')
      const document = {
        [name]: this.reactions[name] + 1,
      }
      try {
        await ref.update(document)
      } catch (e) {
        // TODO: error handling
      }
    },
    fetchReactions() {
      const ref = fireDb.collection('reactions').doc('gandhi')
      ref.onSnapshot(
        (docSnapshot) => {
          this.reactions = docSnapshot.data()
          AOS.refreshHard()
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      )
    },
  },
}
</script>

<style scoped>
.confetti {
  position: absolute;
  top: -50px; /* Start above the viewport */
  width: 100%;
  pointer-events: none;
}

.confetti-piece {
  position: absolute;
  opacity: 0;
  animation: fall linear forwards, fadeOut linear forwards;
}

@keyframes fall {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh); /* Fall to the bottom of the viewport */
    opacity: 0;
  }
}

@keyframes fadeOut {
  80% {
    opacity: 1; /* Fully visible until 80% of the animation */
  }
  100% {
    opacity: 0; /* Fade out */
  }
}
</style>
