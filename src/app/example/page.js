
//CSS IN JS


const examplePage = () =>{

  const abc ={
    display: 'flex',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    width: '400px',
    margin: '0 auto',
  }

  return(
    <div style={abc}>
      <h1 className="one">This is an example page</h1>
      <h2>This is an example page</h2>
      <p>This is a simple example of a Next.js page.</p>
    </div>
  )
}

export default examplePage;







// CSS MODDULES 
// import styles from './example.module.css'

// const examplePage = () =>{
//   return(
//     <div className={styles.myHeader}>
//       <h1>This is an example page</h1>
//       <h2>This is an example page</h2>
//       <p>This is a simple example of a Next.js page.</p>
//     </div>
//   )
// }

// export default examplePage;