import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'
import { generateDynamicUtils, generateStaticUtils } from './utilities.js'
const PluginCreator = api => {
  const { theme, matchUtilities, addUtilities } = api

  const singleTimeline = value => {
    let customNameTimeline = value
    if (value.startsWith('var(')) customNameTimeline = value.slice(4, -1)

    return customNameTimeline
  }

  const dynamicUtils = generateDynamicUtils(theme, singleTimeline)

  Object.entries(dynamicUtils).forEach(([name, { css, values, generateValue }]) => {
    matchUtilities({
      [name]: value => ({
        [css]: generateValue ? generateValue(value) : value
      })
    }, {
      values
    })
  },
  addUtilities(generateStaticUtils())
  )
}

const puglinConfig = { theme }

export default createPlugin(PluginCreator, puglinConfig)
