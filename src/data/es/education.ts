import { Degree } from '../types/enums'
import { Education } from '../types/interfaces'

export default [
  {
    Name: 'Universidad Tecnológica de Varsovia',
    Place: 'Varsovia, Polonia',
    Field: 'Física Técnica',
    Details: [
      {
        Spec: 'Especialización: Materiales y Nanoestructuras',
        Year: '2023 - presente',
        Degree: Degree.BACHELOR,
        Thesis:
          'Tesis de ingeniería: Prototipo de un LED blanco con un fósforo vítreo NaF-Al₂O₃-P₂O₅ : Eu',
      },
      // {
      //   Spec: 'Especialización: Física y Tecnología Nuclear',
      //   Year: '2027 - 2028',
      //   Degree: Degree.MASTER,
      // },
    ],
  },
  {
    Name: '4º Liceo General en Rzeszów',
    Place: 'Rzeszów, Polonia',
    Details: [
      {
        Spec: 'Matemáticas • Física • Informática',
        Year: '2019 - 2023',
        Degree: Degree.FINAL,
        Desc: `<div class="matura">
          <h3>Nivel básico</h3>
          <div class="flex-b"><span>Polaco</span><span>52%</span></div>
          <div class="flex-b"><span>Matemáticas</span><span>89%</span></div>
          <div class="flex-b"><span>Inglés</span><span>82%</span></div>
          
          <h3>Nivel avanzado</h3>
          <div class="flex-b"><span>Matemáticas</span><span>75%</span></div>
          <div class="flex-b"><span>Física</span><span>78%</span></div>
        </div>`,
      },
    ],
  },
] as Education[]

export const courses = [
  {
    Name: 'Fundamentos de Inteligencia Artificial',
    Place: 'Instituto Nacional de Procesamiento de Información – Instituto Nacional de Investigación',
  },
  {
    Name: 'Introducción a la programación de sensores',
    Place: 'Universidad Tecnológica de Białystok',
  },
]

export const publications = [
  // {
  //   Name: 'Uso de métodos de ingeniería de materiales computacionales para estudiar las propiedades de los fósforos vítreos NaF-Al₂O₃-P₂O₅ : Eu',
  //   Authors: 'M. Słotwiński, M. Kaczmarek, A. Węgrzyn',
  //   Journal: 'Materiales Electrónicos, 2024, 52(1), 1-6',
  // },
]

export const conferences = [
  {
    Name: 'Openreadings',
    Subname: '69th International Conference for Students of Physics and Natural Sciences',
    Place: 'Vilna, Lituania',
    Year: '2026',
  },
]