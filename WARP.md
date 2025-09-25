# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development Workflow
```bash
# Build and serve locally with hot reloading
npx quartz build --serve

# Build for production
npx quartz build

# Build documentation and serve
npm run docs

# Run type checking and formatting validation
npm run check

# Format code with Prettier
npm run format

# Run tests
npm run test

# Performance profiling (build with concurrency=1)
npm run profile
```

### Quartz CLI Commands
```bash
# Initialize new Quartz instance
npx quartz create

# Update to latest Quartz version
npx quartz update

# Sync with GitHub (push/pull content)
npx quartz sync

# Restore content from cache
npx quartz restore
```

### Common Development Options
- `--directory` or `-d`: Content folder (default: `content`)
- `--output` or `-o`: Output folder (default: `public`)
- `--verbose` or `-v`: Enable verbose logging
- `--serve`: Run local development server
- `--port`: Local server port (default: 8080)
- `--concurrency`: Number of parsing threads

### Single Test Execution
```bash
# Run specific test file
npx tsx --test quartz/depgraph.test.ts
```

## Architecture

### Core Build System
Quartz uses a **plugin-based architecture** with three main plugin types that form a processing pipeline:

1. **Transformers** (`quartz/plugins/transformers/`): Process and transform markdown content
   - Parse frontmatter, convert Obsidian-flavored markdown, add syntax highlighting
   - Handle LaTeX, table of contents, link resolution
   
2. **Filters** (`quartz/plugins/filters/`): Determine which content should be published
   - Remove drafts, apply content filtering rules

3. **Emitters** (`quartz/plugins/emitters/`): Generate final output files
   - Create HTML pages, assets, search indexes, RSS feeds, sitemaps

### Key Configuration Files
- **`quartz.config.ts`**: Main configuration for site settings, theme, plugins
- **`quartz.layout.ts`**: Component layout definitions for different page types
- **`package.json`**: Defines CLI scripts and main entry point (`quartz/bootstrap-cli.mjs`)

### Build Process (`quartz/build.ts`)
1. **Parse**: Convert markdown files to AST using unified/remark
2. **Transform**: Apply transformer plugins to process content
3. **Filter**: Apply filter plugins to determine publishable content
4. **Emit**: Generate final static files using emitter plugins

### Component System (`quartz/components/`)
React-style components using **Preact** for:
- Page layouts (Header, Footer, Navigation)
- Content display (Article titles, metadata, backlinks)
- Interactive features (Search, Graph visualization, Dark mode)

### Development Features
- **Hot Reloading**: WebSocket-based live reload during development
- **Fast Rebuilds**: Dependency graph-based partial rebuilds with `--fastRebuild`
- **File Watching**: Chokidar-based file system monitoring
- **Build Optimization**: Multi-threaded processing with worker pools

### Plugin Development
Plugins follow TypeScript interfaces defined in `quartz/plugins/types.ts`:
- Export functions that return plugin instances
- Can provide external resources (CSS/JS)
- May define dependency graphs for optimized rebuilds

### Content Processing
- **Markdown**: Standard markdown with extensions for Obsidian, GitHub flavored markdown
- **Frontmatter**: YAML metadata processing
- **Assets**: Static file handling and optimization
- **Links**: Intelligent link resolution (shortest path, absolute, relative)

### Technology Stack
- **TypeScript**: Primary language
- **Node.js**: Runtime (requires Node >=20)
- **esbuild**: Fast JavaScript bundler
- **Preact**: Lightweight React alternative for components
- **unified/remark**: Markdown processing pipeline
- **Chokidar**: File system watching

### Directory Structure
- `content/`: User content (markdown files)
- `quartz/`: Core framework code
  - `cli/`: Command-line interface
  - `components/`: React components
  - `plugins/`: Transformer, filter, and emitter plugins
  - `util/`: Shared utilities
- `public/`: Build output directory
- `docs/`: Documentation source files