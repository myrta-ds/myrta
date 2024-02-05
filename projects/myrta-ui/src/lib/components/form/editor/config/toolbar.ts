import { ToolbarConfig } from '../models/toolbar.model';

export const defaultToolbar: ToolbarConfig = {
  buttons: [
    'paragraph',
    '|',
    'font',
    'fontsize',
    'brush',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    {
      name: 'left',
      list: ['left', 'right', 'center', 'justify'],
    },
    '|',
    'lineHeight',
    'indent',
    'outdent',
    '|',
    {
      name: 'ul',
      list: ''
    },
    {
      name: 'ol',
      list: ''
    },
    '|',
    'link',
    {
      name: 'image',
      css: {
        display: 'flex'
      }
    },
    'table',
    'video',
    'source',
    '|',
    'find',
    'undo',
    'redo',
  ],
  // buttonsMD: [
  //   'paragraph',
  //   '|',
  //   'font',
  //   'fontsize',
  //   'brush',
  //   'dots'
  // ],
  // buttonsSM: [
  //   'paragraph',
  //   '|',
  //   'font',
  //   'fontsize',
  //   'brush',
  //   'dots'
  // ],
  // buttonsXS: [
  //   'paragraph',
  //   '|',
  //   'font',
  //   'fontsize',
  //   'brush',
  //   'dots'
  // ]
}
