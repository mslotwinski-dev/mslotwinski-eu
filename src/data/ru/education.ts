import { Degree } from '../types/enums'
import { Education } from '../types/interfaces'

export default [
  {
    Name: 'Варшавский политехнический университет',
    Place: 'Варшава, Польша',
    Field: 'Техническая физика',
    Details: [
      {
        Spec: 'Специализация: Материалы и наноструктуры',
        Year: '2023 - по настоящее время',
        Degree: Degree.BACHELOR,
        Thesis:
          'Инженерная работа: Прототип белого светодиода со стеклообразным люминофором NaF-Al₂O₃-P₂O₅ : Eu',
      },
      // {
      //   Spec: 'Специализация: Ядерная физика и технологии',
      //   Year: '2027 - 2028',
      //   Degree: Degree.MASTER,
      // },
    ],
  },
  {
    Name: 'IV Общеобразовательный лицей в Жешуве',
    Place: 'Жешув, Польша',
    Details: [
      {
        Spec: 'Математика • Физика • Информатика',
        Year: '2019 - 2023',
        Degree: Degree.FINAL,
        Desc: `<div class="matura">
          <h3>Базовый уровень</h3>
          <div class="flex-b"><span>Польский язык</span><span>52%</span></div>
          <div class="flex-b"><span>Математика</span><span>89%</span></div>
          <div class="flex-b"><span>Английский язык</span><span>82%</span></div>
          
          <h3>Углубленный уровень</h3>
          <div class="flex-b"><span>Математика</span><span>75%</span></div>
          <div class="flex-b"><span>Физика</span><span>78%</span></div>
        </div>`,
      },
    ],
  },
] as Education[]

export const courses = [
  {
    Name: 'Основы искусственного интеллекта',
    Place: 'Национальный институт обработки информации – Национальный исследовательский институт',
  },
  {
    Name: 'Введение в программирование сенсоров',
    Place: 'Белостокский политехнический университет',
  },
]

export const publications = [
  // {
  //   Name: 'Использование методов компьютерного материаловедения для изучения свойств стеклообразных люминофоров NaF-Al₂O₃-P₂O₅ : Eu',
  //   Authors: 'M. Słotwiński, M. Kaczmarek, A. Węgrzyn',
  //   Journal: 'Электронные материалы, 2024, 52(1), 1-6',
  // },
]

export const conferences = [
  {
    Name: 'Openreadings',
    Subname: '69th International Conference for Students of Physics and Natural Sciences',
    Place: 'Вильнюс, Литва',
    Year: '2026',
  },
]