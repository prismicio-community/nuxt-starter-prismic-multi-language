import { type HTMLRichTextMapSerializer } from '@prismicio/client';

const serializer: HTMLRichTextMapSerializer = {
  paragraph: ({ children }) =>
    /* html */ `<p class="mb-7 last:mb-0">${children}</p>`,
  oList: ({ children }) =>
    /* html */ `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children}</ol>`,
  oListItem: ({ children }) =>
    /* html */ `<li class="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">${children}</li>`,
  list: ({ children }) =>
    /* html */ `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children}</ul>`,
  listItem: ({ children }) =>
    /* html */ `<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">${children}</li>`,
  preformatted: ({ children }) =>
    /* html */ `<pre class="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg"><code>${children}</code></pre>`,
  strong: ({ children }) =>
    /* html */ `<strong class="font-semibold">${children}</strong>`,
  hyperlink: ({ children, node }) =>
    /* html */`<a href="${node.data.url}" class="underline decoration-1 underline-offset-2">${children}</a>`
}

export default serializer;