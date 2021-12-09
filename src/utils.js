const names = {
  dentists: [
    {
      id: 1,
      firstName: "Barbe",
      lastName: "Cobello",
      email: "bcobello0@dentistcompanybvt.com",
      phone: "+1 (649) 431-8631",
      isSick: false
    }, {
      id: 2,
      firstName: "Errol",
      lastName: "Di Claudio",
      email: "ediclaudio1@dentistcompanybvt.com",
      phone: "+371 (411) 807-7679",
      isSick: false
    }, {
      id: 3,
      firstName: "Mathew",
      lastName: "Mival",
      email: "mmival2@dentistcompanybvt.com",
      phone: "+86 (498) 513-3256",
      isSick: false
    }, {
      id: 4,
      firstName: "Jayne",
      lastName: "Stower",
      email: "jstower3@dentistcompanybvt.com",
      phone: "+33 (759) 204-3550",
      isSick: false
    }
  ],

  assistants: [
    {
      id: 1,
      firstName: "Karie",
      lastName: "Beeho",
      email: "kbeeho0@dentistcompanybvt.com",
      phone: "+55 (265) 398-6822",
      isSick: false
    }, {
      id: 2,
      firstName: "Val",
      lastName: "McGilmartin",
      email: "vmcgilmartin1@dentistcompanybvt.com",
      phone: "+357 (773) 485-1772",
      isSick: false
    }
  ],

  clients: [
    {
      id: 1,
      firstName: "Iain",
      lastName: "Jarrelt",
      phone: "+62 (174) 121-2638",
      email: "ijarrelt0@umn.edu",
      dateOfBirth: "19/02/2010",
      isSick: false
    }, {
      id: 2,
      firstName: "Vicki",
      lastName: "Blase",
      phone: "+976 (503) 844-5225",
      email: "vblase1@imageshack.us",
      dateOfBirth: "29/09/1996",
      isSick: false
    }, {
      id: 3,
      firstName: "Adey",
      lastName: "Clapison",
      phone: "+48 (991) 104-5892",
      email: "aclapison2@delicious.com",
      dateOfBirth: "12/08/1981",
      isSick: false
    }, {
      id: 4,
      firstName: "Gavrielle",
      lastName: "Fonso",
      phone: "+86 (490) 239-7877",
      email: "gfonso3@newyorker.com",
      dateOfBirth: "17/04/1955",
      isSick: false
    }, {
      id: 5,
      firstName: "Jacob",
      lastName: "Syalvester",
      phone: "+86 (890) 926-0185",
      email: "jsyalvester4@qq.com",
      dateOfBirth: "23/04/2005",
      isSick: false
    }, {
      id: 6,
      firstName: "Brittaney",
      lastName: "Allcroft",
      phone: "+267 (502) 419-0294",
      email: "ballcroft5@a8.net",
      dateOfBirth: "25/09/1998",
      isSick: false
    }, {
      id: 7,
      firstName: "Fenelia",
      lastName: "Worthing",
      phone: "+55 (598) 746-9942",
      email: "fworthing6@booking.com",
      dateOfBirth: "01/10/1954",
      isSick: false
    }, {
      id: 8,
      firstName: "Allan",
      lastName: "Meriet",
      phone: "+7 (770) 173-1384",
      email: "ameriet7@sogou.com",
      dateOfBirth: "13/03/1958",
      isSick: false
    }, {
      id: 9,
      firstName: "Neddy",
      lastName: "Bootyman",
      phone: "+62 (388) 278-1885",
      email: "nbootyman8@dion.ne.jp",
      dateOfBirth: "12/02/2000",
      isSick: false
    }, {
      id: 10,
      firstName: "Marc",
      lastName: "Stairmand",
      phone: "+505 (952) 524-5640",
      email: "mstairmand9@ebay.com",
      dateOfBirth: "04/06/2010",
      isSick: false
    }, {
      id: 11,
      firstName: "Mathilde",
      lastName: "Yankov",
      phone: "+57 (875) 320-8915",
      email: "myankova@mail.ru",
      dateOfBirth: "17/03/1992",
      isSick: false
    }, {
      id: 12,
      firstName: "Chanda",
      lastName: "Baldacchi",
      phone: "+86 (833) 441-7580",
      email: "cbaldacchib@desdev.cn",
      dateOfBirth: "02/03/1951",
      isSick: false
    }, {
      id: 13,
      firstName: "Lorelei",
      lastName: "Howland",
      phone: "+93 (202) 773-8723",
      email: "lhowlandc@ft.com",
      dateOfBirth: "09/10/1979",
      isSick: false
    }, {
      id: 14,
      firstName: "Saunder",
      lastName: "Giraudot",
      phone: "+86 (494) 194-1078",
      email: "sgiraudotd@com.com",
      dateOfBirth: "19/04/1955",
      isSick: false
    }, {
      id: 15,
      firstName: "Martha",
      lastName: "Spellessy",
      phone: "+62 (231) 612-2295",
      email: "mspellessye@jalbum.net",
      dateOfBirth: "08/08/1984",
      isSick: false
    }, {
      id: 16,
      firstName: "Korrie",
      lastName: "Rolston",
      phone: "+351 (581) 992-1187",
      email: "krolstonf@behance.net",
      dateOfBirth: "15/02/2008",
      isSick: false
    }, {
      id: 17,
      firstName: "Eldon",
      lastName: "Cleall",
      phone: "+66 (396) 316-3579",
      email: "ecleallg@eventbrite.com",
      dateOfBirth: "23/04/1995",
      isSick: false
    }, {
      id: 18,
      firstName: "Susanetta",
      lastName: "Leavold",
      phone: "+86 (389) 832-9392",
      email: "sleavoldh@dion.ne.jp",
      dateOfBirth: "20/09/1974",
      isSick: false
    }, {
      id: 19,
      firstName: "Clywd",
      lastName: "Graysmark",
      phone: "+972 (472) 813-6150",
      email: "cgraysmarki@fc2.com",
      dateOfBirth: "16/04/2002",
      isSick: false
    }, {
      id: 20,
      firstName: "Maddalena",
      lastName: "Popeley",
      phone: "+86 (149) 663-2495",
      email: "mpopeleyj@tmall.com",
      dateOfBirth: "14/06/1996",
      isSick: false
    }, {
      id: 21,
      firstName: "Abba",
      lastName: "Obey",
      phone: "+86 (426) 533-2430",
      email: "aobeyk@dedecms.com",
      dateOfBirth: "17/02/1983",
      isSick: false
    }, {
      id: 22,
      firstName: "Juieta",
      lastName: "Stoke",
      phone: "+380 (814) 225-1563",
      email: "jstokel@blogspot.com",
      dateOfBirth: "29/04/2007",
      isSick: false
    }, {
      id: 23,
      firstName: "Rockie",
      lastName: "Darke",
      phone: "+55 (839) 967-0127",
      email: "rdarkem@ask.com",
      dateOfBirth: "28/05/2013",
      isSick: false
    }, {
      id: 24,
      firstName: "Winthrop",
      lastName: "Leal",
      phone: "+995 (297) 328-3457",
      email: "wlealn@bravesites.com",
      dateOfBirth: "26/09/2018",
      isSick: false
    }, {
      id: 25,
      firstName: "Corrie",
      lastName: "Essberger",
      phone: "+94 (773) 721-9584",
      email: "cessbergero@prnewswire.com",
      dateOfBirth: "27/11/2011",
      isSick: false
    }, {
      id: 26,
      firstName: "Erin",
      lastName: "Janiszewski",
      phone: "+351 (923) 556-0015",
      email: "ejaniszewskip@ed.gov",
      dateOfBirth: "08/04/1994",
      isSick: false
    }, {
      id: 27,
      firstName: "Kayla",
      lastName: "Muge",
      phone: "+51 (874) 875-8929",
      email: "kmugeq@twitpic.com",
      dateOfBirth: "22/12/2007",
      isSick: false
    }, {
      id: 28,
      firstName: "Wait",
      lastName: "Merrison",
      phone: "+52 (163) 205-4977",
      email: "wmerrisonr@google.co.uk",
      dateOfBirth: "07/08/2021",
      isSick: false
    }, {
      id: 29,
      firstName: "Kristofer",
      lastName: "Waadenburg",
      phone: "+62 (834) 295-7543",
      email: "kwaadenburgs@webeden.co.uk",
      dateOfBirth: "17/04/1975",
      isSick: false
    }, {
      id: 30,
      firstName: "Lynda",
      lastName: "Guiden",
      phone: "+62 (524) 686-2314",
      email: "lguident@amazon.co.jp",
      dateOfBirth: "16/06/1995",
      isSick: false
    }, {
      id: 31,
      firstName: "Tallou",
      lastName: "Mityushkin",
      phone: "+48 (626) 613-1439",
      email: "tmityushkinu@moonfruit.com",
      dateOfBirth: "21/07/2000",
      isSick: false
    }, {
      id: 32,
      firstName: "Mariska",
      lastName: "Ellicock",
      phone: "+63 (531) 629-3742",
      email: "mellicockv@geocities.jp",
      dateOfBirth: "23/10/1959",
      isSick: false
    }, {
      id: 33,
      firstName: "Fernande",
      lastName: "Gott",
      phone: "+86 (945) 717-3163",
      email: "fgottw@goodreads.com",
      dateOfBirth: "24/04/1962",
      isSick: false
    }, {
      id: 34,
      firstName: "Tove",
      lastName: "Joris",
      phone: "+81 (532) 419-9602",
      email: "tjorisx@unesco.org",
      dateOfBirth: "14/01/1966",
      isSick: false
    }, {
      id: 35,
      firstName: "Roscoe",
      lastName: "Figgen",
      phone: "+86 (148) 535-8628",
      email: "rfiggeny@sciencedirect.com",
      dateOfBirth: "16/01/2019",
      isSick: false
    }, {
      id: 36,
      firstName: "Sharline",
      lastName: "Ledstone",
      phone: "+53 (883) 219-5439",
      email: "sledstonez@ocn.ne.jp",
      dateOfBirth: "27/06/2013",
      isSick: false
    }, {
      id: 37,
      firstName: "Irma",
      lastName: "Timperley",
      phone: "+86 (353) 166-5327",
      email: "itimperley10@macromedia.com",
      dateOfBirth: "17/07/1977",
      isSick: false
    }, {
      id: 38,
      firstName: "Garek",
      lastName: "Igonet",
      phone: "+62 (923) 799-4665",
      email: "gigonet11@tripadvisor.com",
      dateOfBirth: "06/08/2015",
      isSick: false
    }, {
      id: 39,
      firstName: "Frederica",
      lastName: "Commander",
      phone: "+86 (288) 406-8717",
      email: "fcommander12@unicef.org",
      dateOfBirth: "16/01/1965",
      isSick: false
    }, {
      id: 40,
      firstName: "Virgina",
      lastName: "Endean",
      phone: "+7 (148) 627-7459",
      email: "vendean13@livejournal.com",
      dateOfBirth: "28/04/1976",
      isSick: false
    }, {
      id: 41,
      firstName: "Crawford",
      lastName: "Sherman",
      phone: "+62 (344) 223-8274",
      email: "csherman14@home.pl",
      dateOfBirth: "15/11/1967",
      isSick: false
    }, {
      id: 42,
      firstName: "Kalindi",
      lastName: "Relf",
      phone: "+54 (220) 907-2125",
      email: "krelf15@icq.com",
      dateOfBirth: "29/04/2006",
      isSick: false
    }, {
      id: 43,
      firstName: "Cosme",
      lastName: "Gatty",
      phone: "+235 (241) 866-1626",
      email: "cgatty16@uol.com.br",
      dateOfBirth: "23/09/2019",
      isSick: false
    }, {
      id: 44,
      firstName: "Mitchael",
      lastName: "Lankester",
      phone: "+86 (431) 965-8971",
      email: "mlankester17@com.com",
      dateOfBirth: "13/05/1959",
      isSick: false
    }, {
      id: 45,
      firstName: "Janis",
      lastName: "Jacqueminet",
      phone: "+86 (966) 998-6647",
      email: "jjacqueminet18@time.com",
      dateOfBirth: "18/12/1958",
      isSick: false
    }, {
      id: 46,
      firstName: "Guenna",
      lastName: "Eynon",
      phone: "+1 (408) 268-4979",
      email: "geynon19@walmart.com",
      dateOfBirth: "07/11/2019",
      isSick: false
    }, {
      id: 47,
      firstName: "Cortie",
      lastName: "Gatus",
      phone: "+62 (626) 649-4318",
      email: "cgatus1a@barnesandnoble.com",
      dateOfBirth: "29/08/1990",
      isSick: false
    }, {
      id: 48,
      firstName: "Lavinie",
      lastName: "Shipcott",
      phone: "+351 (661) 242-0474",
      email: "lshipcott1b@si.edu",
      dateOfBirth: "08/01/2017",
      isSick: false
    }, {
      id: 49,
      firstName: "Bobbye",
      lastName: "Litherland",
      phone: "+55 (742) 484-0173",
      email: "blitherland1c@nyu.edu",
      dateOfBirth: "19/05/2020",
      isSick: false
    }, {
      id: 50,
      firstName: "Jarvis",
      lastName: "Tookill",
      phone: "+62 (603) 582-5663",
      email: "jtookill1d@topsy.com",
      dateOfBirth: "15/11/1965",
      isSick: false
    }
  ]
}

const getRandomClient = () => {
  let person = names.clients[Math.floor(Math.random() * 50)]
  return `${person.firstName} ${person.lastName}`
}

const getRandomDentist = () => {
  let person = names.dentists[Math.floor(Math.random() * 4)]
  return `${person.firstName} ${person.lastName}`
}

const getRandomAssistant = () => {
  let person = names.assistants[Math.floor(Math.random() * 2)]
  return `${person.firstName} ${person.lastName}`
}

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 20) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomClient(),
  dentist: getRandomDentist(),
  assistant: getRandomAssistant(),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
