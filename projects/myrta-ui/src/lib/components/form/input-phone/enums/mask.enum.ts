export interface MaskI {
  mask: string,
  maskPrefix: string
}

export interface MaskItem {
  [name: string]: MaskI;
}

export const MaskCode: MaskItem = {
  AR: {
    mask: '(00) 0000-0000',
    maskPrefix: '+54'
  },
  AM: {
    mask: '(00) 000-000',
    maskPrefix: '+374'
  },
  BY: {
    mask: '(00) 000-00-00',
    maskPrefix: '+375'
  },
  BR: {
    mask: '(00) 0000-0000',
    maskPrefix: '+55'
  },
  BN: {
    mask: '000-0000',
    maskPrefix: '+673'
  },
  KH: {
    mask: '(00) 000-000',
    maskPrefix: '+855'
  },
  CO: {
    mask: '(000) 000-0000',
    maskPrefix: '+57'
  },
  CU: {
    mask: '(0) 000-0000',
    maskPrefix: '+53'
  },
  EC: {
    mask: '(0) 000-0000',
    maskPrefix: '+593'
  },
  EG: {
    mask: '(0) 0000-0000',
    maskPrefix: '+20'
  },
  GE: {
    mask: '(00) 000-00-00',
    maskPrefix: '+995'
  },
  IN: {
    mask: '00000-00000',
    maskPrefix: '+91'
  },
  ID: {
    mask: '(00) 000-0000',
    maskPrefix: '+62'
  },
  IR: {
    mask: '(00) 0000-0000',
    maskPrefix: '+98'
  },
  KZ: {
    mask: '00000-0-00-00',
    maskPrefix: '+7'
  },
  KE: {
    mask: '00-0000000',
    maskPrefix: '+254'
  },
  KG: {
    mask: '000-000-000',
    maskPrefix: '+996'
  },
  LA: {
    mask: '00-000-000',
    maskPrefix: '+856'
  },
  MG: {
    mask: '00-00-000-00',
    maskPrefix: '+261'
  },
  MY: {
    mask: '0-0000-0000',
    maskPrefix: '+60'
  },
  MX: {
    mask: '000-000-0000',
    maskPrefix: '+52'
  },
  MM: {
    mask: '0-000-000',
    maskPrefix: '+95'
  },
  NI: {
    mask: '0000-0000',
    maskPrefix: '+505'
  },
  PE: {
    mask: '0-0000000',
    maskPrefix: '+51'
  },
  PH: {
    mask: '0-0000-0000',
    maskPrefix: '+63'
  },
  RU: {
    mask: '(000) 000-00-00',
    maskPrefix: '+7'
  },
  RS: {
    mask: '00-000000',
    maskPrefix: '+381'
  },
  SS: {
    mask: '000-000-000',
    maskPrefix: '+211'
  },
  TJ: {
    mask: '000-00-0000',
    maskPrefix: '+992'
  },
  TZ: {
    mask: '00-000-0000',
    maskPrefix: '+255'
  },
  TH: {
    mask: '0-000-0000',
    maskPrefix: '+66'
  },
  TM: {
    mask: '(00) 00-00-00',
    maskPrefix: '+993'
  },
  UZ: {
    mask: '00-000-00-00',
    maskPrefix: '+998'
  },
  VN: {
    mask: '000-0000-000',
    maskPrefix: '+84'
  },
}
