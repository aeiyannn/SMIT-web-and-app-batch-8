
 function Home(props) {
  console.log(props.userInfo.name)
  return (
    <>
    <div>Hello My Name is {props.userInfo.name}</div>
    </>
  )
}
export default Home
