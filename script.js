<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #111;
      background: #f7f7f7;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 32px 24px;
    }
    header {
      margin-bottom: 32px;
    }
    header h1 {
      margin: 0 0 8px;
      font-size: 2rem;
    }
    header p {
      margin: 0;
      color: #555;
      line-height: 1.5;
    }
    h2 {
      margin-top: 40px;
      margin-bottom: 16px;
      font-size: 1.4rem;
      border-bottom: 2px solid #ddd;
      padding-bottom: 8px;
    }
    .card {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    .card p {
      margin: 0;
      line-height: 1.7;
      color: #444;
    }
    .card ul {
      margin: 0;
      padding-left: 20px;
    }
    .card li {
      margin-bottom: 8px;
    }
    footer {
      margin-top: 40px;
      color: #666;
      font-size: 0.95rem;
    }
    a {
      color: #1a73e8;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Portfolio</h1>
      <p>Simple project showcase with clean layout for GitHub Pages.</p>
    </header>

    <section class="card">
      <h2>Mental Health Risk Prediction</h2>
      <p>This project analyzes a mental health dataset and builds a prototype model for predicting <strong>mental_health_risk</strong>.</p>
      <ul>
        <li>Explored features like age, gender, employment status, stress level, sleep, depression, anxiety, social support, and productivity.</li>
        <li>Created correlation visualizations and reports to find which factors most influence risk.</li>
        <li>Implemented a Python prediction pipeline to estimate risk for unseen records.</li>
      </ul>
    </section>

    <section class="card">
      <h2>About the page</h2>
      <p>This page is intentionally simple and built for GitHub Pages. It does not use animations or theme toggles, and it focuses on clear project presentation.</p>
    </section>

    <footer>
      <p>Use this file as <code>index.html</code> in your repository to publish a lightweight GitHub Pages site.</p>
    </footer>
  </div>
</body>
</html>
