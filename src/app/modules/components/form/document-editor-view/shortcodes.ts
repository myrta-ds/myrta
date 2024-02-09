import {
  ShortCodeI
} from '../../../../../../projects/myrta-ui/src/lib/components/form/document-editor/models/document-editor-short-codes.enum';

export const shortcodes: ShortCodeI[] = [
  {
    order: 10,
    systemName: 'ApplicationNumber',
    viewName: 'Номер заявки',
    previewValue: '12-34-567890'
  },
  {
    order: 20,
    systemName: 'OrganizationName',
    viewName: 'Название организации',
    previewValue: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \'РОГА И КОПЫТА\''
  },
  {
    order: 30,
    systemName: 'OrganizationLeaderPositionGenetive',
    viewName: 'Должность руководителя организации в Р.П.',
    previewValue: 'Директора'
  },
  {
    order: 40,
    systemName: 'OrganizationLeaderLastNameGenetive',
    viewName: 'Руководитель Фамилия в Р.П.',
    previewValue: 'Иванова'
  },
  {
    order: 50,
    systemName: 'OrganizationLeaderFirstNameGenetive',
    viewName: 'Руководитель Имя в Р.П.',
    previewValue: 'Ивана'
  },
  {
    order: 60,
    systemName: 'OrganizationLeaderMiddleNameGenetive',
    viewName: 'Руководитель Отчество в Р.П.',
    previewValue: 'Ивановича'
  },
  {
    order: 70,
    systemName: 'OrganizationLeaderAccordanceActionExtensionRevertPowerOfAttorney',
    viewName: 'Действует на основании (переставлены номер и дата доверенности)',
    previewValue: 'доверенности от 01 января 2000 г. № 123'
  },
  {
    order: 80,
    systemName: 'ApplicantLegalAddress',
    viewName: 'Юридический адрес организации',
    previewValue: 'г. Тест, ул. Тестовая, д. 1'
  },
  {
    order: 90,
    systemName: 'ApplicantFactAddress',
    viewName: 'Фактический адрес организации',
    previewValue: 'г. Тест, ул. Тестовая, д. 1'
  },
  {
    order: 100,
    systemName: 'OrganizationOgrn',
    viewName: 'ОГРН организации',
    previewValue: '1234567890123'
  },
  {
    order: 110,
    systemName: 'OrganizationInn',
    viewName: 'ИНН организации',
    previewValue: '1234567890'
  },
  {
    order: 120,
    systemName: 'OrganizationKpp',
    viewName: 'КПП организации',
    previewValue: '123456789'
  },
  {
    order: 130,
    systemName: 'ApplicantBankName',
    viewName: 'Название банка организации',
    previewValue: 'ТестБанк'
  },
  {
    order: 140,
    systemName: 'ApplicantBankAccountNumber',
    viewName: 'Расчетный счет организации',
    previewValue: '12345678901234567890'
  },
  {
    order: 150,
    systemName: 'ApplicantBankCorrAccountNumber',
    viewName: 'Корреспондентский счет банка организации',
    previewValue: '12345678901234567890'
  },
  {
    order: 160,
    systemName: 'ApplicantBankBik',
    viewName: 'БИК банка организации',
    previewValue: '123456789'
  },
  {
    order: 170,
    systemName: 'OrganizationBusinessAccount',
    viewName: 'Лицевой счет',
    previewValue: '000.00.000.0'
  },
  {
    order: 180,
    systemName: 'ApplicantPhone',
    viewName: 'Телефон организации',
    previewValue: '+79999999999'
  },
  {
    order: 190,
    systemName: 'ApplicantEmail',
    viewName: 'Email организации',
    previewValue: 'test@test.ru'
  },
  {
    order: 200,
    systemName: 'ApplicationName',
    viewName: 'Название проекта',
    previewValue: 'Тестовый проект'
  }, {
    order: 210,
    systemName: 'ApplicationStartDate',
    viewName: 'Дата начала проекта',
    previewValue: '01.01.2000'
  },
  {
    order: 220,
    systemName: 'ApplicationEndDate',
    viewName: 'Дата окончания проекта',
    previewValue: '01.01.2000'
  },
  {
    order: 220,
    systemName: 'ApplicationOriginalBudgetSum',
    viewName: 'Общая сумма гранта',
    previewValue: '2 997 146,00'
  },
  {
    order: 230,
    systemName: 'ApplicationOriginalBudgetSumDecimalPartString',
    viewName: 'Общая сумма гранта прописью, рубли',
    previewValue: 'два миллиона девятьсот девяносто семь тысяч сто сорок шесть'
  },
  {
    order: 999,
    systemName: 'ProjectDirectorFullName',
    viewName: 'ФИО Руководителя проекта',
    previewValue: ''
  },
  {
    order: 1000,
    systemName: 'PageBreak',
    viewName: 'Новая страница',
    previewValue: '---начало_новой_страницы---'
  },
  {
    order: 1000,
    systemName: 'TodayDate',
    viewName: 'Сегодняшняя дата',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'DocumentDate',
    viewName: 'Дата документа',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'OrganizationShortName',
    viewName: 'Краткое название организации',
    previewValue: 'ООО \'РиК\''
  },
  {
    order: 1000,
    systemName: 'OGRNIPFull',
    viewName: 'ОГРН ИП с датой регистрации',
    previewValue: '№ 123456789012345 от 01.01.2000'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderAccordanceActionExtension',
    viewName: 'Действует на основании (расширенный)',
    previewValue: 'доверенности 123 от 01.01.2000'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderInitialsLastName',
    viewName: 'Инициалы и фамилия руководителя(И.И. Иванов)',
    previewValue: 'И.И. Иванов'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderPosition',
    viewName: 'Должность руководителя организации',
    previewValue: 'Директор'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderAccordanceAction',
    viewName: 'Действует на основании',
    previewValue: 'устава'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderFirstNameSubjective',
    viewName: 'Имя лидера организации в И.П.',
    previewValue: 'Иван'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderMiddleNameSubjective',
    viewName: 'Отчество лидера организации в И.П.',
    previewValue: 'Иванович'
  },
  {
    order: 1000,
    systemName: 'OrganizationLeaderLastNameSubjective',
    viewName: 'Фамилия лидера организации в И.П.',
    previewValue: 'Иванов'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualPassportSeries',
    viewName: 'Серия паспорта',
    previewValue: '1234'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualPassportId',
    viewName: 'Номер паспорта',
    previewValue: '123456'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualPassportIssuedBy',
    viewName: 'Кем выдан паспорт',
    previewValue: 'ГУ МВД России'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualPassportIssueDate',
    viewName: 'Дата выдачи паспорта',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualPassportUnitCode',
    viewName: 'Код подразделения паспорта',
    previewValue: '123456'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualSnils',
    viewName: 'Снилс',
    previewValue: '12345678901'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativeFullName',
    viewName: 'ФИО законного представителя физ. лица',
    previewValue: 'Иванов Иван Иванович'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativeFullNameGenetive',
    viewName: 'ФИО законного представителя физ. лица в род. падеже',
    previewValue: 'Иванова Ивана Ивановича'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativeBirthdate',
    viewName: 'Дата рождения законного представителя физ. лица',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativePassportSeries',
    viewName: 'Серия паспорта законного представителя физ. лица',
    previewValue: '1234'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativePassportId',
    viewName: 'Номер паспорта законного представителя физ. лица',
    previewValue: '123456'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativePassportIssuedBy',
    viewName: 'Кем выдан паспорт законного представителя физ. лица',
    previewValue: 'ГУ МВД России'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativePassportIssueDate',
    viewName: 'Дата выдачи паспорта законного представителя физ. лица',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativePassportUnitCode',
    viewName: 'Код подразделения паспорта законного представителя физ. лица',
    previewValue: '000-000'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativeLegalAddress',
    viewName: 'Адрес регистрации законного представителя физ. лица',
    previewValue: 'г. Тест, ул. Тестовая, д. 1'
  },
  {
    order: 1000,
    systemName: 'ApplicantIndividualRepresentativeFactAddress',
    viewName: 'Адрес проживания законного представителя физ. лица',
    previewValue: 'г. Тест, ул. Тестовая, д. 1'
  },
  {
    order: 1000,
    systemName: 'ApplicantBirthDay',
    viewName: 'Дата рождения',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'BankAccountNumberOpenDate',
    viewName: 'Дата открытия счета',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'PowerOfAttorneyNumber',
    viewName: 'Номер доверенности',
    previewValue: '123'
  },
  {
    order: 1000,
    systemName: 'PowerOfAttorneyDate',
    viewName: 'Дата выдачи доверенности',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'OtherDocumentName',
    viewName: 'Название иного документа',
    previewValue: 'договор'
  },
  {
    order: 1000,
    systemName: 'TreasuryAuthority',
    viewName: 'Наименование казначейского органа',
    previewValue: 'ТЕСТ Тестового муниципального района Тестовой области'
  },
  { order: 1000, systemName: 'KBK', viewName: 'КБК', previewValue: '00000000000000000000' }, {
    order: 1000,
    systemName: 'OKTMO',
    viewName: 'ОКТМО',
    previewValue: '45914000000'
  },
  {
    order: 1000,
    systemName: 'AgreementSignDate',
    viewName: 'Дата подписания основного договора',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'AgreementChangesNumber',
    viewName: 'Порядковый номер доп.соглашения',
    previewValue: '1'
  },
  {
    order: 1000,
    systemName: 'ApplicationContestDirection',
    viewName: 'Направление заявки',
    previewValue: 'Направление'
  },
  {
    order: 1000,
    systemName: 'ApplicationContestSubDirection',
    viewName: 'Поднаправление заявки',
    previewValue: 'Поднаправление'
  },
  {
    order: 1000,
    systemName: 'AgreementSignDateLongDate',
    viewName: 'Дата подписания последнего подписывающего из ЭДО в основном документе',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'AgreementEndDate',
    viewName: 'Актуальная дата окончания проекта',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'AgreementStartDate',
    viewName: 'Актуальная дата начала проекта',
    previewValue: '01.01.2000'
  },
  {
    order: 1000,
    systemName: 'ApplicationBudget',
    viewName: 'Таблице бюджет',
    previewValue: '---таблица_бюджет---'
  },
  {
    order: 1000,
    systemName: 'ApplicationTotalProjectSum',
    viewName: 'Общая сумма по бюджету включая софинансирование',
    previewValue: '3 333 333,00'
  },
  {
    order: 1000,
    systemName: 'ApplicationOriginalBudgetSumFractionalPartNumber',
    viewName: 'Общая сумма гранта прописью, копейки',
    previewValue: '00'
  },
  {
    order: 1000,
    systemName: 'AgreementBudget',
    viewName: 'Итого в бюджете',
    previewValue: '2 997 146,00'
  },
  {
    order: 1000,
    systemName: 'AgreementBudgetDecimalPartString',
    viewName: 'Итого в бюджете прописью, рубли',
    previewValue: 'два миллиона девятьсот девяносто семь тысяч сто сорок шесть'
  },
  {
    order: 1000,
    systemName: 'AgreementBudgetInRublesDecimalPartString',
    viewName: 'Итого в бюджете прописью в именительном падеже, рубли',
    previewValue: '(два миллиона девятьсот девяносто семь тысяч сто сорок шесть) рублей'
  },
  {
    order: 1000,
    systemName: 'AgreementBudgetInRublesFractionalPartString',
    viewName: 'Итого в бюджете прописью в именительном падеже, копейки',
    previewValue: '00 копеек'
  },
  {
    order: 1000,
    systemName: 'GetApplicationExpensesAmountNumberAndString',
    viewName: 'Общая сумма гранта числом и прописью, [_________ (__________) рублей __ копеек.]',
    previewValue: '0 (ноль) рублей 00 копеек'
  },
  {
    order: 1000,
    systemName: 'AgreementBudgetIntegerPart',
    viewName: 'Итого в бюджете, без копеек',
    previewValue: '2 997 146'
  },
  {
    order: 1000,
    systemName: 'ApplicationTotalProjectSumFullString',
    viewName: 'Общая сумма по бюджету, включая софинансирование, в формате [_________ (__________) рублей __ копеек.]',
    previewValue: '3269546 (три миллиона двести шестьдесят девять тысяч пятьсот сорок шесть) рублей 00 копеек'
  },
  {
    order: 1000,
    systemName: 'BudgetItemSalaryFullString',
    viewName: 'Сумма расходов по статье бюджета \'Оплата труда\' в формате [_________ (__________) рублей __ копеек.]',
    previewValue: '1496370 (один миллион четыреста девяносто шесть тысяч триста семьдесят) рублей 00 копеек'
  },
  {
    order: 1000,
    systemName: 'BudgetItemOtherTypeFullString',
    viewName: 'Сумма расходов по статье бюджета \'Прочие прямые расходы\' в формате [_________ (__________) рублей __ копеек.]',
    previewValue: '0 (ноль) рублей 00 копеек'
  },
  {
    order: 1000,
    systemName: 'ApplicationTotalSummFullString',
    viewName: 'Общая сумма по бюджету, исключая софинансирование, в формате [_________ (__________) рублей __ копеек.]',
    previewValue: '2997146 (два миллиона девятьсот девяносто семь тысяч сто сорок шесть) рублей 00 копеек'
  },
  {
    order: 1000,
    systemName: 'ApplicationOriginal',
    viewName: 'Оригинальная заявка',
    previewValue: '---печатная_форма_заявки---'
  },


  {
    order: 1000,
    systemName: 'Checkpoints',
    viewName: 'Ключевые контрольные точки',
    previewValue: '---таблица_ККТ---'
  },


  {
    order: 1000,
    systemName: 'Stages',
    viewName: 'Этапы',
    previewValue: '---таблица_этапы---'
  },
  {
    order: 1000,
    systemName: 'ReportsDate',
    viewName: 'Дата сдачи отчетности',
    previewValue: '«01» января 2020'
  },
  {
    order: 1000,
    systemName: 'StagesNdfl',
    viewName: 'Этапы с НДФЛ',
    previewValue: '---таблица_ Этапы_с_НДФЛ---'
  },


  {
    order: 1000,
    systemName: 'PaymentSchedule',
    viewName: 'График отчетности и платежей по гранту',
    previewValue: '---таблица_ График_отчетности_и_платежей---'
  },


  {
    order: 1000,
    systemName: 'ApplicationNumberNoWrap',
    viewName: 'Номер заявки (без переноса)',
    previewValue: '12-34-567890'
  },
  {
    order: 1000,
    systemName: 'BudgetPlan',
    viewName: 'План бюджета',
    previewValue: '---файл_план-бюджета---'
  },
  {
    order: 1000,
    systemName: 'NoDebtDocument',
    viewName: 'Справки об отсутствии задолженностей',
    previewValue: '---файл_Справки-об-отсутствии-задолженностей---'
  },
  {
    order: 1000,
    systemName: 'PowerOfAttorney',
    viewName: 'Скан доверенности',
    previewValue: '---файл_скан-доверенности---'
  },
  {
    order: 1000,
    systemName: 'AdditionalDocuments',
    viewName: 'Дополнительные документы',
    previewValue: '---файл_Дополнительные-документы---'
  },
  {
    order: 1000,
    systemName: 'OtherDocuments',
    viewName: 'Иные документы',
    previewValue: '---файл_Иные-документы---'
  },
  {
    order: 1000,
    systemName: 'AdditionalSigningInfoDocuments',
    viewName: 'Дополнительный документы для подписания',
    previewValue: '---файл_Дополнительный-документы-для-подписания---'
  },
  {
    order: 1000,
    systemName: 'PdfRegulation',
    viewName: 'Устав',
    previewValue: '---файл_Устав---'
  },
  {
    order: 1000,
    systemName: 'RegulationHistoryDocuments',
    viewName: 'Устав удаленный',
    previewValue: '---файл_Устав-удаленный---'
  },
  {
    order: 1000,
    systemName: 'SigningBasis',
    viewName: 'Основания для подписания',
    previewValue: '---файл_Основания-для-подписания---'
  },
  {
    order: 1000,
    systemName: 'RefuseAgreementByWinnerDocuments',
    viewName: 'Заявление об отказе от заключения договора',
    previewValue: '---файл_Заявление-об-отказе-от-заключения-договора---'
  },
  {
    order: 1000,
    systemName: 'RefuseAgreementByFundDocuments',
    viewName: 'Заявление об отказе от заключения договора по инициативе фонда',
    previewValue: '---файл_Заявление-об-отказе-от-заключения-договора-по-инициативе-фонда---'
  },
  {
    order: 1000,
    systemName: 'AdditionalDocumentsAllStatuses',
    viewName: 'Дополнительные документы',
    previewValue: '---файл_Дополнительные-документы---'
  },
  { order: 1000, systemName: 'PdfFPPZ', viewName: 'ФППЗ', previewValue: '---файл_ФППЗ---' }, {
    order: 2000,
    systemName: 'AdditionalInfo',
    viewName: 'Дополнительные сведения',
    previewValue: '???'
  },
  {
    order: 2000,
    systemName: 'UfkAccountNumber',
    viewName: 'Лицевой счет в УФК',
    previewValue: '---таблица_этапы---'
  },
  {
    order: 2000,
    systemName: 'TaxRegime',
    viewName: 'Система налогообложения организации',
    previewValue: 'Упрощенная система налогообложения'
  },
  {
    order: 2000,
    systemName: 'PrePay',
    viewName: 'Заявка на договор с условием авансирования',
    previewValue: 'Да/Нет'
  },
  {
    order: 2000,
    systemName: 'QuantitativeIndicator',
    viewName: 'Количественные показатели',
    previewValue: '---Таблица_количественных_показателей---'
  },
  {
    order: 3000,
    systemName: 'GrantSupportType',
    viewName: 'Форма предоставляемой поддержки',
    previewValue: '???'
  },
  {
    order: 3000,
    systemName: 'ApplicationRegionName',
    viewName: 'Регион в И.П.',
    previewValue: '???'
  },
  {
    order: 3000,
    systemName: 'ApplicationRegionNameGenitive',
    viewName: 'Регион в Р.П.',
    previewValue: '???'
  },
  {
    order: 3000,
    systemName: 'PaymentRequestPrefix',
    viewName: 'Префикс заявки на платеж',
    previewValue: '???'
  },
  {
    order: 3000,
    systemName: 'WinnersDocument',
    viewName: 'Список победителей',
    previewValue: '---файл_Список-победителей---'
  },
  {
    order: 3000,
    systemName: 'ProtocolDocument',
    viewName: 'Протокол',
    previewValue: '---файл_Протокол---'
  },
  {
    order: 3000,
    systemName: 'WinnersDocumentPdf',
    viewName: 'Список победителей PDF',
    previewValue: '---файл_Список-победителей-PDF---'
  },
  {
    order: 4000,
    systemName: 'RefuseGrantByWinnerDocuments',
    viewName: 'Заявление об отказе от гранта',
    previewValue: '???'
  },
  {
    order: 4000,
    systemName: 'TerminateAgreementByFundDocuments',
    viewName: 'Заявление о расторжении договора по инициативе фонда',
    previewValue: '???'
  }
];
