
// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'м.Черкаси вул. Смілянська , 53',
    }

    var footer = {
      social:{
        email: {
          text:'dmytro@mail.com',
          href: 'mailto:dmytro@mail.com',
        },
        phone: {
          text: '+380670000123',
          href: 'tel:+380670000123',
        },
        linkedin: {
          text:'LinkedIn',
          href:'https://www.linkedin.com/in/dmytro-test',
        },
      },     
    }
//=================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: 'Resume | Summary',
    },
 
    header,

    main: {
      title:'Summary',
      summary: {
       
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start ',
      },
        
      experience: {
        title:'Other experience',
        text: ' Pet project for parsing sport eparing probability betting data',
      },

        },
  
        footer,
  
  
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: 'Resume | Skills',
    },
 
    header,

    main: {
      title:'All skills',
   skills:[
    {
      name:  'HTML',
      point: 10,
      isTop: true,  
    }, 
    {
      name:   'Handlebar',
      point: 8,
      isTop: false,
    }, 
    {
      name:   'VS Code',
      point: 8,
      isTop: true,
    },
    {
      name:   'Git',
      point: 7,
      isTop: true,
    },
    {
      name:   'Terminal',
      point: 8,
      isTop: false,
    },
   
    {
      name:   'NPM',
      point: 9,
    
    },
   {
      name:   'React.js',
      point: 0,
   },
   
   {
    name:   'NTP',
    point: null,
 }

   ],

   title:'My hobbies',
   hobbies:[
    {
      name: 'Music',
      isMain: true,
    },
    {
      name: 'Dance',
      isMain: true,
    },
    {
      name: 'Sport',
      isMain: false,
    },

   ],


        },
  
        footer,
  
  
  })
})


router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: 'Resume |Education',
    },
 
    header,

    main: {
      title:'My educstion',
      education:[
        {
          name:'Червонослобідська школа №2',
          isEnd: true,

        },
        {
          name:'Черкаський Державний Технологічний Уніварситет',
          isEnd: true,
        },
        {
          name:  'IT BRAINS',
          isEnd: false,
         } ,
      ],

      
      title: 'My certificates',
      certificates: [
        {
          name:'школа',
          id:123123,
        },
        {
          name:'університет',
          id:123123,
        },
        {
          name:'курси',
          id:123123,
        },


      ],
         
    },
  
        footer,
  
  
  })
})
//==============================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: 'Resume | Work',
    },
    layout:'big',
 
    header,

    main: {
      title: "Work history",
      works:[
        {
      position:'Junior Fullstack Developer',
      company:{
        name: 'IT Brains',
        url:'https://it-Brains.com.ua/',
      },
      duration: {
        from:'10.10.2022',
        to:'22.03.2023',
    
      },
      projectAmount: 3,

      projects:[
        {
          name: 'Resume',
          url:'https://it-Brains.com.ua/',
          about: 'Підручник із сучасного JavaScript: прості, але докладні пояснення з прикладами та завданнями, включаючи: замикання, DOM та події',
          stacks:[
            {
              name:'React.js',
            },
            {
              name:'HTML/CSS',
            },
            {
              name:'Node.Js',
            },
          ],
         stackAmount: 5,
    
        awards:[
          
        {
          name:'html-css.co.ua - інтернет-довідник, який містить повний перелік HTML тегів',
        },
        { 
          name: 'html-css.co.ua - інтернет-довідник, який містить повний перелік HTML тегів',
        },
    
         ],
         awardAmount: 8,

        }, 
        ],

        },
   
        
      ],

   
        },
  
        footer,
      })
  })
//===================================================================
  router.get('/person', function (req, res) {
    res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
  })
  
// ==============================================================================================
// Підключаємо роутер до бек-енду
module.exports = router
