# solidpod

> The easiest way to run a Solid pod. Zero configuration, just works.

[![npm version](https://img.shields.io/npm/v/solidpod.svg)](https://www.npmjs.com/package/solidpod)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**solidpod** is the simplest wrapper to run your own [Solid](https://solidproject.org) pod server.

## 🚀 Quick Start

```bash
# Run instantly with npx (no installation required!)
npx solidpod

# That's it! Your Solid pod is running at http://localhost:5444
```

## ✨ What You Get

- ✅ **Zero configuration** - Just works
- ✅ **Solid Protocol** - Full spec compliance
- ✅ **WebID Authentication** - Decentralized identity
- ✅ **Passkey Support** - Modern passwordless auth
- ✅ **WebSocket Notifications** - Real-time updates
- ✅ **JSON-LD Native** - First-class linked data support

## 📦 Installation

### No Installation (Recommended)

```bash
npx solidpod
```

### Global Installation

```bash
npm install -g solidpod
solidpod
```

## 🎮 Usage

```bash
# Start with defaults
solidpod

# Custom port
solidpod --port 8080

# Custom data directory
solidpod --root /var/pods

# Multi-user mode
solidpod --multiuser

# Disable authentication
solidpod --no-auth

# Show help
solidpod --help
```

## 📖 How It Works

solidpod is a thin wrapper around [jspod](https://github.com/JavaScriptSolidServer/jspod), which itself wraps [JavaScriptSolidServer](https://github.com/JavaScriptSolidServer/JavaScriptSolidServer).

**Layers:**
```
solidpod → jspod → JavaScriptSolidServer
```

Each layer adds convenience:
- **JavaScriptSolidServer**: Full-featured Solid server implementation
- **jspod**: Beautiful CLI with sensible defaults
- **solidpod**: Most user-friendly name for instant discovery

## 🌟 First Run

**Step 1**: Run the command
```bash
npx solidpod
```

**Step 2**: Open http://localhost:5444 in your browser

**Step 3**: Register with your device's passkey (fingerprint, Face ID, etc.)

**Step 4**: Start using your pod!

## 📚 Learn More

- **Solid Project**: https://solidproject.org
- **Solid Protocol**: https://solidproject.org/TR/protocol
- **WebID**: https://www.w3.org/2005/Incubator/webid/spec

## 🤝 Contributing

Contributions welcome! This package is intentionally minimal - just a friendly wrapper.

## 📄 License

MIT - see [LICENSE](./LICENSE)

## 🙏 Credits

Built on [jspod](https://github.com/JavaScriptSolidServer/jspod) and [JavaScriptSolidServer](https://github.com/JavaScriptSolidServer/JavaScriptSolidServer).

---

**Made with ❤️ for the Solid community**

*"Your pod, instantly"*
