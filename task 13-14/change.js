const change = document.getElementById("change");

function change_all() {
    const surnameEl = document.getElementById('Surname');
    const nameEl = document.getElementById('Name');
    const patronymicEl = document.getElementById('Patronymic');
    const genderEl = document.getElementById('Gender');
    const birthPlaceEl = document.getElementById('BirthPlace');
    if (surnameEl.innerText === 'Цыцарева') {
        surnameEl.innerText = 'Tsytsareva';
        nameEl.innerText = 'Zlata';
        patronymicEl.innerText = 'Igorevna';
        genderEl.innerText = 'female';
        birthPlaceEl.innerText = 'Arkhangelsk';
    } else {
        surnameEl.innerText = 'Цыцарева';
        nameEl.innerText = 'Злата';
        patronymicEl.innerText = 'Игоревна';
        genderEl.innerText = 'жен';
        birthPlaceEl.innerText = 'гор.Архангельск';
    }
}
change.addEventListener('click', change_all);
