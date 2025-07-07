if (typeof gsap !== 'undefined') {
  // Animate the profile section to fade in and slide down
  gsap.from(".profile", {
    duration: 1.2, // Animation duration in seconds
    y: -70,        // Starts 70 pixels above its final position
    opacity: 0,    // Starts completely transparent
    ease: "power3.out" // Easing function for a smooth finish
  });

  // Animate each 'card' section to fade in and slide up with a staggered effect
  gsap.from(".card", {
    duration: 1,   // Animation duration for each card
    y: 50,         // Starts 50 pixels below its final position
    opacity: 0,    // Starts completely transparent
    stagger: 0.2,  // Delay between each card's animation (0.2 seconds)
    ease: "power3.out", // Easing function
    delay: 0.5     // Start these animations 0.5 seconds after the page loads
  });

  // Optional: Add a slight animation to the footer
  gsap.from("footer", {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5 // Start after other elements have animated
  });

} else {
  // Log a message to the console if GSAP is not found (for debugging)
  console.warn("GSAP library not loaded. Animations will not play.");
}
