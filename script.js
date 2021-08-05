let user = {
    name: 'Wisdom',
    age: 22,
}

function signIn(){
    window.localStorage.setItem('user', JSON.stringify(user));
};

let userParagraph = document.getElementById('user');

function getUser(){

    const user = JSON.parse(window.localStorage.getItem('user'));
    userParagraph.textContent = `${user.name} ${user.age}`;
}

function signOut(){
localStorage.removeItem('user');
userParagraph.textContent = '';
}
