import { Degree } from './types/enums'
import { Education } from './types/interfaces'

export default [
  {
    Name: 'Politechnika Warszawska',
    Place: 'Warsaw, Poland',
    Field: 'Fizyka Techniczna',
    Details: [
      {
        Spec: 'Specjalizacja: Fizyka Medyczna',
        Year: '2023 - 2027',
        Degree: Degree.BACHELOR,
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
        Spec: 'Mathematics • Physics • IT',
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
