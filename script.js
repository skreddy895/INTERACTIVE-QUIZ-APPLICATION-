<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Yerragolla Narendra | Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-gray-800">
  <div class="animated-bg"></div>

  <header class="text-center mb-8 mt-4 md:mt-8">
    <div class="profile flex flex-col items-center">
      <img src="https://placehold.co/120x120/4ade80/ffffff?text=YN" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-green-400 shadow-lg"/>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Yerragolla Narendra</h1>
      <h3 class="text-lg md:text-xl font-medium text-gray-700">Student of Computer Science and Engineering</h3>
    </div>
  </header>

  <main class="w-full max-w-2xl px-4">
    <section class="about card mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900">About Me</h2>
      <p class="text-gray-700 leading-relaxed">
        I’m an enthusiastic CSE student passionate about web development and new technologies. I love learning, building small projects, and continuously improving my skills. My goal is to create impactful and user-friendly applications.
      </p>
    </section>

    <section class="skills card mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900">Skills</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>HTML & CSS (Proficient)</li>
        <li>JavaScript (Basics)</li>
        <li>Python (Basics)</li>
        <li>Team Collaboration & Problem Solving</li>
        <li>Version Control (Git)</li>
      </ul>
    </section>

    <section class="contact card">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
      <p class="text-gray-700 mb-2">Email: <a href="mailto:ynarendranarendra90@gmail.com" class="text-blue-600 hover:underline">ynarendranarendra90@gmail.com</a></p>
      <p class="text-gray-700">Location: India</p>
    </section>
  </main>

  <footer class="text-center text-gray-600 mt-8 mb-4 text-sm">
    &copy; 2025 Yerragolla Narendra | All rights reserved
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
