"use client"
import departmnets from "../../lib/DeptNames.json"
import styles from "./index.module.css"
export default function Home() {

  const departmentNames = departmnets.results.map((department) => department.name);


  return (
    <main className={styles.main}>

<h1 className={styles.headerName}>Community App</h1>

<div className={styles.topic}>Your destination for free <br /> study material and notes</div>
<div className={styles.subtopic}>IUST Student Community is created to help students to get better grades in their final examinations by providing Course lectures, Graded Assignment Solutions, Workshops
and Internships.</div>
  <div>
    {/* <h1>Department Names</h1>
    <ul>
      {departmentNames.map((name, index) => (
        <div key={index}>
{name}

        </div>
      ))}
    </ul> */}
  </div>

    </main>
  )
}





