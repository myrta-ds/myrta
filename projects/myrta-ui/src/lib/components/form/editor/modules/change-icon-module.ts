export const changeIconsFunction = (name: string, control: any, clearName: any) => {
  switch (clearName) {
    case  'paragraph':
      return '<span class="mrx-icon icon-wysiwyg-icons-paragraph icon-font-24"></span>'
    case 'bold':
      return (`<span class="mrx-icon icon-wysiwyg-icons-text-bold icon-font-24"></span>`);
    case 'strikethrough':
      return '<span class="mrx-icon icon-wysiwyg-icons-strikethrough-text icon-font-24"></span>'
    case 'underline':
      return (`<span class="mrx-icon icon-wysiwyg-icons-text-underline icon-font-24"></span>`);
    case 'italic':
      return '<span class="mrx-icon icon-wysiwyg-icons-text-italic icon-font-24"></span>';
    case 'redo':
      return '<span class="mrx-icon icon-reload icon-font-24"></span>'
    case 'undo':
      return '<span class="mrx-icon icon-return icon-font-24"></span>'
    case 'search':
      return '<span class="mrx-icon icon-search icon-font-24"></span>'
    case 'source':
      return '<span class="mrx-icon icon-code icon-font-24"></span>'
    case 'table':
      return '<span class="mrx-icon icon-table icon-font-24"></span>'
    case 'valign':
      return '<span class="mrx-icon icon-wysiwyg-icons-padding icon-font-24"></span>'
    case 'splitv':
      return '<span class="mrx-icon icon-wysiwyg-icons-column-split icon-font-24"></span>'
    case 'merge':
      return '<span class="mrx-icon icon-wysiwyg-icons-column-merge icon-font-24"></span>'
    case 'addcolumn':
      return '<span class="mrx-icon icon-wysiwyg-icons-add-column icon-font-24"></span>'
    case 'addrow':
      return '<span class="mrx-icon icon-wysiwyg-icons-add-row icon-font-24"></span>'
    case 'brush':
      return '<span class="mrx-icon icon-wysiwyg-icons-fill-color icon-font-24"></span>'
    case 'Background':
      return null
    case 'Text':
      return null
    case 'Border':
      return null
    case 'font':
      return '<span class="mrx-icon icon-wysiwyg-icons-font-family icon-font-24"></span>'
    case 'fontsize':
      return '<span class="mrx-icon icon-wysiwyg-icons-font-size icon-font-24"></span>'
    case 'left':
      return '<span class="mrx-icon icon-wysiwyg-icons-text-align-left icon-font-24"></span>'
    case 'right':
      return '<span class="mrx-icon icon-wysiwyg-icons-text-align-right icon-font-24"></span>'
    case 'center':
      return '<span class="mrx-icon icon-wysiwyg-icons-text-align-center icon-font-24"></span>'
    case 'justify':
      return '<span class="mrx-icon icon-wysiwyg-icons-text-align-justify icon-font-24"></span>'
    case 'lineHeight':
      return '<span class="mrx-icon icon-wysiwyg-icons-line-height icon-font-24"></span>'
    case 'indent':
      return '<span class="mrx-icon icon-wysiwyg-icons-padding-left icon-font-24"></span>'
    case 'outdent':
      return '<span class="mrx-icon icon-wysiwyg-icons-padding-right icon-font-24"></span>'
    case 'ul':
      return '<span class="mrx-icon icon-point icon-font-24"></span>'
    case 'ol':
      return '<span class="mrx-icon icon-numbers icon-font-24"></span>'
    case 'link':
      return '<span class="mrx-icon icon-link icon-font-24"></span>'
    case 'image':
      return '<span class="mrx-icon icon-image icon-font-24"></span>'
    case 'delete':
      return '<span class="mrx-icon icon-delete icon-font-24"></span>'
    case 'upload':
      return '<span class="mrx-icon icon-upload icon-font-24"></span>'
    case 'video':
      return '<span class="mrx-icon icon-wysiwyg-icons-media icon-font-24"></span>'
    case 'dots':
      return '<span class="mrx-icon icon-more-vertical icon-font-24"></span>'
    case 'bin':
      return '<span class="mrx-icon icon-delete icon-font-24"></span>'
    case 'eye':
      return '<span class="mrx-icon icon-view icon-font-24"></span>'
    case 'pencil':
      return '<span class="mrx-icon icon-edit icon-font-24"></span>'
    case 'unlink':
      return '<span class="mrx-icon icon-cancel icon-font-24"></span>'
    case 'file':
      return '<span class="mrx-icon icon-file icon-font-24"></span>'
    case 'empty':
    case '':
      return null
    default:
      return '<span class="mrx-icon icon-close icon-font-24"></span>'
  }
}
