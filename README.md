Unstuck Physics
Unstuck Physics is a comprehensive, open-source educational resource designed to help students master fundamental physics concepts through clear explanations, interactive tools, and a structured set of practice problems.

The project is built on the Jekyll static site generator and is structured to provide a logical progression from conceptual understanding to practical problem-solving.

Features
In-depth Conceptual Pages: Each concept is broken down into easy-to-digest sections with detailed explanations.

Interactive Animators: Tools and visualizations, built with SVG and JavaScript, that bring complex physics ideas to life.

Vocabulary Matchers: Interactive quizzes to test and reinforce understanding of key terms.

Curated Practice Problems: A growing library of practice problems, organized by topic and linked directly to their related concepts.

Blog for Updates: A blog to document the project's progress, new features, and behind-the-scenes insights.

Getting Started
To run the Unstuck Physics site locally, you need to have Ruby and Jekyll installed.

Clone the Repository:

git clone [https://github.com/unstuckscience/unstuckphysics.git](https://github.com/unstuckscience/unstuckphysics.git)
cd unstuckphysics

Install Dependencies:
Jekyll's dependencies are managed with Bundler.

bundle install

Run the Local Server:
Run the following command to build the site and serve it at http://localhost:4000.

bundle exec jekyll serve

Repository Structure
_concepts/: Contains Markdown files for each physics concept.

_problems/: Contains Markdown files for all practice problems.

_sass/: The core directory for all Sass stylesheets.

assets/: Stores site-wide assets like images, JavaScript files, and fonts.

_includes/: Holds reusable HTML snippets, such as the animators and navigation.

_layouts/: Defines the overall page templates for the site.

Contributing
We welcome contributions from the community! If you're interested in helping, please follow these steps:

Fork the repository.

Clone your forked repository to your local machine.

Create a new branch for your feature or bug fix (git checkout -b feature/your-feature-name).

Make your changes and test them locally.

Commit your changes with a clear and descriptive message (git commit -m "feat: Add new conceptual page on ...").

Push your branch to GitHub (git push origin feature/your-feature-name).

Open a Pull Request to the main branch of the original repository.

License
This project is licensed under the MIT License.
