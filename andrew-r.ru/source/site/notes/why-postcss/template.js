const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

module.exports = (context) => layout(context, article(context));
