import { Degree } from '../types/enums'
import { Education } from '../types/interfaces'

export default [
  {
    Name: 'Politechnika Warszawska',
    Place: 'Warszawa, Polska',
    Field: 'Fizyka Techniczna',
    Details: [
      {
        Spec: 'Specjalizacja: Materiały i Nanostruktury',
        Year: '2023 - obecnie',
        Degree: Degree.BACHELOR,
        Thesis:
          'Praca inżynierska: Prototyp białej diody LED ze szklistym luminoforem NaF-Al₂O₃-P₂O₅ : Eu',
      },
      // {
      //   Spec: 'Specjalizacja: Fizyka i Technika Jądrowa',
      //   Year: '2027 - 2028',
      //   Degree: Degree.MASTER,
      // },
    ],
  },
  {
    Name: 'IV Liceum Ogólnokształcące w Rzeszowie',
    Place: 'Rzeszow, Poland',
    Details: [
      {
        Spec: 'Matematyka • Fizyka • Informatyka',
        Year: '2019 - 2023',
        Degree: Degree.FINAL,
        Desc: `<div class="matura">
          <h3>Poziom podstawowy</h3>
          <div class="flex-b"><span>Język Polski</span><span>52%</span></div>
          <div class="flex-b"><span>Matematyka</span><span>89%</span></div>
          <div class="flex-b"><span>Język Angielski</span><span>82%</span></div>
          
          <h3>Poziom podstawowy</h3>
          <div class="flex-b"><span>Matematyka</span><span>75%</span></div>
          <div class="flex-b"><span>Fizyka</span><span>78%</span></div>
        </div>`,
      },
    ],
  },
] as Education[]

export const courses = [
  {
    Name: 'Podstawy sztucznej inteligencji',
    Place: 'Ośrodek Przetwarzania Informacji – Państwowy Instytut Badawczy',
  },
  {
    Name: 'Wprowadzenie do programowania sensorów',
    Place: 'Politechnika białostocka',
  },
]

export const publications = [
  // {
  //   Name: 'Wykorzystanie metod komputerowej inżynierii materiałowej do badania właściwości szklistych luminoforów NaF-Al₂O₃-P₂O₅ : Eu',
  //   Authors: 'M. Słotwiński, M. Kaczmarek, A. Węgrzyn',
  //   Journal: 'Materiały Elektroniczne, 2024, 52(1), 1-6',
  // },
]

export const conferences = [
  {
    Name: 'Openreadings',
    Subname:
      '69th International Conference for Students of Physics and Natural Sciences',
    Place: 'Wilno, Litwa',
    Year: '2026',
  },
]
