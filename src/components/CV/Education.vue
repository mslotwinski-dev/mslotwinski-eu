<template>
  <h2 class="header">{{ $t('cv.education') }}</h2>
  <section class="edu-wrap">
    <article v-for="edu in education" :key="edu.Name" class="edu-item">
      <div class="edu-main">
        <h3 class="edu-name" v-html="edu.Name" />
        <span class="edu-place" v-html="edu.Place" />
      </div>
      <div class="edu-field" v-if="edu.Field" v-html="edu.Field" />

      <div class="edu-details">
        <div v-for="d in edu.Details" :key="d.Spec + d.Year" class="edu-detail">
          <div class="spec-and-degree">
            <span class="spec" v-html="d.Spec" />
            <span class="spec gray" v-if="d.Thesis" v-html="d.Thesis" />
            <Degree v-if="d.Degree" :degree="d.Degree" :desc="d.Desc" />
          </div>
          <span class="year" v-html="d.Year" />
        </div>
      </div>
    </article>

    <section class="extra-wrap">
      <!-- Publikacje -->
      <article class="extra-item" v-if="publications.length">
        <h3>{{ $t('cv.publications') }}</h3>
        <ul class="simple-list">
          <li v-for="pub in publications" :key="pub.Name">
            <span v-html="pub.Authors"></span>, <em>"{{ pub.Name }}"</em>,
            <span class="journal">{{ pub.Journal }}</span>
          </li>
        </ul>
      </article>

      <!-- Konferencje -->
      <article class="extra-item" v-if="conferences.length">
        <h3>{{ $t('cv.conferences') }}</h3>
        <ul class="simple-list">
          <li v-for="conf in conferences" :key="conf.Name">
            <strong>{{ conf.Name }}</strong>
            <span class="subname" v-if="conf.Subname">
              - {{ conf.Subname }}</span
            >
            —
            <span>{{ conf.Place }}, {{ conf.Year }}</span>
          </li>
        </ul>
      </article>

      <!-- Kursy -->
      <article class="extra-item" v-if="courses.length">
        <h3>{{ $t('cv.courses') }}</h3>
        <ul class="simple-list">
          <li v-for="course in courses" :key="course.Name">
            <strong>{{ course.Name }}</strong> — <span>{{ course.Place }}</span>
          </li>
        </ul>
      </article>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Degree from '@/components/Details/Degree.vue'

// Importujemy dane dla obu języków
import educationPl, {
  courses as coursesPl,
  publications as publicationsPl,
  conferences as conferencesPl,
} from '@/data/pl/education'
import educationEn, {
  courses as coursesEn,
  publications as publicationsEn,
  conferences as conferencesEn,
} from '@/data/en/education'

// Definiujemy interfejsy dla edukacji
interface EduDetail {
  Spec: string
  Year: string | number
  Degree?: string
  Desc?: string
  Thesis?: string
}

interface Education {
  Name: string
  Place: string
  Field?: string
  Details: EduDetail[]
}

interface Course {
  Name: string
  Place: string
}

interface Publication {
  Name: string
  Authors: string
  Journal: string
}

interface Conference {
  Name: string
  Subname?: string
  Place: string
  Year: string | number
}

// Tworzymy mapy z danymi dla każdej sekcji
const educationMap: Record<string, Education[]> = {
  pl: educationPl,
  en: educationEn,
}

const coursesMap: Record<string, Course[]> = {
  pl: coursesPl,
  en: coursesEn,
}

const publicationsMap: Record<string, Publication[]> = {
  pl: publicationsPl,
  en: publicationsEn,
}

const conferencesMap: Record<string, Conference[]> = {
  pl: conferencesPl,
  en: conferencesEn,
}

export default defineComponent({
  components: {
    Degree,
  },
  computed: {
    // Podmieniamy data() na computed, które nasłuchuje zmiany języka
    education(): Education[] {
      const locale = this.$i18n.locale as string
      return educationMap[locale] || educationMap['en']
    },

    courses(): Course[] {
      const locale = this.$i18n.locale as string
      return coursesMap[locale] || coursesMap['en']
    },

    publications(): Publication[] {
      const locale = this.$i18n.locale as string
      return publicationsMap[locale] || publicationsMap['en']
    },

    conferences(): Conference[] {
      const locale = this.$i18n.locale as string
      return conferencesMap[locale] || conferencesMap['en']
    },
  },
})
</script>

<style lang="scss" scoped>
.edu-wrap {
  max-width: 900px;
  margin: 0 auto;
}

.edu-item {
  margin: 15px 0;
  padding-bottom: 10px;
}

.edu-main {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;

  .edu-name {
    font-size: 19px;
    font-weight: 500;
    color: $dark;
    margin: 0;
  }

  .edu-place {
    font-size: 14px;
    color: $dark_gray;
  }
}

.edu-field {
  font-size: 17px;
  color: $main;
  margin-bottom: 5px;
}

.edu-details {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .edu-detail {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 14px;

    .spec-and-degree {
      display: flex;
      flex-direction: column;
      font-family: 'Inter', sans-serif;

      .spec {
        font-weight: 500;
        color: #222;
      }
    }

    .year {
      color: $dark_gray;
      font-size: 13.5px;
    }
  }
}

.gray {
  color: $dark_gray !important;
  font-size: 13.5px;
  font-weight: 400 !important;
}

.extra-wrap {
  max-width: 900px;
  margin: 20px auto 0;

  .extra-item {
    margin-bottom: 25px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .simple-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;

    li {
      font-size: 14.5px;
      margin-bottom: 8px;
      line-height: 1.4;
      color: $dark;

      .journal {
        color: $dark_gray;
      }

      .subname {
        font-size: 13.5px;
        color: $dark_gray;
      }
    }
  }
}
</style>
