var users = [
    { id: 1, name: "Владимир", email: "tarkhov.ve@dvfu.ru" },
    { id: 2, name: "Валентин", email: "gratc.vs@dvfu.ru" },
    { id: 3, name: "Алексей", email: "streltcov.ar@dvfu.ru" },
    { id: 4, name: "Дмитрий", email: "machkasov.da@dvfu.ru" },
    { id: 5, name: "Анна", email: "gordeeva.ao@dvfu.ru" }
];
var usersWithAvatar = [
    { id: 6, name: "Артём", email: "yung.ab@dvfu.ru", avatar: "ArtemAvatar.jpeg" },
    { id: 7, name: "Алексей", email: "streltcov.ar@dvfu.ru", avatar: "AlexeyAvatar.jpeg" },
    { id: 8, name: "Николай", email: "volchkov.nd@dvfu.ru", avatar: "Nikolai.jpeg" }
];

function editUserDetails(id, name, email) {
    var userIndex = users.findIndex(function (user) { return user.id === id; });
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].email = email;
    }
}

function renderUsers() {
        var usersList = document.getElementById('usersList');
        var html = '';
        users.forEach(user => {
            html += `<li>${user.id}: ${user.name} - ${user.email} <button onclick="editUser(${user.id})">Edit</button></li>`;
        });
        usersList.innerHTML = html;
}

function editUser(userId) {
      var newName = prompt('Enter new name:');
      var newEmail = prompt('Enter new email:');
      editUserDetails(userId, newName, newEmail);
      renderUsers(); // Обновляю список пользователей после редактирования
}
	
function uploadImageForUser(id) {
      var userAvatar = prompt('Enter image URL for user ' + id + ':');
      var userIndex = usersWithAvatar.findIndex(function (user) { return user.id === id; });
      if (userIndex !== -1) {
        usersWithAvatar[userIndex].avatar = userAvatar;
        renderUsersWithAvatar(); // Обновляю список пользователей с аватарками после добавления
      }
}

function renderUsersWithAvatar() {
      var usersWithAvatarList = document.getElementById('usersWithAvatarList');
      var html = '';
      usersWithAvatar.forEach(function (user) {
        html += '<li>' + user.id + '. ' + user.name + ' - ' + user.email + ' - <img src="' + user.avatar + '" width="50" height="50"><button onclick="uploadImageForUser(' + user.id + ')">Upload Avatar</button></li>';
      });
      usersWithAvatarList.innerHTML = html;
    }
