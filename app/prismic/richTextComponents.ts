import type { RichTextComponents } from '@prismicio/vue';

const components: RichTextComponents = {
  paragraph: { class: 'mb-7 last:mb-0' },
  oList: { class: 'mb-7 pl-4 last:mb-0 md:pl-6' },
  oListItem: { class: 'mb-1 list-decimal pl-1 last:mb-0 md:pl-2' },
  list: { class: 'mb-7 pl-4 last:mb-0 md:pl-6' },
  listItem: { class: 'mb-1 list-disc pl-1 last:mb-0 md:pl-2' },
  preformatted: { class: 'mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg' },
  strong: { class: 'font-semibold' },
  hyperlink: { class: 'underline decoration-1 underline-offset-2' }
}

export default components;