export default class DummyBookstoreService {
  data = [
    {
      id: "1",
      title: "Гарри Поттер и философский камень",
      author: "Дж. К. Роулинг",
      genre: "Фэнтези",
      coverImage: "https://knigopoisk.org/media/books/Dz/55x83/Dzh_55x83.jpg",
    },
    {
      id: "2",
      title: "Гарри Поттер и узник Азкабана",
      author: "Дж. К. Роулинг",
      genre: "Фэнтези",
      coverImage: "https://knigopoisk.org/media/books/Dz/55x81/Dzh_55x81.jpg",
    },
    {
      id: "3",
      title: "Гарри Поттер и Дары Смерти",
      author: "Дж. К. Роулинг",
      genre: "Фэнтези",
      coverImage: "https://knigopoisk.org/media/books/Dz/55x85/Dzh_55x85.jpg",
    },
    {
      id: "4",
      title: "Гарри Поттер и Кубок Огня",
      author: "Дж. К. Роулинг",
      genre: "Фэнтези",
      coverImage:
        "https://knigopoisk.org/media/books/Ha/55x83/Harry_Potter_and_the_Goblet_of_Fire_book_55x83.jpg",
    },
    {
      id: "5",
      title: "Гарри Поттер и Орден Феникса",
      author: "Дж. К. Роулинг",
      genre: "Фэнтези",
      coverImage:
        "https://knigopoisk.org/media/books/or/55x84/orden_feniksa_garri_poter_55x84.jpg",
    },
    {
      id: "6",
      title: "Унесенные ветром",
      author: "Маргарет Митчелл",
      genre: "Роман",
      coverImage:
        "https://knigopoisk.org/media/books/10/55x84/10202_1_55x84.jpg",
    },
    {
      id: "7",
      title: "Граф Монте-Кристо",
      author: "Александр Дюма",
      genre: "Приключения",
      coverImage:
        "https://knigopoisk.org/media/books/13/55x87/1396800484_aleksandr-dyuma-graf-monte-kristo_55x87.jpg",
    },
    {
      id: "8",
      title: "Зеленая миля",
      author: "Стивен Кинг",
      genre: "Мистика",
      coverImage:
        "https://knigopoisk.org/media/books/ze/55x84/zelenaja_milja_stiven_king_55x84.jpg",
    },
    {
      id: "9",
      title: "Рита Хейуорт и спасение из Шоушенка",
      author: "Стивен Кинг",
      genre: "Реализм",
      coverImage:
        "https://knigopoisk.org/media/books/53/55x87/53f35402d20cf_55x87.jpg",
    },
    {
      id: "10",
      title: "А зори здесь тихие…",
      author: "Борис Васильев",
      genre: "Военная литература",
      coverImage:
        "https://knigopoisk.org/media/books/Bo/55x87/Boris_Vasilev__A_zori_zdes_tihie_55x87.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 0);
    });
  }
}
