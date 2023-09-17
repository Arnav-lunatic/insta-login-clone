const username = document.querySelector('.username')
const password = document.querySelector('.password')


document.querySelector('.loginButton').addEventListener('click', () => {
    if (username.value ==='' || password.value ==='') {
        console.log('empty');
    }else {
        console.log(username.value, password.value);

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "arnav4c@gmail.com",
            Password: "C40C6C7A66C1B152BFE7FE33487701095DED",
            To: 'greatarnav.12@gmail.com',
            From: "arnav4c@gmail.com",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
          }).then(function (message) {
            alert("mail sent successfully")
          });
    }
})