import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Section = defineDocumentType(() => ({
  name: 'Section',
  filePathPattern: `sections/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    type: { type: 'string', required: true },
    order: { type: 'number', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Section],
})
