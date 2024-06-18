---
title: Building a static website with Quartz, Markdown, and Cloudflare Pages
description: Learn how to create a fast, secure, and easy-to-maintain website using Quartz, Markdown, and Cloudflare Pages.
---
## Introduction

In my mission of creating this website, I knew that I wanted something simple and efficient so that I could focus on writing and actually creating content instead of maintaining a bunch of components and configurations. It needed to be simple, fast, and easy to maintain, so I went with Markdown as the main tool to center the website around. Initially I considered using Notion, but the lack of vim support made it less appealing. This led me to discover [Quartz](https://quartz.jzhao.xyz/) and [Cloudflare Pages](https://pages.cloudflare.com/), which together provided the perfect solution for my needs.

## Why Quartz and Markdown?

### For the love of Markdown

[Markdown](https://www.markdownguide.org/) is a lightweight markup language that has gained immense popularity among developers and content creators alike. Its simplicity and readability make it an ideal choice for writing documentation, blogs, and even websites. The syntax is intuitive and easy to learn, making it a joy to use. For someone who enjoys writing as much as I do, Markdown felt like the natural choice.

### Discovering Quartz

[Quartz](https://quartz.jzhao.xyz/) is a powerful static site generator that leverages Markdown for content creation. It automates many of the tedious tasks associated with building a website, such as handling templates and deploying content. Quartz's integration with Markdown means I could focus on writing without worrying about maintaining my website. Plus, it comes with some cool features like full-text search, syntax highlighting, and popover previews.

## Setting up the project

### Prerequisites

Before diving into the setup, ensure you have the following installed on your system:

- Git
- Node.js
- npm (Node Package Manager)

### Initializing the Project

First, I cloned the Quartz repository to my local machine:

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
```

Then, I installed the dependencies and created a new Quartz project:

```bash
npm i
npx quartz create
```

These commands generated a basic project structure, including directories for content, templates, and configuration files.

### Writing Content in Markdown

One of the greatest advantages of using Quartz is its seamless integration with Markdown. I started by creating a new Markdown file for the homepage:

```bash
cd content
touch index.md
```

In `index.md`, I wrote the content for the homepage. Here is a simple example:

```markdown
# Welcome to My Website

This is my personal space on the web, where I share my thoughts, projects, and more. Built with love using Quartz and Markdown.

## About Me

I'm a web developer with a passion for simplicity and efficiency. I enjoy exploring new technologies and finding better ways to build things.

## Latest Posts

- [First Post](./posts/first-post.md)
- [Second Post](./posts/second-post.md)
```

### Configuring Quartz

Quartz's configuration is straightforward, and it provides sensible defaults out of the box. However, it's possible to make changes to personalize the site. In the `config.js` file, you could update the site name, description, author, theme settings, and more. Here's an example configuration:

```javascript
module.exports = {
  siteName: "My Website",
  siteDescription: "A personal website built with Quartz and Markdown",
  siteUrl: "https://www.mywebsite.com",
  author: "My Name",
  theme: "default",
}
```

## Deploying with Cloudflare Pages

### Why Cloudflare Pages?

Cloudflare Pages is similar to Github Pages since it is a modern platform for deploying static sites directly from your Git repository. It offers global distribution, built-in security features, and seamless integration with GitHub. These features made it an attractive choice for hosting my website.

### Connecting to GitHub

First, I created a new repository on GitHub and pushed my local project to the remote repository:

```bash
git remote add origin https://github.com/username/my-website.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Setting up Cloudflare Pages

Next, I logged into my Cloudflare account and navigated to the Pages section. I clicked on "Create a project" and selected my GitHub repository. Cloudflare Pages automatically detected the Quartz framework and provided the appropriate build settings:

- Build command: `npm run build`
- Build output directory: `dist`

After reviewing the settings, I clicked "Save and Deploy." Cloudflare Pages began the build process and deployed my site to a unique URL. Once the deployment was complete, I configured a custom domain for my site through the Cloudflare dashboard.

## Adding custom styling

While Quartz provides a clean and minimal default theme, you may want to add a personal touch to the site's appearance. You can create a custom stylesheet in the `assets` directory:

```css
/* assets/styles.css */

body {
  font-family: "Helvetica Neue", sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

h1,
h2,
h3 {
  color: #0056b3;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

Then link the stylesheet in the site's template file. In the `templates/layout.html` file, you can add something like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ siteName }}</title>
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    <header>
      <h1>{{ siteName }}</h1>
      <p>{{ siteDescription }}</p>
    </header>
    <main>{{ content }}</main>
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} {{ author }}. All rights reserved.</p>
    </footer>
  </body>
</html>
```

## Implementing dynamic features

Even though my site is static, I wanted to add some dynamic features such as a contact form. To achieve this, I integrated Formspree, a service that handles form submissions for static sites.

### Adding a contact form

In the `content` directory, I created a new Markdown file for the contact page:

```bash
cd content
touch contact.md
```

In `contact.md`, I wrote the form using inline styles to keep it simple:

```markdown
# Contact Me

Feel free to reach out by filling out the form below.

<form style="display: flex; flex-direction: column;" action="https://formspree.io/f/{your-form-id}" method="POST">
  <label for="name">Name:</label>
  <input style="margin-top: 1rem;" type="text" id="name" name="name" required>
  
  <label style="margin-top: 1rem;" for="email">Email:</label>
  <input style="margin-top: 1rem;" type="email" id="email" name="email" required>
  
  <label style="margin-top: 1rem;" for="message">Message:</label>
  <textarea style="margin-top: 1rem; height: 10rem;" id="message" name="message" required></textarea>
  
  <button style="margin-top: 1rem;" type="submit">Send</button>
</form>
```

### Handling form submissions

Formspree handles the backend processing of form submissions, so I didn't need to write any server-side code. Upon submission, Formspree sends the data to my email address, ensuring I don't miss any messages from visitors.

## Leveraging Cloudflare's Features

### Enabling HTTPS

Cloudflare Pages provides free SSL certificates, which means my site is served over HTTPS by default. This not only secures the connection but also improves SEO and user trust.

### Caching and performance

Cloudflare's global CDN caches my site's content, ensuring fast load times for visitors worldwide. I enabled additional performance features, such as Brotli compression and automatic cache purging, to further optimize the site's speed.

### Security settings

Cloudflare offers robust security features, including DDoS protection, firewall rules, and bot management. I configured basic firewall rules to block malicious traffic and set up alerts for any suspicious activity.

## Final thoughts

Creating my website with Quartz, Markdown, and Cloudflare Pages was a great decision. It allowed me to focus on content creation while leveraging powerful tools to handle the technical aspects of deployment and maintenance. The result is a fast, secure, and easy-to-update website that perfectly aligns with my initial vision.

Looking ahead, I plan to continue refining the site, adding new features and content. I'm particularly interested in exploring more advanced Markdown features and experimenting with different templates and styles. With the foundation now in place, the possibilities are endless.

## Conclusion

If you're considering building a personal website or blog, I highly recommend exploring the combination of Quartz, Markdown, and Cloudflare Pages. This setup offers a perfect balance of simplicity and power, making it an excellent choice for developers and content creators alike. Whether you're a seasoned pro or just getting started, this approach can help you create a beautiful, performant website with minimal hassle.

Thank you for joining me on this journey, and I hope you found this walkthrough helpful. Happy coding!

---

Feel free to reach out if you have any questions, comments, or other feedback. You can contact me through the form on my [[contact|contact page]].
