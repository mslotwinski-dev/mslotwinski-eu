import { Degree } from '../types/enums'
import { Education } from '../types/interfaces'

export default [
  {
    Name: 'Warsaw University of Technology',
    Place: 'Warsaw, Poland',
    Field: 'Engineering Physics',
    Details: [
      {
        Spec: 'Specialization: Materials and Nanostructures',
        Year: '2023 - present',
        Degree: Degree.BACHELOR,
        Thesis:
          'Engineering thesis: Prototype of a white LED with a glassy phosphor NaF-Al₂O₃-P₂O₅ : Eu',
      },
      // {
      //   Spec: 'Specialization: Nuclear Physics and Technology',
      //   Year: '2027 - 2028',
      //   Degree: Degree.MASTER,
      // },
    ],
  },
  {
    Name: '4th High School in Rzeszów',
    Place: 'Rzeszów, Poland',
    Details: [
      {
        Spec: 'Mathematics • Physics • Computer Science',
        Year: '2019 - 2023',
        Degree: Degree.FINAL,
        Desc: `<div class="matura">
          <h3>Basic level</h3>
          <div class="flex-b"><span>Polish Language</span><span>52%</span></div>
          <div class="flex-b"><span>Mathematics</span><span>89%</span></div>
          <div class="flex-b"><span>English Language</span><span>82%</span></div>
          
          <h3>Extended level</h3>
          <div class="flex-b"><span>Mathematics</span><span>75%</span></div>
          <div class="flex-b"><span>Physics</span><span>78%</span></div>
        </div>`,
      },
    ],
  },
] as Education[]

export const courses = [
  {
    Name: 'Fundamentals of Artificial Intelligence',
    Place: 'National Information Processing Institute – National Research Institute',
  },
  {
    Name: 'Introduction to Sensor Programming',
    Place: 'Bialystok University of Technology',
  },
]

export const publications = [
  // {
  //   Name: 'Using computational materials engineering methods to study the properties of glassy phosphors NaF-Al₂O₃-P₂O₅ : Eu',
  //   Authors: 'M. Słotwiński, M. Kaczmarek, A. Węgrzyn',
  //   Journal: 'Electronic Materials, 2024, 52(1), 1-6',
  // },
]

export const conferences = [
  {
    Name: 'Openreadings',
    Subname: '69th International Conference for Students of Physics and Natural Sciences',
    Place: 'Vilnius, Lithuania',
    Year: '2026',
  },
]