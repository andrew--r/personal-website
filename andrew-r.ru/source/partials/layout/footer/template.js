const renderContacts = require('./contacts/template');

module.exports = (context) => `
<footer class="footer">
  <div class="footer__contacts">
    ${renderContacts(context)}
  </div>

  <p>© 2015–... ${context.siteData.author.name}</p>
</footer>

<style>
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'),
    url('${context.getAssetUrl('fonts/fira-code/regular.woff2')}'),
    url('${context.getAssetUrl('fonts/fira-code/regular.woff')}');
    font-weight: 400;
    font-display: swap;
  }
</style>
`;
