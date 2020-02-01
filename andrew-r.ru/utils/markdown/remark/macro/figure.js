module.exports = function(macro) {
  macro.addMacro('figure', (content, props, { transformer, eat }) => ({
    type: 'FigureNode',
    data: {
      hName: 'figure',
      hProperties: {
        style: props.maxWidth && `max-width: ${props.maxWidth}`,
      },
    },
    children: transformer.tokenizeInline(content, eat.now()).concat({
      type: 'FigcaptionNode',
      data: {
        hName: 'figcaption',
      },
      children: transformer.tokenizeInline(props.caption, 0),
    }),
  }));
};
