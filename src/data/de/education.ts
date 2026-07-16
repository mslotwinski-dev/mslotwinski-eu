import { Degree } from '../types/enums'
import { Education } from '../types/interfaces'

export default [
  {
    Name: 'Technische Universität Warschau',
    Place: 'Warschau, Polen',
    Field: 'Technische Physik',
    Details: [
      {
        Spec: 'Spezialisierung: Materialien und Nanostrukturen',
        Year: '2023 - heute',
        Degree: Degree.BACHELOR,
        Thesis:
          'Bachelorarbeit: Prototyp einer weißen LED mit einem glasartigen Leuchtstoff NaF-Al₂O₃-P₂O₅ : Eu',
      },
      // {
      //   Spec: 'Spezialisierung: Kernphysik und -technik',
      //   Year: '2027 - 2028',
      //   Degree: Degree.MASTER,
      // },
    ],
  },
  {
    Name: '4. Allgemeinbildendes Lyzeum in Rzeszów',
    Place: 'Rzeszów, Polen',
    Details: [
      {
        Spec: 'Mathematik • Physik • Informatik',
        Year: '2019 - 2023',
        Degree: Degree.FINAL,
        Desc: `<div class="matura">
          <h3>Grundkurs</h3>
          <div class="flex-b"><span>Polnisch</span><span>52%</span></div>
          <div class="flex-b"><span>Mathematik</span><span>89%</span></div>
          <div class="flex-b"><span>Englisch</span><span>82%</span></div>
          
          <h3>Leistungskurs</h3>
          <div class="flex-b"><span>Mathematik</span><span>75%</span></div>
          <div class="flex-b"><span>Physik</span><span>78%</span></div>
        </div>`,
      },
    ],
  },
] as Education[]

export const courses = [
  {
    Name: 'Grundlagen der Künstlichen Intelligenz',
    Place: 'Nationales Institut für Informationsverarbeitung – Nationales Forschungsinstitut',
  },
  {
    Name: 'Einführung in die Sensorprogrammierung',
    Place: 'Technische Universität Białystok',
  },
]

export const publications = [
  // {
  //   Name: 'Verwendung von Methoden der computergestützten Werkstofftechnik zur Untersuchung der Eigenschaften von glasartigen Leuchtstoffen NaF-Al₂O₃-P₂O₅ : Eu',
  //   Authors: 'M. Słotwiński, M. Kaczmarek, A. Węgrzyn',
  //   Journal: 'Elektronische Materialien, 2024, 52(1), 1-6',
  // },
]

export const conferences = [
  {
    Name: 'Openreadings',
    Subname: '69th International Conference for Students of Physics and Natural Sciences',
    Place: 'Vilnius, Litauen',
    Year: '2026',
  },
]