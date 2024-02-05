import { ShortCodeI } from '../models/document-editor-short-codes.enum';

export const transformSysNameToViewName = (text: string, shortcodes: ShortCodeI[]) => {
  let tempText = text || ''

  shortcodes.forEach((shortcode: ShortCodeI) => {
    const reg1 = '\\[[^\\[]*'
    const reg2 = '[^\\]]*\\]'
    const regexp = new RegExp(reg1 + shortcode.systemName + reg2, 'gi')

    tempText = tempText.replace(regexp, `[${shortcode.viewName}]`);
  })

  return tempText
}

export const transformViewNameToSysName = (text: string, shortcodes: ShortCodeI[]) => {
  let tempText = text || ''

  shortcodes.forEach((shortcode: ShortCodeI) => {
    const reg1 = '\\[[^\\[]*'
    const reg2 = '[^\\]]*\\]'
    const regexp = new RegExp(reg1 + shortcode.viewName + reg2, 'gi')

    tempText = tempText.replace(regexp, `[${shortcode.systemName}]`);
  })

  return tempText
}

export const transformSysNameToPreviewName = (text: string, shortcodes: ShortCodeI[]) => {
  let tempText = text || ''

  shortcodes.forEach((shortcode: ShortCodeI) => {
    const reg1 = '\\[[^\\[]*'
    const reg2 = '[^\\]]*\\]'
    const regexp = new RegExp(reg1 + shortcode.systemName + reg2, 'gi')

    tempText = tempText.replace(regexp, shortcode.previewValue);
  })

  return tempText
}

export const transformViewNameToPreviewName = (text: string, shortcodes: ShortCodeI[]) => {
  let tempText = text || ''

  shortcodes.forEach((shortcode: ShortCodeI) => {
    const reg1 = '\\[[^\\[]*'
    const reg2 = '[^\\]]*\\]'
    const regexp = new RegExp(reg1 + shortcode.viewName + reg2, 'gi')

    tempText = tempText.replace(regexp, shortcode.previewValue);
  })

  return tempText
}
