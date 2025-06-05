import { Degree, LangType } from './enums'

export interface Work {
  Name: string
  Position: string
  HowLong: string
  Tasks: string[]
}

export interface Education {
  Name: string
  Field?: string
  Place: string
  Details: {
    Spec: string
    Year: string
    Degree?: Degree
    Desc?: string
  }[]
}

export interface Language {
  Name: string
  Skill: string
  Certificate?: string
}

//

export interface University {
  Field: string
  Spec: string
  Degree: Degree | null
  University: string
  Year: number
  Place: string
}

export interface LangItem {
  Name: string
  Skill: number
  Native?: boolean // Only in human langs
  Details?: string[]
}

export interface Frameworks {
  [key: string]: LangItem[]
}

export interface Interest {
  Name: string
  Link?: string
}

export interface SingleLang {
  Name: string
  Color: string
  Type?: LangType
}

export interface Project {
  Name: string
  Desc: string
  Category: string
  Link: {
    Content: string
    Absolute: boolean
  }
  Code: string
  Created: string
  Logo: string
  Langs: {
    Id: SingleLang
    Percentage: number
  }[]
  Screenshots: string[]
}

export interface City {
  Name: string
  x: number
  y: number
  right?: number
}

export interface SchoolsPlaned {
  Schools: {
    Name: string
    Age: number
    Classes?: string
  }[][]
}
