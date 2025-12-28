# Anuja Alluri - Developer Portfolio 🚀

A modern, GitHub-inspired developer portfolio website showcasing projects, skills, and experience in Machine Learning, VR, and Web Development.

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌐 Live Website

Visit the live website at: [https://sudoalluri.github.io](https://sudoalluri.github.io)

## 📋 Website Structure

The portfolio consists of the following sections:

### 1. **Hero Section**
- Welcome message with animated greeting
- Role and expertise highlight
- Call-to-action buttons
- Interactive terminal-style card

### 2. **About Section**
- Personal introduction
- Current focus areas
- Statistics cards (languages, projects, education)
- Background information

### 3. **Skills & Technologies**
- Programming languages
- Machine Learning & Computer Vision tools
- Mobile & Web development frameworks
- 3D & VR development tools
- Cloud platforms and databases

### 4. **Projects Showcase**
- Featured team and individual projects
- Project descriptions and technologies used
- Direct links to GitHub repositories
- Categorized project cards with hover effects

### 5. **Contact Section**
- Social media links (GitHub, LinkedIn, Email, Twitter)
- Contact form (demo version)
- Professional communication channels

### 6. **Footer**
- Copyright information
- GitHub profile link
- Design credits

## 🎨 Design Features

### GitHub Dark Theme
- **Primary Background**: `#0d1117` (GitHub dark mode)
- **Secondary Background**: `#161b22`
- **Accent Green**: `#2ea44f` (GitHub green)
- **Accent Blue**: `#58a6ff` (GitHub blue)
- **Accent Purple**: `#bc8cff`

### Unique Visual Elements
- ✨ Gradient text effects on headings
- 🔮 Glassmorphism (frosted glass) effects on cards
- 💫 Smooth hover animations with glow effects
- 🎭 Custom scrollbar with GitHub theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ CSS animations and transitions
- 🖥️ Terminal-inspired code aesthetics
- 🌊 Animated background effects

### Typography
- **Headers**: Monospace fonts (`SF Mono`, `Roboto Mono`, `Fira Code`)
- **Body Text**: System fonts (`-apple-system`, `Segoe UI`, etc.)
- Code-inspired aesthetic throughout

## 🛠️ Customization Guide

### Editing Personal Information

#### Update Name and Title
In `index.html`, find the hero section:
```html
<h1 class="hero-title">
    <span class="wave">👋</span> Hi, I'm 
    <span class="gradient-text">Your Name</span>
</h1>
<p class="hero-subtitle">
    <span class="typing-text">Your Title | Your Expertise</span>
</p>
```

#### Update About Section
Locate the `about` section and modify the text:
```html
<section id="about" class="about">
    <!-- Update the paragraphs with your information -->
</section>
```

#### Add/Remove Skills
Edit the skills grid in the `skills` section:
```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill</span>
    <!-- Add more skill tags as needed -->
</div>
```

#### Update Projects
Modify project cards in the `projects` section:
```html
<div class="project-card glass-effect">
    <h3>Your Project Name</h3>
    <p class="project-description">Your project description...</p>
    <!-- Update GitHub links and technologies -->
</div>
```

### Customizing Colors

All colors are defined as CSS variables in `style.css`:

```css
:root {
    /* Change these values to customize colors */
    --bg-primary: #0d1117;        /* Main background */
    --bg-secondary: #161b22;      /* Card backgrounds */
    --accent-green: #2ea44f;      /* Primary accent */
    --accent-blue: #58a6ff;       /* Secondary accent */
    --accent-purple: #bc8cff;     /* Tertiary accent */
    /* ... more variables */
}
```

### Modifying Sections

#### Add a New Section
1. Add HTML structure in `index.html`:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">
            <span class="section-number">05.</span> New Section
        </h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Add navigation link:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

3. Style in `style.css`:
```css
.new-section {
    /* Add your styles */
}
```

#### Remove a Section
1. Delete the section from `index.html`
2. Remove the corresponding navigation link
3. Optionally remove related CSS styles

### Updating Social Links

In the contact section, update the social links:
```html
<a href="https://github.com/YourUsername" target="_blank" class="social-link">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
<a href="mailto:your.email@example.com" class="social-link">
    <i class="fas fa-envelope"></i>
</a>
```

### Modifying Animations

Adjust animation speeds in `style.css`:
```css
:root {
    --transition-fast: 0.2s ease;    /* Quick transitions */
    --transition-normal: 0.3s ease;  /* Standard speed */
    --transition-slow: 0.5s ease;    /* Slower animations */
}
```

## 📱 Responsive Breakpoints

The website is fully responsive with breakpoints at:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Deployment on GitHub Pages

### Initial Setup
1. Push your code to GitHub repository named `YourUsername.github.io`
2. Go to repository **Settings** → **Pages**
3. Under **Source**, select the branch (usually `main` or `master`)
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io`

### Updating the Website
1. Make changes to `index.html`, `style.css`, or `README.md`
2. Commit and push changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
3. GitHub Pages will automatically rebuild (usually takes 1-2 minutes)

### Custom Domain (Optional)
1. Purchase a domain from a registrar
2. Add a `CNAME` file with your domain name
3. Configure DNS settings with your registrar
4. Update GitHub Pages settings with custom domain

## 🔧 Local Development

To test the website locally:

1. Clone the repository:
```bash
git clone https://github.com/SudoAlluri/SudoAlluri.github.io.git
cd SudoAlluri.github.io
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 📦 File Structure

```
SudoAlluri.github.io/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
└── README.md           # Documentation (this file)
```

## 🎯 Best Practices

### Performance
- Minimal external dependencies (only Font Awesome for icons)
- Optimized CSS with no redundant styles
- Smooth animations with GPU acceleration
- Fast loading time

### Accessibility
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Sufficient color contrast
- Reduced motion support for accessibility preferences

### SEO
- Meta tags for search engines
- Open Graph tags for social media
- Descriptive alt texts
- Semantic structure

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 About Me

I'm an undergraduate student at **Wright State University** passionate about **Machine Learning, VR, and Web/Software Development**. I enjoy building interactive applications, exploring 3D modeling, and creating innovative solutions that merge technology with creativity.

### Contact
- 🐙 GitHub: [@SudoAlluri](https://github.com/SudoAlluri)
- 💼 LinkedIn: [Anuja Alluri](https://linkedin.com/in/anuja-alluri)
- 📧 Email: alluri.3@wright.edu

---

**Built with ❤️ using HTML, CSS, and JavaScript**  
*Inspired by GitHub's design philosophy*  
