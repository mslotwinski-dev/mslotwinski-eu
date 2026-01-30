<template>
  <h3>Podsumowanie kodu</h3>
  <div class="langcont" :key="key">
    <div class="loading" v-if="langarray.length < 2"><Loading /></div>
    <Display v-else :langs="langarray" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios, { AxiosResponse } from 'axios'
import { Endpoints } from '@octokit/types'
import Loading from '@/components/Shared/Loader.vue'
import Display from '@/components/Details/Display.vue'

import idontlikeu from '@/data/idontlikeu'

export default defineComponent({
  data() {
    return {
      key: 0,
      langarray: [] as [string, number][],
      idontlikeu,
    }
  },
  components: {
    Loading,
    Display,
  },
  async mounted() {
    this.langarray = [
      ['Vue', 1367279],
      ['TypeScript', 658013],
      ['Rust', 189785],
      ['Go', 151636],
      ['C++', 122416],
      ['JavaScript', 75490],
      ['Java', 48729],
      ['C', 46433],
      ['C#', 40725],
      ['Python', 26560],
      ['Dart', 11420],
    ]

    // await this.updateArray()
  },
  methods: {
    async updateArray() {
      this.langarray = []
      let repositories =
        [] as Endpoints['GET /orgs/{org}/repos']['response']['data']
      let langs = {} as {
        [key: string]: number
      }
      let done = [] as string[]
      let token = process.env.VUE_APP_TOKEN
      const username = 'mslotwinski-dev'
      const organizations = [
        'Genesis-Organization',
        'Cloudy-APP',
        'mLib-Project',
        'Analyse-Me',
        'Ampere-Engine',
        'Note-Keeper',
        'Bullet-link',
        'AirLanguage',
        'Lewe-Korki',
      ]
      for (const org of [username].concat(organizations)) {
        repositories = repositories.concat(
          await axios
            .get(`https://api.github.com/users/${org}/repos?per_page=300`, {
              headers: {
                Authorization: `token ${token}`,
              },
            })
            .then(
              (
                res: AxiosResponse<
                  Endpoints['GET /users/{username}/repos']['response']['data']
                >
              ) => {
                return res.data.filter((repo) => !repo.fork)
              }
            )
        )
      }
      let array = repositories.map((repo) => repo.full_name)
      for (const repo of array) {
        const url = `https://api.github.com/repos/${repo}/languages`
        try {
          await axios
            .get(url, {
              headers: {
                Authorization: `token ${token}`,
              },
            })
            .then(
              (
                response: AxiosResponse<
                  Endpoints['GET /repos/{owner}/{repo}/languages']['response']['data']
                >
              ) => {
                if (!done.includes(url)) {
                  Object.keys(response.data).forEach((lang) => {
                    langs[lang]
                      ? (langs[lang] = langs[lang] + response.data[lang])
                      : (langs[lang] = response.data[lang])
                  })
                  done.push(url)
                  this.key++
                }
              }
            )
        } catch (e) {
          this.key++
        }
      }
      for (const lang in langs) {
        this.langarray.push([lang, langs[lang]])
      }
      this.langarray.sort(
        (a: [string, number], b: [string, number]) => b[1] - a[1]
      )
      this.langarray = this.langarray
        .filter(([name, prof]) => !idontlikeu.includes(name) && prof > 5000)
        .slice(0, 11)

      // eslint-disable-next-line no-console
      console.log(JSON.stringify(this.langarray))
    },
  },
})
</script>

<style lang="scss" scoped>
.langcont {
  margin: 5px auto;
  padding: 5px 0;
  width: 1000px;
  height: 150px;
  display: flex;
  border-radius: 10px;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

h3 {
  margin: 0;
  padding: 10px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
}
</style>
