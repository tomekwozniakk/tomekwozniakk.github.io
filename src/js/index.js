import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// fetch API 
fetch("https://api.github.com/users/tomekwozniakk/repos")
.then(resp => resp.json())
.then(resp => {
  for (let repo of resp) {
    const {name, html_url, homepage, description} = repo;
    const repositoryList = document.querySelector(".projects-grid--js");
    const myTemplate = `<article class="project">
    <div class="project__circles-container">
      <span class="project__circle project__circle--first"></span>
      <span class="project__circle project__circle--second"></span>
      <span class="project__circle project__circle--third"></span>
    </div>
    <svg class="project-gh-logo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9906 1.78748C6.19453 1.78513 1.5 6.47732 1.5 12.2687C1.5 16.8484 4.43672 20.7414 8.52656 22.1711C9.07734 22.3094 8.99297 21.9179 8.99297 21.6508V19.8344C5.8125 20.207 5.68359 18.1023 5.47031 17.7508C5.03906 17.0148 4.01953 16.8273 4.32422 16.4758C5.04844 16.1031 5.78672 16.5695 6.64219 17.8328C7.26094 18.7492 8.46797 18.5945 9.07969 18.4422C9.21328 17.8914 9.49922 17.3992 9.89297 17.0172C6.59766 16.4265 5.22422 14.4156 5.22422 12.025C5.22422 10.8648 5.60625 9.79841 6.35625 8.93826C5.87812 7.52029 6.40078 6.30623 6.47109 6.12576C7.83281 6.00388 9.24844 7.10076 9.35859 7.18748C10.132 6.97888 11.0156 6.86873 12.0047 6.86873C12.9984 6.86873 13.8844 6.98357 14.6648 7.19451C14.9297 6.99295 16.2422 6.05076 17.5078 6.1656C17.5758 6.34607 18.0867 7.53201 17.6367 8.93123C18.3961 9.79373 18.7828 10.8695 18.7828 12.032C18.7828 14.4273 17.4 16.4406 14.0953 17.0219C14.3784 17.3002 14.6031 17.6322 14.7564 17.9984C14.9098 18.3646 14.9886 18.7577 14.9883 19.1547V21.7914C15.007 22.0023 14.9883 22.2109 15.3398 22.2109C19.4906 20.8117 22.4789 16.8906 22.4789 12.2711C22.4789 6.47732 17.782 1.78748 11.9906 1.78748Z" fill="white"/>
      </svg> 
    <h3 class="project__title">
      <span class="project__category">project:</span> 
      <span class="project__text--title">${name}</span>
    </h3>
    <p class="project__description">
      <span class="project__category">description:</span> 
      <span class="project__text">${description}</span>
    </p>
    <p class="project__demo">
      <span class="project__category">demo:</span>
      <span class="project__text">&lt;<a class="project__link" href="${homepage}" title="link to ${name} page on github pages">see_here</a>&gt; </span>
    </p>
    <p class="project__github">
      <span class="project__category">github:</span>
      <span class="project__text">&lt;<a class="project__link" href="${html_url}" title="link to ${name} repository on github">source_code</a>&gt; </span>
    </p>
  </article>`;
  if(description) {
    repositoryList.innerHTML += myTemplate;
  }}
})
.catch(eror => {
  console.log("these are not the repos you are lookin' for");
  const repositoryList = document.querySelector(".projects-grid--js");
  const myTemplate = `<article class="project">
  <div class="project__circles-container">
    <span class="project__circle project__circle--first"></span>
    <span class="project__circle project__circle--second"></span>
    <span class="project__circle project__circle--third"></span>
  </div>
  <svg class="project-gh-logo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9906 1.78748C6.19453 1.78513 1.5 6.47732 1.5 12.2687C1.5 16.8484 4.43672 20.7414 8.52656 22.1711C9.07734 22.3094 8.99297 21.9179 8.99297 21.6508V19.8344C5.8125 20.207 5.68359 18.1023 5.47031 17.7508C5.03906 17.0148 4.01953 16.8273 4.32422 16.4758C5.04844 16.1031 5.78672 16.5695 6.64219 17.8328C7.26094 18.7492 8.46797 18.5945 9.07969 18.4422C9.21328 17.8914 9.49922 17.3992 9.89297 17.0172C6.59766 16.4265 5.22422 14.4156 5.22422 12.025C5.22422 10.8648 5.60625 9.79841 6.35625 8.93826C5.87812 7.52029 6.40078 6.30623 6.47109 6.12576C7.83281 6.00388 9.24844 7.10076 9.35859 7.18748C10.132 6.97888 11.0156 6.86873 12.0047 6.86873C12.9984 6.86873 13.8844 6.98357 14.6648 7.19451C14.9297 6.99295 16.2422 6.05076 17.5078 6.1656C17.5758 6.34607 18.0867 7.53201 17.6367 8.93123C18.3961 9.79373 18.7828 10.8695 18.7828 12.032C18.7828 14.4273 17.4 16.4406 14.0953 17.0219C14.3784 17.3002 14.6031 17.6322 14.7564 17.9984C14.9098 18.3646 14.9886 18.7577 14.9883 19.1547V21.7914C15.007 22.0023 14.9883 22.2109 15.3398 22.2109C19.4906 20.8117 22.4789 16.8906 22.4789 12.2711C22.4789 6.47732 17.782 1.78748 11.9906 1.78748Z" fill="white"/>
    </svg> 
  <h3 class="project__title">
    <span class="project__category">error:</span> 
    <span class="project__text--title">Something went wrong. Repair droids are already dispatched!</span>
  </h3>
</article>
<article class="project">
  <div class="project__circles-container">
    <span class="project__circle project__circle--first"></span>
    <span class="project__circle project__circle--second"></span>
    <span class="project__circle project__circle--third"></span>
  </div>
  <svg class="project-gh-logo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9906 1.78748C6.19453 1.78513 1.5 6.47732 1.5 12.2687C1.5 16.8484 4.43672 20.7414 8.52656 22.1711C9.07734 22.3094 8.99297 21.9179 8.99297 21.6508V19.8344C5.8125 20.207 5.68359 18.1023 5.47031 17.7508C5.03906 17.0148 4.01953 16.8273 4.32422 16.4758C5.04844 16.1031 5.78672 16.5695 6.64219 17.8328C7.26094 18.7492 8.46797 18.5945 9.07969 18.4422C9.21328 17.8914 9.49922 17.3992 9.89297 17.0172C6.59766 16.4265 5.22422 14.4156 5.22422 12.025C5.22422 10.8648 5.60625 9.79841 6.35625 8.93826C5.87812 7.52029 6.40078 6.30623 6.47109 6.12576C7.83281 6.00388 9.24844 7.10076 9.35859 7.18748C10.132 6.97888 11.0156 6.86873 12.0047 6.86873C12.9984 6.86873 13.8844 6.98357 14.6648 7.19451C14.9297 6.99295 16.2422 6.05076 17.5078 6.1656C17.5758 6.34607 18.0867 7.53201 17.6367 8.93123C18.3961 9.79373 18.7828 10.8695 18.7828 12.032C18.7828 14.4273 17.4 16.4406 14.0953 17.0219C14.3784 17.3002 14.6031 17.6322 14.7564 17.9984C14.9098 18.3646 14.9886 18.7577 14.9883 19.1547V21.7914C15.007 22.0023 14.9883 22.2109 15.3398 22.2109C19.4906 20.8117 22.4789 16.8906 22.4789 12.2711C22.4789 6.47732 17.782 1.78748 11.9906 1.78748Z" fill="white"/>
    </svg> 
  <h3 class="project__title">
    <span class="project__category">solution:</span> 
    <span class="project__text--title">If you click on Github icon at the bottom of the page, you can still see my projects!</span>
  </h3>
</article>`
  repositoryList.innerHTML = myTemplate;
})