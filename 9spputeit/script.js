function showSyllabus() {
  const syllabusText = `
📘 Semester V:
- DAA: Algorithm design techniques, time complexity, dynamic programming.
- OS: Process management, scheduling, memory management.
- SE: SDLC, Agile models, requirement analysis.
- DBMS: Normalization, SQL, transactions, indexing.

📗 Semester VI:
- CN: Protocols, IP addressing, routing, security.
- WT: HTML, CSS, JS, Angular basics.
- AI: Search strategies, machine learning, neural networks.
- IoT: Sensors, communication protocols, real-world applications.
- Project Work I: Team-based project planning and implementation.
  `;
  document.getElementById("syllabusDetails").innerText = syllabusText;
}
