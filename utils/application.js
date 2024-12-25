import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import getQueryString from './getQueryString.js';

const api = "https://script.google.com/macros/s/AKfycbwTJ9LgVB69U2IiGkhpE1YeBWgUd_8lbp9H4rNWFf-HmO2SJO_0Q_aLaEMeaEAxe7Zk/exec";

const app = () => {
    const form = document.querySelector('.application-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const dataKid = formData.get('data_kid');
        const dateOfBirthdayKid = formData.get('date_of_birthday_kid');
        const dataParent = formData.get('data_parent');
        const phoneParent = formData.get('phone_parent');

        const queryString = getQueryString(dataKid, dateOfBirthdayKid, dataParent, phoneParent);
        const requestString = `${api}?${queryString}`;

        try {
            await axios.post(requestString);
        } catch (e) {
            console.log(`Ошибка: ${e}`)
        }
        
    })
}

export default app;