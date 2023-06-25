import { marked } from 'marked';

export function markdown2Html(markdown: string): string {
  const underline = {
    name: 'underline',
    level: 'inline',
    start(src: string) {
      return src.indexOf('~');
    },
    tokenizer(src: string) {
      const rule = /^~([^~]+)~/;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'underline',
          raw: match[0], // This is the text that you want your token to consume from the source
          text: match[1].trim(), // You can add additional properties to your tokens to pass along to the renderer
        };
      }
      return;
    },

    renderer(token: any) {
      return `<u>${token.text}</u>`;
    },
  };
  const inlineCode = {
    name: 'inlineCode',
    level: 'inline',
    start(src: string) {
      return src.indexOf('`');
    },
    tokenizer(src: string) {
      const rule = /^(?:`)(`{2,}?|[^`]+)(?:`)$/g;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'inlineCode',
          raw: match[0], // This is the text that you want your token to consume from the source
          text: match[1].trim(), // You can add additional properties to your tokens to pass along to the renderer
        };
      }
      return;
    },

    renderer(token: any) {
      return `<code>${token.text}</code>`;
    },
  };
  marked.use({
    extensions: [underline, inlineCode],
    headerIds: false,
    mangle: false,
  });

  return marked(markdown);
}
