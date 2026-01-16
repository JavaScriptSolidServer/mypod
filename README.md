# mypod

> The easiest way to run a Solid pod. Zero configuration, just works.

[![npm version](https://img.shields.io/npm/v/mypod.svg)](https://www.npmjs.com/package/mypod)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**mypod** is the simplest wrapper to run your own [Solid](https://solidproject.org) pod server.

## 🚀 Quick Start

```bash
# Run instantly with npx (no installation required!)
npx mypod

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
npx mypod
```

### Global Installation

```bash
npm install -g mypod
mypod
```

## 🎮 Usage

```bash
# Start with defaults
mypod

# Custom port
mypod --port 8080

# Custom data directory
mypod --root /var/pods

# Multi-user mode
mypod --multiuser

# Disable authentication
mypod --no-auth

# Show help
mypod --help
```

## 📖 How It Works

mypod is a thin wrapper around [jspod](https://github.com/JavaScriptSolidServer/jspod), which itself wraps [JavaScriptSolidServer](https://github.com/JavaScriptSolidServer/JavaScriptSolidServer).

**Layers:**
```
mypod → jspod → JavaScriptSolidServer
```

Each layer adds convenience:
- **JavaScriptSolidServer**: Full-featured Solid server implementation
- **jspod**: Beautiful CLI with sensible defaults
- **mypod**: Most user-friendly name for instant discovery

## 🌟 First Run

**Step 1**: Run the command
```bash
npx mypod
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
