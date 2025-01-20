# Personal CLI

A personal w̶e̶b̶s̶i̶t̶e̶ npm module.

## Usage

Here's how you install and run the module

```bash
npx rvgpl
```

## Install

Run this if you would like to have the module installed globally

```bash
npm install -g rvgpl
```

## Create Your Own

Want to create your own personal CLI? Follow these steps:

1. Fork this repository
2. Clone your fork
3. Update the `data.js` file with your information:

```javascript
export default {
  firstName: "YourFirstName",
  lastName: "YourLastName",
  bio: "A brief introduction about yourself",
  links: [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    // Add more social links
  ],
  projects: [
    {
      name: "Project Name",
      description: "Brief project description",
      link: "https://github.com/yourusername/project",
    },
    // Add more projects
  ],
};
```

4. Update `package.json`:

   - Change the package name (make sure it's unique on npm)
   - Update author and description
   - Update repository links if needed

5. Test your CLI locally:

```bash
npm install
npm link
```

6. Publish to npm:

```bash
npm login
npm publish
```

Now others can install your CLI using `npx yourpackagename`!

## License

MIT
