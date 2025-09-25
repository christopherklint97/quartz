# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands
- `npx quartz build --serve` - Build and serve locally with hot reload at http://localhost:8080/
- `npx quartz build` - Build the static site to the `public/` directory
- `npm run docs` - Build and serve the documentation site
- `npm test` - Run tests using tsx
- `npm run check` - Type check with tsc and format check with prettier
- `npm run format` - Format code with prettier

### CLI Commands
- `npx quartz create` - Initialize a new Quartz site
- `npx quartz update` - Get latest Quartz updates
- `npx quartz restore` - Restore content folder from cache
- `npx quartz sync` - Sync content with external sources

### Build Options
- `-d, --directory` - Content folder (default: `content`)
- `-v, --verbose` - Enable verbose logging
- `-o, --output` - Output folder (default: `public`)
- `--serve` - Run local preview server
- `--port` - Port for local server
- `--concurrency` - Number of parsing threads

## Architecture

### High-Level Structure
Quartz is a static site generator that transforms Markdown files into a fully-featured website with features like backlinks, search, graph visualization, and more.

**Core Processing Pipeline:**
1. **Parse** (`quartz/processors/parse.ts`) - Transform markdown using unified/remark/rehype
2. **Filter** (`quartz/processors/filter.ts`) - Remove unwanted content
3. **Emit** (`quartz/processors/emit.ts`) - Generate final output files

### Plugin System
Quartz uses a three-type plugin architecture:

**Transformers** (`quartz/plugins/transformers/`) - Process markdown content:
- `FrontMatter` - Parse YAML frontmatter
- `ObsidianFlavoredMarkdown` - Support Obsidian-style linking
- `GitHubFlavoredMarkdown` - GitHub markdown extensions
- `SyntaxHighlighting` - Code syntax highlighting
- `Latex` - Math equation rendering
- `TableOfContents` - Generate TOCs
- `CrawlLinks` - Process internal links

**Filters** (`quartz/plugins/filters/`) - Filter content:
- `RemoveDrafts` - Hide draft posts
- `ExplicitPublish` - Only publish explicitly marked content

**Emitters** (`quartz/plugins/emitters/`) - Generate output:
- `ContentPage` - Individual content pages
- `FolderPage` - Folder index pages
- `TagPage` - Tag listing pages
- `ContentIndex` - Search index, sitemap, RSS
- `Assets` - Copy static assets
- `ComponentResources` - CSS/JS for components

### Key Files
- `quartz.config.ts` - Main configuration file
- `quartz.layout.ts` - Page layout definitions
- `quartz/build.ts` - Main build orchestrator
- `quartz/bootstrap-cli.mjs` - CLI entry point
- `quartz/cfg.ts` - Configuration types and interfaces

### Component System
**Components** (`quartz/components/`) are reusable UI elements:
- `Head` - HTML head elements
- `Header`, `Footer` - Page structure
- `Search` - Full-text search
- `Graph` - Interactive link graph
- `Explorer` - File tree navigation
- `TableOfContents` - Page TOC
- `Backlinks` - Show linking pages

Components declare inline scripts (`.inline.ts`) and styles (`.scss`) that get bundled.

### Content Processing
1. **File Discovery** - Glob markdown files in `content/` directory
2. **Worker Threads** - Use worker pool for >128 files
3. **Unified Pipeline** - Transform text → mdast → hast → JSX → HTML
4. **Plugin Processing** - Apply transformers, filters, emitters in sequence
5. **Hot Reload** - File watchers for live development

### Build Performance
- **Incremental Builds** - Only rebuild changed files
- **Worker Threads** - Parallel processing for large sites
- **Dependency Tracking** - Smart rebuild decisions
- **Module Caching** - Cached transpiled builds

### Development Server
When using `--serve`:
- WebSocket server (port 3001) for hot reload signals
- HTTP server (default port 8080) for file serving
- File watchers for source and content changes
- Live TypeScript compilation via esbuild

### TypeScript Configuration
- Uses Preact for JSX rendering (`jsxImportSource: "preact"`)
- Targets modern JavaScript (`esnext`)
- Strict type checking enabled
- Resolves JSON modules and synthetic imports

### Content Structure
- `content/` - User's markdown content
- `public/` - Generated static site output
- `docs/` - Quartz documentation (separate from user content)

## Development Notes

- The codebase uses ESM modules throughout
- Preact is used instead of React for smaller bundle size
- esbuild handles all compilation and bundling
- Plugin architecture allows extensive customization
- Hot reload preserves client state during development