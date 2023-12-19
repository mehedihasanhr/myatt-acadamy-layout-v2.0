import { Notice } from "@/types";

const earlyChildhoodTeacher = [
  {
    id: 1,
    image: "Ms-Joanie-Infante.png",
    name: "Ms. Joanie Infante",
    flag: "Philippines.png",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message:
      "With a master's degree in educational management and an undergraduate degree in elementary education from the Polytechnic University of the Philippines, as well as teacher licensure by the Philippine Regulation Commission for Teacher Education, Ms. Joanie is well-qualified to lead the Academy's students through the early childhood education experience. She is currently teaching in the Lucena area of the Philippines, where her students are inspired by her enthusiasm for teaching and boundless energy. Ms. Joanie is eager to welcome new students to her early childhood classes and lead them on an exciting academic journey.",
  },
  {
    id: 2,
    image: "Ms-Surabhi-Bhavishi.png",
    flag: "India.png",
    name: "Ms. Surabhi Bhavishi",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message:
      "With undergraduate degrees and a PGCE (Post Graduate Certificate in Education) in early childhood education from Birmingham City University in the United Kingdom, Ms. Surabhi is a British certified early years teacher. Coming from India's capital city under the British Raj, Ms. Surabhi resides in Kolkata (formerly Calcutta). Started as an East India trading location, the city is now famous for its festivals, art galleries, architecture, and is home to Mother Theresa's famous missionary work. With Ms. Surabhi's charisma and flair for teaching, students will love her classes!",
  },
  {
    id: 3,
    image: "Ms-Christel-Yarso.png",
    flag: "Philippines.png",
    name: "Ms. Christel Yarso",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message:
      "When not teaching in Philippine public schools, Ms. Christel leads the Academy's early childhood classes from the nation's sunny Southern region. She is an education graduate from the University of the Southeastern Philippines, specializing in early childhood education and is certified and licensed by the Philippine Regulation Commission for Teacher Education. In Ms. Christel's classes, the Academy's young learners are in brilliantly qualified and capable hands.",
  },
  {
    id: 4,
    image: "Ms-Tissan-Steele.png",
    flag: "Jamaica.png",
    name: "Ms.Tissan Steele",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message:
      "Coming from the tropical Caribbean Island of Jamaica, known as the birthplace of reggae music, is certified teacher, Ms. Tissan Steele. She holds an undergraduate degree in early childhood education from Shortwood Teachers' College in Kingston, and with many years of teaching experience at the early childhood levels, the Academy's young learners will be in very capable hands in Ms. Tissan's classes. Her enthusiasm is infectious, and we are certain students will love her classes!",
  },
  {
    id: 5,
    image: "Ms-Honey-Sheen-Demogena.png",
    flag: "Philippines.png",
    name: "Ms. Honey Sheen Demogena",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message:
      "As a former school principal with a master's degree in early childhood education from La Salle University, Honey is an expert educator. Although she was originally trained and educated to be an accountant, Honey discovered a true love of education, specifically early childhood education, and decided to pursue this new career with passion and fervor. She became licensed by the Philippine Regulation Commission for Teacher Education and the rest is history. With Honey's guidance, the Academy's early learners are in the hands of one experienced and dedicated teacher.",
  },
  {
    id: 6,
    image: "Ms-Noreen-Cruz.png",
    flag: "Philippines.png",
    name: "Ms. Noreen Cruz",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message:
      "A lover of travel who has recently explored Vietnam, is the Academy's qualified early childhood educator, Ms. Noreen Cruz. A licensed early childhood educator, certified by the Philippine Regulation Commission for Teacher Education, and with a bachelor's degree in early childhood education from Miriam College, Ms. Noreen is an expert early childhood educator. Her enthusiasm for teaching comes across in her classes. Students will adore Ms. Noreen's lessons!",
  },
  {
    id: 7,
    image: "Lara-Human.png",
    flag: "South-Africa.png",
    name: "Ms. Lara Human",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message: `Joining the Academy from a pristine rural setting on the outskirts of beautiful Cape Town is the Academy’s qualified early childhood educator, Ms. Lara. A graduate of the University of South Africa’s Bachelor of Education program in early childhood education and with many years of experience leading early elementary classes, students are in the hands of a very capable teacher with Ms. Lara.`,
  },
  {
    id: 8,
    image: "Yuvi-Maharaj.png",
    flag: "South-Africa.png",
    name: "Mr. Yuvi Maharaj",
    shift: "early-childhood-ages-3-5",
    shift_title: "Early Childhood Teachers (Ages 3-5)",
    message: `A Bachelor of Education graduate in early childhood development, Ms. Yuvi is fully qualified to teach early elementary classes for grades K-3. Certified by the South African Council for Educators and with almost a decade of teaching experience in South African schools, students will love Ms. Yuvi’s warmth, radiant smile, and boundless energy. 
`,
  },
];

const elementarySchoolTeachers = [
  {
    id: 7,
    image: "Ms-Amy-Flanders.png",
    flag: "United-States.png",
    name: "Ms. Amy Flanders",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Hailing from the great U.S. state of Tennessee, Amy Flanders leads the Academy's upper elementary social studies and language arts classes. With impressive credentials that include a master's degree in K-12 education and teaching certifications in K-6 elementary and middle school education from the State Boards of Education in Iowa, South Carolina, and Tennessee. Ms. Amy is highly trained, certified, and prepared to lead effective instructional programs for youth worldwide. Ms. Amy is also a state certified (Tennessee) TESOL (Teaching English as a Second Language) teacher. When not leading classes for the Academy, Amy can be seen cheering for her favorite basketball team and walking her adorable pup around her neighborhood.",
  },
  {
    id: 8,
    image: "Ms-Tissan-Steele.png",
    flag: "Jamaica.png",
    name: "Ms. Tissan Steele",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Coming from the tropical Caribbean Island of Jamaica, known as the birthplace of reggae music, is certified teacher, Ms. Tissan Steele. She holds an undergraduate degree in early childhood education from Shortwood Teachers' College in Kingston. With many years of teaching experience at the early childhood levels, the Academy's young learners will be in very capable hands in Ms. Tissan's classes. Her enthusiasm is infectious, and we are certain students will love her classes!",
  },
  {
    id: 9,
    image: "Felicia-Forrester-Ellis.png",
    flag: "Jamaica.png",
    name: "Ms. Felicia Forrester-Ellis",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Joining the Academy from Montego Bay on the beautiful island of Jamaica, Ms. Felicia leads the Academy's grade 4 language arts classes. She's a licensed teacher certified by Jamaica's Ministry of Education and holds an impressive academic pedigree, including a master's in educational leadership and Supervision from Western Carolina University, and undergraduate degrees in elementary and early childhood education, and guidance counseling from the International University of the Caribbean. Ms. Felicia is fully trained and equipped to guide the Academy's students toward a successful future. With over 17 years of classroom teaching experience, Ms. Ellis inspires her students and colleagues by proving that hard work and dedication lead to great results.",
  },
  {
    id: 10,
    image: "Ms-Kristen-Van-Staden.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    flag: "South-Africa.png",
    name: "Ms. Kristen Van Staden",
    message:
      "A multi-talented university graduate with honors in environmental science, botany, and zoology, Ms. Kristen leads the Academy's elementary science classes. Additionally, she's received training to teach English as a Foreign Language and is also a teacher education graduate with honors (Cum Laude), holding a Postgraduate Certificate in Education from the Nelson Mandela Metropolitan University. A certified teacher of life sciences and geography with a strong passion for all things science, Ms. Kristen can often be seen exploring the lush countryside of her native South Africa in search of the Academy's next great science lesson. As if Ms. Kristen couldn't be any more impressive, she also possesses a certificate in the proper handling of venomous snakes. Eek! When not serving as a research scuba diver in the waters of South Africa's beautiful Eastern Cape, keep your eyes on the boats passing by as Ms. Kristen is also a qualified Skipper.",
  },
  {
    id: 11,
    image: "Mrs-Tania-Lofty-Eaton.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    flag: "Namibia.png",
    name: "Mrs. Tania Lofty-Eaton",
    message:
      "Hailing from the iconic land of magnificent sunsets, where the golden sand meets the sea on Africa's Southwest coast, Mrs. Tania joins us from the beautiful nation of Namibia. A graduate of the esteemed University of Stellenbosh's Faculty of Education, Mrs. Tania is a qualified and board-certified teacher licensed to teach general subjects in grades 4-9. With years of experience teaching mathematics, science, and geography in Namibia's private schools, Tania is highly prepared and eager to lead engaging lessons in the Academy's academic program.",
  },

  {
    id: 13,
    image: "Ms-Simonet-Estopace.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    flag: "Philippines.png",
    name: "Ms. Simonet Estopace",
    message:
      "Joining us from the sunny Laguna region of the Philippines is Teacher Simonet. With two master's degrees in computer applications and special education, an undergraduate degree in elementary education from the Philippine Normal University, and as a teacher licensed by the Philippine Regulation Commission for Teacher Education, Teacher Simonet is well-qualified to lead the Academy's elementary classes. Look for Simonet in our grade 3 program. Her enthusiasm and kindness will be adored and appreciated by all students.",
  },
  {
    id: 14,
    image: "Ms-Carissa-Wade.png",
    flag: "United-States.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Carissa Wade",
    message:
      "Hailing from the great state of Florida in the United States is board certified teacher, Ms. Carissa Wade.  A graduate of the University of Central Florida with a degree in Elementary Education, Ms. Wade then went on to pursue graduate studies at Belhaven University in Jackson, Mississippi. With master's degrees in Curriculum and Instruction and Educational Leadership and with over a decade of experience teaching in public schools in the United States, students are in very capable hands with Carissa Wade. Ms. Wade is a fully qualified teacher licensed to teach in public schools in the states of Florida and Georgia.",
  },
  {
    id: 15,
    image: "Ms-Ranine-Sabat.png",
    flag: "Lebanon.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Ranine Sabat",
    message:
      "Elementary school principal and qualified mathematics teacher, Ms. Ranine Sabat joins the Academy from Lebanon's scenic Bekaa Valley. With a master's degree in mathematics and an undergraduate degree in mathematics education from the Lebanese University and the University of the Holy Family, Ranine is a fabulous teacher in the Academy's elementary program. Ranine also has a diploma in creativity and innovation, which she applies to each of her lessons.",
  },
  {
    id: 16,
    image: "Ms-Christel-Yarso.png",
    flag: "Philippines.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Christel Yarso",
    message:
      "When not teaching in Philippine public schools, Ms. Christel leads the Academy's early childhood classes from the nation's sunny Southern region. She is an education graduate from the University of the Southeastern Philippines, specializing in early childhood education and is certified and licensed by the Philippine Regulation Commission for Teacher Education. In Ms. Christel's classes, the Academy's young learners are in brilliantly qualified and capable hands.",
  },
  {
    id: 17,
    image: "Mrs-Renet-Wentzel.png",
    flag: "South-Africa.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Mrs. Renet Wentzel",
    message:
      "Joining the Academy from rural Southern Africa is certified math, statistics, and science teacher, Ms. Renet. A graduate of the University of Pretoria, the University of South Africa in sciences (biochemistry/chemistry/life sciences) and mathematics as well as having a Post Graduate Certificate in Education, Ms. Renet has been a math and science department head (Cambridge curriculum) for almost a decade. Students in Ms. Renet's classes will find themselves in the hands of a very capable and knowledgeable teacher.",
  },
  {
    id: 18,
    image: "Ms-Raechel-Cassetty.png",
    flag: "United-States.png",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    shift: "elementary-school-grades-1-6",
    name: "Ms. Raechel Cassetty",
    message:
      "With master's degrees in education and Tennessee state (USA) certifications in TESOL and K-6 education. Ms. Raechel is well qualified to lead the Academy's elementary classes. With almost a decade of experience teaching at international schools in Thailand and public schools in the United States, the Academy's students are in the very capable hands of a qualified and experienced teacher. Although an American national, Ms. Raechel joins the Academy from Perth in Western Australia.",
  },
  {
    id: 19,
    image: "Ms-Ellie-Wolters.png",
    flag: "United-States.png",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    shift: "elementary-school-grades-1-6",
    name: "Ms. Ellie Wolters",
    message:
      "With over 7 years of classroom teaching experience in California public schools, Ms. Ellie Wolters is thrilled to join the Academy from her new home in Chicago, Illinois. With a Bachelor's degree in Elementary Education from Calvin College and a K-5 teaching license issued by the California Commission on Teacher Credentialing, Ms. Ellie is qualified to lead all subjects at the elementary level. Ms. Ellie aims to instill a love of learning in her students and help them overcome their challenges both inside and outside the classroom. She can't wait to work with students and teachers across the globe. When you enrolll in the Academy, look for Ms. Ellie's lower elementary classes in science and math.",
  },
  {
    id: 20,
    image: "Ms-Sarah.png",
    flag: "United-States.png",
    name: "Ms. Sarah",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Joining the Academy from the sunshine state of California is Teacher Sara. With a master's degree in curriculum and instruction, an undergraduate degree in elementary education, and specialized training in education for the gifted, Ms. Sara is well-qualified to lead the Academy's elementary classes. Licensed for K-6 education by the California Commission for Teacher Credentialing and with many years of experience teaching in California private and public schools, Ms. Sara brings exceptional experience and expertise to the Academy.",
  },
  {
    id: 21,
    image: "Ms-Maria.png",
    flag: "United-States.png",
    name: "Ms. Maria",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Joining the Academy from sunny California is certified mathematics educator, Ms. Maria. With years of teaching experience in Latin America and K-6 teacher-certified by the California Commission on Teacher Credentialing, Ms. Maria is well-experienced to lead the Academy's elementary math classes to success.",
  },
  {
    id: 22,
    image: "Ms-Shikha-Goswami.png",
    flag: "India.png",
    name: "Ms. Shikha Goswami",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Joining the Academy from Delhi, India, is Ms. Shikha Goswami. With master's degrees in science and English and undergraduate degrees in science and education from the Indira Gandhi University and the University of Delhi, Ms. Shikha is beyond qualified to lead the Academy's science education program. Ms. Shikha is a certified educator, holding a K-12 teaching license in science, mathematics, and English language education from the Secondary Board of Education in Delhi. As the current academic science lead for the prestigious Cambridge Schools in India, Ms. Shikha brings to the Academy impressive experience and expertise.",
  },
  {
    id: 23,
    image: "Ms-Gyndel-Vicente.png",
    flag: "Philippines.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Gyndel Vicente",
    message:
      "Pursuing a doctorate in Educational Management from Misamis University and with a master's degree in education from Southern Capital College and an undergraduate degree in Education (with a major in science education) from Mindanao State University, Teacher Glyn is the absolute perfect instructor for the Academy's elementary science program. Licensed by the Philippine Regulation Commission for Teacher Education, she is a highly qualified educator whose enthusiasm for education comes through in her lessons.",
  },
  {
    id: 24,
    image: "Dr-Tamara-Myatt.png",
    flag: "Canada.png",
    name: "Dr. Tamara Myatt",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "A Canadian national from Nova Scotia on Canada's East Coast is Dr. Tamara Myatt. Licensed to teach in both Canada and the United States, Dr. Tamara is the Academy's bold and tenacious Skipper. Ensuring that the wind is in the Academy's sails, she and the Academy's amazing crew fearlessly steer the Academy forward.",
  },
  {
    id: 25,
    image: "Mr-Marlo_orias.png",
    flag: "Philippines.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Mr. Marlo Orias",
    message:
      "An honors (Cum Laude) university graduate in mathematics education from the University of the Southern Philippines and a licensed teacher of K-6 mathematics certified by the Philippine Regulation Commission for Teacher Education, Mr. Marlo is well-qualified to lead the Academy's elementary math classes. A Philippine national, Mr. Marlo can often be seen leading and inspiring mathematics learners in the Davao city region of the Philippines, where he resides.",
  },
  {
    id: 26,
    image: "Ms-Slick-Sutherland.png",
    flag: "Swaziland.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Slick Sutherland",
    message:
      "Home to big game reserves housing lions, elephants, and hippos, Ms. Slick Sutherland joins the Academy from the Kingdom of Eswatini (formerly Swaziland) in Southern Africa. A graduate of the University of South Africa's Bachelor of Education program in Natural Sciences and Mathematics, Ms. Slick Sutherland is a certified educator qualified to lead science and math classes for the intermediate and secondary levels, bringing joy and light to every lesson.",
  },
  {
    id: 27,
    image: "Ms-Kristen-Takeuchi.png",
    flag: "United-States.png",
    name: "Ms. Kristen Takeuchi",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Joining the Academy from Japan is Ms. Kristen Takeuchi. Hailing from a family of educators and school leadership professionals, it is no surprise that Ms. Kristen also became a teacher, holding licenses in K-6 elementary and early childhood education from the state of Florida's Department of Education. Ms. Kristen is fully certified and qualified to teach in Florida public schools and is a graduate of the University of West Florida and Eastern Washington University. With many years of teaching experience in both the United States and abroad, Ms. Kristen's enthusiasm and radiant smile will ensure that the Academy's students will love her lessons.",
  },
  {
    id: 28,
    image: "Mrs-Esmari-Kotze-2.jpg",
    flag: "South-Africa.png",
    name: "Mrs. Esmari Kotze",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "Joining the Academy from the sunny banks of the Orange River in South Africa's Northern Cape, is Mrs. Esmari Kotze. An honors graduate of the University of Stellenbosch's Faculty of Education, holder of a PGCE (Post Graduate Certificate in Education) and with advanced training in teaching and educational psychology from the University of the Free State, Mrs. Esmari Kotze is extremely qualified to lead the Academy's K-12 academic programs. With over 18 of years teaching and department head experience in South Africa and Taiwan, students can look forward to classes with an incredibly caring, competent educator.",
  },
  {
    id: 29,
    image: "Ms-Rachel-McDermott.png",
    flag: "United-States.png",
    name: "Ms. Rachel McDermott",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message:
      "From the Rocky Mountains of Utah in the USA, is Ms. Rachel McDermott. Licensed by the Utah State Board of Education, Ms. McDermott is a certified K-6 elementary educator who is eager to share her love of teaching with the Academy's students.",
  },
  {
    id: 30,
    image: "Ms-Angel-Lumbania.png",
    flag: "Philippines.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Angel Lumbania",
    message: `A graduate of the Bachelor of Secondary Education program majoring in Mathematics from Notre Dame Marbel University, Ms. Angel is a qualified teacher of mathematics. Certified and licensed by the Philippine Regulation Commission for Teacher Education. Students will enjoy math classes with a qualified and experienced teacher.`,
  },
  {
    id: 31,
    image: "Ms-Christina-Pearns.png",
    flag: "United-States.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Christina Pearns",
    message:
      "Currently residing in Colorado, Ms. Christina holds a Master of Arts in Teaching with a specialized focus in elementary education from the Relay Graduate School of Education as well as an undergraduate degree in Tourism Management and Development from Arizona State University. Licensed by the Colorado State Board of Education, Ms. Christina is qualified to teach all subjects from K-6 in Colorado public schools. With years of classroom teaching under her belt, Ms. Christina is well experienced to lead classes at the elementary level.",
  },
  {
    id: 32,
    image: "Ms-Ana-Fiji.png",
    flag: "Fiji.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Ana (Fiji)",
    message:
      "Joining the Academy from the beautiful island of Fiji in the South Pacific is qualified elementary teacher, Ms. Ana. A graduate of the education programs at the University of the South Pacific and the University of Fiji, Teacher Ana is an experienced and qualified teacher licensed to teach at the elementary level in Fiji's public schools.",
  },
  {
    id: 33,
    image: "Ms-Amy-Paprocki-Gonzales.png",
    flag: "United-States.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Amy Paprocki-Gonzales",
    message:
      "Joining the Academy from the great state of Illinois is Ms. Amy Paprocki-Gonzales. With two master's degrees in special education and curriculum and instruction with a concentration in ESL education from Aurora and Concordia Universities, our elementary students will be led by a well-qualified teacher. Ms. Amy also has an undergraduate degree from Aurora University in elementary education and is a qualified K-6 and ESL teacher licensed by the Illinois State Board of Education. Students will enjoy being led by a very competent educator with many years of teaching experience in US public schools.",
  },
  {
    id: 34,
    image: "Ms-Erin-Young.png",
    flag: "United-States.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Erin Young",
    message:
      "With two master's degrees in education and adult education and an undergraduate degree in criminal justice from Buffalo State College, Ms. Erin joins the Academy from the great state of New York. Ms. Erin is a fully qualified elementary teacher licensed by the New York State Department of Education and possesses extensive teaching experience. Students in Ms. Erin's classes will be in the hands of an experienced and well-qualified teacher.",
  },
  {
    id: 35,
    image: "Mr-Travis-Hostetter.png",
    flag: "United-States.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Mr. Travis Hostetter",
    message: `Former school principal, mathematics teacher, and pursuing a doctorate in education, Mr. Travis joins the Academy with almost twenty years of experience in American public schools and international schools in Georgia, the Balkans, and Africa. An American national and fully qualified educator certified by the State Boards of Education in Georgia and North Carolina, Mr. Travis brings to each lesson both experience and expertise. Students in Mr. Travis's classes will be led by a capable and knowledgeable educator.`,
  },
  {
    id: 36,
    image: "Collene-Underwood.png",
    flag: "United-States.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Collene Underwood",
    message: `From a region in the United States known for its southern hospitality, Collene joins the Academy from the state of Alabama. With undergraduate degrees in education (cum laude) and holding K-8 teacher certification from the Arizona Board of Education, Collene is fully qualified to lead all academic subjects to eighth grade. Although an American national, Collene has family ties in beautiful Mexico. In Ms. Collene’s classes, students will be led by a very capable teacher. `,
  },
  {
    id: 37,
    image: "Lara-Human.png",
    flag: "South-Africa.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Lara Human",
    message: `Joining the Academy from a pristine rural setting on the outskirts of beautiful Cape Town is the Academy’s qualified early childhood educator, Ms. Lara. A graduate of the University of South Africa’s Bachelor of Education program in early childhood education and with many years of experience leading early elementary classes, students are in the hands of a very capable teacher with Ms. Lara.`,
  },
  {
    id: 38,
    image: "Winel-Huisman.png",
    flag: "South-Africa.png",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    name: "Ms. Winel Huisman",
    message: `A Bachelor of Education graduate for the intermediate and senior phases, Ms. Winel is fully qualified to teach classes in history, geography, English, science, and math for grades 4–9. Certified by the South African Council for Educators and with over a decade of teaching experience in South African schools as well as international schools across the Middle East and South Korea, students will enjoy classes with a qualified and experienced teacher.
`,
  },
  {
    id: 39,
    image: "Yuvi-Maharaj.png",
    flag: "South-Africa.png",
    name: "Ms. Yuvi Maharaj",
    shift: "elementary-school-grades-1-6",
    shift_title: "Elementary School Teachers (Grades 1-6)",
    message: `A Bachelor of Education graduate in early childhood development, Ms. Yuvi is fully qualified to teach early elementary classes for grades K-3. Certified by the South African Council for Educators and with almost a decade of teaching experience in South African schools, students will love Ms. Yuvi’s warmth, radiant smile, and boundless energy. 
`,
  },
  {
    id: 401,
    image: "Mrs-Heather-Hrivnak.png",
    flag: "United-States.png",
    shift: "upper-school-grades-10-12",
    shift_title: "Upper School (Grades 10-12)",
    name: "Mrs Heather Hrivnak",
    message: `The state famous for the signing of the Declaration of Independence, Heather Hrivnak joins the Academy from lovely Pennsylvania. With master's degrees in elementary and middle school mathematics education, undergraduate degrees in elementary education and teaching, and teacher certification from the Pennsylvania Department of Education, the Academy's students will be guided by an experienced, licensed, and competent math teacher. With over a decade of mathematics education leadership and currently a Pennsylvania state math specialist, the Academy's math program is strengthened by Mrs. Hrivnak's instruction. Look for Ms. Hrivnak's elementary classes in math.`,
  },
];

const upperSchoolTeachers = [
  {
    id: 35,
    image: "Ms-Malak-Al-Bitar.png",
    flag: "Lebanon.png",
    name: "Ms. Malak Al Bitar",
    shift: "upper-school-grades-10-12",
    shift_title: "Upper School (Grades 10-12)",
    message:
      "Joining us from Beirut, Lebanon is mathematics teacher, Ms. Malak Al-Bitar. A certified teacher of mathematics with undergraduate and master's degrees in mathematics education from the Lebanese University, Ms. Malak is a qualified teacher of math for grades 9-12.",
  },
  {
    id: 36,
    image: "Ms-Slick-Sutherland.png",
    flag: "Swaziland.png",

    shift: "upper-school-grades-10-12",
    shift_title: "Upper School (Grades 10-12)",
    name: "Ms. Slick Sutherland",
    message:
      "Home to big game reserves housing lions, elephants, and hippos, Ms. Slick Sutherland joins the Academy from the Kingdom of Eswatini (formerly Swaziland) in Southern Africa. A graduate of the University of South Africa's Bachelor of Education program in Natural Sciences and Mathematics, Ms. Slick Sutherland is a certified educator qualified to lead science and math classes for the intermediate and secondary levels, bringing joy and light to every lesson.",
  },
  {
    id: 37,
    image: "Ms-Mackenzie-Boyer.png",
    flag: "United-States.png",

    shift: "upper-school-grades-10-12",
    shift_title: "Upper School (Grades 10-12)",
    name: "Ms. Mackenzie Boyer",
    message:
      "From the great big state of Texas (but currently on a world tour) is Ms. Mackenzie Boyer. She is an honors graduate of the Santa Fe University of Art & Design and is certified by the Texas State Board of Education to teach social studies and English as a Second Language (grades 7-12). Ms. Mackenzie is a fully qualified public school teacher who has also taught English as a Foreign Language (and Kids Yoga!) in many schools and learning centers throughout Spain and Southeast Asia, working with hundreds of fabulous students along the way. Having lived, traveled, and taught in several countries, she enters each classroom with a multicultural perspective and a contagious passion for learning.",
  },
  {
    id: 38,
    image: "Ms-Faith-Villanueva.png",
    flag: "Laos.png",
    shift: "upper-school-grades-10-12",
    shift_title: "Upper School (Grades 10-12)",
    name: "Ms. Faith Villanueva",
    message:
      "Awarded “Teacher of the Year” is law school and engineering graduate, Faith Villanueva. Also holding master's degrees in public administration and business, Ms. Villanueva joins the Academy from the lovely Southeast Asian nation of Laos. Faith is a board-certified teacher, teacher trainer, curriculum development specialist, and has many years of experience teaching in international schools. Under Faith's instruction, students are in very capable hands.",
  },
  {
    id: 39,
    image: "Ms-Joanel.jpg",
    flag: "Namibia.png",
    shift: "upper-school-grades-10-12",
    shift_title: "Upper School (Grades 10-12)",
    name: "Ms. Joanel",
    message: `Home to the golden sands of the Namib Desert, roaming cheetahs, and the Skeleton Coast, Ms. Joanel joins us from the Southwest African nation of Namibia. With over 25 years of teaching experience leading chemistry and science classes in Nambia's esteemed international schools, Ms. Joanel brings to the Academy both subject matter expertise and instructional competence. A graduate of the science and teacher education programs (with distinction) at North West University, Ms. Joanel is a fully certified teacher licensed to teach in both Namibian and South African private and public schools. When not residing in Nambia's capital city of Windhoek, Ms. Joanel can be found exploring the Henties Bay area in the Western Namibian region of Erongo, looking for the Academy's next great lesson in science. With Ms. Joanel's African roots, students can expect lessons with African flair. Look for Ms. Joanel's middle and high school lessons in science.`,
  },
];

const middleSchoolTeachers = [
  {
    id: 39,
    image: "Ms-Faith-Villanueva.png",
    flag: "Laos.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Faith Villanueva",
    message:
      "Awarded “Teacher of the Year” is law school and engineering graduate, Ms. Faith Villanueva. Also holding master's degrees in public administration and business, Ms. Villanueva joins the Academy from the lovely Southeast Asian nation of Laos. Faith is a board-certified teacher, teacher trainer, curriculum development specialist, and has many years of experience teaching in international schools. Under Faith's instruction, students are in very capable hands.",
  },
  {
    id: 40,
    image: "Mrs-Tania-Lofty-Eaton.png",
    flag: "Namibia.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Mrs. Tania Lofty-Eaton",
    message:
      "Hailing from the iconic land of magnificent sunsets, where the golden sand meets the sea on Africa's Southwest coast, Mrs. Tania joins us from the beautiful nation of Namibia. A graduate of the esteemed University of Stellenbosh's Faculty of Education, Mrs. Tania is a qualified and board-certified teacher licensed to teach general subjects in grades 4-9. With years of experience teaching mathematics, science, and geography in Namibia's private schools, Tania is highly prepared and eager to lead engaging lessons in the Academy's academic program.",
  },
  {
    id: 41,
    image: "Mrs-Renet-Wentzel.png",
    flag: "South-Africa.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Mrs. Renet Wentzel",
    message:
      "Joining the Academy from rural Southern Africa is certified math, statistics, and science teacher, Ms. Renet. A graduate of the University of Pretoria, the University of South Africa in sciences (biochemistry/chemistry/life sciences) and mathematics as well as having a Post Graduate Certificate in Education, Ms. Renet has been a math and science department head (Cambridge curriculum) for almost a decade. Students in Ms. Renet's classes will find themselves in the hands of a very capable and knowledgeable teacher.",
  },
  {
    id: 42,
    image: "Ms-Slick-Sutherland.png",
    flag: "Swaziland.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Slick Sutherland",
    message:
      "Home to big game reserves housing lions, elephants, and hippos, Ms. Slick Sutherland joins the Academy from the Kingdom of Eswatini (formerly Swaziland) in Southern Africa. A graduate of the University of South Africa's Bachelor of Education program in Natural Sciences and Mathematics, Ms. Slick Sutherland is a certified educator qualified to lead science and math classes for the intermediate and secondary levels, bringing joy and light to every lesson.",
  },
  {
    id: 43,
    image: "Ms-Angel-Lumbania.png",
    flag: "Philippines.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Angel Lumbania",
    message:
      "A graduate of Bachelor in Secondary Education majoring in Mathematics from Notre Dame Marbel University, Ms. Angel is a qualified teacher of mathematics. Certified and licensed by the Philippine Regulation Commission for Teacher Education. Students will enjoy math classes with a qualified and experienced teacher.",
  },
  {
    id: 44,
    image: "Ms-April-Patigas.png",
    flag: "Philippines.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. April Patigas",
    message:
      "Scoring 8th in the country on the Philippine National Teacher's Exam and holding two master's degrees (with honors) in Teaching and Learning and Mathematics Education from the prestigious De La Salle University, Ms. April Patigas leads our middle school mathematics classes with impressive expertise. With an undergraduate degree in Secondary Education (mathematics) also from De La Salle University, Ms. April is a highly qualified and capable teacher. As a certified teacher of mathematics licensed by the Philippine Regulation Commission for Teacher Education, she is fully capable of leading impactful lessons in middle school mathematics.",
  },
  {
    id: 45,
    image: "Ms-Anne.png",
    flag: "Philippines.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Anne",
    message:
      "With a master's degree in Administration and Supervision and an undergraduate degree in Secondary Education (majoring in English Language Arts Education) from Western College, Teacher Anne is certified and licensed by the Philippine Regulation Commission for Teacher Education. Ms. Anne will surely enrich the Academy with her unique knowledge and skills. Watch for her classes in middle school language arts.",
  },
  {
    id: 46,
    image: "Ms-Kalliopi-Georgopoulou.png",
    flag: "Greece.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Kalliopi Georgopoulou",
    message:
      "Ms. Kalliopi joins the Academy from the gorgeous country of Greece. With two masters degrees in Educational Sciences and Instructional Technology from the University of Maryland and the Hellenic Open University, undergraduate degrees in mathematics education, and additional training in special education from the University of Athens and the University of Aegean, Ms. Kalliopi is a licensed teacher of mathematics and qualified to lead the Academy's K-12 math classes. She also possesses advanced training and certification in School Psychology and Positive Psychology in Education from Panteion University and the University of Macedonia. With expertise in various fields, Ms. Kalliopi teaches with true gusto.",
  },
  {
    id: 47,
    image: "Ms-Kristen-Takeuchi.png",
    flag: "United-States.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Kristen Takeuchi",
    message:
      "Joining the Academy from Japan is Ms. Kristen Takeuchi. Hailing from a family of educators and school leadership professionals, it is no surprise that Ms. Kristen also became a teacher, holding licenses in K-6 elementary and early childhood education from the state of Florida's Department of Education. Ms. Kristen is fully certified and qualified to teach in Florida public schools and is a graduate of the University of West Florida and Eastern Washington University. With many years of teaching experience in both the United States and abroad, Ms. Kristen's enthusiasm and radiant smile will ensure that the Academy's students will love her lessons.",
  },
  {
    id: 48,
    image: "Ms-Malak-Al-Bitar.png",
    flag: "Lebanon.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Malak Al Bitar",
    message:
      "Joining us from Beirut, Lebanon is mathematics teacher, Ms. Malak Al-Bitar. A certified teacher of mathematics with undergraduate and master's degrees in mathematics education from the Lebanese University, Ms. Malak is a qualified teacher of math for grades 9-12. With years of experience teaching in Lebanon's private schools, Ms. Malak is well experienced and qualified to lead the Academy's secondary mathematics classes.",
  },
  {
    id: 49,
    image: "Dr-Tamara-Myatt.png",
    flag: "Canada.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Dr. Tamara Myatt",
    message:
      "A Canadian national from Nova Scotia on Canada's East Coast is Dr. Tamara Myatt. Licensed to teach in both Canada and the United States, Dr. Tamara is the Academy's bold and tenacious Skipper. Ensuring that the wind is in the Academy's sails, she and the Academy's amazing crew fearlessly steer the Academy forward.",
  },
  {
    id: 50,
    image: "Ms-Mackenzie-Boyer.png",
    flag: "United-States.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Mackenzie Boyer",
    message:
      "From the great big state of Texas (but currently on a world tour) is Ms. Mackenzie Boyer. She is an honors graduate of the Santa Fe University of Art & Design and is certified by the Texas State Board of Education to teach social studies and English as a Second Language (grades 7-12). Ms. Mackenzie is a fully qualified public school teacher who has also taught English as a Foreign Language (and Kids Yoga!) in many schools and learning centers throughout Spain and Southeast Asia, working with hundreds of fabulous students along the way. Having lived, traveled, and taught in several countries, she enters each classroom with a multicultural perspective and a contagious passion for learning.",
  },
  {
    id: 51,
    image: "Mrs-Esmari-Kotze-2.jpg",
    flag: "South-Africa.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Mrs. Esmari Kotze",
    message:
      "Joining the Academy from the sunny banks of the Orange River in South Africa's Northern Cape, is Mrs. Esmari Kotze. An honors graduate of the University of Stellenbosch's Faculty of Education, holder of a PGCE (Post Graduate Certificate in Education) and with advanced training in teaching and educational psychology from the University of the Free State, Mrs. Esmari Kotze is extremely qualified to lead the Academy's K-12 academic programs. With over 17 of years teaching and department head experience in South Africa and Taiwan, students can look forward to classes with an incredibly caring, competent educator.",
  },
  {
    id: 52,
    image: "Ms-Marie-Trinidad-and-Tobago.png",
    flag: "Trinidad-and-tobago.png",

    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Marie (Trinidad and Tobago)",
    message:
      "From the turquoise blue waters of Trinidad and Tobago in the Caribbean is Ms. Marie. An education school graduate of the renowned University of the West Indies, Ms. Marie is an experienced and certified middle school social studies teacher licensed to teach in public schools in Trinidad and Tobago.",
  },
  {
    id: 53,
    image: "Ms-Angel-Lumbania.png",
    flag: "Philippines.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Angel Lumbania",
    message:
      "A graduate of Bachelor in Secondary Education majoring in Mathematics from Notre Dame Marbel University, Ms. Angel is a qualified teacher of mathematics. Certified and licensed by the Philippine Regulation Commission for Teacher Education. Students will enjoy math classes with a qualified and experienced teacher.",
  },
  {
    id: 54,
    image: "Ms-Jo-Anne-(British-Virgin-Islands).png",
    flag: "British-Virgin-Islands.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Jo-Anne (British Virgin Islands)",
    message:
      "Ms. Jo-Anne is from the magical island of beautiful beaches, blue seas, and brilliant boating known as the British Virgin Islands (BVI). A graduate of the University of the Virgin Islands School of Education, Ms. Jo-Anne is a qualified and experienced middle school teacher. Certified to teach social studies in the BVI's public schools, the Academy's middle school students are in the hands of a very capable teacher.",
  },
  {
    id: 55,
    image: "Winel-Huisman.png",
    flag: "South-Africa.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Winel Huisman",
    message:
      "A Bachelor of Education graduate for the intermediate and senior phases, Ms. Winel is fully qualified to teach classes in history, geography, English, science, and math for grades 4–9. Certified by the South African Council for Educators and with over a decade of teaching experience in South African schools as well as international schools across the Middle East and South Korea, students will enjoy classes with a qualified and experienced teacher.",
  },
  {
    id: 56,
    image: "Ms-Joanel.jpg",
    flag: "Namibia.png",
    shift: "middle-school-grades-7-9",
    shift_title: "Middle School Teachers (Grades 7-9)",
    name: "Ms. Joanel",
    message: `Home to the golden sands of the Namib Desert, roaming cheetahs, and the Skeleton Coast, Ms. Joanel joins us from the Southwest African nation of Namibia. With over 25 years of teaching experience leading chemistry and science classes in Nambia's esteemed international schools, Ms. Joanel brings to the Academy both subject matter expertise and instructional competence. A graduate of the science and teacher education programs (with distinction) at North West University, Ms. Joanel is a fully certified teacher licensed to teach in both Namibian and South African private and public schools. When not residing in Nambia's capital city of Windhoek, Ms. Joanel can be found exploring the Henties Bay area in the Western Namibian region of Erongo, looking for the Academy's next great lesson in science. With Ms. Joanel's African roots, students can expect lessons with African flair. Look for Ms. Joanel's middle and high school lessons in science.`,
  },
];

const staff = [
  {
    id: "02",
    team: "Executive Team",
    employee: [
      {
        id: 55,
        image: "Dr-Tamara-Myatt.png",
        name: "Dr. Tamara Myatt",
        post: "Founder, CEO, and COO",
        flag: "Canada.png",
        team: "Executive Team",
      },
      {
        id: 56,
        image: "Mr-Andrew-Andy-Wood.png",
        name: "Mr. Andrew (“Andy”) Wood",
        post: "Sr. Vice-President, General Counsel, Corporate Secretary, Ethics and Privacy Officer, Director of Special Projects",
        flag: "Canada.png",
        team: "Executive Team",
      },
    ],
  },
  {
    id: "03",
    team: "Management Team",
    employee: [
      {
        id: 57,
        image: "Dr-Tamara-Myatt.png",
        name: "Dr. Tamara Myatt (Nova Scotia, Canada)",
        post: "President, Director of Operations, and Talent Recruitment",
        flag: "Canada.png",
        team: "Management Team",
      },

      {
        id: 60,
        image: "Ms-Sweety-Kuldeep.png",
        name: "Ms. Sweety Kuldeep (India) ",
        post: "(Management Trainee) Special Assistant to the President",
        flag: "India.png",
        team: "Management Team",
      },
      {
        id: 61,
        image: "Ms-Fardeen-Faruk.png",
        name: "Ms. Fardeen Faruk (Bangladesh)",
        post: "(Management Trainee) Special Assistant to the President",
        flag: "Bangladesh.png",
        team: "Management Team",
      },

      {
        id: 58,
        image: "Mr-Andrew-Andy-Wood.png",
        name: "Mr. Andrew (“Andy”) Wood (New Brunswick, Canada) ",
        post: "Ethics Officer",
        flag: "Canada.png",
        team: "Management Team",
      },
      {
        id: 59,
        image: "Mr-Abu-Sayeed.png",
        name: "Mr. Abu Sayeed (Bangladesh) ",
        post: "Vice-President of Software, Engineering and Technical Services",
        flag: "Bangladesh.png",
        team: "Management Team",
      },

      {
        id: 62,
        image: "Mrs-Esmari-Kotze-2.jpg",
        name: "Mrs. Esmari Kotze (South Africa) ",
        post: "Director of Curriculum Development and Quality Assurance",
        flag: "South-Africa.png",
        team: "Management Team",
      },
      {
        id: 63,
        image: "Mrs-Tania-Lofty-Eaton.png",
        name: "Mrs. Tania (van der Merwe) Lofty-Eaton (Namibia)",
        post: "Lead - Science Documentary Series ",
        flag: "Namibia.png",
        team: "Management Team",
        dept: "Science Documentary Series",
      },
      {
        id: 64,
        image: "Ms-Noreen-Cruz.png",
        name: "Ms. Noreen Cruz (Philippines) ",
        post: "Lead, Early Childhood Center",
        flag: "Philippines.png",
        team: "Management Team",
      },
      {
        id: 65,
        image: "Mrs-Renet-Wentzel.png",
        name: "Mrs. Renet Wentzel (South Africa) ",
        post: "Lead, Middle School",
        flag: "South-Africa.png",
        team: "Management Team",
      },
      // {
      //   id: 66,
      //   image: "Mrs-Tania-Lofty-Eaton.png",
      //   name: "Mrs. Tania (van der Merwe) Lofty-Eaton (Namibia)",
      //   post: "Lead - Science Documentary Series ",
      //   flag: "Namibia.png",
      //   team: "Management Team",
      //   dept: "Science Documentary Series",
      // },
      {
        id: 67,
        image: "Ms-Faith-Villanueva.png",
        name: "Ms. Faith Villanueva",
        post: "Lead, High School",
        flag: "Laos.png",
        team: "Management Team",
      },
    ],
  },
  {
    id: "04",
    team: "Curriculum Team",
    employee: [
      {
        id: 59,
        image: "Mrs-Esmari-Kotze-2.jpg",
        name: "Mrs. Esmari Kotze (South Africa) ",
        post: "Director of Curriculum Development and Quality Assurance",
        flag: "South-Africa.png",
        team: "Curriculum Team",
      },
      {
        id: 60,
        image: "Ms-Sweety-Kuldeep.png",
        name: "Ms. Sweety Kuldeep (India) ",
        post: "(Management Trainee) Special Assistant to the President and Director of Curriculum Development",
        flag: "India.png",
        team: "Curriculum Team",
      },
      {
        id: 80,
        image: "Ms-Fardeen-Faruk.png",
        name: "Ms. Fardeen Faruk (Bangladesh)",
        post: "(Management Trainee) Special Assistant to the President and Director of Curriculum Development",
        flag: "Bangladesh.png",
        team: "Curriculum Team",
      },

      {
        id: 62,
        image: "Ms-Amy-Flanders.png",
        name: "Ms. Amy Flanders (Tennessee, USA)",
        post: " Special Consultant, Curriculum Compliance",
        flag: "United-States.png",
        team: "Curriculum Team",
      },
      {
        id: 61,
        image: "Mr-Travis-Hostetter.png",
        name: "Mr. Travis Hostetter (Georgia, USA)",
        post: "Special Consultant, Curriculum Compliance",
        flag: "United-States.png",
        team: "Curriculum Team",
      },
    ],
  },
  {
    id: "10",
    team: "Legal Team",
    employee: [
      {
        id: 1,
        image: "Mr-Andrew-Andy-Wood.png",
        name: "Mr. Andrew (“Andy”) Wood",
        post: "Sr. Vice-President, General Counsel, Corporate Secretary, Ethics and Privacy Officer, Director of Special Projects",
        flag: "Canada.png",
        team: "Legal Team",
      },
      {
        id: 2,
        image: "Dr-Seemantani-Sharma.png",
        name: "Dr. Seemantani Sharma",
        post: "Consulting General Counsel, Intellectual Property",
        flag: "Canada.png",
        team: "Legal Team",
      },
      {
        id: 3,
        image: "Johannes-Kotze.jpg",
        name: "Johannes Kotzé",
        post: "Senior Corporate Counsel - Africa and the Middle East",
        flag: "South-Africa.png",
        team: "Legal Team",
      },
      {
        id: 4,
        image: "Ms-Faith-Villanueva.png",
        name: "Ms. Faith Villanueva",
        flag: "Laos.png",
        post: "Senior Corporate Counsel - Asia Pacific",
        team: "Legal Team",
      },
    ],
  },
  // {
  //   id: "11",
  //   team: "Finance Team",
  //   employee: [
  //     {
  //       id: 1,
  //       image: "Edwin-Corey.png",
  //       name: "Mr. Edwin Corey (Canada)",
  //       post: "Corey & Company Chartered Professional Accountants ",
  //       flag: "Canada.png",
  //       team: "Legal Team",
  //     },
  //   ],
  // },
  {
    id: "12",
    team: "Human Resources Team",
    employee: [
      {
        id: 1,
        image: "Ms-Fatema-Dewan.jpg",
        name: "Ms. Fatema Dewan (Bangladesh)",
        post: "Human Resources Officer",
        flag: "Bangladesh.png",
        team: "Legal Team",
      },
    ],
  },
  {
    id: "05",
    team: " Graphics and Curriculum Materials Design",
    employee: [
      {
        id: 63,
        image: "Mr-Ali-Al-Khateeb.png",
        name: "Mr. Ali Al Khateeb (Syria) ",
        post: "Lead, Content Graphic Design",
        flag: "Syria.png",
        team: " Graphics and Curriculum Materials Design",
      },
      // {
      //   id: 64,
      //   image: "Ms-Dema-Daoun.png",
      //   name: "Ms. Dema Daoun (Syria)",
      //   post: "Co-Lead, Graphic Design",
      //   flag: "Syria.png",
      //   team: " Graphics and Curriculum Materials Design",
      // },
    ],
  },
  {
    id: "06",
    team: "Intern Services and Programs",
    employee: [
      // {
      //   id: 81,
      //   image: "Dr-Tamara-Myatt.png",
      //   name: "Dr. Tamara Myatt ",
      //   post: "Director of Talent Recruitment",
      //   flag: "Canada.png",
      //   team: "Intern Services and Programs",
      // },
      {
        id: 65,
        image: "Ms-Aamal-Alshihawi.png",
        name: "Ms. Aamal Alshihawi (Syria) ",
        post: "Lead, Intern Services and Training",
        flag: "Syria.png",
        team: "Intern Services and Programs",
      },
    ],
  },
  {
    id: "07",
    team: "Technology Team",
    employee: [
      {
        id: 66,
        image: "Mr-Abu-Sayeed.png",
        name: "Mr. Abu Sayeed (Bangladesh)",
        post: "Vice-President of Software, Engineering and Technical Services",
        flag: "Bangladesh.png",
        team: "Technology Team",
      },
      {
        id: 67,
        image: "shamsad-anam.png",
        name: "Shamsad Anam (Bangladesh)",
        post: "Lead Front-end Engineer, Engineering and Technical Services",
        flag: "Bangladesh.png",
        team: "Technology Team",
      },
      {
        id: 68,
        image: "Ms-Masha-Moskovchuk.png",
        name: "Ms. Masha Moskovchuk (Ukraine) ",
        post: "Consultant, UI/UX Development, and Design",
        flag: "Ukraine.png",
        team: "Technology Team",
      },
      {
        id: 69,
        image: "Harshita-Sampath.png",
        name: "Ms. Harshita Sampath (Canada)",
        post: "Lead, Cybersecurity",
        flag: "Canada.png",
        team: "Technology Team",
      },
      {
        id: 69,
        image: "Claude-Petipas.jpg",
        name: "Mr. Claude Petitpas (Canada)",
        post: "Technology Consultant",
        flag: "Canada.png",
        team: "Technology Team",
      },
    ],
  },
  {
    id: "08",
    team: "Special Projects",
    employee: [
      {
        id: 69,
        image: "Mr-Andrew-Andy-Wood.png",
        name: "Mr. Andy Wood",
        post: "Director",
        flag: "Canada.png",
        team: "Special Projects",
      },
      {
        id: 70,
        image: "Mrs-Tania-Lofty-Eaton.png",
        name: "Mrs. Tania (van der Merwe) Lofty-Eaton (Namibia)",
        post: "Lead - Science Documentary Series ",
        flag: "Namibia.png",
        team: "Special Projects",
        dept: "Science Documentary Series",
      },
      {
        id: 71,
        image: "Ms-Kristen-Van-Staden.png",
        name: "Ms. Kristen Van Staden (South Africa)",
        post: "Co-Lead - Science Documentary Series",
        flag: "South-Africa.png",
        team: "Special Projects",
        dept: "Science Documentary Series",
      },
      {
        id: 72,
        image: "Ms-Mackenzie-Boyer.png",
        name: "Ms. MacKenzie Boyer (The Great State of Texas, USA) ",
        post: "Consultant, ESL Programs",
        flag: "United-States.png",
        team: "Special Projects",
        dept: "ESL Programs",
      },
      {
        id: 73,
        image: "Ms-Carissa-Wade.png",
        name: "Ms. Carissa Wade (Florida, USA)",
        post: "Consultant, ESL Programs",
        flag: "United-States.png",
        team: "Special Projects",
        dept: "ESL Programs",
      },
      // {
      //   id: 74,
      //   image: "Mr-Andrew-Andy-Wood.png",
      //   name: "Andy Wood",
      //   post: "Project Director",
      //   flag: "Canada.png",
      //   team: "Special Projects",
      //   dept: "The Global Story writing Project",
      // },
      // {
      //   id: 75,
      //   image: "Mrs-Esmari-Kotze-2.jpg",
      //   name: "Mrs. Esmari Kotze",
      //   post: "Director of Curriculum Development and Quality Assurance",
      //   flag: "South-Africa.png",
      //   team: "Special Projects",
      //   dept: "The Global Story writing Project",
      // },
    ],
  },
  {
    id: "09",
    team: "Section Leaders",
    employee: [
      {
        id: 76,
        image: "Ms-Noreen-Cruz.png",
        name: "Ms. Noreen Cruz (Philippines) ",
        post: "Lead, Early Childhood Center",
        flag: "Philippines.png",
        team: "Section Leaders",
      },
      {
        id: 77,
        image: "Mrs-Tania-Lofty-Eaton.png",
        name: "Mrs. Tania Lofty-Eaton (Namibia) ",
        post: "Lead, Elementary School",
        flag: "Namibia.png",
        team: "Section Leaders",
      },
      {
        id: 78,
        image: "Mrs-Renet-Wentzel.png",
        name: "Mrs. Renet Wentzel (South Africa) ",
        post: "Lead, Middle School",
        flag: "South-Africa.png",
        team: "Section Leaders",
      },
      {
        id: 79,
        image: "Ms-Faith-Villanueva.png",
        name: "Ms. Faith Villanueva",
        post: "Lead, Upper School",
        flag: "Laos.png",
        team: "Section Leaders",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is the Dr. Myatt Academy of Learning?",
    answer: `The Academy is an affordable K-12 online learning program that follows the US and Canadian mandated curriculum, so students and parents of young students can measure their success. Our teaching staff are all hand-picked, qualified, certified professional teachers (as opposed to teacher assistants and tutors) who love what they do.
Our online learning program is designed to promote learning in situations where it is required. We are a fantastic option for homeschool families, summer vacation learning, and students who need academic reinforcement. No matter where in the world or in what time zone one is, the Academy's programs are always available. Simply put, the Academy's flexibility is a dream come true for families and students since our teachers provide instructional support for each academic concept along with practice exercises and quizzes.
`,
  },
  {
    question: "What is the Academy's mission and purpose?",
    answer: `As is evident from our “Special Projects” section, the mission of the Academy is UNIQUE in that we are dedicated to making education accessible to children worldwide, regardless of social and economic status.`,
  },
  {
    question: "How is the Academy unique?",
    answer: `
    Here are some of the features that make the Academy a special place:
Senior management are all experienced and qualified teachers holding teaching licences in the nations where they reside. The Academy is led by experienced teachers well-versed in curriculum development and quality instruction.
Quality control is a priority. All lessons are carefully monitored to ensure curriculum compliance and content quality. Where shortcomings are identified, materials are promptly updated.
Experienced, vetted, and certified teachers lead every lesson.
Subjects are taught by teachers certified in the subject area they are teaching.
Our international teaching team brings international flair to the classes and curriculum.
We maintain high academic standards that follow the curricula of Canada and the USA Common Core.
The Academy is built on traditional standards, where we focus only on academic subject matter. We respect the right of parents and guardians to raise and educate their children according to their social, religious, and cultural backgrounds as well as beliefs concerning gender ideology.
The Academy is focused on developing critical thinking skills. We explore different perspectives on issues to support students in developing informed positions on issues.
We focus on bite-sized learning. Instead of lengthy lectures, we condense teaching lessons into smaller modules.
All academic lessons and exercises are focused on one key skill or concept. In our language arts curriculum, for example, the skill being taught is reinforced in each activity, from the stories to the quizzes.
Philanthropic mission. A significant portion of our revenue will be used to provide educational access to kids most in need, regardless of where they reside.
No hidden costs. Straightforward, low-cost fee.
Colorful and engaging lessons with substantive and curriculum-supporting content. We also add fun where and how possible.
Our language arts curriculum offers hundreds of unique stories written by youth from around the world.
Hands-on and involved management and staff who use a personal approach.
Staff members answer customer queries in real time. No AI is used`,
  },
  {
    question: "How can the Academy help me?",
    answer: `Excellent for individuals who homeschool and need academic support. Everything is available. Instructional materials, practice activities, interactive tests, and much more are being added. For updates, kindly join us at Yak's Cafe.
Excellent for academic reinforcement, mobile families, summer school, and homeschooling.
`,
  },
  {
    question: "What is Yak's Café?",
    answer: `Our virtual campus has been designed to be welcoming and interactive. Many are curious about our ever-evolving courses, documentaries, and philanthropic projects, so we give you the opportunity to feel part of our mission through our notice board at the Academy's coffee shop, Yak's Café. Put the coffee on and join us as we host discussions on a variety of topics concerning education with parents and students at Yak's Café. Announcements forthcoming. Stay tuned!.
`,
  },
  {
    question: "Tell me about your courses.",
    answer: `Our programs are thorough. In addition to providing curriculum-aligned topics, we frequently go above and beyond by providing additional classes to support learning. At a minimum, all courses include live class instruction and teacher-led videos. For updates, please check Yak's Cafe. There are interactive quizzes, practice assignments, and teacher-led lessons in each class. Additional exercises in language arts classes include vocabulary practice and stories produced by youth from around the world.
`,
  },
  {
    question: "What grade and subjects do you teach?",
    answer: `We now offer math and language arts in grades 1-6. Our early childhood center and grades 1-6 social studies and science courses will be introduced during the coming months. The middle school program will begin in the spring of 2024 and offer the four core courses of math, science, language arts, and social studies. Our high school program will start in December 2024.`,
  },
  {
    question: "Can I study using my own schedule?",
    answer: `Yes. This is one of the greatest benefits of the Academy. You can access your courses 24/7/365 from wherever in the world you reside.`,
  },
  {
    question: "How fast should I complete the lessons?",
    answer: `The student's needs will determine this. While some students will move more quickly, others may complete only one or two units each week. A minimum of two lessons each week is advised to keep the learner moving forward, regardless of the preferred pace. As well, learners will have access to the course for one year after purchase. Thus, a plan to complete the full course should be made to ensure that the course is finished before access to the course ends.`,
  },
  {
    question: "Do I get a discount if I purchase more than one course?",
    answer: `Our current rate is excellent, particularly given the number of units offered in each subject, the substantive content contained in each, and the fact that qualified teachers lead each lesson. Grade-level subjects range from 35 to 55 units at a rate of $50 USD. Our aim is to ensure that our fees are within the reach of working families. However, we will provide a discounted price for a grade-level bundle (four core subjects) once the core subjects for each grade level are available. Please visit Yak's Café for updates.`,
  },
  {
    question: "When I finish a course, do I get a certificate?",
    answer:
      "You will, and best wishes for great success! Certificates will be produced automatically and emailed to the email address supplied at Academy registration.",
  },
  {
    question: "Do you provide refunds if I do not like a course?",
    answer:
      "Yes, however, there is a one- week deadline for requests after a course is purchased. This is done in order to prevent scenarios in which a course is bought, swiftly completed, and a refund requested",
  },
  {
    question: "Can I access a course as often as I wish?",
    answer: `Yes, you can. You are also given course access for one year after you've purchased it.
`,
  },
  {
    question: "Who should register for the course? Myself or my child?",
    answer: `Our policy requires parents or guardians to register a youngster under the age of 14 in order to guarantee adult supervision. Students who are 14 and older can self-register. However, we strongly recommend adult monitoring of student progress regardless of the student's age.`,
  },
  {
    question: "What materials are provided with courses? ",
    answer: `A specific list of resource materials is included with each course and is highlighted in the course outlines. Generally, they include:
A teaching video lesson 
Story vocabulary practice exercises (for language arts)
Stories and reading comprehension exercises (for language arts)
Practice worksheets
Interactive quizzes
`,
  },
  {
    question: "How can I contact the Academy?",
    answer: `You can contact us by email at questions@myattacademy.com
One of our Academy team members will respond to your query.
Soon, you will be able to speak via phone with a member of the Academy. We are currently working on building our capacity in this area. Please have patience as we are a new company and working on improving the services we provide.`,
  },
  {
    question: "Where is the Academy located?",
    answer: "The Academy's headquarters are in New Brunswick, Canada.",
  },
];

const courses = [
  {
    id: "course-1",
    shift: "early-childhood-center",
    shift_title: "Early Childhood (Ages 3-5)",
    thumbnail: "/placeholder/reading-table.png",
    readMoreUrl: "/coming-soon",
    enrollHereUrl: "/coming-soon",
  },
  {
    id: "course-2",
    shift: "elementary-childhood-center",
    shift_title: "Elementary School (Grades 1-6)",
    thumbnail: "/placeholder/elementory-school-table.png",
    readMoreUrl: "/courses/elementary-school",
    enrollHereUrl: "/enrollment",
  },
  {
    id: "course-3",
    shift: "middle-childhood-center",
    shift_title: "Middle School (Grades 7-9)",
    thumbnail: "/placeholder/meeting-table.png",
    readMoreUrl: "/coming-soon",
    enrollHereUrl: "/coming-soon",
  },
  {
    id: "course-4",
    shift: "upper-childhood-center",
    shift_title: "Upper School (Grades 10-12)",
    thumbnail: "/placeholder/Coursematerialscards.png",
    readMoreUrl: "/coming-soon",
    enrollHereUrl: "/coming-soon",
  },
  {
    id: "course-5",
    shift: "tree-childhood-center",
    shift_title: "The Reading Tree (All ages)",
    thumbnail: "/placeholder/Course_materials_cards.png",
    readMoreUrl: "/coming-soon",
    enrollHereUrl: "/coming-soon",
  },
];

const subjectsFalse = [
  {
    id: "1",
    title: "Language Arts",
    isAvailable: false,
    link: "/courses/elementary-school",
  },
  {
    id: "2",
    title: "Mathematics",
    isAvailable: false,
    link: "/courses/elementary-school",
  },
  {
    id: "3",
    title: "Sciences",
    isAvailable: false,
    link: "#",
  },
  {
    id: "4",
    title: "Social Studies",
    isAvailable: false,
    link: "#",
  },
  {
    id: "5",
    title: "Elective courses",
    isAvailable: false,
    link: "#",
  },
  {
    id: "6",
    title: "Health and Physical Education",
    isAvailable: false,
    link: "#",
  },
  {
    id: "7",
    title: "Art",
    isAvailable: false,
    link: "#",
  },
  {
    id: "8",
    title: "Music",
    isAvailable: false,
    link: "#",
  },
  {
    id: "9",
    title: "Technology",
    isAvailable: false,
    link: "#",
  },
];

const yaksPageData: Notice[] = [
  {
    date: "February, 2024",
    type: "Science - Grades 1 - 6",
    message: `Ms. Tania and Ms. Kristen and our whole team of qualified and experienced science teachers complete the release of our exciting science courses for the elementary school. You will love the creativity and enthusiasm of our amazing science teachers as they bring science to life!`,
  },
  {
    date: "March, 2024",
    type: "Social Studies - Grades 1 - 6",
    message: `In February, we will happily release our social studies courses for Elementary School`,
  },
  {
    date: "May 2024",
    type: "Pre-school",
    message: `In May, we will launch our pre-school program. Children will learn as they’re entertained by our engaging team of qualified and licensed teachers.`,
  },
  {
    date: "June, 2024",
    type: "Kindergarten",
    message: `In June, we will complete the upload of all revisions to our kindergarten section.`,
  },
  {
    date: "June, 2024",
    type: "The Reading Tree",
    message: `A special English language reading program to help kids (and adults) learn to read, enhance comprehension skills and more! Updates to follow.`,
  },
  {
    date: "August, 2024",
    type: "Middle School",
    message: `Middle School math will be available on or before August 1, 2024. We're counting the days!`,
  },
  {
    date: "Coming Soon",
    type: "Mini Documentary Series (Mini Docs)",
    message: `We will also launch the first of our science and geography mini-docs.  See our Special Projects section for details.`,
  },
  {
    date: "August, 2024",
    type: "Middle School",
    message: `Middle school language arts courses will be fully available on or before August 1, 2024.`,
  },
  {
    date: "September 2024",
    type: "General",
    message: `The Academy's Resource Center will open so parents can purchase an assortment of our curriculum-based children's stories, subject-specific practice worksheets, questionnaires,  and parent's guides for all subjects in grades 1-6.  We also hope to have these helpful books available in hard copy so you can essentially have a school-in-a-box, complete with chocolate milk and cookies!
`,
  },
  {
    date: "October, 2024",
    type: "Upper School",
    message: `In October, we will release our complete upper school math curriculum.`,
  },
  {
    date: "November, 2024",
    type: "Upper School",
    message: `We expect to launch our upper school language arts and social studies subjects in November and with a good breeze at our backs, we hope to start our tri-science program We'll keep you updated monthly.`,
  },
  {
    date: "December, 2024",
    type: "General",
    message: `Tri-sciences program - biology, chemistry, and physics are being prepared now and we hope to launch a fantastic tri-science program before the end of 2024. Phew! `,
  },
];

export const data = {
  teachers: [
    ...earlyChildhoodTeacher,
    ...elementarySchoolTeachers,
    ...upperSchoolTeachers,
    ...middleSchoolTeachers,
  ],
  staff,
  faqs,
  courses,
  subjectsFalse,
  yaksPageData,
};
