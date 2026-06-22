import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Harsh Raj Gupta",
      course: "B.Tech CSE AIML",
      year: "1st Year",
      cgpa: "6.9",
      image: "https://imgs.search.brave.com/SVSOH4LD7Rc2P9kBR7-TsbCJpExqjalC6kHbkxK38CE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9heDg0UkVC/LmpwZw",
    },
    {
      id: 2,
      name: "Karan Yadav",
      course: "B.Tech CSE AIML",
      year: "1st Year",
      cgpa: "7.2",
      image: "https://imgs.search.brave.com/grKYUWJnNFePbL6lw7I-tPDfCUYX3SiNWRsmukJLyUc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5lc3BvcnRzLmdn/L3VwbG9hZHMvMjAy/NS8wMS9GbG9yZXNj/ZW50LXZhbG9yYW50/LXNldHRpbmdzLTk2/OHg1NDQuanBn",
    },
  ];

  return (
    <div className="container">
      <h1>Student Information Portal</h1>

      <div className="card-container">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <img
              src={student.image}
              alt={student.name}
              className="student-img"
            />

            <div className="details">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Year:</strong> {student.year}</p>
              <p><strong>CGPA:</strong> {student.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;