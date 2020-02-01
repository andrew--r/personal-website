const renderContact = ({ url, title }) => `
<li class="contacts__item">
  <a href="${url}">${title}</a>
</li>
`;

module.exports = (context) => `
<ul class="contacts">
  ${context.siteData.contacts.map(renderContact).join('')}
</ul>
`;
