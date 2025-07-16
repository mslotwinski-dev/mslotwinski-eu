import { Work } from './types/interfaces'

export const works: Work[] = [
  {
    Name: 'Narodowe Centrum Badań Jądrowych',
    Position: 'Praktykant w dziale aparatury jądrowej',
    HowLong: '2025',
    Tasks: [
      'Zapoznanie się z tworzeniem, weryfikacją i walidacją dokumentacji technologicznej.',
      'Poznanie podstaw programowania sterowników PLC Siemens i Beckchoff.',
      'Tworzenie i testowanie oprogramowania do akceleratora AQURE w językach programowania C++ i C#.',
      'Montaż i uruchamienie podzespołów elektrycznych akceleratorów. Przeprowadzanie testów funkcjonalnych.',
    ],
  },
  {
    Name: 'Elepotrik',
    Position: 'Inżynier w serwisie elektronicznym',
    HowLong: '2024',
    Tasks: [
      'Diagnoza i naprawa urządzeń elektronicznych, w tym sprzętu komputerowego i mobilnego.',
      'Lutowanie i wymiana podzespołów elektronicznych. Obsługa sprzętu diagnostycznego.',
      'Przeprowadzanie testów funkcjonalnych i naprawa software’u w urządzeniach.',
      'Przyjmowanie zamówień i kontakt z klientem.',
    ],
  },
  {
    Name: 'Lewe Korki',
    Position: 'Założyciel projektu, korepetytor, programista full-stack',
    HowLong: '2023',
    Tasks: [
      'Utworzenie i utrzymanie platformy edukacyjnej dla korepetytorów oraz organizacja zajęć za jej pośrednictwem.',
      'Zarządzanie bazami danych – organizacja użytkowników i materiałów dydaktycznych.',
      'Prowadzenie korepetycji z fizyki i matematyki dla uczniów szkół średnich.',
    ],
  },
  {
    Name: 'Soulgraphy',
    Position: 'Twórca i lider projektu, programista front-end',
    HowLong: '2020 - 2021',
    Tasks: [
      'Stworzenie i rozwój platformy do testów politycznych, umożliwiającej analizę poglądów użytkowników.',
      'Zarządzanie zespołem 20 osób, organizacja debat młodzieżowych i wywiadów z politykami.',
      'Osiągnięcie kilkudziesięciu tysięcy odwiedzin dziennie.',
      'Obecność platformy online – testy nadal dostępne na <a href="https://soulgraphy.me">Soulgraphy</a>.',
    ],
  },
]
