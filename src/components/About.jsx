import Me from "./Me"
import Experience from "./Experience"
export default function About() {
  return (
    <>
    <div>About</div>
       <Me experienceCount={10} category ={"Software House"} />
    <Experience/>
    </>
  )
}
