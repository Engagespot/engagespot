// static/js/your-script.js

function loadWarning() {
  // Find the element with class "navbar navbar--fixed-top"
  const navbarElement = document.querySelector('.theme-doc-breadcrumbs');

  // Check if the element is found before proceeding
  if (navbarElement) {
    // Create the new div with the desired content
    const newDiv = document.createElement('div');
    newDiv.className =
      'theme-admonition theme-admonition-caution alert alert--warning admonition_---node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module';
    newDiv.innerHTML = `
    <span class="admonitionIcon_---node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
    <svg viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path>
    </svg>
  </span>
  caution
</div>
<div class="admonitionContent_---node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
  <p>You are reading an outdated version of the documentation. Please read the latest v1.3.0 documentation <a href="https://docs.engagespot.com">here</a></p>
      `;

    // Insert the new div after the navbar element
    navbarElement.insertAdjacentElement('afterend', newDiv);
  } else {
    console.error('Element with class "navbar navbar--fixed-top" not found.');
  }
}
window.addEventListener('load', function () {
  loadWarning();
});

window.addEventListener('popstate', function () {
  // This code will run when the user navigates forward or backward
  loadWarning();
});
