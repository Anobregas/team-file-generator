function generateHTML(teamMembers) {
    const cards = teamMembers.map(member => {
      const { name, role, id, email } = member.getInfo();
      let specialInfo = '';
  
      if (member instanceof Manager) {
        specialInfo = `Office Number: ${member.officeNumber}`;
      } else if (member instanceof Engineer) {
        specialInfo = `GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>`;
      } else if (member instanceof Intern) {
        specialInfo = `School: ${member.school}`;
      }
  
      return `
        <div class="card">
          <div class="card-header">
            <h2>${name}</h2>
            <h3>${role}</h3>
          </div>
          <div class="card-body">
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>${specialInfo}</p>
          </div>
        </div>
      `;
    });
  
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Team Roster</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./style.css">
        </head>
        <body>
          <header>
            <h1>Team Roster</h1>
          </header>
          <main>
            ${cards.join('')}
          </main>
        </body>
      </html>
    `;
  }
  module.exports = generateHTML