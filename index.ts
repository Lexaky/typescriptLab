interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Владимир", email: "tarkhov.ve@dvfu.ru" },
  { id: 2, name: "Валентин", email: "gratc.vs@dvfu.ru" },
  { id: 3, name: "Алексей", email: "streltcov.ar@dvfu.ru" },
  { id: 4, name: "Дмитрий", email: "machkasov.da@dvfu.ru" },
  { id: 5, name: "Анна", email: "gordeeva.ao@dvfu.ru"}
];

interface UserWithAvatar extends User {
  avatar: string;
}

const usersWithAvatar: UserWithAvatar[] = [
    {id: 6, name: "Артём", email: "yung.ab@dvfu.ru", avatar: "ArtemAvatar.jpeg"},
    {id: 7, name: "Алексей", email: "streltcov.ar@dvfu.ru", avatar: "AlexeyAvatar.jpeg"},
    {id: 8, name: "Николай", email: "volchkov.nd@dvfu.ru", avatar: "Nikolai.jpeg"}
];


function uploadImageForUser(id: number, image: string): void {
  const userIndex = usersWithAvatar.findIndex(user => user.id === id);
  if (userIndex !== -1)
  {
    usersWithAvatar[userIndex].avatar = image;
  }  
}

function editUserDetails(id: number, name: string, email: string): void {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    users[userIndex].name = name;
    users[userIndex].email = email;
  }
}

console.log(users); // Пользователи до редактирования
editUserDetails(1, "Алексей", "streltcov.ar@dvfu.ru"); // Редактирование данных пользователя
console.log(users); // Пользователи после редактирования

console.log(usersWithAvatar); //Пользователи с аватаркой
uploadImageForUser(usersWithAvatar[0].id, "StreamSniper.jpeg"); //Отредактировал аватарку первого пользователя
console.log(usersWithAvatar); //Пользователи после редактирования аватарки первого пользователя