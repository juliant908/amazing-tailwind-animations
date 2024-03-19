export function generateDynamicUtils (theme, singleTimeline) {
  return {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') },
    'animate-iteration-count': { css: 'animation-iteration-count', values: theme('animationIterationCount') },
    'animate-fill-mode': { css: 'animation-fill-mode', values: theme('animationFillMode') },
    'animate-bezier': { css: 'animation-timing-function', values: theme('animationCubicBezier') },
    'animate-steps': { css: 'animation-timing-function', values: theme('animationSteps'), generateValue: value => `steps(${value})` },
    'animate-range': { css: 'animation-range', values: theme('animationRange'), generateValue: value => value },
    timeline: { css: 'animation-timeline', values: theme('timeline'), generateValue: value => singleTimeline(value) },
    'scroll-timeline': { css: 'scroll-timeline-name', values: theme('scrollTimeline'), generateValue: (value) => singleTimeline(value) },
    'view-timeline': { css: 'view-timeline-name', values: theme('viewTimeline'), generateValue: (value) => singleTimeline(value) },
    'scroll-timeline-axis': { css: 'scroll-timeline-axis', values: theme('scrollTimelineAxis') },
    'view-timeline-axis': { css: 'view-timeline-axis', values: theme('viewTimelineAxis') },
    'scroll-animate': { css: 'scroll-timeline-name', values: theme('scrollTimeline'), generateValue: (value) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}` },
    'view-animate': { css: 'view-timeline-name', values: theme('viewTimeline'), generateValue: (value) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}` }
  }
}

export function generateStaticUtils () {
  return {
    '.animate-ease': {
      'animation-timing-function': 'ease'
    },
    '.animate-ease-in': {
      'animation-timing-function': 'ease-in'
    },
    '.animate-ease-out': {
      'animation-timing-function': 'ease-out'
    },
    '.animate-ease-in-out': {
      'animation-timing-function': 'ease-in-out'
    },
    '.animate-linear': {
      'animation-timing-function': 'linear'
    },
    '.animate-direction-normal': {
      'animation-direction': 'normal'
    },
    '.animate-direction-reverse': {
      'animation-direction': 'reverse'
    },
    '.animate-direction-alternate': {
      'animation-direction': 'alternate'
    },
    '.animate-direction-alternate-reverse': {
      'animation-direction': 'alternate-reverse'
    },
    '.animate-play-running': {
      'animation-play-state': 'running'
    },
    '.animate-play-paused': {
      'animation-play-state': 'paused'
    }
  }
}
