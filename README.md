# single-spa Demo &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FlorianRappl/single-spa-tractor-v2/blob/main/LICENSE) [![Community Chat](https://dcbadge.vercel.app/api/server/kKJ2FZmK8t?style=flat)](https://discord.gg/kKJ2FZmK8t)

> The Tractor v2 Micro Frontends Sample using single-spa

:zap: Combine multiple micro frontends built with different frameworks - but all using Module Federation and single-spa.

Feel free to play around with the code using StackBlitz.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/florianrappl/single-spa-tractor-v2)

A micro frontends sample implementation of [The Tractor Store](https://micro-frontends.org/tractor-store/) built with Module Federation and React. It's based on the [Blueprint](https://github.com/neuland/tractor-store-blueprint).

**Live Demo:** [single-spa-tractor-v2.florian-rappl.de](https://single-spa-tractor-v2.florian-rappl.de/)

## About This Implementation

### Technologies

List of techniques used in this implementation.

| Aspect                     | Solution                                  |
| -------------------------- | ----------------------------------------- |
| 🛠️ Frameworks, Libraries   | [React], [single-spa]                     |
| 📝 Rendering               | SPA                                       |
| 🐚 Application Shell       | [rspack]                                  |
| 🧩 Client-Side Integration | Custom                                    |
| 🧩 Server-Side Integration | None                                      |
| 📣 Communication           | Custom Events, Slots                      |
| 🗺️ Navigation              | SPA, One MF per Team, history API routing |
| 🎨 Styling                 | Self-Contained CSS (No Global Styles)     |
| 🍱 Design System           | None                                      |
| 🔮 Discovery               | None                                      |
| 🚚 Deployment              | Static Page                               |
| 👩‍💻 Local Development       | [rspack]                                  |

[React]: https://react.dev/
[single-spa]: https://single-spa.js.org/
[rspack]: https://rspack.dev/

### Limitations

This implementation is deliberately kept simple to focus on the micro frontends aspects. URLs are hardcoded, components could be more DRY and no linting, testing or type-safety is implemented. In a real-world scenario, these aspects should be addressed properly.

### Performance

Several performance optimizations could still be applied, however, in the out-of-the-box state with three micro frontends and multiple components / pages included we'll end up with a lighthouse score of 89/100, which is decent, but not great.

![Lighthouse Score](./lighthouse.png)

As a comparison a most lightweight SSR-only solution using the same codebase would be around 99/100. Another SPA sample that uses [Picard.js](https://picard.js.org/) with Native Federation ended up at 88/100. Using a full framework like [Piral](https://www.piral.io) (which also includes a much cleaner codebase and a more powerful routing engine) ends up at 100/100, too.

Replacing SystemJS with Module Federation gives you 2 more lighthouse points. So, there is potential in the right direction.

## How to run locally

### Installation

Clone this repository. Then run the following command inside the repository:

```sh
./setup.sh
```

### Running the Code

Now you can run all micro frontends:

```sh
./run.sh
```

Open http://localhost:1234 in your browser to see the integrated application.

## About The Authors

[smapiot](https://smapiot.com/) is a growing company specialized in delivering IT solutions and services for the emerging space of digital transformation and IoT. smapiot was founded in 2014 and is located in Munich. We are the core maintainers of the [Piral](https://www.piral.io) framework and the [Picard.js](https://picard.js.org) library.

## License

single-spa and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
