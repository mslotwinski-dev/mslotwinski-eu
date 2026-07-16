import { Home } from '@/data/types/classes'

const today: number = Date.now()
const born: number = +new Date('2004-04-11')

export const personal = {
  email: 'mateuszslotwinski16@gmail.com',
  home: new Home('Warszawa', 'Poland'),
  age: Math.floor((today - born) / 31557600000),
  github: 'https://github.com/mslotwinski-dev',
  linkedin: 'https://www.linkedin.com/in/mslotwinski/',
}
