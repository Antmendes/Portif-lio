
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const social = document.getElementById('profile.social')
    social.innerText = profileData.social
    social.href = "https://www.linkedin.com/in/antoniomend/"

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = profileData.email
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.language.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project =>{
        return `
        <li>
        <h3 class="title ">${project.name}</h3>
        <p>${project.description}</p>
       <div class="link">
        <a href="${project.githubUrl}" target="_blank"><i class="fa-brands fa-github"></i>GitHub</a>
        <a href="${project.siteUrl}" target="_blank"><i class="fa-solid fa-link"></i>Site</a>
       </div>
    </li>`
    }).join('')
}

function updateFormacao(profileData){
    const formacao = document.getElementById('profile.education')
    formacao.innerHTML = profileData.education.map(info => {
        return `
        <li>
                <h3 class="title">${info.school}</h3>
                <h5>${info.curso}</h5>
                <p class="period">${info.period}</p>
              </li>`
    }).join('')
}

function updateCursos(profileData){
    const cursos = document.getElementById('profile.curso')
    cursos.innerHTML = profileData.cursos.map(curso => {
        return `
        <li>
                <h3 class="title">${curso.name}</h3>
                <h5>${curso.description}</h5>
                <p class="period">${curso.period}</p>
              </li>`
    }).join('')
}

(async () =>{
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateFormacao(profileData)
    updateCursos(profileData)
})()