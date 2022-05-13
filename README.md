# Vue - Deep Unrefs

Similar to `unref()`, easily remove all refs recursively from an object using the `deepUnref`-composable.

## 💡 Get Started

Luckily, it's incredibly easy to get your package development started with this slightly opinionated starter kit.

```bash
npm install @openweb/deep-unref-vue
```

## 👩🏽‍💻 Usage

```js
import { deepUnref } from '@openweb/deep-unref-vue'

const form = {
  name: ref('Jane Doe'),
  email: ref('jane@doe.com'),
}

save(deepUnref(form))
```

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/meemalabs/deep-unref-vue/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/openweblabs/deep-unref-vue/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️ by Open Web Labs.
