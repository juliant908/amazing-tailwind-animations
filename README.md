# Amazing tailwind animations - A plugin for the most famous CSS framework in the world

```sh
npm install amazing-tailwind-animations
```

[Open in Github](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[Open in Vercel](https://tailwind-animations-website.vercel.app/)

## 🚀 Setup

Add the plugin into your `tailwind.config.mjs`.

Note: if you are using CommonJS, make sure to import the plugin with the `require('')` method.

```sh
import amazingAnimations from 'amazingAnimations'

export default {
   // rest of your config
     plugins: [amazingAnimations]
}
```

## Use the animations

You can add your animations to your components adding the animation name to your classNames with the prefix `animate-` or you can just click on the animation of your preference and the className will be copied into your clipboard! 

You can also use the animations with the `hover:` and `focus:` states

For example:

```sh
<div class="animate-bounce"> <!-- Your content here --> </div>

<button class="hover:animate-pulse"> <!-- Your content here --> </button>

<input type="text" class="focus:animate-wobble">
```

You can also customize your `animation-delay` `animation-duration` `animation-steps` and much more!

## 👀 Want to learn more?

Go ahead and check [our complete documentation](https://tailwind-animations-website.vercel.app/).
