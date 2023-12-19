import { Box, Button, Center, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import StaffMessage from "./StaffMessage";
import _ from "lodash";

const StaffMessages = () => {
  const items = [
    {
      imageSRC: "Mrs-Tania-Lofty-Eaton.png",
      name: "Tania",
      details: "Tania (van der Merwe) Lofty-Eaton (Namibia) Science Teacher",
      countryFlag: "Namibia.png",
      countryName: "Namibia",
      message:
        "Working with Dr. Tam, Mr. Andy, and the Dr. Myatt Academy of Learning team is nothing less than MAGICAL. An absolute pleasure! The Academy team is a group of highly skilled professionals. Dr. Tam and Mr. Andy take their time to get to know every member on an individual level. They support each employee and are always available. Working for the Academy exceeded all of my expectations. It is a wonderful experience to be part of a world changing mission and to know that we will touch the lives of future generations.",
    },
    {
      imageSRC: "Carissa-Wade.png",
      name: "Carissa Wade",
      details: "Carissa Wade (USA) Mathematics Teacher",
      countryFlag: "United-States.png",
      countryName: "United States",
      message:
        "Where do I start? Working for and with Dr. Myatt Academy has been fantastic! The mission is absolutely amazing! They put their heart and soul into this school. Their goal to help all these different students around the world is something that should be recognized worldwide! They are honest, caring, and very supportive. They will make you feel like family! This school is incredible; only magnificent things will come from the Dr. Myatt Academy of Learning. The curriculum is top-notch and well put-together! I love working here and look forward to a bright future with this Academy.",
    },
    {
      imageSRC: "Mrs-Esmari-Kotze-2.jpg",
      name: "Mrs. Esmari Kotze",
      details:
        "Mrs. Esmari Kotze (South Africa) Director of Curriculum Development and Quality Assurance",
      countryFlag: "South-Africa.png",
      countryName: "South Africa",
      message:
        "At the Myatt Academy we value each other and work together as a family. We are a multicultural group of professionals with one common goal - quality education for all. The Myatt Academy gave me the opportunity to live my dream and become a better version of myself.",
    },
    {
      imageSRC: "Mackenzie-Boyer.png",
      name: "Mackenzie Boyer",
      details: "Mackenzie Boyer (USA) ESL Consultant and Teacher",
      countryFlag: "United-States.png",
      countryName: "United States",
      message:
        "The Dr. Myatt Academy of Learning has been a fantastic company to work for. Starting with the mission itself, Dr. Myatt has established a high standard of education, a pure love of it, and a calling to share a quality education with children around the world who are otherwise denied access. The inspiration to collaborate and work toward this mission comes inherently, and Dr. Myatt drives the feel-good digital work atmosphere up a notch with her can-do attitude, encouragement, flexibility, and trust in her team, of which I am so proud and happy to be part of.",
    },
    {
      imageSRC: "Nuzhat-Maria.png",
      name: "Nuzhat Maria",
      details: "Nuzhat Mariam (Bangladesh) Academy Intern",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "In the past, I often left part-time job and internship opportunities due to dissatisfaction with the working environment and feeling that I was not gaining any valuable skills. However, these experiences all changed when I secured an internship at the Dr. Myatt Academy of Learning. Working for the Academy brought me immense joy. The Academy provides an exceptional work environment that is supportive and enjoyable. Unlike many other internships where employers often neglect to provide compensation, the Academy values its interns and ensures they are well-paid for their contributions. I am fortunate to have the opportunity to collaborate with such an incredible company.",
    },
    {
      imageSRC: "Abu-Sayeed.png",
      name: "Abu Sayeed",
      details:
        "Abu Sayeed (Bangladesh) Vice-President of Software, Engineering and Technical Services",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "I am thrilled to be a part of the Dr. Myatt Academy of Learning as a software engineer. The company's commitment to providing high-quality education through innovative technologies and its supportive work environment has made my experience truly rewarding. I am proud to contribute to an organization that is transforming the way people learn and grow academically.",
    },
    {
      imageSRC: "Fardeen-Faruk.png",
      name: "Fardeen Faruk",
      details:
        "Fardeen Faruk (Bangladesh) Special Assistant to the CEO and Director of Curriculum Development and Quality Control",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "The Academy is a wonderful place to work. I've been with the Academy for over two years, and it is hard to do it justice in only a couple of sentences. The team works toward our mission with the greatest sincerity and being a part of it has truly been a privilege. There is a lot that the Academy has given me, but I am most thankful for its role in helping me realize my deep passion for children's education.",
    },
    {
      imageSRC: "Shikha-Goswami.png",
      name: "Shikha Goswami",
      details: "Shikha Goswami (India) Science Teacher",
      countryFlag: "India.png",
      countryName: "India",
      message:
        "I am truly grateful for the opportunity to work at the Myatt Academy of Learning. It is a positive workplace where management is supportive and collaborative. The Academy's mission to provide quality education and foster holistic development is highly valuable. I wholeheartedly recommend the Dr. Myatt Academy of Learning to anyone seeking a nurturing and inspiring working environment.",
    },
    {
      imageSRC: "Simonet-Estopace.png",
      name: "Simonet Estopace",
      details: "Simonet Estopace (Philippines) Elementary Teacher",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "The Dr. Myatt Academy of Learning is an institution that focuses on giving the best not only to the learners but also to its teachers by empowering them with skills that develop instructors dedicated to lifelong learning.",
    },
    {
      imageSRC: "Tissan-Steele.png",
      name: "Tissan Steele",
      details: "Tissan Steele (Jamaica) Early Childhood Teacher",
      countryFlag: "Jamaica.png",
      countryName: "Jamaica",
      message:
        "Working for the Dr. Myatt Academy of Learning is a rewarding start to a career in teaching and learning. The Academy has a very dedicated team who believe in their mission, vision and they enthusiastically push forward. This is the way to go! Choose the Dr. Myatt Academy of Learning!",
    },
    {
      imageSRC: "Raida-Zaman.png",
      name: "Raida Zaman",
      details: "Raida Zaman (Bangladesh) Academy Intern",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "Working for the Myatt Academy has been a blessing. They not only care about their team but also give us the time and space to complete our work. They care about the health of their team. This is what I love the most about the Academy. The management’s caring nature always motivated me to work my hardest.",
    },
    {
      imageSRC: "Glyn-Vicente.png",
      name: "Glyn Vicente",
      details: "Glyn Vicente (Philippines) Science Teacher",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "Being a public-school teacher in the Philippines, I find the Academy most promising. Working with Dr. Myatt, I can feel her sincerity to help girls attain quality education worldwide. The Academy is goal oriented, and I am excited for it to start in the Philippines so my son can experience quality education.",
    },
    {
      imageSRC: "Jacqueline-Tiu.png",
      name: "Jacqueline Tiu",
      details: "Jacqueline Tiu (Philippines) Academy Writer and Teacher",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "The Dr. Myatt Academy is a wonderful company to work for! Dr. Tamara is a kind leader who has a noble vision/mission for kids around the world. It is a joy to be part of a team that fulfills the need to make quality education accessible to all. I look forward to more wonderful years working for the Academy.",
    },
    {
      imageSRC: "Ranine-Sabat.png",
      name: "Ranine Sabat",
      details: "Ranine Sabat (Lebanon) Mathematics Teacher",
      countryFlag: "Lebanon.png",
      countryName: "Lebanon",
      message:
        "Dr. Myatt Academy of Learning is a great company to work with. Your work and efforts are appreciated. They make you believe in yourself. Even more important is that they steer the world to a better place where education is available for all.",
    },
    {
      imageSRC: "Salma-Farha.png",
      name: "Salma Farha",
      details: "Salma Farha (Bangladesh) Academy Intern",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "I will always be glad to be a part of such a great company! I was given the chance to use my creativity and experience to create interesting and engaging materials. I was given the freedom and trust to try out new concepts and fresh approaches to content development. This independence, along with the help and direction of my superiors, allowed me to create material with the potential for genuine impact and meaning.",
    },
    {
      imageSRC: "Kristen-Van-Staden.png",
      name: "Kristen Van Staden",
      details: "Kristen Van Staden (South Africa) Science Teacher",
      countryFlag: "South-Africa.png",
      countryName: "South Africa",
      message:
        "Dr. Tam and Mr. Andy are amazing people to work for and their motivation backing the Myatt Academy is inspiring! During my time creating teaching lessons for the Academy, I was given the company's full support. I was provided the tools I needed to edit my work and was supported by colleagues while compiling supporting documentation. I always feel at ease to ask for guidance. My queries are always welcomed, and positive support always provided. Dr. Tam and Mr. Andy are very understanding of circumstances, and great consideration is made with regard to timelines. I look forward to continuing work for Dr. Tam and Mr. Andy in the healthy working environment they have created.",
    },
    {
      imageSRC: "Christine-Thevamirtha.png",
      name: "Christine Thevamirtha",
      details: "Christine Thevamirtha (Sri Lanka) Academy Intern",
      countryFlag: "Sri-Lanka.png",
      countryName: "Sri Lanka",
      message:
        "Many people dream of having a job which is fun and interesting. I am really fortunate to have such an opportunity to work for the Dr. Myatt Academy of Learning. The mission of the academy is truly inspiring as it aims to support students who are in need. The best thing about the Academy is you never feel exhausted by the work assigned. The Academy’s work culture is fantastic and has helped me to learn and grow both personally and professionally. This is the best company I have ever worked for. I am looking forward to continuing my journey with the Academy.",
    },
    // {
    //   imageSRC: "Galib-Nurranabi.png",
    //   name: "Galib Nurranabi",
    //   details: "Galib Nurranabi (Bangladesh) Director, Technology",
    //   countryFlag: "Bangladesh.png",
    //   countryName: "Bangladesh",
    //   message:
    //     "The Myatt Academy is a remarkable online learning platform that offers grade-specific courses led by professional instructors. It provides students of all grades with an exceptional educational experience, tailored to their specific needs, and fosters academic growth.",
    // },
    {
      imageSRC: "Kalliopi-Georgopoulou.png",
      name: "Kalliopi Georgopoulou",
      details: "Kalliopi Georgopoulou (Greece) Math Teacher",
      countryFlag: "Greece.png",
      countryName: "Greece",
      message:
        "The Dr. Myatt Academy of Learning is much more than a great company to work for. It's a team of kind people that share the same mission: a love for education and willingness to help those in need. I am grateful that I was given the chance to be part of the Academy family.",
    },
    // {
    //   imageSRC: "Ali-Al-Khateeb.png",
    //   name: "Ali Al Khateeb",
    //   details: "Ali Al Khateeb (Iraq) Lead, Graphic Design",
    //   countryFlag: "Syria.png",
    //   countryName: "Syria",
    //   message:
    //     "The academy is a great place to work as it provides a friendly and supportive work environment where I can contribute and make a difference. I love being part of a mission that matters and a vision that inspires.",
    // },
    {
      imageSRC: "Dema-Daoun.png",
      name: "Dema Daoun",
      details: "Dema Daoun (Syria) Co-Lead, Graphic Design",
      countryFlag: "Syria.png",
      countryName: "Syria",
      message:
        "The Dr. Myatt Academy of Learning is a wonderful place to work because they are always looking for ways to improve and innovate. The academy fosters a culture of trust, respect, and empowerment where I can grow and thrive. I love being part of a team that works hard and has fun together. The Academy is not only a successful and reputable organization, but also a positive and inspiring one.",
    },
    {
      imageSRC: "Aamal-Alshihawi.png",
      name: "Aamal Alshihawi",
      details: "Aamal Alshihawi (Syria) Manager, Internship Programs",
      countryFlag: "Syria.png",
      countryName: "Syria",
      message:
        "I admire a healthy and encouraging working environment, and this company has it all. The Dr. Myatt Academy of Learning provides a great working environment. Based on the company's mission of providing education to those deprived of it, it is a noble cause and a positive place to work. I am proud to be a part of it and the life-changing impact it will have on so many lives.",
    },
    {
      imageSRC: "Mahbuba-Haque.png",
      name: "Mahbuba Haque",
      details: "Mahbuba Haque (Bangladesh) Academy Intern",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "The Myatt Academy has given me the perfect platform to fulfill my dream of helping the underprivileged. I am grateful for the impact I've made and the Academy’s positive environment that motivates me. I never felt like ‘just another intern’. Instead, when working for the Academy, I felt like a family member. Even when I did not submit my work for being extremely ill, I really appreciated the support I was given. I admire the Myatt Academy and hope to work for this company long term. These words truly come from my heart. The Academy is my second home and has positively shaped my character.",
    },

    {
      imageSRC: "Noreen-Cruz.png",
      name: "Noreen Cruz",
      details: "Noreen Cruz (Philippines) Early Childhood Teacher",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "I have nothing but great praise for the Academy! The team is very supportive and professional. I'm very honored to be part of a team who goes to any length and takes great pride to provide quality education to those in need. I can't wait to witness the impact we are going to make in the world!",
    },
    {
      imageSRC: "Michelle-Dion.png",
      name: "Michelle Dion",
      details: "Michelle Dion (Canada) Academy Editor",
      countryFlag: "Canada.png",
      countryName: "Canada",
      message:
        "The directors and staff of Dr. Myatt Academy of Learning are wholly committed to the well-being and educational success of the families and children they serve. Their unwavering dedication, diligent efforts, and meticulous attention to detail distinguish the academy and its teachers from others in their field.",
    },
    {
      imageSRC: "Felicia-Forrester-Ellis.png",
      name: "Felicia Forrester-Ellis",
      details: "Felicia Forrester-Ellis (Jamaica)",
      countryFlag: "Jamaica.png",
      countryName: "Jamaica",
      message:
        "Warm, positive, encouraging, consistent, humble, caring are just a few of the adjectives I would use to describe my encounter with this institution. As a result I feel elated to share my experience with you. From our very first conversation I was impressed. I felt at home. I felt as if I belonged with this overwhelming desire to do my best. This I might add is rather unusual. We often find that individuals may not be so warm and accommodating, but I can truly say that each encounter has been the same. I have no hesitation in extending an invitation to you. Come on board. Join our team builders as we work and learn together.",
    },
    {
      imageSRC: "Ruth-Alfar.png",
      name: "Ruth Alfar",
      details: "Ruth Alfar (Philippines) Academy Writer",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "The company is a wonderful place to work and the working environment is warm and friendly. There is never a dull moment with this company.",
    },
    {
      imageSRC: "Grace-Sutherland.png",
      name: "Grace (Slick) Sutherland",
      details: "Grace (Slick) Sutherland (Swaziland) Science Teacher",
      countryFlag: "Swaziland.png",
      countryName: "Swaziland",
      message: `The Dr. Myatt Academy is unique in that it combines learning with a passion for education. The Academy is an exciting place to teach and learn as we are going into some of the most dark, desperate places, and situations and bringing the light of learning and knowledge. I am privileged to be a part of a creative team of educators who genuinely believe in the Academy motto, "Education for All," and everything we do has this as our main focus and motivation. I feel encouraged and supported in my role as an educator every day, and I look forward to the day when the Myatt Academy is the internationally recognized institution it deserves to be, bringing learning to regions of the world where it is needed most.`,
    },
    {
      imageSRC: "Angel-Lumbania.png",
      name: "Angel Lumbania",
      details: "Angel Lumbania (Philippines) Math Teacher",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "Dr. Myatt Academy of Learning is highly recommended for the services they provide their teachers. Ever since I started working for this academy, I felt welcomed and honored. They took the time to understand my needs and provided me with excellent recommendations. I also appreciate the kind advice of Dr. Myatt for helping me improve as a teacher and as a person. Overall, my experience with DMAL is outstanding, and I will definitely be using all the things I learned from this Academy in the future.",
    },
    {
      imageSRC: "DR-MA-2.png",
      name: "Dr. MA",
      details: "Dr. MA (Afghanistan)",
      countryFlag: "Afghanistan.png",
      countryName: "Afghanistan",
      message:
        "The Dr. Myatt Academy is one of the best places I have ever worked. If you want to have your kids well educated, admit them to the lovely and modern Myatt Academy. I believe that the Academy will do great work with the new generation.",
    },
    {
      imageSRC: "Teacher-Ana.png",
      name: "Teacher Ana",
      details: "Teacher Ana (Fiji)",
      countryFlag: "Fiji.png",
      countryName: "Fiji",
      message:
        "I love this Academy! A great working environment. High expectations and high standards, and the company has a great working environment. Very supportive, dedicated, engaged, and hands on management. No place better to work! Join us!",
    },
    {
      imageSRC: "Teacher-Jo-Anne.png",
      name: "Teacher Jo-Anne",
      details: "Teacher Jo-Anne (British Virgin Islands)",
      countryFlag: "British-Virgin-Islands.png",
      countryName: "British Virgin Islands",
      message: `I have only recently joined the Academy, but my first encounters with Academy management have been great. Very supportive of their teachers and very dedicated to education. So far, all is superb. Can't wait to get started. Love the mission!`,
    },
    {
      imageSRC: "Teacher-Marie.png",
      name: "Teacher Marie",
      details: "Teacher Marie (Trinidad and Tobago)",
      countryFlag: "Trinidad-and-tobago.png",
      countryName: "Trinidad and Tobago",
      message:
        "The Dr. Myatt Academy of Learning has an incredible mission which is one of the reasons I choose to join. Academy leaders are very engaged and communicative. This is a delightful change from the norm.",
    },
    {
      imageSRC: "April-Patigas.png",
      name: "April Patigas",
      details: "April Patigas (Philippines)",
      countryFlag: "Philippines.png",
      countryName: "Philippines",
      message:
        "Working for the Academy is an honor and a pleasure. Knowing that our work will help so many students brings me such joy.",
    },
    {
      imageSRC: "Masha-moskovchuk.png",
      name: "Masha moskovchuk",
      details: "Masha moskovchuk (ukraine) UI/UX Design",
      countryFlag: "Ukraine.png",
      countryName: "Ukraine",
      message:
        "Working as a designer at Academy has been an incredibly fulfilling experience. The company fosters a welcoming and collaborative work environment, where I feel supported and valued as a team member. I am grateful to be part of a team that shares a common mission and inspires me to push the boundaries of design.",
    },
    {
      imageSRC: "Sweety-Kuldeep.png",
      name: "Sweety Kuldeep",
      details: "Sweety Kuldeep (India) Special Assistant to the CEO ",
      countryFlag: "India.png",
      countryName: "India",
      message:
        "Working with the Academy has been incredibly rewarding. It not only cultivates a love for learning but also strikes a perfect balance between a flexible and professional environment. It fills me with gratitude to be a part of the Academy's dedication to excellence and its transformative mission of empowering individuals through education.",
    },
    {
      imageSRC: "Tusti-Bose.png",
      name: "Tusti Bose",
      details: "Tusti Bose (Bangladesh)",
      countryFlag: "Bangladesh.png",
      countryName: "Bangladesh",
      message:
        "The BEST academy ever - from the management to the working environment. Everything about this Academy is amazing. I recommend this employer to everyone and forever.",
    },
  ];

  return (
    <Container maxW="container.xl" id="testimonials">
      <Center>
        <Text as="h2" fontSize="3xl" fontWeight="bold" mb="10" color="black">
          Staff Messages
        </Text>
      </Center>
      {/* custom navigation button */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Mousewheel, Navigation, Autoplay]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <PrevButton />

        {items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <StaffMessage
                imageSRC={`/avatar/${item.imageSRC}`}
                name={item.name}
                details={item.details}
                message={item.message}
                countryName={item.countryName}
                countryFlag={`/flags/${item.countryFlag}`}
              />
            </SwiperSlide>
          );
        })}

        <NextButton />
      </Swiper>
    </Container>
  );
};

export default StaffMessages;

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <Button
      onClick={() => swiper.slideNext()}
      position="absolute"
      right="0"
      top={{
        base: "10%",
        lg: "50%",
      }}
      transform="translateY(-50%)"
      zIndex="1"
      bg="theme.pastelYellow"
      _hover={{ bg: "#f5d8c8" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
        viewBox="0 0 31 21"
        fill="none"
      >
        <g clipPath="url(#clip0_585_22386)">
          <path
            d="M1.40749 11.4559L29.3142 11.4559C31.1906 11.4559 31.1937 8.64014 29.3142 8.64014L1.40749 8.64014C-0.468916 8.64014 -0.472025 11.4559 1.40749 11.4559Z"
            fill="#DD7D46"
          />
          <path
            d="M19.8604 3.15178C21.4112 4.08491 22.8755 5.12741 24.2378 6.30406C24.948 6.91745 25.631 7.56007 26.284 8.23006C26.5679 8.52134 26.8462 8.81778 27.1186 9.11914C27.383 9.41163 27.7308 10.0287 28.0735 10.2251L28.1188 10.2838C28.3338 9.62806 28.3235 9.43643 28.0881 9.7089C27.8671 9.82283 27.6631 10.1264 27.486 10.3004C27.118 10.6619 26.75 11.0234 26.3821 11.3849C25.6462 12.1078 24.9102 12.8308 24.1743 13.5537C22.6355 15.0654 21.0968 16.577 19.558 18.0886C18.2414 19.3821 20.3019 21.3747 21.6201 20.0797C23.3595 18.3709 25.099 16.6621 26.8384 14.9533C27.7082 14.0989 28.5779 13.2444 29.4476 12.39C30.312 11.5409 31.3487 10.6812 30.8857 9.36511C30.5457 8.39888 29.5477 7.51612 28.8509 6.76885C28.1303 5.99588 27.3712 5.25642 26.5765 4.55437C24.9574 3.12415 23.1941 1.84077 21.3322 0.720459C19.7349 -0.240621 18.2692 2.19442 19.8604 3.15178Z"
            fill="#DD7D46"
          />
        </g>
        <defs>
          <clipPath id="clip0_585_22386">
            <rect
              width="20"
              height="31"
              fill="white"
              transform="translate(31 0.5) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    </Button>
  );
};

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <Button
      position="absolute"
      left="0"
      top={{
        base: "10%",
        lg: "50%",
      }}
      transform="translateY(-50%)"
      zIndex="1"
      bg="theme.pastelYellow"
      _hover={{ bg: "#f5d8c8" }}
      onClick={() => swiper.slidePrev()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
        viewBox="0 0 31 21"
        fill="none"
      >
        <g clipPath="url(#clip0_585_22384)">
          <path
            d="M29.5925 11.4559L1.68581 11.4559C-0.190591 11.4559 -0.193699 8.64014 1.68581 8.64014L29.5925 8.64014C31.4689 8.64014 31.472 11.4559 29.5925 11.4559Z"
            fill="#DD7D46"
          />
          <path
            d="M11.1396 3.15178C9.5888 4.08491 8.12453 5.12741 6.76222 6.30406C6.05205 6.91745 5.36901 7.56007 4.71598 8.23006C4.43208 8.52134 4.15379 8.81778 3.8814 9.11914C3.61703 9.41163 3.2692 10.0287 2.9265 10.2251L2.8812 10.2838C2.66624 9.62806 2.67648 9.43643 2.91191 9.7089C3.13287 9.82283 3.33686 10.1264 3.51403 10.3004C3.882 10.6619 4.24996 11.0234 4.61792 11.3849C5.35385 12.1078 6.08977 12.8308 6.8257 13.5537C8.36446 15.0654 9.90322 16.577 11.442 18.0886C12.7586 19.3821 10.6981 21.3747 9.37994 20.0797C7.64048 18.3709 5.90102 16.6621 4.16156 14.9533C3.29183 14.0989 2.4221 13.2444 1.55236 12.39C0.687956 11.5409 -0.348706 10.6812 0.114349 9.36511C0.454296 8.39888 1.45234 7.51612 2.14906 6.76885C2.86972 5.99588 3.62882 5.25642 4.42354 4.55437C6.04257 3.12415 7.80586 1.84077 9.66781 0.720459C11.2651 -0.240621 12.7308 2.19442 11.1396 3.15178Z"
            fill="#DD7D46"
          />
        </g>
        <defs>
          <clipPath id="clip0_585_22384">
            <rect
              width="20"
              height="31"
              fill="white"
              transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Button>
  );
};
