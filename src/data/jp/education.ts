import { Degree } from '../types/enums'
import { Education } from '../types/interfaces'

export default [
  {
    Name: 'ワルシャワ工科大学',
    Place: 'ワルシャワ、ポーランド',
    Field: '応用物理学',
    Details: [
      {
        Spec: '専門：材料とナノ構造',
        Year: '2023 - 現在',
        Degree: Degree.BACHELOR,
        Thesis:
          '卒業論文：ガラス蛍光体 NaF-Al₂O₃-P₂O₅ : Eu を用いた白色LEDのプロトタイプ',
      },
      // {
      //   Spec: '専門：原子核物理学および技術',
      //   Year: '2027 - 2028',
      //   Degree: Degree.MASTER,
      // },
    ],
  },
  {
    Name: 'ジェシュフ第4高等学校',
    Place: 'ジェシュフ、ポーランド',
    Details: [
      {
        Spec: '数学 • 物理学 • 情報科学',
        Year: '2019 - 2023',
        Degree: Degree.FINAL,
        Desc: `<div class="matura">
          <h3>基礎レベル</h3>
          <div class="flex-b"><span>ポーランド語</span><span>52%</span></div>
          <div class="flex-b"><span>数学</span><span>89%</span></div>
          <div class="flex-b"><span>英語</span><span>82%</span></div>
          
          <h3>上級レベル</h3>
          <div class="flex-b"><span>数学</span><span>75%</span></div>
          <div class="flex-b"><span>物理学</span><span>78%</span></div>
        </div>`,
      },
    ],
  },
] as Education[]

export const courses = [
  {
    Name: '人工知能の基礎',
    Place: '国立情報処理研究所 – 国立研究機関',
  },
  {
    Name: 'センサープログラミング入門',
    Place: 'ビャウィストク工科大学',
  },
]

export const publications = [
  // {
  //   Name: '計算材料工学の手法を用いたガラス蛍光体 NaF-Al₂O₃-P₂O₅ : Eu の特性評価',
  //   Authors: 'M. Słotwiński, M. Kaczmarek, A. Węgrzyn',
  //   Journal: '電子材料, 2024, 52(1), 1-6',
  // },
]

export const conferences = [
  {
    Name: 'Openreadings',
    Subname:
      '69th International Conference for Students of Physics and Natural Sciences',
    Place: 'ビリニュス、リトアニア',
    Year: '2026',
  },
]
